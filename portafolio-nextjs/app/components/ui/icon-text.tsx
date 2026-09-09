import * as React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type IconSource =
  | string
  | LucideIcon
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | React.ReactElement;

export interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * SVG icon reference: can be a file path string (e.g. "/technologies/React.svg"),
   * a Lucide icon component, an SVG component, or an inline SVG JSX element.
   */
  icon: IconSource;
  /**
   * Alt text when `icon` is a file path string.
   */
  iconAlt?: string;
  /**
   * The text displayed next to the icon.
   */
  text?: React.ReactNode;
  /**
   * Optional custom classes for the icon container or element.
   */
  iconClassName?: string;
  /**
   * Optional custom classes for the text container.
   */
  textClassName?: string;
  children?: React.ReactNode;
}

export function IconText({
  icon,
  iconAlt = "icon",
  text,
  children,
  className = "",
  iconClassName = "",
  textClassName = "",
  ...props
}: IconTextProps) {
  const content = text ?? children;

  const renderIcon = () => {
    // 1. String path to SVG (e.g. "/technologies/React.svg")
    if (typeof icon === "string") {
      return (
        <span
          className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center ${iconClassName}`}
        >
          <Image
            src={icon}
            alt={iconAlt}
            fill
            sizes="40px"
            className="object-contain"
          />
        </span>
      );
    }

    // 2. React Element (e.g. <svg>...</svg>)
    if (React.isValidElement(icon)) {
      return (
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center [&>svg]:h-10 [&>svg]:w-10 ${iconClassName}`}
        >
          {icon}
        </span>
      );
    }

    // 3. Component (Lucide icon or custom SVG component)
    if (typeof icon === "function" || typeof icon === "object") {
      const IconComponent = icon as React.ComponentType<{
        className?: string;
        "aria-hidden"?: boolean | "true" | "false";
      }>;
      return (
        <IconComponent
          className={`h-10 w-10 shrink-0 ${iconClassName}`}
          aria-hidden="true"
        />
      );
    }

    return null;
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${className}`}
      {...props}
    >
      {renderIcon()}
      {content !== undefined && content !== null && (
        <span
          className={`font-mono text-lg leading-none text-heading ${textClassName}`}
        >
          {content}
        </span>
      )}
    </div>
  );
}

export default IconText;

