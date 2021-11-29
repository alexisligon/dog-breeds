import React, { Component } from "react";
import axios from "axios";

class SearchContainer extends Component {
  state = {
    result: {},
    search: ''
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(Response => this.setState({ result: Response.data}))
  };

  render() {
    return(
      <h1>
        Dog Breeds
        {console.log(this.state.result)}
      </h1>
    )
  }
};

export default SearchContainer;

// export default function Search() {

//   const [breeds, setBreeds] = useState('');

//   useEffect(() => {
//     getBreeds()
//     .then(breedData => {
//       setBreeds(breedData)
//     });

//     async function getBreeds() {
//       const response = await axios.get('https://dog.ceo/api/breeds/list/all');
//       const breedData = response.data.message;
//       setBreeds(breedData)
//     }

//   })


//   return(
//     <div>
//       <h1> Dog Breeds</h1>
//       <ul>
//         {breeds.map(breedData => <li key={breeds.breeds}>{breeds.data}</li>)}
//       </ul>
    
//       </div>
//   )
// }

