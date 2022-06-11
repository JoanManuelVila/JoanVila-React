import { Link } from "react-router-dom"
const Item = ({ name, img, price, id}) => {
    return(
        <li>
            {name}
            <img src={img} alt={name}/>
            {price}
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </li>)
}

export default Item