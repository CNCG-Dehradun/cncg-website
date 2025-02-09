import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Ashutosh Kandpal",
    role: "Lead Organizer",
    image: "/img/arpit-agrawal.png",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  
  {
    name: "Mohit Bisht",
    role: "Lead Organizer",
    image: "/img/Mohit.jpg",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-gray-400 mb-4">{member.role}</p>
        <div className="flex gap-4">
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github size={20} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Team</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300">Meet the passionate individuals behind CNCG Dehradun</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

