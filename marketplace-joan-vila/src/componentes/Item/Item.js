const Item = ({ name, img, price}) => {
    <li>
        {name}
        <img src={img} alt={name}/>
        {price}
    </li>
}

export default Item