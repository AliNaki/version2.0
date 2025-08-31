import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Wakalatnama</h1>
      <p className="text-lg mb-8">India’s Trusted Platform for Legal Services, Knowledge & Insights</p>
      <div className="space-x-4">
        <Link to="/lawyers" className="bg-indigo-600 px-4 py-2 rounded-lg">Hire Lawyers</Link>
        <Link to="/quiz" className="bg-green-600 px-4 py-2 rounded-lg">Take Quiz</Link>
        <Link to="/blog" className="bg-purple-600 px-4 py-2 rounded-lg">Read Blog</Link>
      </div>
    </div>
  )
}
