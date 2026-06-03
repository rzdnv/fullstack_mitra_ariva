import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

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
    // <Card className=" h-full bg-white shadow-lg">
    //   <CardHeader className="flex items-center gap-4">
    //     <Avatar size="lg">
    //       <AvatarImage
    //         src={`/images/logo/avatar_${Gender}.png`}
    //         alt="profile"
    //       />
    //       <AvatarFallback>CN</AvatarFallback>
    //     </Avatar>
    //     <div>
    //       <CardTitle className="text-slate-800 ">{Name}</CardTitle>
    //       <CardDescription className="text-xs ">{Date}</CardDescription>
    //     </div>
    //   </CardHeader>
    //   <CardContent className="flex flex-col gap-2 h-full">
    //     <p className="line-clamp-3 mb-auto text-xs md:text-sm px-6 text-slate-900">
    //       {Review}
    //     </p>
    //     <div className="flex items-center gap-1 mt-2">
    //       <Star className="w-5 h-5 " fill="#FFC81E" stroke="#FFC81E" />
    //       <span className="font-light text-sm italic">{Rating} Rating</span>
    //     </div>
    //   </CardContent>
    // </Card>
    <Card className="group hover:border-havelock-blue-200 relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Menggunakan pembungkus grid 3 baris agar pembagian ruang atas, tengah, bawah selalu konsisten */}
      <div className="grid h-full grid-rows-[auto_1fr_auto] p-3">
        {/* BARIS 1: Header (Avatar & Nama) */}
        <CardHeader className="flex flex-row items-center gap-3 p-0 pb-3">
          <Avatar className="h-10 w-10 border border-slate-50 bg-slate-50">
            <AvatarImage
              src={`/images/logo/avatar_${Gender}.png`}
              alt={Name}
              className="object-cover"
            />
            <AvatarFallback className="bg-havelock-blue-50 text-havelock-blue-600 text-xs font-semibold">
              {Name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-0.5">
            <CardTitle className="group-hover:text-havelock-blue-600 text-xs font-bold text-slate-800 transition-colors duration-300 lg:text-sm">
              {Name}
            </CardTitle>
            <CardDescription className="text-[10px] text-slate-400">
              {Date}
            </CardDescription>
          </div>
        </CardHeader>

        {/* BARIS 2: Isi Review (Akan mengambil sisa ruang tengah secara adil) */}
        <CardContent className="p-0 pb-4">
          <p className="line-clamp-4 text-xs leading-relaxed text-slate-600 italic">
            {Review}
          </p>
        </CardContent>

        {/* BARIS 3: Rating Bintang (Mengunci sejajar di dasar boks) */}
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
