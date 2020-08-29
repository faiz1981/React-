import  React ,{useState,useEffect} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default function Shop(){
   
   useEffect(()=> {
        fetchitem()
   },[])
    
    const [items, setitems] = useState([])

    const fetchitem = async () =>{
        const data = await fetch('https:/fakestoreapi.com/products' );
        const detail = await data.json()
        // console.log(detail);
         setitems(detail)
        
    } 
    
 


   
    return (
        <div  className="list">
         
         {items.map((i)=>(
          
          <Link to={`/shop/${i.id}`}>
          <h5 key={i.id}>{i.title}</h5>
          </Link>
         
         ))

         }
        </div>
    )
}
