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
            <Text style={[styles.hash, styles.gray, styles.all]}>
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
  },
  gray: {
    color: 'dimgray',
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  blue: {
    color: 'blue',
  },
  newProd: {
    fontSize: 10,
  },
  prodTitle: {
    fontSize: 23
  },
  subtitle: {
    fontSize: 24,
    color: '#8E8B93',
  },
  recentAdd: {
    fontSize: 18,
    paddingLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  rA: {
    width: 90,
    height: 90,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 16,
  },
  rast: {
    fontSize: 14,
    color: 'dimgrey',
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    fontSize: 16,
  },
});


export default ProdPageHead;