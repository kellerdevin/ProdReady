import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';
import api from '../api'

class ProdPageHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockinfo: '',
      avatar: '',
    }
  }

  componentDidMount() {
    api.twoApi().then((res) => {
      this.setState({
        blockinfo: res.blockinfo,
        avatar: res.avatar,
      })
    })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.header, styles.all,]}>Wallet                             {'\n'}
            <Text style={[styles.hash, styles.all]}>
              {this.state.blockinfo}
              <Text style={[styles.copy]}>
                COPY
              </Text>
              <Text>                              </Text>
            </Text>
          </Text>
          <Image
            style={{ width: 64, height: 64, borderRadius: 32 }}
            source={{ url: this.state.avatar }}
          />
        </View>
        <View style={{ width: 500, height: 1, backgroundColor: 'gray' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  hash: {
    fontSize: 10,
    color: 'gray'
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
});

export default ProdPageHead;