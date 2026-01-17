import { CheckCircle, Users, Award, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Join Us - GCES IT Club',
  description: 'Become a member of GCES IT Club and accelerate your tech career',
}

export default function JoinUs() {
  const benefits = [
    'Access to exclusive workshops and training sessions',
    'Networking opportunities with industry professionals',
    'Leadership development through active participation',
    'Hands-on experience with latest technologies',
    'Certificate of participation for all events',
    'Priority access to internship and job opportunities'
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Join GCES IT Club</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Become part of a thriving tech community and accelerate your career in technology
          </p>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Join GCES IT Club?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Skill Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn cutting-edge technologies through hands-on workshops and real projects
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Networking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with like-minded peers, industry professionals, and potential mentors
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gain recognition for your contributions and build a strong professional profile
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">What Members Gain</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Who Can Join?</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                GCES IT Club is open to all students of Gandaki College of Engineering and Science, 
                regardless of their department or year of study.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">All Departments</div>
                  <div className="text-gray-600 dark:text-gray-400">Engineering & Science</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">All Years</div>
                  <div className="text-gray-600 dark:text-gray-400">1st to Final Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">All Levels</div>
                  <div className="text-gray-600 dark:text-gray-400">Beginner to Advanced</div>
                </div>
              </div>
            </div>

            <div className="bg-primary dark:bg-primary-dark p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Join our community today and start your journey towards becoming a tech leader
              </p>
              <Link href="/register" className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}