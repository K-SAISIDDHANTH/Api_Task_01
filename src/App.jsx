import { useEffect, useRef, useState } from "react";
import axios from "axios";


function App() {
  const [dogData, setData] = useState([]);

  //fetch function
  function fetches() {


    axios.get("https://dogapi.dog/api/v2/breeds/")
      .then(response => {
        let responseData = response.data.data;
        setData(responseData);
        // console.log(data)

      })
      .catch(err => {
        console.log(err);
      })
    }
  //useEffect
  useEffect(() => {

    fetches();
  }, [])


  dogData.map((d) => {
    console.log(d.attributes.name)
  })
  return (
    <Maincomponent dogData={dogData} >

    </Maincomponent>

  )
}
function Dontdisplay(){
  return(
    <div>
      <p>hello brother there is no dog here</p>
    </div>
  )
}
function Maincomponent({ dogData }) {
  const [value,setValue]=useState("");

  const[searchData,setSearch]=useState(false);
  return (
    <>
      <div style={{height:"271vh", width: "100vw", backgroundColor: "#03a9f461" }}>



        {/* search bar */}
        <SearchBar setValue={setValue} value={value}></SearchBar>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14%", height: "100vh", justifyContent: "center", alignItems: "center" }}>
          {/* calling card components */}
        

          {
            dogData.filter((inpt)=>{
              return value.toLowerCase() ===" "  ?    setSearch(true):inpt.attributes.name.toLowerCase().includes(value)}
            ).map((data) => {
              let namee = data.attributes.name;
              let description = data.attributes.description;
              let minAge = data.attributes.life.min;
              let maxAge = data.attributes.life.max;
              // console.log(minAge);
              // console.log(maxAge);
              // console.log(description)
              // console.log(name)
              // console.log("hello brother")
             if(searchData===false){
              return <Cards namee={namee} description={description} minAge={minAge} maxAge={maxAge}></Cards>}
              else{
                return <Display></Display>
              }
              
              
            })
          }   
        


















        </div>


      </div>
    </>
  )
}

function Display(){
  console.log("hello worlds")
  return(
    <>
      <div>
        <h4>
          hello world this
        </h4>
      </div>
    
    </>
  )
}

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
    <div style={{ width: "100vw", height: "9vh", backgroundColor: "#568b9c", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div  >
            <input type="text" placeholder="Search"  style={{ padding: "5px", marginTop: "2px" ,border:"2px solid black",borderRadius:"5px"}} 
            onChange={onclick} ref={reference}
            value={value}/>
            <button style={{padding:"5px",borderRadius:"5px"}} onClick={clear}>Clear</button>
          </div>
          {/* */}
        

        </div>
  )
}
function Cards({ namee, description, minAge, maxAge }) {
  return (
    <>
      <div style={{ height: "390px", width: "200px", backgroundColor: "light", border: "2px solid white", borderRadius: "5px", padding: "5px" }}>


        {/* Dog Image */}
        <div style={{ display: "flex", justifyContent: "center" }} >
          <img src="https://th.bing.com/th/id/OIP.7BSdgl7f0znwH8JGQYisGgHaE4?rs=1&pid=ImgDetMain" alt="" style={{ height:     "100px", width: "100px", borderRadius: "10px", marginTop: "5px" }} />
        </div>
        {/* Dog Name */}
        <div>
          <h4>
            Name:{namee}
          </h4>
        </div>
        {/* Dog Description */}
        <div>
          
            <h4>description:</h4>  <p style={{fontSize:"13px"}}>{description}</p>
        
        </div>
        {/* Dog Life */}
        <div style={{display:"flex"}}>
          <div style={{paddingRight:"20px"}}>
            <h4>
              MinAge:{minAge}
            </h4>
          </div>
          <div>
            <h4>
              MaxAge:{maxAge}
            </h4>
          </div>
        </div>


        {/* <div>
          <h4>
            {prop.attribute.name}
          </h4>
        </div> */}



      </div>

    </>
  )
}

export default App
