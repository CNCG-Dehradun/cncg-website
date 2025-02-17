import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

export function EventCard({ title, date, image, link }: EventCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="bg-card hover:bg-card/80 transition-colors cursor-pointer overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={image || "/img/placeholder.svg"}
              alt={title}
              width={500}
              height={250}
              className="object-cover h-[250px]"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2">{title}</CardTitle>
          <p className="text-sm text-gray-400">{date}</p>
        </CardContent>
      </Card>
    </a>
  );
}
