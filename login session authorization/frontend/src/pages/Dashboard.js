import React ,{ useEffect, useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';


export default function Dashboard() {
 
  var navigate = useNavigate();
  
  var [res,setres]=useState();
  
  useEffect(()=>{

    const fetchApi = async()=>{
      const response = await fetch('/logincheck',{method:"GET",credentials:"include",headers:{"Content-type": "application/json"}});
      const resJson = await response.json();
      // console.log(resJson);
      setres(resJson.data);
      if(resJson.data === "notlogin"){
        return (navigate("/"));
      }
    }
    fetchApi();

  },[]);


  return (
    <div>
      <h1>Welcome to LOGIN page</h1>
      <Link to="/logout">Logout</Link>
      <br></br>
      <br></br>
      <h3>{res}</h3>
    </div>
  )
}
