import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from './CabecalhoLink';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt='Logo do cinetag' />
            </Link>

            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;