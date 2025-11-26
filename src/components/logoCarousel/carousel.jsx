import './carousel.css'

export default function Carousel () {

    const LOGOS = [
        {
            icon: "bi bi-android2",
            title: "android"
        },
        {
            icon: "bi bi-google-play",
            title: "play"
        },
        {
            icon: "bi bi-youtube",
            title: "youtube"
        },
        {
            icon: "bi bi-browser-chrome",
            title: "chrome"
        },
        {
            icon: "bi bi-apple",
            title: "apple"
        },
        {
            icon: "bi bi-browser-safari",
            title: "safari"
        },
        {
            icon: "bi bi-whatsapp",
            title: "whatsapp"
        },
        {
            icon: "bi bi-apple-music",
            title: "music"
        },
        {
            icon: "bi bi-envelope-paper",
            title: "email"
        },
    ]

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {/* first set */}
                {
                    LOGOS.map((logo, index) => (
                        <div key={`original-${index}`} className="logo-item">
                            <i className={logo.icon}></i>
                            <span>{logo.title}</span>
                        </div>
                    ))
                }
                {/* second set */}
                {
                    LOGOS.map((logo, index) => (
                        <div key={`original-${index}`} className="logo-item">
                            <i className={logo.icon}></i>
                            <span>{logo.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}