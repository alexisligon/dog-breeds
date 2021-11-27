import React, { useEffect } from "react";
import axios from "axios";

export default function Search() {
  // const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    getBreeds();
  })

  async function getBreeds() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      console.log(response.data);
    } catch(error) {
      console.error(error)
    }
  }

  return(
    <div>
      <h1> Dog Breeds</h1>
      </div>
  )
}

