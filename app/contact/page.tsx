import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300">Get in touch with the CNCG Dehradun team</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-card border border-border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-card border border-border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-card border border-border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-card border border-border rounded-md"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-300">contact@cncgdehradun.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-gray-300">@cncgdehradun</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-300">Dehradun, Uttarakhand</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

