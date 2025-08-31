import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Legal Blog</h2>
      <div className="space-y-4">
        <article className="p-4 bg-white/5 rounded"><h3 className="font-semibold">Consumer Rights in India</h3><p className="text-sm">Understand your rights and how to file complaints.</p><Link to="/blog/consumer-rights-india" className="text-sm text-indigo-200 hover:underline">Read</Link></article>
        <article className="p-4 bg-white/5 rounded"><h3 className="font-semibold">Property Law Updates</h3><p className="text-sm">Due diligence essentials for buyers.</p><Link to="/blog/property-law-updates-2025" className="text-sm text-indigo-200 hover:underline">Read</Link></article>
      </div>
    </div>
  )
}
