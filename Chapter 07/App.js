import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: {
        years: 0,
        month: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  getAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_df = new Date(diff_ms);

    this.setState({
      age: {
        years: age_df.getUTCFullYear() - 1970,
        month: age_df.getUTCMonth(),
        days: age_df.getUTCDate() - 1,
        hours: age_df.getUTCHours(),
        minutes: age_df.getUTCMinutes(),
        seconds: age_df.getUTCSeconds(),
      },
    });
  }

  componentDidMount() {
    this.tick = setInterval(() => {
      this.getAge(new Date("June 29, 1996 03:32 UTC+2"));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const { years, month, days, hours, minutes, seconds } = this.state.age;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>My real age is: </Text>
        <Text>{years} years</Text>
        <Text>{month} months </Text>
        <Text>{days} days </Text>
        <Text>{hours} hours</Text>
        <Text>{minutes} minutes </Text>
        <Text>{seconds} seconds </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
