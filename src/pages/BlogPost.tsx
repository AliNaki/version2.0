import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { id } = useParams()
  return (
    <div>
      <Link to="/blog" className="text-sm hover:underline">← Back to blog</Link>
      <h1 className="text-3xl font-bold mt-4">{id}</h1>
      <p className="mt-3">This is a placeholder blog post. Replace with your article content, ToC, author box, and comments component.</p>
    </div>
  )
}
