import './index.css'
import './App.css';
import React ,{ useState } from 'react';
import data from './Data'
import Tours from './Components/Tours'
const App=()=>{
  const [tours,setTours] = useState(data);

function removeTour(id){
     const newtour = tours.filter( tour=>tour.id!==id);
     setTours(newtour);
}

if(tours.length===0){
  return (
       <div className="flex  flex-col justify-center items-center mt-[300px]">
        <h2 className="font-serif font-bold text-[25px]">No Tours Left</h2>
        <button className="bg-blue-500 font-bold font-sans w-[100px] rounded-md hover:bg-blue-700 cursor-pointer    transition-all duration-300"  onClick={()=>setTours(data)}>
          Refresh
        </button>
       </div>
  );
}

  return (
    <div>
        
         <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
};

export default App;
