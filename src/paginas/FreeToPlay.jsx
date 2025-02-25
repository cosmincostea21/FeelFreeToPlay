import Header from '../components/Header.jsx'
import Navegacion from '../components/Navegacion.jsx'
import Footer from '../components/Footer.jsx'
import FreeToPlayMain from '../components/FreeToPlayMain.jsx';

// Layout Free To Play
function FreeToPlay() {
    return (
        <div>
            <Navegacion />
            <Header />
            <FreeToPlayMain />
            <Footer />
        </div>

    );
}

export default FreeToPlay;