import { Hero } from "@/components/hero"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-6">
            <p>
              At CNCF Dehradun, we believe that cloud-native computing has the power to transform the way we build,
              deploy, and scale applications. Nestled in the beautiful hill city of Dehradun, in the serene state of
              Uttarakhand, we're at the forefront of revolutionizing the software development landscape.
            </p>
            <p>
              Our focus lies in leveraging cutting-edge technologies like Kubernetes, microservices, serverless
              architecture, and observability to create scalable, resilient, and efficient solutions for the cloud era.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Cloud Native Meetup"
              date="February 15, 2024"
              image="/placeholder.svg?height=200&width=400"
            />
            <EventCard title="Kubernetes Workshop" date="March 1, 2024" image="/placeholder.svg?height=200&width=400" />
            <EventCard
              title="DevOps Fundamentals"
              date="March 15, 2024"
              image="/placeholder.svg?height=200&width=400"
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">56+</h3>
              <p className="text-gray-400">Community Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-400">Events Organized</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-gray-400">Speakers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the cloud native revolution in Dehradun. Connect, learn, and grow with like-minded professionals
            and enthusiasts.
          </p>
          <a href="https://community.cncf.io/cloud-native-dehradun/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Member
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

