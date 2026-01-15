import { Users } from 'lucide-react'

export const metadata = {
  title: 'Our Team - GCES IT Club',
  description: 'Meet the Board Executive Members of GCES IT Club',
}

export default function Team() {
  const members = [
    { name: 'MAYUKH BARAL', position: 'President' },
    { name: 'BISHAL ACHARYA', position: 'Vice President' },
    { name: 'SWORNIMA DHUNGANA', position: 'Secretary' },
    { name: 'MAMATA ADHIKARI', position: 'Joint Secretary' },
    { name: 'ROSY ACHARYA', position: 'Treasurer' },
    { name: 'ABHISEKH DEWAN', position: 'Graphics Lead' },
    { name: 'AASHIK GAUTAM', position: 'Event Co-ordinator' },
    { name: 'SUCHANA CHHETRI', position: 'Social Media Manager' },
    { name: 'PRAPTI ACHARYA', position: 'Content Creator' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
