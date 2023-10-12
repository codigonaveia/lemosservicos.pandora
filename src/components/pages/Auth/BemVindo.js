import { Container } from "react-bootstrap"
import Titulo from "../../Titulo/Titulo"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './bemvindo.css'
import NavigatorHorizontal from '../../Navegatos/NavegatorHorizontar'
const BemVindo = ()=>{
    return(
        <>
        <NavigatorHorizontal />
        <Container>
        <Titulo estilo="titulo" titulo="Ola, seja bem vindo!!" icon={faUserCircle} />
        </Container>
        </>
    )
}

export default BemVindo