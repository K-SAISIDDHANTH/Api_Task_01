import { useState } from "react";
// const [dogData, setdogData] = useState([]);
import axios from "axios";
function fetches(setdogData) {
    axios.get("https://dogapi.dog/api/v2/breeds/")
      .then(response => {
        let responseData = response.data.data;
        setdogData(responseData);
        })
      .catch(err => {
        console.log(err);
      })
    }
export default fetches;