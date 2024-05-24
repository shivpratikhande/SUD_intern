import Sidebar from "@/components/Sidebar"

 //@ts-ignore
export default function Layout({ children }) {
  return (
    <div className=" flex">
    <Sidebar/>
      <main>{children}</main>
    </div>
  )
}