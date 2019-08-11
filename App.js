import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      x : "",
      y : "",
      z : "",
      ans : "0"
      }
  }
  acPress(index)
  {
    if(index == "1")
    {
      this.setState({x : this.state.x + "1"});
      this.setState({ans : this.state.x + "1"});
    }
    else if(index == "2")
    {
      this.setState({x : this.state.x + "2"});
      this.setState({ans : this.state.x + "2"});
    }
    else if(index == "3")
    {
      this.setState({x : this.state.x + "3"});
      this.setState({ans : this.state.x + "3"});
    }
    else if(index == "4")
    {
      this.setState({x : this.state.x + "4"});
      this.setState({ans : this.state.x + "4"});
    }
    else if(index == "5")
    {
      this.setState({x : this.state.x + "5"});
      this.setState({ans : this.state.x + "5"});
    }
    else if(index == "6")
    {
      this.setState({x : this.state.x + "6"});
      this.setState({ans : this.state.x + "6"});
    }
    else if(index == "7")
    {
      this.setState({x : this.state.x + "7"});
      this.setState({ans : this.state.x + "7"});
    }
    else if(index == "8")
    {
      this.setState({x : this.state.x + "8"});
      this.setState({ans : this.state.x + "8"});
    }
    else if(index == "9")
    {
      this.setState({x : this.state.x + "9"});
      this.setState({ans : this.state.x + "9"});
    }
    else if(index == "=")
    {
      if(this.state.z == "+")
      {
        this.setState({x : Number(this.state.y) + Number(this.state.x)});
        this.setState({ans : Number(this.state.y) + Number(this.state.x)});
      }
      else if(this.state.z == "-")
      {
        this.setState({x : Number(this.state.y) - Number(this.state.x)});
        this.setState({ans : Number(this.state.y) - Number(this.state.x)});
      }
      else if(this.state.z == "X")
      {
        this.setState({x : Number(this.state.y) * Number(this.state.x)});
        this.setState({ans : Number(this.state.y) * Number(this.state.x)});
      }
      else if(this.state.z == "/")
      {
        this.setState({x : Number(this.state.y) / Number(this.state.x)});
        this.setState({ans : Number(this.state.y) / Number(this.state.x)});
      }
    }
    else if(index == "AC")
    {
      this.setState({x : ""});
      this.setState({ans : 0});
    }
    else
    {
      this.setState({y : this.state.x});
      this.setState({x : ""});
      this.setState({z : index});
    }
  }
  render() {
    return (
      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}} >
              <Text style={{ color: 'white' ,fontSize: 75, textAlign : 'right'}}>{this.state.ans} </Text>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn1} onPress = {()=>this.acPress("AC")}>
              <Text style={{ color: 'black' ,fontSize: 30}}>AC</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn1} onPress = {()=>this.acPress("+/-")}>
              <Text style={{ color: 'black' ,fontSize: 30}}>+/-</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn1} onPress = {()=>this.acPress("%")}>
              <Text style={{ color: 'black' ,fontSize: 30}}>%</Text>
              </TouchableOpacity>
              </View>
             <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn2} onPress = {()=>this.acPress("/")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>/</Text>
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("7")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>7</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("8")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>8</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("9")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>9</Text>
              </TouchableOpacity>
              </View>
             <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn2} onPress = {()=>this.acPress("X")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>x</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("4")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>4</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("5")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>5</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("6")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>6</Text>
              </TouchableOpacity>
              </View>
             <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn2} onPress = {()=>this.acPress("-")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>-</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("1")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>1</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("2")}>
              <Text style={{ color: 'white' ,fontSize: 30 }}>2</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("3")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>3</Text>
              </TouchableOpacity>
              </View>
             <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn2} onPress = {()=>this.acPress("+")}>
              <Text style={{color: 'white' ,fontSize: 30}}>+</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 2}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress("0")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>0</Text>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn3} onPress = {()=>this.acPress(".")}>
              <Text style={{ color: 'white' ,fontSize: 30}}>.</Text>
              </TouchableOpacity>
              </View>
             <View style={{flex: 1}} >
              <TouchableOpacity style={styles.btn2} onPress = {()=>this.acPress("=")}>
              <Text style={{color: 'white' ,fontSize: 30}}>=</Text>
              </TouchableOpacity>
              </View>
          </View>



        
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn3:{
      alignItems: 'center',
      height:60,
      backgroundColor: '#6C6C6C',
      padding: 8,
      margin:9,
      borderRadius: 100
  },
  btn2:{
      alignItems: 'center',
      height:60,
      backgroundColor: '#FC8823',
      padding: 8,
      margin:9,
      borderRadius: 100
  },
  btn1:{
      alignItems: 'center',
      height:60,
      backgroundColor: '#FFFFFF',
      padding: 8,
      margin:9,
      borderRadius: 100
  }
})

