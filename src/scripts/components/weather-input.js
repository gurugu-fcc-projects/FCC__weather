import React from "react";

const WeatherInput = props => {
  const handleSubmit = event => () => {
    event.preventDefault();
    props.getWeather(props.cityName);
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
          value={props.cityName}
          onChange={event => props.changeCity(event.target.value)}
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
