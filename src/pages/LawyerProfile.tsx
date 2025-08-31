import { useParams, Link } from 'react-router-dom'

export default function LawyerProfile() {
  const { id } = useParams()
  return (
    <div>
      <Link to="/lawyers" className="text-sm hover:underline">← Back to directory</Link>
      <h2 className="text-2xl font-bold mt-4">Lawyer Profile — {id}</h2>
      <p className="mt-2">This profile is a placeholder. Fill with detailed info, photos, achievements, and booking UI.</p>
    </div>
  )
}
