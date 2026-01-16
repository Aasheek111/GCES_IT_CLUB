import Link from 'next/link'
import { Code2, Rocket, Users, Calendar, Award, TrendingUp, ArrowRight } from 'lucide-react'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <Carousel />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Building Tomorrow's Tech Leaders
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              GCES IT Club is a student-driven community fostering innovation, collaboration, and technical excellence through hands-on learning and real-world projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                Explore Events <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/register" className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Become a Member
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technical Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Regular workshops covering web development, AI/ML, IoT, and cybersecurity fundamentals.
              </p>
              <Link href="/events" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Workshops <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Hackathons & Competitions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Participate in coding challenges and build innovative solutions to real-world problems.
              </p>
              <Link href="/events" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Join Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Peer Learning Network</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with fellow students, share knowledge, and grow together in a supportive environment.
              </p>
              <Link href="/team" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Events Organized</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400">Industry Partners</div>
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
            Register now to get access to exclusive workshops, events, and networking opportunities.
          </p>
          <Link href="/register" className="inline-block bg-white text-primary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition-colors">
            Register Now
          </Link>
        </div>
      </section>
    </>
  )
}
