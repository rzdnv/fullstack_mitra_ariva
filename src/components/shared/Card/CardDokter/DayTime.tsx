import { Calendar, Clock } from "lucide-react";

interface PropTypes {
  Day: string;
  Time: string;
}

const DayTime = (props: PropTypes) => {
  const { Day, Time } = props;
  return (
    <div className="border-havelock-blue-400 flex items-center justify-between gap-2 rounded-lg border bg-white px-2 py-4 lg:px-4">
      <div className="flex items-center gap-1">
        <Calendar className="text-havelock-blue-500 h-3 w-3 md:h-4 md:w-4" />
        <span className="text-xs font-medium text-slate-700 md:font-semibold">
          {Day}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="text-havelock-blue-500 hidden h-3 w-3 md:flex md:h-4 md:w-4" />
        <span className="text-xs font-medium text-slate-700 md:font-semibold">
          {Time} WIB
        </span>
      </div>
    </div>
  );
};

export default DayTime;
