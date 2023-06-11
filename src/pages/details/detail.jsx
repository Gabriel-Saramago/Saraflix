import Footer from "../../componentes/Footer";
import { Link } from "react-router-dom";
import { MainConteiner } from "./detailStyle";
import { Header } from "../../header/header";
import { RightSide } from "./detailStyle";
import { Grid } from "./detailStyle";
import { useSelector } from "react-redux";

function Detail(){
    const state = useSelector((state) => state.saraflix.movie)
    return(
        <MainConteiner>
            <Header/>
            <Grid>
                <img src="{`https://image.tmdb.org/t/pw500${movie.poster_path}`}" alt="{state.title}" />
                <RightSide>
                    <p>Titulo: {state.title}</p>
                    <p>Sinopse: {state.overview}</p>
                    <p>Data de Lançamento: {state.release_date}</p>
                    <p>Nota: {state.vote_average}</p>
                    <Link to={"/"}>Voltar para a Home</Link>
                </RightSide>
            </Grid>
          <Footer title = {"Detail"}/>
        </MainConteiner>
    )
}

export default Detail;