'use client'

import { useState } from 'react'
import { Plus, Trash2, Edit } from 'lucide-react'

export default function AdminPanel() {
  const [events, setEvents] = useState([
    { id: '1', title: 'Web Development Workshop', date: '2024-02-15', status: 'upcoming' },
    { id: '2', title: 'AI Bootcamp', date: '2024-02-20', status: 'upcoming' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '', description: '', date: '', time: '', venue: '', category: '', registrationDeadline: '', maxParticipants: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New event:', formData)
    setShowForm(false)
    setFormData({ title: '', description: '', date: '', time: '', venue: '', category: '', registrationDeadline: '', maxParticipants: '' })
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Event
          </button>
        </div>

        {showForm && (
          <div className="card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Event Title *</label>
                <input type="text" required className="input-field" value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Category *</label>
                <select required className="input-field" value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                  <option value="">Select Category</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Bootcamp">Bootcamp</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Seminar">Seminar</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Description *</label>
                <textarea required rows={3} className="input-field" value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Date *</label>
                <input type="date" required className="input-field" value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Time *</label>
                <input type="text" required placeholder="e.g., 10:00 AM - 4:00 PM" className="input-field" value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Venue *</label>
                <input type="text" required className="input-field" value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Registration Deadline *</label>
                <input type="date" required className="input-field" value={formData.registrationDeadline}
                  onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Max Participants *</label>
                <input type="number" required className="input-field" value={formData.maxParticipants}
                  onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })} />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="btn-primary">Create Event</button>
                <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6">Manage Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 rounded">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
