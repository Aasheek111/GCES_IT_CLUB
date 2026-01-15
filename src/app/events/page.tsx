import Link from 'next/link'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { getEvents } from '@/lib/events'

export const metadata = {
  title: 'Events - GCES IT Club',
  description: 'Explore upcoming and past events organized by GCES IT Club',
}

export default async function Events() {
  const { upcoming, past } = await getEvents()

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join our workshops, hackathons, and tech talks
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded"></span>
            Upcoming Events
          </h2>
          
          {upcoming.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-gray-600 dark:text-gray-400">No upcoming events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-400 rounded"></span>
            Past Events
          </h2>
          
          {past.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-gray-600 dark:text-gray-400">No past events to display.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function EventCard({ event, isPast = false }: { event: any; isPast?: boolean }) {
  return (
    <div className="card p-6 flex flex-col">
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 self-start ${
        isPast ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : 'bg-primary/10 text-primary'
      }`}>
        {isPast ? 'Completed' : 'Upcoming'}
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{event.description}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{new Date(event.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{event.venue}</span>
        </div>
      </div>
      
      <Link 
        href={`/events/${event.id}`}
        className={`text-center py-2 px-4 rounded-lg font-semibold transition-all ${
          isPast 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' 
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        {isPast ? 'View Details' : 'Register Now'}
      </Link>
    </div>
  )
}
