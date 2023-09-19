import { useState } from 'react';
import './App.css';
import Home from './components/Home';

function Greeting() {
  return <h2>my first react app</h2>

  // const [name, setName] = useState("Tamana")

  // const onClickButton = ()=>{
  //   setName("omar")
  }

export function BookList(){
  return (
    <section>this is container</section>
  )
}





//   return (
//     // <div className="App">
//     //   <div>
//     //     <button onClick={onClickButton}>
//     //       Change name
//     //     </button>
//     //     {name}
//     //     <Home />
//     //     {
//     //     name === "Tamana" ? (
//     //       <div>
//     //         Hello This is {name}
//     //       </div>
//     //     ) : (<div>
//     //       Don't worry about my name
//     //     </div>)
//     //     }
//     //   </div>
//     // </div>
//   );
// }

export default Greeting;

