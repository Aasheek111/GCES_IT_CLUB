import Link from 'next/link'
import { Code2, Rocket, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Welcome to GCES IT Club</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Innovate. Code. Transform.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the community of tech enthusiasts, developers, and innovators shaping the future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="btn-primary">
                View Events
              </Link>
              <Link href="/register" className="btn-secondary">
                Join Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on sessions on Web Dev, AI, IoT, and Cybersecurity
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hackathons & Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Compete, collaborate, and build innovative solutions
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Network</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with like-minded tech enthusiasts and mentors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of students already part of our community</p>
          <Link href="/register" className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Register Now
          </Link>
        </div>
      </section>
    </>
  )
}
