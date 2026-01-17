import Link from 'next/link'
import { Code2, Rocket, Users, Calendar, ArrowRight, Building, Award } from 'lucide-react'
import Carousel from '@/components/Carousel'
const metadata = {
  title: 'Our Team - GCES IT Club',
  description: 'Meet the Board Executive Members of GCES IT Club',
}

export default function Home() {
  const upcomingEvents = [
    { id: 1, title: 'Web Development Workshop', date: '2024-02-15', venue: 'Computer Lab A' },
    { id: 2, title: 'AI & Machine Learning Bootcamp', date: '2024-02-20', venue: 'Auditorium' },
    { id: 3, title: 'Hackathon 2024', date: '2024-03-01', venue: 'Main Campus' },
  ]

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <Carousel />
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Empowering Students Through Technology & Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              GCES IT Club is a student-led community fostering learning, leadership, and innovation in tech.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                View Events <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/join" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What We Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive learning opportunities and resources to help students excel in technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hands-on technical workshops on latest technologies
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Conferences</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tech conferences with industry experts
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Industry Talks</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Sessions with industry professionals
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Community Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Collaborative projects solving real problems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Events Conducted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="text-sm">{event.venue}</div>
                </div>
                <Link href={`/events/${event.id}`} className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/events" className="text-primary font-semibold hover:underline">
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center opacity-60">
            <div className="bg-gray-100 dark:bg-gray-800 h-20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 1</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 h-20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 2</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 h-20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 3</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 h-20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary dark:bg-primary-dark py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Be part of a thriving tech community and accelerate your career in technology.
          </p>
          <Link href="/join" className="inline-block bg-white text-primary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition-colors">
            Join GCES IT Club
          </Link>
        </div>
      </section>
    </>
  )
}