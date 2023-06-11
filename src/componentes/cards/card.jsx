import { useState } from "react";
import { MainConteiner } from "./card.style";
import { useDispatch } from "react-redux";
import { getMovieInfo } from "../../redux/saraflixSlice";
import { getDetail } from "../../api/api";
import { useEffect } from "react";

export const Card = ({movie}) => {
    const [movieDetail, setMovieDetail] = useState()
    const dispatch = useDispatch();

    dispatch(getMovieInfo())

    const onHoverDetail = (e) => {
        getDetail(e.target.id, setMovieDetail)
    }

    useEffect(()=>{
        dispatch(getMovieInfo(movieDetail))
    },[movieDetail])

    return(
        <MainConteiner to={"detail"} id={movie.id} onMouseEnter={onHoverDetail}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                id={movie.id}
            />
            <div className="infoContainer">
                <h4>TITULO:  {movie.title}</h4>
                <h4>NOTA:  {movie.vote_average}</h4>/
            </div>
        </MainConteiner>
    )
}