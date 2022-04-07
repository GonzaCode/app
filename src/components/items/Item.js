import { Link } from "react-router-dom"

const Item = ({item, seguimiento}) => {
   const { nombre, imagen, id, precio, cantidad } = item;
   
   return (
      <>
         {!seguimiento ? 
            <Link to={`/producto/${id}`}>
            <div className="main__article_card">
               <h3 className="article__card_title">{nombre}</h3>
               <img className="article__card_img" src={imagen}/>
               <p className="article__card_price">U$D{precio}</p>
            </div>
            </Link>
            :
            <div>
               <h3 className="article__card_title">{nombre}</h3>
               <img className="article__card_img" src={imagen}/>
               <p className="article__card_price">U$D{precio} (x {cantidad} = U$D{precio * cantidad}) </p>
            </div>
         }
      </>
   )
}

export default Item