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
    <Card className="min-w-sm h-full">
      <CardHeader className="flex items-center gap-4">
        <Avatar size="lg">
          <AvatarImage
            src={`/images/logo/avatar_${Gender}.png`}
            alt="profile"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-slate-800 ">{Name}</CardTitle>
          <CardDescription>{Date}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 h-full">
        <p className="line-clamp-3 mb-auto">{Review}</p>
        <div className="flex gap-1">
          {Array.from({ length: Rating }).map((_, index) => (
            <Star
              key={index}
              className="w-5 h-5 "
              fill="#FFC81E"
              stroke="#FFC81E"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardReview;
