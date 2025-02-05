import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface EventCardProps {
  title: string
  date: string
  image: string
}

export function EventCard({ title, date, image }: EventCardProps) {
  return (
    <Card className="bg-card hover:bg-card/80 transition-colors cursor-pointer overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{title}</CardTitle>
        <p className="text-sm text-gray-400">{date}</p>
      </CardContent>
    </Card>
  )
}

