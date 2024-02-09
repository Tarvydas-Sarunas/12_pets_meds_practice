

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between">
      <h2 className="text-2xl font-bold">Logo</h2>
      <nav className="flex gap-2">
        <span>Pets</span>
        <span>Medications</span>
      </nav>
      </div>
      <hr />
    </header>
  )
}
