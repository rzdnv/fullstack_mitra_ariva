import { Calendar, Clock } from "lucide-react";

interface PropTypes {
  Day: string;
  Time: string;
}

const DayTime = (props: PropTypes) => {
  const { Day, Time } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 ">
        <Calendar className="h-4 w-4 text-havelock-blue-500" />
        <span className="font-semibold text-slate-800">{Day}</span>
      </div>
      <div className="flex items-center gap-1 ">
        <Clock className="h-4 w-4 text-havelock-blue-500" />
        <span className="font-semibold text-slate-800">{Time} WIB</span>
      </div>
    </div>
  );
};

export default DayTime;
