import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Blogs & Resources - GCES IT Club',
  description: 'Technical articles, learning resources, and student experiences',
}

export default function Blogs() {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with React: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of React and build your first component',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'Technical Guide',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'My Journey at GCES IT Club Hackathon 2023',
      excerpt: 'A personal reflection on participating in our annual hackathon',
      author: 'Sarah Wilson',
      date: '2024-01-10',
      category: 'Student Experience',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Understanding Machine Learning: Industry Insights',
      excerpt: 'Key trends and opportunities in the ML industry for students',
      author: 'Dr. Rajesh Sharma',
      date: '2024-01-05',
      category: 'Industry Insights',
      readTime: '7 min read'
    }
  ]

  const resources = [
    {
      title: 'Web Development Roadmap',
      description: 'Complete guide to becoming a full-stack developer',
      type: 'Learning Path'
    },
    {
      title: 'Python Programming Basics',
      description: 'Essential Python concepts for beginners',
      type: 'Tutorial Series'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Comprehensive DSA preparation materials',
      type: 'Study Guide'
    }
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Blogs & Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technical articles, learning resources, and insights from our community
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Latest Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <div key={article.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blogs/${article.id}`} className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Learning Resources</h2>
            <p className="text-gray-600 dark:text-gray-400">Curated resources to accelerate your learning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  {resource.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contribute Your Knowledge</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Share your experiences, tutorials, and insights with the community
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Write for Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We welcome contributions from students, faculty, and industry professionals. 
                Share your knowledge and help others learn.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Submit Your Article <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}