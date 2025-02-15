import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About CNCG Dehradun</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CNCG Dehradun (Cloud Native Community Group Dehradun) is a vibrant community of cloud-native enthusiasts, professionals, and learners dedicated to fostering knowledge and innovation in cloud-native computing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
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
              At CNCG Dehradun, we aim to bridge the gap between the talented tech community in Uttarakhand and the fast-growing cloud-native ecosystem. Our mission is to empower developers, IT professionals, and students by providing educational resources, networking opportunities, and hands-on experience in cutting-edge cloud technologies.
            </p>
            <p className="text-gray-300">
              By hosting events, workshops, and mentorship programs, we strive to make cloud-native computing accessible and inclusive for all.
            </p>
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
                We organize regular meetups, hands-on workshops, and conferences focused on Kubernetes, DevOps, cloud computing, and open-source technologies.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Knowledge Sharing</h3>
              <p className="text-gray-300">
                We provide technical sessions, online courses, mentorship, and guidance from industry experts to help members stay ahead in the ever-evolving cloud landscape.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Networking</h3>
              <p className="text-gray-300">
                Connect with cloud-native professionals, engineers, and students to collaborate, share insights, and unlock new career opportunities in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're a student, a tech enthusiast, or an experienced professional, CNCG Dehradun welcomes you to be a part of our growing community. Learn, collaborate, and innovate with like-minded individuals passionate about cloud-native technologies.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="https://community.cncf.io/cloud-native-dehradun/">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
