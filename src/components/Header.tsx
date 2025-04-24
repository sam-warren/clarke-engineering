import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-8 flex gap-8 bg-red-400 text-white justify-center">
      <nav className="flex flex-row gap-8">
        <div className="font-bold">
          <Link to="/">Home</Link>
        </div>
        <div className="font-bold">
          <Link to="/about">About</Link>
        </div>
        <div className="font-bold">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
