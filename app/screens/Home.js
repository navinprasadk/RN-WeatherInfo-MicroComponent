import React, { Component } from 'react';
import { Container } from '../components/Container';
import { DisplayNumber, DisplayText } from '../components/Text';
import fetchWeather from '../api/weather';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      weather: 'clear',
      city: '',
    };
  }

  componentDidMount() {
    this.geoLocation();
    // setInterval(() => {
    //   this.setState({ hideStatusBar: false });
    // }, 1000);
  }

  // Fetch the client's current location
  geoLocation() {
    navigator.geolocation.getCurrentPosition(
      position =>
        fetchWeather(position.coords.latitude, position.coords.longitude).then(res =>
          this.setState({
            temperature: res.temperature,
            weather: res.weather,
            city: res.city,
          })),
      error => console.log(error),
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }

  render() {
    return (
      <Container>
        <DisplayText text={this.state.city} icon />
        <DisplayNumber text={this.state.temperature} icon />
        <DisplayText text={this.state.weather} />
      </Container>
    );
  }
}
export default Home;
