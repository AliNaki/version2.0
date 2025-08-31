import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-white">Wakalatnama</Link>
        <div className="space-x-4">
          <Link to="/lawyers" className="hover:text-gray-300">Lawyers</Link>
          <Link to="/quiz" className="hover:text-gray-300">Quiz</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        </div>
      </div>
    </nav>
  )
}
