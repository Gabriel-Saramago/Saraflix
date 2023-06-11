import Footer from "../../componentes/Footer";
import { useEffect, useState } from "react";
import { getList } from "../../api/api";
import { MainConteiner, Part2, Part1, Grid} from "./Home.style";
import { Card } from "../../componentes/cards/card";

function Home(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        setTimeout(() => getList(setList), 2000);
    },[])
    return(
        <MainConteiner>
            <Part1 />
            <Part2>
                <h1>Filmes Populares</h1>
            </Part2>
            <Grid>
                {list.map((movie)=>(
                    <Card key={movie.id} movie={movie}/>
                ))}
            </Grid>
            
            <Footer title = {"Home"}/>
           
        </MainConteiner>
    )
}

export default Home;