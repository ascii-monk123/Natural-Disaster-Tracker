import React from "react";

const Header = ({ type, changed }) => {
  return (
    <div className="header">
      <h1>Disaster Tracker [Powered by NASA]</h1>
      <select value={type} onChange={changed}>
        <option name="Wildfires">Wildfires</option>
        <option name="Severe Storms">Severe Storms</option>
        <option name="Volcanoes">Volcanoes</option>
        <option name="Sea and Lake Ice">Sea and Lake Ice</option>
      </select>
    </div>
  );
};

export default Header;
