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

        return (
            <div>
                <div className="weather-box">
                    <div className='weather-icons-block'>
                        <div className='weather-icons-box'>
                            <div className='weather-block'>
                                <i className={graphic}></i>
                                <p className='weather-icon-data'>{forcast.main.temp}&deg;</p>
                            </div>
                            <div className='weather-block'>
                                <i className={windGraphic}></i>
                                <p className='weather-icon-data'>{forcast.wind.speed}kmh</p>
                            </div>
                        </div>
                        <p className='weather-description'>{forcast.weather[0].description}</p>
                    </div>

                    <div>
                        <table>
                            <tr>
                                <td><span className='title'>Cloud Coverage:</span></td>
                                <td>{forcast.clouds.all} %</td>
                            </tr>
                            <tr>
                                <td><span className='title'>Humidity:</span></td>
                                <td>{forcast.main.humidity} %</td>
                            </tr>
                            <tr>
                                <td><span className='title'>Pressure:</span></td>
                                <td>{forcast.main.pressure} hPa</td>
                            </tr>
                            <tr>
                                <td><span className='title'>Visibility:</span></td>
                                <td>{Math.round((forcast.visibility / 1000) * 10) / 10} km</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        )
    } else {
        return (null)
    }
}

export default Weather

