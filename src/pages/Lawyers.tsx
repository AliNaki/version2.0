import { Link } from 'react-router-dom'

export default function Lawyers() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lawyers Directory</h2>
      <p className="mb-4">This is a starter directory. Replace with real data or API calls.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 rounded-lg">
          <h3 className="font-semibold">Adv. Aisha Sharma</h3>
          <p className="text-sm">Criminal, Constitutional — Delhi</p>
          <Link to="/lawyers/1" className="mt-3 inline-block text-sm text-indigo-200 hover:underline">View Profile</Link>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <h3 className="font-semibold">Adv. Rohan Iyer</h3>
          <p className="text-sm">Corporate, Property — Mumbai</p>
          <Link to="/lawyers/2" className="mt-3 inline-block text-sm text-indigo-200 hover:underline">View Profile</Link>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <h3 className="font-semibold">Adv. Meera N.</h3>
          <p className="text-sm">Family, Consumer — Bengaluru</p>
          <Link to="/lawyers/3" className="mt-3 inline-block text-sm text-indigo-200 hover:underline">View Profile</Link>
        </div>
      </div>
    </div>
  )
}
