/*import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 0,
        step: 3,
    };
    increment(){
        this.setState({ count: this.state.count + this.state.step});
    }
    decrement(){
        this.setState({ count: this.state.count - this.state.step});
    }
    alterarStep(texto){
        this.setState({step: parseInt(texto) || 0})
    }
    render(){
        return (
        <View style={styles.contador}>
            <TextInput 
                value={this.state.step.toString()}
                onChange={(e) => this.alterarStep(e.nativeEvent.text)}
                keyboardType="numeric"/>
            <Text>Contador: {this.state.count} </Text>
            <Button onPress={() => this.increment()} title="+"/>
            <Button onPress={() => this.decrement()} title="-"/>
        </View>
        )
    }
}*/

import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Counter extends Component {

  state = {
    contador: 0
  }

  incrementar = () => {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1 })
    }
  }
  decrementar = () => {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador - 1 })
    }
  }

  render() {
    return (
      <View>
        <Text>Contador</Text>
        <Text>{this.state.contador}</Text>
        <Button title="Incrementar" onPress={this.incrementar} />
        <Button title="Decrementar" onPress={this.decrementar} />
      </View>
    )
  }
}


/*const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        }
    }*/
    