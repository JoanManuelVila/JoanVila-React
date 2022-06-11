import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
            <h2 className='tituloNav'>AntojateArg</h2>
            </Link>
            <div>
                <Link to= 'category/tortas' className='buttonNav'>Tortas</Link>
                <Link to= 'category/tartas' className='buttonNav'>Tartas</Link>
                <Link to= 'category/galletas' className='buttonNav'>Galletas</Link>
                <Link to= 'category/postres' className='buttonNav'>Postres</Link>
            </div>
        <CartWidget />
        </nav>   
    )
}

export default NavBar