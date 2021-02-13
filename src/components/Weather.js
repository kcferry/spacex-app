import weatherIcons from '../utilites/weatherIcons.json'

const Weather = ({ forcast }) => {

    if (forcast.main) {
        const prefix = 'wi wi-';
        const code = forcast.weather[0].id;
        let icon = weatherIcons[code].icon;

        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }
        const graphic = prefix + icon

        const prefixWindP1 = 'wi wi-wind '
        const prefixWindP2 = 'towards-'
        const degrees = forcast.wind.deg
        const prefixWindP3 = '-deg'

        const windGraphic = prefixWindP1 + prefixWindP2 + degrees + prefixWindP3

console.log(forcast)

        return (
            <div className='card'>
            <h3>Launch Complex Weather</h3> <br />
                <div className="weather-box">
                    <div className='weather-block'>
                        <i className={graphic}></i>
                        <p>{forcast.main.temp}&deg;</p>
                    </div>
                    <div className='weather-block'>
                        <i className={windGraphic}></i>
                        <p>{forcast.wind.speed}kmh</p>
                    </div>
                    <div>
                        <ul>
                            <li>Visibility: {forcast.visibility}</li>
                            <li>Pressure: {forcast.main.pressure} hPa</li>
                            <li>Humidity: {forcast.main.humidity} %</li>

                        </ul>
                    </div>

                </div>
            </div>
        )
    } else {
        return (null)
    }
}

export default Weather

