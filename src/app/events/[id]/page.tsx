import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { getEventById } from '@/lib/events'

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  const isPast = new Date(event.date) < new Date()
  const isRegistrationOpen = new Date(event.registrationDeadline) >= new Date()

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
          isPast ? 'bg-gray-200 dark:bg-gray-700' : 'bg-primary/10 text-primary'
        }`}>
          {event.category}
        </div>

        <h1 className="text-5xl font-bold mb-6">{event.title}</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{event.venue}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <span>Max {event.maxParticipants} participants</span>
          </div>
        </div>

        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Event</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{event.description}</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{event.details}</p>
        </div>

        {!isPast && (
          <div className="card p-8 bg-primary/5 dark:bg-primary/10">
            <h3 className="text-xl font-bold mb-2">Registration Deadline</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {new Date(event.registrationDeadline).toLocaleDateString('en-US', { 
                year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </p>
            
            {isRegistrationOpen ? (
              <Link href={`/register?event=${event.id}`} className="btn-primary inline-block">
                Register for This Event
              </Link>
            ) : (
              <p className="text-red-600 dark:text-red-400 font-semibold">Registration closed</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
