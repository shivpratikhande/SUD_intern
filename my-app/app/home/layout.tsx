import Sidebar from "@/components/Sidebar"
import Top from "@/components/Top"

//@ts-ignore
export default function Layout({ children }) {
  return (

    <div>
      <Top />

      <div className=" flex">

        <Sidebar />
        <main>{children}</main>
      </div>
    </div>


  )
}