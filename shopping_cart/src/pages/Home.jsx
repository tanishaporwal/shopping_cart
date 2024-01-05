import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://api.escuelajs.co/api/v1/products";
  const[loading, setLoading]=useState(false);
  const[posts, setPosts]=useState([]);
  
  async function apiCall(){

   setLoading(true);
   try{
     const data=await fetch(API_URL);
     const res=await data.json();
     setPosts(res);
     console.log(res);
   }
   catch(err){
    console.log("Something went wrong", err);
    setPosts([]);

   }
   setLoading(false);
  }
  useEffect(()=>{
    apiCall();
   } ,[])
    
  

  return <div >
   {loading ? <Spinner/>: 
   posts.length>0 ? 
   (<div className="grid xs:grid-cols-1 s:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
    {posts.map((post) => (
      <Product key={post.id} post={post}/>
    ))}
   </div>):(<div className="flex justify-center items-center"><p>No data found</p></div>)}
  </div>;
};

export default Home;
