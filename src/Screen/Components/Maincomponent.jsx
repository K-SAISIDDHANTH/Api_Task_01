import { useEffect, useRef, useState } from "react";
import SearchBar from "./Searchbar";
import Cards from "./Card";
import '../Maincomponent.css';




function Maincomponent({ dogData }) {
  const [value,setValue]=useState("")
  return (
    <>
      <div className="mainBox">
        {/* search bar */}
        <SearchBar setValue={setValue} value={value}/>

        <div className="cards">
          {/* calling card components */}
          {
            dogData.filter((inpt)=>{
              return value.toLowerCase() ===" "  ?    setSearchData(true):inpt.attributes.name.toLowerCase().includes(value)}
            ).map((data) => {
             
            //Calling the card components while passing props
              return <Cards data={data}/>
              
            })
          }   
        </div>
      </div>
    </>
  )
}

export default Maincomponent;