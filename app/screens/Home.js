import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from '../components/Container';
import fetchWeather from '../api/weather';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideStatusBar: false,
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
    console.log(this.state);
    return (
      <Container>
        <StatusBar hidden={this.state.hideStatusBar} translucent={false} barStyle="default" />
        <Text>Weather Report</Text>
        <Text>{this.state.temperature}</Text>
        <Text>{this.state.weather} </Text>
        <Text>{this.state.city} </Text>
      </Container>
    );
  }
}
export default Home;
