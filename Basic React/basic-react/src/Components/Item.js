import  React,{useState,useEffect}  from 'react'
import '../App.css'


export default function Item({ match }) {
  
    useEffect(() => {
    fetchdata();
  }, []);

  const [item, setitem] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      `https:/fakestoreapi.com/products/${match.params.id}`
    );
    const itemdetail = await data.json()
    console.log(itemdetail);
    setitem(itemdetail);
  }

  return (
    <div className="list">
      <h1>{item.title}</h1>

      <img className="img" src={item.image} alt="" />
      <h4>Category : {item.category}</h4>
     
      <h4>Price     : ${item.price}</h4>
      
      <h4>Description : </h4>
       <p>
           {item.description}
       </p>
    </div>
  );
}
