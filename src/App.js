import { useState, useEffect } from "react";
import Map from "./Components/Map";
import Loader from "./Components/Loader";

const key = process.env.REACT_APP_NASA_KEY;
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
}

export default App;
