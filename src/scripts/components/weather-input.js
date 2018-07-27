import React from "react";

const WeatherInput = ({ cityName, getWeather, changeCity }) => {
  const handleSubmit = event => () => {
    event.preventDefault();
    getWeather(cityName);
  };

  const handleChangeCity = event => () => {
    changeCity(event.target.value);
  };

  return (
    <form
      id="input"
      role="form"
      name="search-form"
      onSubmit={handleSubmit(event)}
    >
      <div>
        <input
          id="input-field"
          type="text"
          placeholder="Enter city here"
          value={cityName}
          onChange={handleChangeCity(event)}
        />
        <button id="input-button" type="submit">
          <i className="fa fa-search fa-flip-horizontal" />
        </button>
      </div>
    </form>
  );
};

WeatherInput.propTypes = {
  getWeather: React.PropTypes.func.isRequired,
  changeCity: React.PropTypes.func.isRequired,
  cityName: React.PropTypes.string.isRequired
};

export default WeatherInput;
