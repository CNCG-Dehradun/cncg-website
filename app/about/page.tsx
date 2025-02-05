import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About CNCG Dehradun</h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              A vibrant community of cloud native enthusiasts and professionals in Dehradun
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="CNCG Dehradun Community"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-300">
                At CNCF Dehradun, we believe that cloud-native computing has the power to transform the way we build,
                deploy, and scale applications. Our mission is to educate, empower, and inspire the local tech community
                to fully embrace cloud-native computing.
              </p>
              <p className="text-gray-300">
                We bridge the gap between the rich talent in Uttarakhand and the opportunities in the cloud-native
                ecosystem, providing networking, collaboration, and knowledge-sharing opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Community Events</h3>
              <p className="text-gray-300">
                Regular meetups, workshops, and conferences focused on cloud native technologies.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Knowledge Sharing</h3>
              <p className="text-gray-300">Technical talks, hands-on sessions, and mentorship programs.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Networking</h3>
              <p className="text-gray-300">Connect with industry experts and like-minded professionals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're a student, professional, or enthusiast, there's a place for you in our community.
          </p>
          <a
            href="https://community.cncf.io/cloud-native-dehradun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Member
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}