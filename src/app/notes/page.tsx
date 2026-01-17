import { BookOpen, Download, User, Calendar, FolderOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Notes & Academics - GCES IT Club',
  description: 'Academic resources, notes, and study materials for GCES students',
}

export default function Notes() {
  const semesters = [
    {
      name: 'First Semester',
      subjects: [
        { name: 'Programming in C', files: 12, lastUpdated: '2024-01-15' },
        { name: 'Mathematics I', files: 8, lastUpdated: '2024-01-10' },
        { name: 'Physics', files: 6, lastUpdated: '2024-01-08' },
        { name: 'English', files: 4, lastUpdated: '2024-01-05' }
      ]
    },
    {
      name: 'Second Semester',
      subjects: [
        { name: 'Object Oriented Programming', files: 15, lastUpdated: '2024-01-20' },
        { name: 'Mathematics II', files: 10, lastUpdated: '2024-01-18' },
        { name: 'Chemistry', files: 7, lastUpdated: '2024-01-15' }
      ]
    },
    {
      name: 'Third Semester',
      subjects: [
        { name: 'Data Structures & Algorithms', files: 18, lastUpdated: '2024-01-22' },
        { name: 'Computer Graphics', files: 12, lastUpdated: '2024-01-20' },
        { name: 'Statistics', files: 9, lastUpdated: '2024-01-18' }
      ]
    }
  ]

  const recentUploads = [
    {
      title: 'DSA Lab Manual - Complete Guide',
      subject: 'Data Structures & Algorithms',
      uploadedBy: 'John Doe',
      date: '2024-01-22',
      downloads: 45
    },
    {
      title: 'OOP Concepts - Detailed Notes',
      subject: 'Object Oriented Programming',
      uploadedBy: 'Sarah Wilson',
      date: '2024-01-20',
      downloads: 32
    },
    {
      title: 'C Programming - Practice Problems',
      subject: 'Programming in C',
      uploadedBy: 'Mike Chen',
      date: '2024-01-18',
      downloads: 28
    }
  ]

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Notes & Academics</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Access study materials, notes, and academic resources shared by the community
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Browse by Semester</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {semesters.map((semester, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FolderOpen className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{semester.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {semester.subjects.map((subject, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{subject.name}</h4>
                      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                        <span>{subject.files} files</span>
                        <span>Updated: {new Date(subject.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <Link href={`/notes/${semester.name.toLowerCase().replace(' ', '-')}/${subject.name.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="text-primary hover:underline text-sm mt-2 inline-block">
                        View Materials →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recent Uploads</h2>
            <p className="text-gray-600 dark:text-gray-400">Latest study materials added by the community</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {recentUploads.map((upload, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{upload.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{upload.subject}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{upload.uploadedBy}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(upload.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{upload.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contribution Guidelines</h2>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How to Contribute</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <strong>Quality Content:</strong> Ensure your notes are clear, accurate, and well-organized
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <strong>Proper Attribution:</strong> Credit original sources and authors appropriately
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <strong>File Format:</strong> Upload in PDF format with clear naming conventions
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <strong>Review Process:</strong> All submissions go through a review process before publication
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Submit Your Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}