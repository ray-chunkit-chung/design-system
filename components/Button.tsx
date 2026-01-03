import type React from "react";
import clsx from "clsx";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const sizeMap: Record<Size, string> = {
  md: "px-[var(--spacing-gap-sm)] py-[calc(var(--spacing-gap-sm)/1.5)] text-[var(--font-body-size)]",
  lg: "px-[calc(var(--spacing-gap-sm)*1.25)] py-[calc(var(--spacing-gap-sm))] text-[var(--font-body-size)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-[var(--font-body-strong-weight)] rounded-[var(--radius-input)] transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-border-strong)] focus-visible:ring-offset-[var(--color-background-page)]",
        variant === "primary" && [
          "bg-[var(--color-brand-solid)] text-[var(--color-text-on-brand)]",
          "hover:bg-[var(--color-brand-solid-strong)]",
        ],
        variant === "ghost" && [
          "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-default)]",
          "hover:bg-[var(--color-background-sunken)]",
        ],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
