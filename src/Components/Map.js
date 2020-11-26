import { marker } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fireIcon } from "../icons";
import uniqid from "uniqid";
const Map = ({ eventData, centre, zoom }) => {
  const locations = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      console.log(ev);
      return (
        <Marker
          position={[
            ev.geometries[0].coordinates[1],
            ev.geometries[0].coordinates[0],
          ]}
          icon={fireIcon}
          key={uniqid()}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      );
    }
    return null;
  });
  return (
    <MapContainer center={centre} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations}
    </MapContainer>
  );
};
Map.defaultProps = {
  centre: [32.732998, 74.864273],
  zoom: 6,
};
export default Map;
