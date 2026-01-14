interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-amiri text-4xl md:text-5xl text-gold inline-block border-b-2 border-gold/50 pb-4 px-8">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg mt-4">{subtitle}</p>
      )}
    </div>
  );
}
