import Cover from "@/components/Cover"
import Sidebar from "@/components/Sidebar"
import Top from "@/components/Top"

//@ts-ignore
export default function Layout({ children }) {
  return (

    <div className=" min-h-screen flex flex-col">
      <Top />

      <div className=" flex  flex-1">

        <Sidebar />
        <div className="  flex-1 m-5 mx-10 mr-32 mt-16">

          
            <main>{children}</main>

  
        </div>
      </div>
    </div>


  )
}
