import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LaunchMap = ({ latitude, longitude, launchName }) => {
  if (!latitude) {
    return null;
  }

  if (latitude) {
    setTimeout(function () {}, 3000);
  }

  const position = [latitude, longitude];

  const url = `https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_NAME}/${process.env.REACT_APP_MAPBOX_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />
      <Marker position={position}>
        <Popup>{launchName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LaunchMap;
