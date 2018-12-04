
import React from 'react';

api_call = 'https://api.openweathermap.org/data/2.5/weather?lat={this.lat}&lon={this.lon}&appid={API_KEY}'

class Weather extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
    }, console.log(this.lat, this.lon, 'sent'));
  }

  //
  // var request = new XMLHttpRequest();
  //   request.open('GET', '', true);
  //
  //   request.onload = function() {
  //   if (request.status >= 200 && request.status < 400) {
  //     // Success!
  //     var resp = request.responseText;
  //   } else {
  //     // We reached our target server, but it returned an error
  //
  //   }
  // };


  render(){
    return(
      <div>

      </div>
    )
  }
}

export default Weather
