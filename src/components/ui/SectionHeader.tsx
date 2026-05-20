import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-100 text-brand-blue-700 mb-3 uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-gray-600 leading-relaxed max-w-2xl text-base sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
