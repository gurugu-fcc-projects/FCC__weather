import React from "react";

const WeatherUnitsButton = ({ temperatureUnits, changeTempUnits }) => {
  const handleChangeTempUnits = event => {
    event.preventDefault();
    changeTempUnits();
  };

  return (
    <div
      className={"toggle-temp-unit " + temperatureUnits}
      onClick={event => handleChangeTempUnits(event)}
    >
      <div className="cel">Celcius</div>
      <div className="fah">Fahrenheit</div>
    </div>
  );
};

WeatherUnitsButton.propTypes = {
  changeTempUnits: React.PropTypes.func.isRequired,
  temperatureUnits: React.PropTypes.string.isRequired
};

export default WeatherUnitsButton;
