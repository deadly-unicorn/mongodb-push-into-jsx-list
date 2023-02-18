
import Link from "next/link"
import { Suspense } from "react"
import FetchedData from "./fetchedData"

export default function Home() {



  return (
    <>
      <div className="min-h-[40px] bg-gradient-to-b from-purple-700 to-purple-800 text-white flex flex-col items-center p-2 gap-2 rounded-lg">
        
        <div className="border-b border-blue-600 ">
          <p>Down below is your data</p>
            <Suspense >
              <FetchedData/>
            </Suspense>
        </div>
        
        
      

      </div>
</>
  )}    


