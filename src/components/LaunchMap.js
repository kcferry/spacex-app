import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const LaunchMap = ({latitude, longitude}) => {

    if(!latitude){
        return null
    }

    const position = [latitude, longitude]
    console.log(position)

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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

