import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "ed1d03d83986af8d64630bead0e0f624";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
