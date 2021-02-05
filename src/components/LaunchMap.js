import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const LaunchMap = () => {

    const position = [28.5618571, -80.577366]

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LaunchMap

