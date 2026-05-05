import { Calendar, Clock } from "lucide-react";

interface PropTypes {
  Day: string;
  Time: string;
}

const DayTime = (props: PropTypes) => {
  const { Day, Time } = props;
  return (
    <div className="flex justify-between  gap-2 p-4 border border-havelock-blue-400 bg-white rounded-lg items-center">
      <div className="flex items-center gap-1 ">
        <Calendar className=" w-3 h-3 md:h-4 md:w-4 text-havelock-blue-500" />
        <span className=" text-xs font-medium md:font-semibold text-slate-700">
          {Day}
        </span>
      </div>
      <div className="flex items-center gap-1 ">
        <Clock className=" w-3 h-3 md:h-4 md:w-4 text-havelock-blue-500" />
        <span className="text-xs font-medium md:font-semibold text-slate-700">
          {Time} WIB
        </span>
      </div>
    </div>
  );
};

export default DayTime;
