import { useState, useEffect } from "react";
import Map from "./Components/Map";
import Loader from "./Components/Loader";
import Header from "./Components/Header.js";

const key = process.env.REACT_APP_NASA_KEY;
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("Wildfires");
  const changed = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvent();
  }, []);
  return (
    <div>
      <Header value={type} changed={changed} />
      {!loading ? <Map eventData={eventData} type={type} /> : <Loader />}
    </div>
  );
}

export default App;
