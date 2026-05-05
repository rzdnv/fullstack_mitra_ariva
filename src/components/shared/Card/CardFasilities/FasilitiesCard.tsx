type LayananCardProps = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

export function FasilitiesCard({ title, desc, icon: Icon }: LayananCardProps) {
  return (
    <div className="border-havelock-blue-400 rounded-2xl border bg-white p-6 shadow-md">
      {/* Icon */}
      <div className="mb-4 w-fit rounded-xl bg-slate-100 p-4">
        <Icon className="text-havelock-blue-600 h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mb-2 font-bold text-slate-800 lg:text-lg">{title}</h3>

      {/* Desc */}
      <p className="mb-4 text-xs leading-relaxed text-slate-500 lg:text-sm">
        {desc}
      </p>

      {/* Info */}
      <div className="text-havelock-blue-600 flex items-center gap-2 text-xs font-medium lg:text-sm">
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
        Layanan Tersedia
      </div>
    </div>
  );
}
