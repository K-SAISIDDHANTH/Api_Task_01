import { useEffect, useRef, useState } from "react";
import Maincomponent from "./Screen/Components/Maincomponent";
import fetches from "./Screen/Components/fetch";


function App() {
  const [dogData, setdogData] = useState([]);
  fetches(setdogData);
  //useEffect
  useEffect(() => {
  fetches();
  }, [])

  return (
    <Maincomponent dogData={dogData} />
  )
}
export default App
