import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import axios from 'axios';
import { Container } from '../components/Container';
// import { geoLocation } from '../lib/helpers';
import fetchWeather from '../api/weather';
import fetchCity from '../api/ReverseGeoLocation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideStatusBar: false,
      temperature: 0,
      weather: 'clear',
    };
  }

  componentDidMount() {
    this.geoLocation();
    // fetchCity();
    setInterval(() => {
      this.setState({ hideStatusBar: !this.state.hideStatusBar });
    }, 1000);
  }

  // Fetch the client's current location
  geoLocation() {
    navigator.geolocation.getCurrentPosition(
      position =>
        fetchWeather(position.coords.latitude, position.coords.longitude).then(res =>
          this.setState(
            {
              temperature: res.temperature,
              weather: res.weather,
            },
            (err) => {
              if (err) {
                console.log(err);
              } else {
                fetchCity(position.coords.latitude, position.coords.longitude);
              }
            },
          )),
      error => console.log(error),
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }

  handlePress = () => {
    console.log('handle press');
  };

  render() {
    return (
      <Container>
        <StatusBar hidden={this.state.hideStatusBar} translucent={false} barStyle="default" />
        <Text>Weather Report</Text>
        <Text>{this.state.temperature}</Text>
        <Text>{this.state.weather} </Text>
      </Container>
    );
  }
}
export default Home;
