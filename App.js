import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, NavigatorIOS, Button} from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, } from './src/components/common';
import BlockInfo from './src/components/common/BlockInfo'
import ProdPageHead from './src/components/common/ProdPageHead'
import RecentAdditions from './src/components/common/RecentAdditions';
import LoginForm from './src/components/LoginForm';
import api from './src/components/api'
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      prodTitle: '',
      subTitle: '',
      prodimg: '',
    }
  }

  componentDidMount(){
    api.twoApi().then((res) => {
      this.setState({
        prodTitle: res.prodTitle,
        subTitle: res.subTitle,
        prodimg: res.prodimg,
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAm8W1O7eCai0zaqaSLkheGElyLwajJ3JY",
      authDomain: "auth-87f79.firebaseapp.com",
      databaseURL: "https://auth-87f79.firebaseio.com",
      projectId: "auth-87f79",
      storageBucket: "auth-87f79.appspot.com",
      messagingSenderId: "701060929041"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ backgroundColor: 'white' }}>
            <ProdPageHead />
            <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
            <Text style={[styles.all, styles.newProd, ]}>NEW PRODUCT</Text>
            <Text style={[styles.prodTitle, styles.all]}>{this.state.prodTitle}</Text>
            <Text style={[styles.subTitle, styles.gray, styles.all]}>{this.state.subTitle}</Text>
         <View>
          <Button
            title="View Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              paddingBottom: 5,
            }}
                source={{ url: this.state.prodimg }}
          />
        </View>
        <View style={{ width: 500, height: 1, backgroundColor: 'gray', }} />
          <RecentAdditions />

      </View>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="" />
        {this.renderContent()}
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
        <BlockInfo />
    );
  }
}


const styles = StyleSheet.create({
  all: {
    marginLeft: 20,
  },
  newProd: {
    fontSize: 10,
    color: 'blue'
  },
  prodTitle: {
    fontSize: 23
  },
  subTitle: {
    fontSize: 20,
    color: '#8E8B93',
  },
  gray: {
    color: 'dimgray',
  },

});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}