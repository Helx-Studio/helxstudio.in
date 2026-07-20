import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        trigger?: string;
        colors?: string;
        state?: string;
        delay?: string;
      };
    }
  }
}

export {};
