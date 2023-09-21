import React, { Fragment } from 'react'
import './testing.css'

let books=[

{
  title:'First Relieving And Relaxing',
  author:'Joran Moreen',
  src:'./images/book-1.jpg',
  id:1,
},
{
  title:'second Relieving And Relaxing',
  author:'Meghan Marcle',
  src:'./images/book-2.jpg',
  id:2,
},
{
  title:'Stress Relieving And Relaxing',
  author:'Alex senward',
  src:'./images/book-3.jpg',
  id:3,
},
{
  title:'Stress Relieving And Relaxing',
  author:'Meghan Marcle',
  src:'./images/book-4.jpg',
  id:4
},
{
  title:'Stress Relieving And Relaxing',
  author:'Meghan Marcle',
  src:'./images/book-5.jpg',
  id:5
},
{
  title:'Stress Relieving And Relaxing',
  author:'Meghan Marcle',
  src:'./images/book-6.jpg',
  id:6
  // paragraph:'hello dear'
}
]





function Testing() {
  return (
    
     
    <section className='bookList'>
     
       
     {
      
      books.map((b)=>{
        // const {title, author, src, id }=b;
        // return <BookLis title={title} author={author} src={src} key={id}/>
        return <BookLis {...b}key={b.id}/>
        // return <BookLis>{...b}</BookLis>
      })
     
     }
     
     {/* <button>click me</button> */}
    </section>
    
    
  )
  
}

const BookLis=(props)=>{
  const btnFunc=(b)=>{
    console.log(title);
    

  }
  const {title,author,src}=props;
  return <article className='Book'>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <img src={src} alt='h'></img>
    <button type='btn' onClick={btnFunc}>click me</button>
    
  {/* {children} */}
  
    </article>
}

// const BookName=()=><h2>Coloring Books For Adults Volume 4: 40 Stress Relieving And Relaxing</h2>

// const Author=()=><h4 style={{color: '#617d98', fontSize:'0.95rem',marginTop: '0.5rem'}}>Jordan Moree</h4>
// const Img=()=>{
//   return (
//     <img src='./images/book-3.jpg' alt='Image'></img>
//   )
// }


export default Testing