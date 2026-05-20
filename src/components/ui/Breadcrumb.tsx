import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-sm text-gray-600", className)}
    >
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
