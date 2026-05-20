import Image from "next/image";
import { cn } from "@/lib/utils";

type DoctorPhotoProps = {
  src: string;
  alt: string;
  status?: "placeholder" | "final";
  className?: string;
  badgeClassName?: string;
};

export default function DoctorPhoto({
  src,
  alt,
  status = "final",
  className,
  badgeClassName,
}: DoctorPhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200 bg-white",
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="160px" />
      {status === "placeholder" ? (
        <span
          className={cn(
            "absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-gray-600 shadow-sm",
            badgeClassName
          )}
        >
          Photo placeholder
        </span>
      ) : null}
    </div>
  );
}
