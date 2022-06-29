import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <main className="App bg-[#0b0c2a]">
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout