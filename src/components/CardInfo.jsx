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
  
  useEffect(() => {
    if (data.clima === 'overcast clouds') {
      return setImagen(nublado)
    } else if(data.clima === 'scattered clouds' || data.clima === 'broken clouds' || data.clima === 'few clouds'){
      return setImagen(parcialmente_nublado)
    } else if(data.clima === 'clear sky'){
      return setImagen(soleado)
    }else if(data.clima === 'moderate rain'){
      return setImagen(lluvia_moderada)
    }else if(data.clima === 'light snow'){
      return setImagen(nevando)
    }else if(data.clima === 'mist'){
      return setImagen(neblina)
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
        <div className="tempContainer">
          <p className="temp">{data.temperatura}°</p>
        </div>
        <div className="minmaxContainer">
          <div className="min">
            <p className="minHeading">Min</p>
            <p className="minTemp">{data.temp_min}°</p>
          </div>
          <div className="max">
            <p className="maxHeading">Max</p>
            <p className="maxTemp">{data.temp_max}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}

CardInfo.propTypes ={
  data: PropTypes.object
}

export default CardInfo

{/* <Card className="card_comp onent bg-dark text-white mt-3">
    <Card.Img className='card_image' src={clima} alt="Card image" />
    <Card.ImgOverlay className='card_body'>
      <Card.Title className='card_city'>{data.ciudad}</Card.Title>
      <Card.Title className='card_country'>{data.pais}</Card.Title>
    </Card.ImgOverlay>
      <Card.Text className='card_footer'>
        <p>{data.temperatura}</p>
        <p>{data.temp_max}</p>
        <p>{data.temp_min}</p>
        <p>{data.humedad}</p>
      </Card.Text>
  </Card> */}
