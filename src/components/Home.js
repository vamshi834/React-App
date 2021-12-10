import React,{useState} from 'react';
import Characters from './Characters';
import Comics from './Comics';
import Series from './Series';

const Home=()=>{
 const [selection,setSelection]=useState("Characters");

return( 
    <div style={{background: 'black'}}>
        <div style={{ padding:'50px'}}>
            <text onClick={()=>setSelection("Characters")} style={{color: 'white', fontSize:'20px', fontWeight:'bold',padding:'10px'}}> Characters </text>
            <text onClick={()=>setSelection("Comics")} style={{color: 'white', fontSize:'20px', fontWeight:'bold',padding:'10px'}}> Comics </text>
            <text onClick={()=>setSelection("Series")} style={{color: 'white', fontSize:'20px', fontWeight:'bold',padding:'10px'}}> Series </text>
        </div>
        <div >
            {selection === 'Characters' && <Characters/>}
            {selection === 'Comics' && <Comics/>} 
            {selection === 'Series' && <Series/>}
        </div>
    </div>
    )
}

export default Home;