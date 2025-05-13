import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/gu-lemos/cinetag-api/videos?id=${parametros.id}`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                setVideo(...dados);
            })
            .catch((erro) => {
                console.error(erro);
            });
    }, [parametros.id])

    if (!video) return <NaoEncontrada />

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    src={video.link}
                    title={video.titulo}
                >
                </iframe>
            </section>
        </>
    )
}

export default Player;