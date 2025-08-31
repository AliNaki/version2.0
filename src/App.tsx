import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lawyers from './pages/Lawyers'
import LawyerProfile from './pages/LawyerProfile'
import Quiz from './pages/Quiz'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lawyers' element={<Lawyers />} />
            <Route path='/lawyers/:id' element={<LawyerProfile />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
