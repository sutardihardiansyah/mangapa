import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <main className="App bg-zinc-900">
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout