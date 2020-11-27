const Pop = ({ feature }) => {
  let popupContent;
  if (feature.properties && feature.properties.popupContent) {
    popupContent = feature.properties.popupContent;
  }
  popupContent = (
    <div>
      <p>
        Coordinates : [{feature.coordinates[0]}, {feature.coordinates[1]}]
      </p>
      <p>Date: {feature.date}</p>
    </div>
  );

  return <div>{popupContent}</div>;
};

export default Pop;
