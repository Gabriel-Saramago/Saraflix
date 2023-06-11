import axios from "axios"

export const getList = (setState) =>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c8ba651c5ec59e3c322d296d2f081496&language=pt-BR&page=1")
    .then((response)=>{
        console.log(response.data.results)
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetail = (id, setState)=> {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c8ba651c5ec59e3c322d296d2f081496&language=pt-BR&page=1`)
    .then((response)=>{
        console.log(response.data)
        setState(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}