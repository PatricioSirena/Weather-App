import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import lluvia_moderada from '../img/lluvia_moderada.jpg'
import lluvia_torrencial from '../img/lluvia_torrencial.jpg'
import nevando from '../img/nevando.jpg'
import nublado from '../img/nublado.jpg'
import parcialmente_nublado from '../img/parcialmente_nublado.jpg'
import soleado from '../img/soleado.jpg'
import neblina from '../img/neblina.jpg'
import tormenta_electrica from '../img/tormenta_electrica.jpg'


const CardInfo = ({ data }) => {

  const [imagen, setImagen] = useState()
  let gradosCent = (data.temperatura - 32) * 0.5556;
  let minGradosCent = (data.temp_min - 32) * 0.5556;
  let maxGradosCent = (data.temp_max - 32) * 0.5556;

  useEffect(() => {
    if (data.clima === 'overcast clouds') {
      return setImagen(nublado)
    } else if (data.clima === 'scattered clouds' || data.clima === 'broken clouds' || data.clima === 'few clouds') {
      return setImagen(parcialmente_nublado)
    } else if (data.clima === 'clear sky') {
      return setImagen(soleado)
    } else if (data.clima === 'moderate rain' || data.clima === 'light rain' || data.clima === 'light intensity shower rain') {
      return setImagen(lluvia_moderada)
    } else if (data.clima === 'light snow') {
      return setImagen(nevando)
    } else if (data.clima === 'mist') {
      return setImagen(neblina)
    } else if (data.clima === 'heavy intensity rain') {
      return setImagen(lluvia_torrencial)
    } else {
      return setImagen(tormenta_electrica)
    }

  }, [data.clima])

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cityContainer">
          <p className="city">{data.ciudad}</p>
          <p className="country">{data.pais}</p>
        </div>
        <div className="imgContainer">
          <img className='imagen_clima' src={imagen} alt="" />
        </div>
          <div className='humedad'>
            <p>Probabilidad de lluvia</p>
            <p>{data.humedad}%</p>
          </div>
        <div className="tempContainer">
          <p className="temp">{gradosCent.toFixed(1)}°</p>
        </div>
        <div className="minmaxContainer">
          <div className="min">
            <p className="minHeading">Min</p>
            <p className="minTemp">{minGradosCent.toFixed(1)}°</p>
          </div>
          <div className="max">
            <p className="maxHeading">Max</p>
            <p className="maxTemp">{maxGradosCent.toFixed(1)}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}

CardInfo.propTypes = {
  data: PropTypes.object
}

export default CardInfo
