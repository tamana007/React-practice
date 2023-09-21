
const BookLis = (props) => {
  // const btnFunc=(b)=>{
  //   console.log(title);
  // }

  // const handleOnClick = ()=>{
  //   getBook(id)
  // }
  const { title, author, src,number } = props;
  return (
    <article className="Book">
      <h2>{title}</h2>
      {/* <p>{number+1}</p> */}
      <h4>{author}</h4>
      <img src={src} alt="h"></img>
      <p className="Number">#{number+1}</p>
      <button type="btn">
        click me
      </button>

      {/* {children} */}
    </article>
  );
};
export default BookLis;