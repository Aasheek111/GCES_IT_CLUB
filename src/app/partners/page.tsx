import { Building, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Partners & Collaborations - GCES IT Club',
  description: 'Our community partners, event collaborators, and industry partnerships',
}

export default function Partners() {
  const partners = [
    {
      name: 'Nepal IT Association',
      description: 'Leading IT industry association promoting technology advancement in Nepal',
      year: '2022',
      type: 'Community Partner'
    },
    {
      name: 'TechCorp Solutions',
      description: 'Technology solutions provider supporting our hackathons and workshops',
      year: '2023',
      type: 'Event Partner'
    },
    {
      name: 'Innovation Hub Pokhara',
      description: 'Startup incubator providing mentorship and resources',
      year: '2022',
      type: 'Event Partner'
    },
    {
      name: 'CloudTech Nepal',
      description: 'Cloud computing services company providing industry insights',
      year: '2023',
      type: 'Industry Partner'
    }
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Partners & Collaborations</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building strong partnerships to enhance learning opportunities and industry connections
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {partner.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{partner.description}</p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Since {partner.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary dark:bg-primary-dark py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Become Our Partner</h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in empowering the next generation of tech leaders. Let's collaborate to create meaningful impact.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}