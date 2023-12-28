import React, { useState } from 'react'

export default function Card({id,image,info,price,name ,removeTour}) {
   
    const [readmore , setreadmore] = useState(false);
    const description = readmore ? info:`${info.substring(0,150)}....`;
    function readhandler(){
         setreadmore(!readmore);
    }

 
  return (
   
            <div >
                <div className="flex flex-col w-[300px] h-[450px] lg:w-[450px] lg:h-[500px] border-slate-100 border-[5px] rounded-lg sm:ml-2 md:ml-4 lg:ml-6 mt-[80px] hover:scale-105 shadow-lg cursor-pointer transition-all duration-300 mb-[100px] ">

               
                <img src={image} className="w-[500px] h-[300px]" />
                <div className='info'>
                <div className='details'>
                <h4 className="font-serif font-bold ml-2">{name}</h4>
                   
                   
                </div>
                <div className="ml-2">{description}
                <span className="text-blue-600" onClick={readhandler}>
                   {readmore  ? `.   show less`:`read more`}
                </span>
               
                </div>
                <h4 className="font-bold text-green-500 ml-2">Rs {price}</h4>
                <button className=" bg-red-200 w-[200px] border-red-600 border-[2px] font-bold hover:bg-red-500 transition-all duration-300 rounded-lg sm:ml-[50px] md-[150px] lg:ml-[120px]" onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
          
           
           
           
            </div>
            </div>
    
  );
}
