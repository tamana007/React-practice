import React, { Fragment } from "react";
import "./testing.css";
import { books } from "./books";
import BookLis from "./Book";
// import NewCom from "./Book";
// import {numbers} from "./books"


// function NewCom (){
//   return(
//     <p>{}</p>
//   )
  
 
// }

function Testing() {
  return (
    <Fragment>
    <h1 className="heading">Amazon Best Sellers</h1>
    <section className="bookList">
      {books.map((b,index) => {
        return <BookLis {...b} key={b.id} number={index} />;
      })}
    </section>
    </Fragment>
  );
}

// const BookName=()=><h2>Coloring Books For Adults Volume 4: 40 Stress Relieving And Relaxing</h2>

// const Author=()=><h4 style={{color: '#617d98', fontSize:'0.95rem',marginTop: '0.5rem'}}>Jordan Moree</h4>
// const Img=()=>{
//   return (
//     <img src='./images/book-3.jpg' alt='Image'></img>
//   )
// }

export default Testing;
