import { useEffect, useRef, useState } from "react";
import '../Searchbar.css';

function SearchBar({setValue,value}){
  
 const reference=useRef("");
  function onclick(e){
   setValue(e.target.value);
   console.log(value.toLowerCase())
}
  function clear(){
    setValue('')
  }
return(
    <div className="searchBar">
          <div  >
            <input type="text" placeholder="Search"  className="input" 
            onChange={onclick} ref={reference}
            value={value}/>
            <button  className="btn" onClick={clear}>Clear</button>
          </div>
        </div>
  )
}
export default SearchBar;