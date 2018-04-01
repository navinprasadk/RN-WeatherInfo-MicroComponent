# RN-WeatherInfo-MicroComponent

This micro component will automatically get the uer's location and return the weather details like **Temperature** and **Weather summary** and its corresponding **area**


### Response
- [x] Temperature in Celsius

- [x] Weather Summary

- [x] Location


### Docs
* It's based on [React-native](https://facebook.github.io/react-native/)

* To fetch the user's location, I have used [Geolocation API](https://facebook.github.io/react-native/docs/geolocation.html) in React-Native

* To fetch Weather reports, I have used [Open Weather Map API](http://openweathermap.org/api)

#### Open Weather Map API
To use this API, you must register with them and get the API key. And then put your **API_KEY** in *app/config/key.js*

#### Code
Main source resides in **app** folder of the root directory

#### For Android
To request access to location, you need to add the following line to your app's AndroidManifest.xml (android/app/src/main/AndroidManifest.xml):
```<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />```

#### Constraints
* Kindly check the [Open Weather API](http://openweathermap.org/price) documentation for API usage limits
* If you denied the permission for location accessing, it won't work. So kindly enable it 
