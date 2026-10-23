import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "donate" | "secondary" | "outline-light" | "ghost";
type Size = "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary: "bg-forest text-white border-2 border-forest hover:bg-forest/90",
  donate: "bg-gold text-white border-2 border-gold hover:bg-gold-dark hover:border-gold-dark",
  secondary: "bg-white text-forest border-2 border-forest hover:bg-forest hover:text-white",
  "outline-light": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-forest",
  ghost: "bg-transparent text-ink border-2 border-transparent hover:border-ink/20",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/btn:translate-x-0"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
