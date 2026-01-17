import { Users, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team - GCES IT Club',
  description: 'Meet the Board Executive Members of GCES IT Club',
}

export default function Team() {
  const boardMembers = [
    { name: 'MAYUKH BARAL', position: 'President', image: '/mayuk.jpg', linkedin: '#' },
    { name: 'BISHAL ACHARYA', position: 'Vice President', image: '/bishal.jpg', linkedin: '#' },
    { name: 'SWORNIMA DHUNGANA', position: 'Secretary', image: '/swarnima.jpg', linkedin: '#' },
    { name: 'MAMATA ADHIKARI', position: 'Joint Secretary', image: '/mamata.jpg', linkedin: '#' },
    { name: 'ROSY ACHARYA', position: 'Treasurer', image: '/rozy.jpg', linkedin: '#' },
    { name: 'ABHISEKH DEWAN', position: 'Graphics Lead', image: '/abhisheq.png', linkedin: '#' },
    { name: 'AASHIK GAUTAM', position: 'Event Co-ordinator', image: '/aashik.jpg', linkedin: '#' },
    { name: 'SUCHANA CHHETRI', position: 'Social Media Manager', image: '/suchana.jpg', linkedin: '#' },
    { name: 'PRAPTI ACHARYA', position: 'Content Creator', image: '/prapti.jpg', linkedin: '#' },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Board Executive Members for The Tenure: 2026-2027
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-light font-semibold">{member.position}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <Linkedin className="w-5 h-5 text-primary hover:text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">2026-2027</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
