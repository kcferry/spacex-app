import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const LaunchMap = ({latitude, longitude}) => {

    if(!latitude){
        return null
    }

    const position = [latitude, longitude]
    console.log(position)

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.mapbox.com/styles/v1/kylevf/ckkxmams465sg17p5vc3ru6f8/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3lsZXZmIiwiYSI6ImNra3huMnp4dTU0MXUycHF0c2tibTg2bTMifQ.ohtOCOW8NmIwfdHOAXaeqg"
            />
            <Marker position={position}>
                <Popup>
                    Starlink 17
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LaunchMap

