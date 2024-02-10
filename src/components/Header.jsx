import { Link, NavLink } from "react-router-dom";
import PetsPage from "../pages/PetsPage";


export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between">
      <Link to={'/'}><h2 className="text-2xl font-bold text-main">Logo</h2></Link>
      <nav className="flex gap-2">
        <NavLink to={'/'} className={'px-3 py-2 hover:bg-slate-300 text-main'} >Pets</NavLink>
        <NavLink to={'/medications'} className={'px-3 py-2 hover:bg-slate-300 text-main'}>Medications</NavLink>
      </nav>
      </div>
      <hr className="border-main/50"/>
    </header>
  )
}
