import { ArrowRight } from "lucide-react";
type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

export default function QuickActionCard({
  title,
  description,
  icon,
  color,
}: Props) {
  return (
    <div className="group flex h-full cursor-pointer flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div
  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-white`}
>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>
      <div className="mt-auto flex justify-end pt-8">
        <ArrowRight className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 group-hover:text-blue-600 group-hover: scale-110" />
        </div>
    </div>
  );
}