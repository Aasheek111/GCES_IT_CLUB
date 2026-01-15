'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function RegisterForm() {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('event')
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', department: '', semester: '', eventId: eventId || '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (eventId) setFormData(prev => ({ ...prev, eventId }))
  }, [eventId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Registration successful! Check your email for confirmation.')
        setFormData({ name: '', email: '', phone: '', department: '', semester: '', eventId: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Registration failed. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input type="text" required className="input-field" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input type="email" required className="input-field" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Phone Number *</label>
          <input type="tel" required className="input-field" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Department *</label>
          <select required className="input-field" value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}>
            <option value="">Select Department</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electronics Engineering">Electronics Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Semester *</label>
          <select required className="input-field" value={formData.semester}
            onChange={(e) => setFormData({ ...formData, semester: e.target.value })}>
            <option value="">Select Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Event *</label>
          <select required className="input-field" value={formData.eventId}
            onChange={(e) => setFormData({ ...formData, eventId: e.target.value })}>
            <option value="">Select Event</option>
            <option value="1">Web Development Workshop</option>
            <option value="2">AI & Machine Learning Bootcamp</option>
            <option value="3">Hackathon 2024</option>
          </select>
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
            {message}
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
            {message}
          </div>
        )}

        <button type="submit" disabled={status === 'loading'}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default function Register() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Event Registration</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join us and be part of the tech community
          </p>
        </div>

        <Suspense fallback={<div className="card p-8 text-center">Loading...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  )
}
