import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <Image
        src={`${process.env.NEXT_PUBLIC_VERCEL_URL || ""}/placeholder.svg?height=1080&width=1920`}
        alt="CNCG Dehradun Community"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to CNCG Dehradun</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          A cloud native technology catalyst in the heart of Dehradun
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="https://community.cncf.io/cloud-native-dehradun/">Join Our Community</Link>
          </Button>
          <Button size="lg" variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

