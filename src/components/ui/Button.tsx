// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2";

  // Variant classes
  const variantClasses = {
    primary: "bg-sea text-blueDark hover:bg-sea/80",
    secondary: "bg-blueDark text-cream hover:bg-blueDark/80",
    outline: "border border-sea text-sea hover:bg-sea/10",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Combined classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If href is provided, return a Link component
  if (href) {
    return isExternal ? (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise, return a button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
