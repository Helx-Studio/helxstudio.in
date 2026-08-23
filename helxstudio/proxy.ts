import { NextResponse, type NextRequest } from "next/server";
import { convertHtmlToMarkdown } from "./app/markdown";

export async function proxy(request: NextRequest) {
  // 1. Internal fetch pass-through check to prevent infinite loop recursion
  if (request.headers.get("x-internal-markdown-fetch") === "1") {
    return NextResponse.next();
  }

  // 2. Check if Accept header includes text/markdown
  const acceptHeader = request.headers.get("accept") || "";
  if (!acceptHeader.includes("text/markdown")) {
    return NextResponse.next();
  }

  // 3. Perform internal fetch for the requested URL to get the HTML content
  const internalHeaders = new Headers(request.headers);
  internalHeaders.set("x-internal-markdown-fetch", "1");
  internalHeaders.set("accept", "text/html,application/xhtml+xml");

  try {
    const originResponse = await fetch(request.url, {
      method: request.method,
      headers: internalHeaders,
      redirect: "manual",
    });

    const contentType = originResponse.headers.get("content-type") || "";
    if (!originResponse.ok || !contentType.includes("text/html")) {
      return originResponse;
    }

    const html = await originResponse.text();

    // 4. Convert HTML to Markdown
    const { markdown, markdownTokens, originalTokens } =
      convertHtmlToMarkdown(html);

    // 5. Construct response headers
    const responseHeaders = new Headers(originResponse.headers);
    responseHeaders.set("content-type", "text/markdown; charset=utf-8");

    // Preserve existing Vary dimensions and append Accept
    const existingVary = responseHeaders.get("vary");
    if (existingVary) {
      if (!existingVary.toLowerCase().includes("accept")) {
        responseHeaders.set("vary", `${existingVary}, Accept`);
      }
    } else {
      responseHeaders.set("vary", "Accept");
    }

    responseHeaders.set("x-markdown-tokens", String(markdownTokens));
    responseHeaders.set("x-original-tokens", String(originalTokens));

    if (!responseHeaders.has("content-signal")) {
      responseHeaders.set(
        "content-signal",
        "ai-train=yes, search=yes, ai-input=yes",
      );
    }

    // Remove headers specific to the original HTML body
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    responseHeaders.delete("etag");
    responseHeaders.delete("last-modified");

    return new NextResponse(markdown, {
      status: originResponse.status,
      headers: responseHeaders,
    });
  } catch (err) {
    console.error("Error during Markdown content negotiation:", err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (e.g. .png, .jpg, .svg, .css, .js)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$).*)",
  ],
};
