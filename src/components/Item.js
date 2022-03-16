import { Link } from "react-router-dom"

const Item = ({item}) => {
   return (
      <Link to={`/producto/${item.id}`}>
         <div className="main__article_card">
            <h3 className="article__card_title">{item.title}</h3>
            <img className="article__card_img" src={item.image}/>
            <p className="article__card_price">U$D{item.price}</p>
         </div>
      </Link>
   )
}

export default Item