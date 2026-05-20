import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsLink = BaseProps & { as: "link"; href: string; external?: boolean };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-brand-red-500 text-white hover:bg-brand-red-600 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50",
  ghost: "text-brand-blue-600 hover:bg-brand-blue-50",
  danger: "bg-brand-red-600 text-white hover:bg-brand-red-700",
  whatsapp: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2.5",
};

const base =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-blue-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ((props as ButtonAsLink).as === "link") {
      const { href, external } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </Link>
      );
    }

    const buttonProps = { ...(props as ButtonAsButton & { as?: string }) };
    delete buttonProps.as;
    return (
      <button ref={ref} className={classes} {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
