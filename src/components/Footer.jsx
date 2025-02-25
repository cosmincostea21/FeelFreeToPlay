import React from 'react'
import "../estilos/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <p>&copy; 2025 FeelFree2Play. Todos los derechos reservados.</p>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
