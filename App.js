import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity,View, Image, NavigatorIOS, Button} from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, ProdPage, BlockInfo, StackNav } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import api from './utilities/api.js'
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      blockinfo: '',
      avatar: '',

      prodTitle: '',
      subTitle: '',
      prodimg: '',

      RAP1T: '',
      RAP1ST: '',
      RAP1img: '',

      RAP2T: '',
      RAP2ST: '',
      RAP2img: '',

      RAP3T: '',
      RAP3ST: '',
      RAP3img: '',
      
    }
  }


  componentDidMount(){
    api.twoApi().then((res) => {
      this.setState({
        blockinfo: res.blockinfo,
        avatar: res.avatar,
        prodTitle: res.prodTitle,
        subTitle: res.subTitle,
        prodimg: res.prodimg,

        RAP1T: res.RAP1T,
        RAP1ST: res.RAP1ST,
        RAP1img: res.RAP1img,

        RAP2T: res.RAP2T,
        RAP2ST: res.RAP2ST,
        RAP2img: res.RAP2img,

        RAP3T: res.RAP3T,
        RAP3ST: res.RAP3ST,
        RAP3img: res.RAP3img,

        Hash: res.Hash

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
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.header, styles.bold, styles.all,]}>Wallet                             {'\n'}
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
            source={{url: this.state.avatar }}
          />

        </View>
        
        <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
        

        <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
        <Text style={[styles.blue, styles.newProd, styles.all]}>NEW PRODUCT</Text>
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
        <View>
          <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
          <Text style={[styles.recentAdd, styles.bold, styles.all]}>Recent Additions
          <Text style={[styles.seeAll, styles.blue,]}>                          See All</Text>
            <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
          </Text>
        </View>
        <View style={{ flexDirection: "row", }}>
          <Image
            style={styles.rA}
                source={{ url: this.state.RAP1img }}
          />
          <Text style={[styles.rat]}>
                {'\n'} {this.state.RAP1T} {'\n'} <Text style={[styles.rast,]}> 
                   {this.state.RAP1ST}          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
                source={{ url: this.state.RAP2img }}
          />
          <Text style={[styles.rat]}>
                {'\n'} {this.state.RAP2T}                    {'\n'}
            <Text style={[styles.rast,]}>
                  {this.state.RAP2ST}          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
                source={{ url: this.state.RAP3img }}
          />
          <Text style={[styles.rat]}>
                {'\n'}{this.state.RAP3T} {'\n'}
            <Text style={[styles.rast]}>
                  {this.state.RAP3ST}        <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>

        </View>

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
  constructor(props) {
    super(props);
    this.state = {
      blockinfo: '',
      avatar: '',

      prodTitle: '',
      subTitle: '',
      prodimg: '',

      RAP1T: '',
      RAP1ST: '',
      RAP1img: '',

      RAP2T: '',
      RAP2ST: '',
      RAP2img: '',

      RAP3T: '',
      RAP3ST: '',
      RAP3img: '',

      Hash: '',
      toYou: '',
      FromTrans: '',
      To: '',

      DateToYou: '',
      DateTrans: '',
      DateCreated: '',

      Merchant: '',

    }
  }


  componentDidMount() {
    api.twoApi().then((res) => {
      this.setState({
        blockinfo: res.blockinfo,
        avatar: res.avatar,
        prodTitle: res.prodTitle,
        subTitle: res.subTitle,
        prodimg: res.prodimg,

        RAP1T: res.RAP1T,
        RAP1ST: res.RAP1ST,
        RAP1img: res.RAP1img,

        RAP2T: res.RAP2T,
        RAP2ST: res.RAP2ST,
        RAP2img: res.RAP2img,

        RAP3T: res.RAP3T,
        RAP3ST: res.RAP3ST,
        RAP3img: res.RAP3img,

        Hash: res.Hash,
        toYou: res.toYou,
        FromTrans: res.FromTrans,
        To: res.To,
        
        DateToYou: res.DateToYou,
        DateTrans: res.DateTrans,
        DateCreated: res.DateCreated,

        Merchant: res.Merchant,

      })
    })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.header, styles.All]}>
          {this.state.prodTitle}
        </Text>
        <Text style={[styles.subtitle, styles.All]}>
          {this.state.subTitle}           <Text style={[styles.transfer,]}> Transfer </Text>
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            paddingBottom: 5,
          }}
          source={{ url: this.state.prodimg }}
        />
        <Text style={[styles.BlockInfo, styles.All]}>
          Block Info
        </Text >
        <Text style={[styles.Hash, styles.All]}>
          ETH Pop Link
          <Text style={[styles.Blue,]}>  view
          </Text>
        </Text>
        <Text style={[styles.All, styles.Hash]}>
          Hash: {this.state.Hash}
        </Text>
        <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
        <View style={{ width: 500, height: 2, backgroundColor: '#C9C9C9' }} />
        <Text style={[styles.BlockInfo, styles.All]}>
          History
        </Text>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Transfered to You
          <Text style={[styles.gray, styles.date]}>                               {this.state.DateToYou}
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          From: {this.state.FromTrans}
          <Text style={[styles.more,]}>                                       more
          </Text>
        </Text>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Transfered
          <Text style={[styles.gray, styles.date]}>                                          {this.state.DateTrans}
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          From: {this.state.FromTrans}
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          To: {this.state.To}
         <Text style={[styles.more,]}>                                           more
         </Text>
          <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        </Text>
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Created
          <Text style={[styles.gray, styles.date]}>                                              {this.state.DateCreated}
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          Merchant: {this.state.Merchant}
          <Text style={[styles.more,]}>                                                   more
          </Text>
        </Text>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 12,
    fontWeight: '600',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  },
  all: {
    marginLeft: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 10,
  },
  gray: {
    color: 'dimgray',
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
  subTitle: {
    fontSize: 18,
  },
  recentAdd: {
    fontSize: 18,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  rA: {
    width: 90,
    height: 80,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 16,
  },
  rast: {
    fontSize: 14,
    color: 'dimgrey',
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    textAlign: 'right',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    backgroundColor: 'whitesmoke',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  all: {
    marginLeft: 20,
  },
  header: {
    fontSize: 32,
  },
  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 10,
  },
  gray: {
    color: 'dimgray',
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
  subTitle: {
    fontSize: 18,
  },
  recentAdd: {
    fontSize: 22,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 15,
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
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
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
  profile: {
    width: 70,
    height: 60,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: '#8E8B93',
  },
  transfer: {
    color: '#4F66EE',
    fontSize: 18,
    backgroundColor: 'whitesmoke',
  },
  more: {
    color: '#4467DA',
    fontSize: 12,
  },
  Blue: {
    color: '#4467DA'
  },
  BlockInfo: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  Hash: {
    fontSize: 12,
    fontFamily: 'Apple SD Gothic Neo',
    color: 'black'
  },
  TopText: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#E9E4F1',
  },
  BottemText: {
    fontSize: 12,
    backgroundColor: '#E9E4F1',
    shadowColor: 'black',

  },
  All: {
    marginLeft: 20
  },
  greyText: {
    backgroundColor: '#E9E4F1',

  },
  date: {
    color: '#8C8794',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15
  }


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