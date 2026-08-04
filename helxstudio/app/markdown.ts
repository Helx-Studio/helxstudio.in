export interface MarkdownConversionResult {
  markdown: string;
  markdownTokens: number;
  originalTokens: number;
}

export function estimateTokens(text: string): number {
  if (!text) return 0;
  // Standard token estimation heuristic: ~4 characters per token
  return Math.ceil(text.trim().length / 4);
}

function decodeHTMLEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function cleanInline(html: string): string {
  let str = html.replace(/<[^>]+>/g, ' ');
  str = decodeHTMLEntities(str);
  return str.replace(/\s+/g, ' ').trim();
}

function bodyToMarkdown(html: string): string {
  let text = html;

  // Headings
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n\n# ${cleanInline(c)}\n\n`);
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n\n## ${cleanInline(c)}\n\n`);
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n\n### ${cleanInline(c)}\n\n`);
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n\n#### ${cleanInline(c)}\n\n`);
  text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, c) => `\n\n##### ${cleanInline(c)}\n\n`);
  text = text.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, (_, c) => `\n\n###### ${cleanInline(c)}\n\n`);

  // Links
  text = text.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, c) => {
    const linkText = cleanInline(c);
    if (!linkText) return '';
    return `[${linkText}](${href})`;
  });

  // Images
  text = text.replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi, (_, src, alt) => `![${alt}](${src})`);
  text = text.replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, (_, src) => `![](${src})`);

  // Code blocks
  text = text.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, c) => `\n\n\`\`\`\n${decodeHTMLEntities(c)}\n\`\`\`\n\n`);
  text = text.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, c) => `\`${decodeHTMLEntities(c)}\``);

  // Bold / Italic
  text = text.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, c) => `**${cleanInline(c)}**`);
  text = text.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, c) => `*${cleanInline(c)}*`);

  // Lists
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, c) => `\n- ${cleanInline(c)}`);
  text = text.replace(/<\/?(ul|ol)[^>]*>/gi, '\n');

  // Paragraphs & Divs & Sections
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `\n\n${cleanInline(c)}\n\n`);
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<hr\s*\/?>/gi, '\n\n---\n\n');
  text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) => `\n\n> ${cleanInline(c)}\n\n`);

  // Remove remaining HTML tags
  text = text.replace(/<[^>]+>/g, ' ');

  // Decode HTML entities
  text = decodeHTMLEntities(text);

  // Normalize spaces and linebreaks
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\n\s+\n/g, '\n\n');
  text = text.replace(/\n{3,}/g, '\n\n');

  return text.trim();
}

export function convertHtmlToMarkdown(html: string): MarkdownConversionResult {
  const originalTokens = estimateTokens(html);

  // 1. Extract Head Metadata for Frontmatter
  const titleMatch =
    html.match(/<meta\s+name=["']title["']\s+content=["']([^"']+)["']/i) ||
    html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i) ||
    html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? decodeHTMLEntities(titleMatch[1].trim()) : null;

  const descMatch =
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
    html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
  const description = descMatch ? decodeHTMLEntities(descMatch[1].trim()) : null;

  const imageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const image = imageMatch ? decodeHTMLEntities(imageMatch[1].trim()) : null;

  let frontmatter = '';
  if (title || description || image) {
    frontmatter += '---\n';
    if (title) frontmatter += `title: "${title.replace(/"/g, '\\"')}"\n`;
    if (description) frontmatter += `description: "${description.replace(/"/g, '\\"')}"\n`;
    if (image) frontmatter += `image: "${image}"\n`;
    frontmatter += '---\n\n';
  }

  // 2. Extract JSON-LD scripts
  const jsonLdBlocks: string[] = [];
  const jsonLdRegex = /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  while ((jsonMatch = jsonLdRegex.exec(html)) !== null) {
    const rawJson = jsonMatch[1].trim();
    if (rawJson) {
      jsonLdBlocks.push(rawJson);
    }
  }

  // 3. Clean HTML body
  let bodyHtml = html;
  const bodyTagMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyTagMatch) {
    bodyHtml = bodyTagMatch[1];
  }

  bodyHtml = bodyHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '');

  // 4. Convert HTML tags to Markdown
  const markdownBody = bodyToMarkdown(bodyHtml);

  // 5. Append JSON-LD at end if present
  let jsonLdFooter = '';
  if (jsonLdBlocks.length > 0) {
    jsonLdFooter = '\n\n```json\n' + jsonLdBlocks.join('\n') + '\n```';
  }

  const finalMarkdown = (frontmatter + markdownBody + jsonLdFooter).trim() + '\n';
  const markdownTokens = estimateTokens(finalMarkdown);

  return {
    markdown: finalMarkdown,
    markdownTokens,
    originalTokens,
  };
}
