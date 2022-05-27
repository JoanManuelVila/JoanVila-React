import './NavBar.css'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <nav>
            <h2 className='tituloNav'>AntojateArg</h2>
            <div>
                <button className='buttonNav'>Tortas</button>
                <button className='buttonNav'>Tartas</button>
                <button className='buttonNav'>Galletas</button>
                <button className='buttonNav'>Postres</button>
            </div>
        <CartWidget />
        </nav>   
    )
}

export default NavBar