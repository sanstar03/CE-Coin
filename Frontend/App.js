import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { Header } from "react-native-elements";
import { render } from "react-dom";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      date:[]
    }
  }
  componentDidMount(){
    this.apiCall();
  }
  async apiCall(){
    let resp = await fetch('http://localhost:8000/api/hello')
    console.log(resp.message)

  }
    render(){
    const handlePress = () => console.log("on Pressed")
    return (
      <View>
        <Header
          centerComponent={{
            text: "Task",
            style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
          }}
          rightComponent={{
            text: "CE COIN",
            style: { color: "#fff", fontSize: 15, fontWeight: "bold" },
          }}
          containerStyle={{
            backgroundColor: "#333333",
            justifyContent: "space-around",
          }}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={handlePress}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              buttonStyle={{
                backgroundColor: "#FF6F07",
                borderRadius: 6,
                height: 52,
                width: 380,
              }}
              title="Class Check-in"
            />
          </View>
          <View style={{ marginTop: 20 }}>
          <Button
              onPress={this.apiCall}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              buttonStyle={{
                backgroundColor: "#FF4D15",
                borderRadius: 6,
                height: 52,
                width: 380,
              }}
              title="Get Coin By Code"
            />
          </View>
        </View>
      </View>
    )
        }
      }
export default App ;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#ccc",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});