import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY

const getInfo = async(ciudad) =>{
    try {
        let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad || 'Tucuman'}&appid=${API_KEY}`)
        return clima.data
    } catch (error) {
        return error
    }
}

export default getInfo