import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface PropTypes {
  Name: string;
  Date: string;
  Review: string;
  Rating: number;
  Gender: string;
}

const CardReview = (props: PropTypes) => {
  const { Name, Date, Review, Rating, Gender } = props;

  return (
    <Card className="group hover:border-havelock-blue-200 relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="grid h-full grid-rows-[auto_1fr_auto] p-3">
        <CardHeader className="flex flex-row items-center gap-3 p-0 pb-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
            <Image
              src={`/images/logo/avatar_${Gender}.png`}
              alt={Name}
              width={100}
              height={100}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/logo/avatar_pria.png";
              }}
            />
          </div>

          <div className="space-y-0.5">
            <CardTitle className="group-hover:text-havelock-blue-600 text-xs font-bold text-slate-800 transition-colors duration-300 lg:text-sm">
              {Name}
            </CardTitle>
            <CardDescription className="text-[10px] text-slate-400">
              {Date}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-0 pb-4">
          <p className="line-clamp-4 text-xs leading-relaxed text-slate-600 italic">
            {Review}
          </p>
        </CardContent>

        <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-50/80 px-2.5 py-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5"
                fill={i < Math.floor(Number(Rating)) ? "#FFC81E" : "#E2E8F0"}
                stroke={i < Math.floor(Number(Rating)) ? "#FFC81E" : "#E2E8F0"}
              />
            ))}
          </div>

          <span className="text-[10px] font-bold text-slate-500">
            {Rating} / 5.0
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CardReview;
