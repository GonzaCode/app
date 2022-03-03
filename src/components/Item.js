const Item = ({items}) => {
   return (
      <>
         {items.map((e,i) => {
            return <li>{e}</li>
         })}
      </>
   )
}

export default Item