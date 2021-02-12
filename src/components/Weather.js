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


        const windGraphic = prefixWindP1 + prefixWindP2 + degrees + prefixWindP2
        console.log(windGraphic)
        console.log(graphic)

        return (
            <div className='card'>
                <h3>Launch Complex Weather</h3> <br />
                <div>
                    <i className={graphic}></i>
                    <p>{forcast.main.temp}&deg;</p>
                </div>
                <div>
                    <i className={windGraphic}></i>
                    <p>{forcast.wind.speed}kmh</p>
                </div>

            </div>
        )
    } else {
        return (null)
    }
}

export default Weather

