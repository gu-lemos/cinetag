import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import videosTemporarios from 'json/db.json'
import Card from 'components/Card';
import Titulo from 'components/Titulo';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />

            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {videosTemporarios.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;