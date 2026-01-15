export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  category: string
  registrationDeadline: string
  maxParticipants: number
  details: string
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React and Next.js',
    date: '2024-02-15',
    time: '10:00 AM - 4:00 PM',
    venue: 'Computer Lab A',
    category: 'Workshop',
    registrationDeadline: '2024-02-10',
    maxParticipants: 50,
    details: 'A comprehensive workshop covering React fundamentals, Next.js App Router, and building full-stack applications.',
  },
  {
    id: '2',
    title: 'AI & Machine Learning Bootcamp',
    description: 'Introduction to AI, ML algorithms, and practical applications',
    date: '2024-02-20',
    time: '9:00 AM - 5:00 PM',
    venue: 'Auditorium',
    category: 'Bootcamp',
    registrationDeadline: '2024-02-15',
    maxParticipants: 100,
    details: 'Explore machine learning concepts, neural networks, and build your first AI model using Python and TensorFlow.',
  },
  {
    id: '3',
    title: 'Hackathon 2024',
    description: '24-hour coding challenge to build innovative solutions',
    date: '2024-03-01',
    time: '8:00 AM (24 hours)',
    venue: 'Main Campus',
    category: 'Hackathon',
    registrationDeadline: '2024-02-25',
    maxParticipants: 200,
    details: 'Team-based hackathon with exciting prizes. Build solutions for real-world problems using any technology stack.',
  },
  {
    id: '4',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn ethical hacking and security best practices',
    date: '2024-01-10',
    time: '2:00 PM - 6:00 PM',
    venue: 'Computer Lab B',
    category: 'Workshop',
    registrationDeadline: '2024-01-05',
    maxParticipants: 40,
    details: 'Introduction to cybersecurity, common vulnerabilities, and hands-on ethical hacking exercises.',
  },
]

export async function getEvents() {
  const now = new Date()
  const upcoming = mockEvents.filter(event => new Date(event.date) >= now)
  const past = mockEvents.filter(event => new Date(event.date) < now)
  
  return { upcoming, past }
}

export async function getEventById(id: string) {
  return mockEvents.find(event => event.id === id)
}
