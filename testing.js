import React from 'react'
import './testing.css'

function Testing() {
  return (
    <section className='bookList'>
      <BookLis />
      <BookLis />
      <BookLis />
      <BookLis />
      <BookLis />
      <BookLis />
    </section>
  )
}

const BookLis=()=>{
  return <article className='Book'>
    <BookName />
 <Author />
    <Img />
    
    
  
    
    </article>
}

const BookName=()=><h2>Coloring Books For Adults Volume 4: 40 Stress Relieving And Relaxing</h2>

const Author=()=><p>Paol Ole</p>
const Img=()=>{
  return (
    <img src='./images/book-3.jpg' alt='Image'></img>
  )
}


export default Testing