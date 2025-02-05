import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CNCG Dehradun</h3>
            <p className="text-gray-400">
              A local chapter of Cloud Native Computing Foundation in Dehradun, Uttarakhand.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/CNCG-Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cncgdehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cncg-dehradun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest events and news.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="bg-white/5 rounded px-4 py-2 flex-1" />
              <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CNCG Dehradun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

