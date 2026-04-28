import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageMainProps = {
  children: ReactNode;
  className?: string;
};

/** Inner marketing pages: offset fixed navbar per reference HTML */
export function PageMain({ children, className }: PageMainProps) {
  return (
    <main
      id="main-content"
      className={cn("pt-32 pb-20", className)}
      tabIndex={-1}
    >
      {children}
    </main>
  );
}
