import './style.css';
const Header = () => {
    return (
        <>
            <header className="cabecalho">
                <nav className="nav-bar">
                    <h1><a href={'#'}>Brandname</a></h1>
                    <ul>
                        <li>
                            <a href={'#'}>Home</a>
                        </li>
                        <li>
                            <a href={'#'}>Product</a>
                        </li>
                        <li>
                            <a href={'#'}> Pricing</a>
                        </li>
                        <li>
                            <a href={'#'}>Contact</a>
                        </li>
                    </ul>
                    <div>
                        <button className="btn-login">Login</button>
                        <button className="btn-join">JOIN US<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Header;