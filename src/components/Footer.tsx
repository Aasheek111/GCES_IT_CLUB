import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">GCES IT Club</h3>
            <p className="text-gray-400 mb-4">
              Gandaki College of Engineering and Science<br />
              Lamachaur, Pokhara
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+977 061-443866</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>git@gces.edu.np</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="/events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="/register" className="hover:text-primary transition-colors">Register</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://www.gces.edu.np" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GCES Website</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/gcesitclub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/gcesitclub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/gces-it-club" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:git@gces.edu.np" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GCES IT Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
