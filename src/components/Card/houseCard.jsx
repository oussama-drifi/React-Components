const HouseCard = ({srcImage, city, isAvailable, title, description, price}) => {
    return (
        <div className="card-container">
            <div className="card-head">
                <div className="img-wrapper">
                    <img src={new URL(`../assets/images/${srcImage}`, import.meta.url).href} alt="image not found" loading="lazy" />
                </div>
                <div className="card-badge">
                    <div className="city"><i className="bi bi-geo-fill"></i> {city}</div>
                    <div className={`availability ${color}`}><i className="bi bi-circle-fill"></i> {isAvailable ? "Available" : "Occupied"}</div>
                </div>
            </div>
            <div className="card-content">
                <div className="title">
                    <h4><i className="bi bi-dash"></i> {title}</h4>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="cta">
                    <button>Contact Owner <i className="bi bi-telephone"></i></button>
                    <span><b><i className="bi bi-wallet2"></i> {price}</b> MAD</span>
                </div>
            </div>
        </div>
    )
}

export default HouseCard