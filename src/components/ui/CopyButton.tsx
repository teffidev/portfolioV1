// src/components/ui/CopyButton.tsx
"use client";

import { useState } from "react";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successLabel?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CopyButton({
  textToCopy,
  label = "Copiar",
  successLabel = "¡Copiado!",
  variant = "secondary",
  size = "md",
  className = "",
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={copyToClipboard}
      className={className}
      aria-label={isCopied ? successLabel : label}>
      {isCopied ? (
        <>
          <CheckIcon className="h-5 w-5 mr-1.5" />
          <span>{successLabel}</span>
        </>
      ) : (
        <>
          <ClipboardDocumentIcon className="h-5 w-5 mr-1.5" />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
}
