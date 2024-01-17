// import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import getInfo from './helpers/getInfo'
import CardInfo from './components/cardInfo';
import './App.css'

function App() {

  const [city, setCity] = useState()
  const [data, setData] = useState({
    pais: '',
    ciudad: '',
    temperatura: '',
    temp_min: '',
    temp_max: '',
    humedad: '',
    clima: ''
  })

  useEffect(() => {
    getInfo(city)
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          setData((prevState) => ({
            ...prevState,
            pais: data.sys.country,
            ciudad: data.name,
            temperatura: (data.main.temp - 220),
            temp_min: (data.main.temp_min - 220),
            temp_max: (data.main.temp_max - 220),
            humedad: data.main.humidity,
            clima: data.weather[0].description
          }));
        }
        else if (data.response.status === 404) {
          return alert(`${city} no es una ciudad`)
        }
      });
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    let ciudad = e.target[0].value
    setCity(ciudad)
    e.target.reset()
  }

  return (
    <>
      <div className="d-flex justify-content-center text-center">
        <h1>Weather App</h1>
      </div>
      <div className="d-flex justify-content-center text-center mb-4 mt-3">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input className="input" type="text" required="" placeholder="Search City" id="search" />
            <div className="fancy-bg"></div>
            <button className="search" type='submit'>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </button>
            <button className="close-btn" type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </label>
        </form>
      </div>
      <CardInfo data={data} />
    </>
  )
}

export default App
