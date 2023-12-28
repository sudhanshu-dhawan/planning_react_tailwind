import React from 'react'
import Card from './Card'
export default function Tours({tours , removeTour}) {
  return (
    <div>
       
           <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-[280px]  lg:w-[500px] lg:h-[80px] mt-[90px] py-4  border-black border-[1px] bg-gradient-to-r from-green-400 to-blue-500   rounded-lg">
              <h1 className="font-serif font-bold text-xl md:text-3xl  lg:text-5xl">plan your journey</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3">

                 {
                    tours.map( (tour)=>{
                        return <Card key={tour.id} {...tour} removeTour= {removeTour}></Card>    //...tour se object ki copy pass hogyi

                    }

                    )
                 }
                 </div>
           </div>
    </div>
  )
}
