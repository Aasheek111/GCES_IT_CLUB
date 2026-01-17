import { Github, ExternalLink, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Projects & Initiatives - GCES IT Club',
  description: 'Explore our club projects, hackathon outcomes, and open source contributions',
}

export default function Projects() {
  const clubProjects = [
    {
      title: 'GCES Event Management System',
      description: 'A comprehensive web application for managing college events and registrations',
      techStack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      contributors: ['John Doe', 'Jane Smith', 'Alex Johnson'],
      github: 'https://github.com/gces-it-club/event-management',
      status: 'Active'
    },
    {
      title: 'Student Portal Mobile App',
      description: 'Mobile application for students to access academic resources and club updates',
      techStack: ['React Native', 'Firebase', 'Node.js'],
      contributors: ['Sarah Wilson', 'Mike Chen'],
      github: 'https://github.com/gces-it-club/student-portal',
      status: 'In Development'
    }
  ]

  const hackathonProjects = [
    {
      title: 'Smart Campus Solution',
      description: 'IoT-based campus management system - Winner of Hackathon 2023',
      techStack: ['Arduino', 'React', 'Python'],
      contributors: ['Team Alpha'],
      award: '1st Place - Hackathon 2023'
    },
    {
      title: 'EcoTrack Nepal',
      description: 'Environmental monitoring app for tracking pollution levels',
      techStack: ['Flutter', 'Firebase', 'ML'],
      contributors: ['Team Beta'],
      award: '2nd Place - Green Tech Challenge'
    }
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Projects & Initiatives</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover our innovative projects, research initiatives, and contributions to the tech community
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Club Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Student-led projects solving real-world problems</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clubProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Contributors:</h4>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.contributors.join(', ')}</span>
                  </div>
                </div>

                <Link href={project.github} className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Hackathon Outcomes</h2>
            <p className="text-gray-600 dark:text-gray-400">Award-winning projects from competitions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hackathonProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.award}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{project.contributors.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Open Source Contributions</h2>
            <p className="text-gray-600 dark:text-gray-400">Our contributions to the open source community</p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 dark:bg-gray-800 p-12 rounded-lg">
              <Github className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contributing to Open Source</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We encourage our members to contribute to open source projects and share their knowledge with the global community.
              </p>
              <Link href="https://github.com/gces-it-club" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                <Github className="w-5 h-5" />
                Visit Our GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}