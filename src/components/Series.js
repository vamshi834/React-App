import React,{useState,useEffect} from 'react';
import SeriesCard from './SeriesCard';

const Series=()=>{
const [data,setData]=useState(null);

useEffect(()=>{
    fetch('http://gateway.marvel.com/v1/public/series?apikey=0f66d3d7a3a32ccb04607e6f0c2c10a8')
    .then(res=>res.json())
    .then(jres=>{
        setData(jres.data.results);
    })
},[])
console.log(data);
return(
    <div style={{background: 'white',display:'flex',  width:'100%',flexWrap:'wrap'}}>
    {
     data!=null && data.map(it=><SeriesCard prop={it}/>)
    }   
    </div>
    )
}

export default Series;