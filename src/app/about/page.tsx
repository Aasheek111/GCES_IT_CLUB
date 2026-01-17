import { Target, Eye, Calendar, Building } from 'lucide-react'

export const metadata = {
  title: 'About Us - GCES IT Club',
  description: 'Learn about GCES IT Club history, mission, vision, and faculty advisors',
}

export default function About() {
  const facultyAdvisors = [
    {
      name: 'Dr. Rajesh Sharma',
      designation: 'Head of Department, Computer Engineering',
      image: '/faculty/dr-rajesh.jpg'
    },
    {
      name: 'Prof. Anita Poudel',
      designation: 'Associate Professor, Electronics Engineering',
      image: '/faculty/prof-anita.jpg'
    }
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">About GCES IT Club</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Fostering innovation and technical excellence since our establishment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our History</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              GCES IT Club was established in 2020 with the vision of creating a vibrant tech community within 
              Gandaki College of Engineering and Science. What started as a small group of passionate students 
              has grown into one of the most active student organizations in the college.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The club exists to bridge the gap between theoretical knowledge and practical application, 
              providing students with hands-on experience in cutting-edge technologies and fostering 
              innovation through collaborative projects and industry partnerships.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relationship with GCES</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              As an official student organization of Gandaki College of Engineering and Science, 
              GCES IT Club operates under the guidance of the college administration and faculty. 
              We work closely with various departments to enhance the overall learning experience 
              and provide students with opportunities beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To cultivate a technologically empowered and innovation-driven student community 
                that leads the digital transformation in Nepal.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Skill development through hands-on workshops and training</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Industry exposure via partnerships and guest sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Leadership growth through active participation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community impact through technology solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Faculty Advisors</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Guiding our journey with their expertise and mentorship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAdvisors.map((advisor, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{advisor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{advisor.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}