import { Target, Eye, Globe, Shield, Brain, Wifi } from 'lucide-react'

export const metadata = {
  title: 'About Us - GCES IT Club',
  description: 'Learn about GCES IT Club mission, vision, and the technologies we explore',
}

export default function About() {
  const domains = [
    { icon: Globe, title: 'Web Development', description: 'Full-stack development with modern frameworks' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'Machine Learning and AI applications' },
    { icon: Wifi, title: 'Internet of Things', description: 'Smart devices and connected systems' },
    { icon: Shield, title: 'Cybersecurity', description: 'Ethical hacking and data protection' },
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About GCES IT Club</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Empowering students through technology, innovation, and collaborative learning
          </p>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To create a vibrant community of tech enthusiasts where students can learn, 
                collaborate, and innovate through hands-on workshops and projects.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading student-driven technology community that produces skilled 
                professionals ready to tackle real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            'Foster technical skills through workshops',
            'Organize hackathons and competitions',
            'Provide mentorship and career guidance',
            'Build real-world projects',
            'Create networking opportunities',
            'Promote innovation and entrepreneurship',
          ].map((objective, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{objective}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Explore</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{domain.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
