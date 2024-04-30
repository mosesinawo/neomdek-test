import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"


function AppLayout() {
  return (
    <div className="flex">
      <Sidebar/>
      <main
        className={`ml-60 px-5 py-8 bg-[#e3eaf0] h-full`}
      >
        
        <Header  />
          <Outlet />
      
      </main>
    </div>
  )
}

export default AppLayout