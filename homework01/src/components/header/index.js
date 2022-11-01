import './style.css';
const Header = () => {
    return (
        <header className="cabecalho">
            <nav className="nav-bar">
                <h1>Brandname</h1>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Product
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                <div>
                    <button className="btn-login">Login</button>
                    <button className="btn-join">JOIN US<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </nav>
        </header>
    )
}

export default Header;