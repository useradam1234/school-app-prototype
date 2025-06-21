
import { Link } from "react-router-dom";
import { BookOpen, Calendar, School } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Inspiring excellence in education for over 50 years. We nurture young minds 
              to become tomorrow's leaders and innovators.
            </p>
            <div className="text-gray-300">
              <p>123 Education Street</p>
              <p>Academic City, AC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@excellenceacademy.edu</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Student Portal</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parent Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Calendar</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
