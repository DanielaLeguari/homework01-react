import './style.css';
const SecaoUm = () => {
    return (
        <>
            <section className="secao-um">
                <div className="container">
                    <div className="container-um">
                        <div className="texto-um">Best dental surgeons</div>
                        <div><h1>25K+ STUDENTS TRUST US</h1></div>
                        <div className="texto-dois">Our goal is to make online education work for everyone</div>
                        <div>
                            <button className="btn-get">
                                Get Quote Now
                            </button>
                            <button className="btn-learn">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="container-dois">
                        <img src={"./assets/img.png"}></img>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SecaoUm;