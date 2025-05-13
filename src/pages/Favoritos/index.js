import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();	

    return (
        <>
            <Banner imagem='favoritos' />

            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {favorito.map((item) => {
                    return <Card {...item} key={item.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;