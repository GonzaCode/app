const ItemDetail = ({item}) => {

   return (
      <article className="main__article_detail">
         <img src={item.image}/>
         <div>
            <h2>{item.title}</h2>
            <p>U$D{item.price}</p>
         </div>
         <p className="a">{item.description}</p>

      </article>
   )
}

export default ItemDetail