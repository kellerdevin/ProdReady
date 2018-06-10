import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity,View, Image, NavigatorIOS, Button} from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, ProdPage, BlockInfo, StackNav } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import api from './utilities/api.js'
import { createStackNavigator } from 'react-navigation';

const VButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            paddingBottom: 5,
          }}
          source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
        />
      </Text>
    </TouchableOpacity>
  );
};

class HomeScreen extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      type: '',
      price: '',
    }
  }


  componentDidMount(){
    api.nasaPics().then((res) => {
      this.setState({
        copyright: res.copyright,
        title: res.title,
        pic: res.url,
        explanation: res.explanation,
        date: res.date,
        media: res.media_type
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
          <Text style={[styles.header, styles.bold, styles.all]}>Wallet                             {'\n'}
                  <Text style={[styles.hash, styles.gray, styles.all]}>
              f709bb947a25511c56f15...
            <Text style={[styles.copy]}>
                COPY
            </Text>

            </Text>                      
          </Text>
          <Image
            style={styles.profile}
            source={{ uri: 'https://lovetobeinthekitchen.com/wp-content/uploads/2015/04/Emily-Circle-Profile-e1428003256512.png' }}
          />

        </View>
        
        <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
        

        <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
        <Text style={[styles.blue, styles.newProd, styles.all]}>NEW PRODUCT</Text>
        <Text style={[styles.prodTitle, styles.all]}>2016 Louis Vuitton Keepall</Text>
        <Text style={[styles.subTitle, styles.gray, styles.all]}>Classic Monogram</Text>
        <View>
          <Button
            title="View Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
              <Image
                source={{ url: this.state.pic }}
                style={{ width: 370, height: 200 }}
              />}
        </View>
        <View style={{ width: 500, height: 1, backgroundColor: 'gray', }} />
        <View>
          <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
          <Text style={[styles.recentAdd, styles.bold, styles.all]}>Recent Additions
          
           <Text style={[styles.seeAll, styles.blue,]}>                                        See All</Text>
            <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
          </Text>
        </View>
        <View style={{ flexDirection: "row", }}>
          <Image
            style={styles.rA}
            source={{ uri: 'https://www.laingsuk.com/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/0/3/0350020091_2.jpg' }}
          />
          <Text style={[styles.rat]}>
            {'\n'}Jaeger-LeCoultre Polaris {'\n'}
            <Text style={[styles.rast,]}>
              Chronograph, PINK GOLD          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
            source={{ uri: 'https://item5.tradesy.com/images/hermes-birkin-30cm-epsom-gold-hardware-off-white-summer-a-stamp-craie-leather-tote-21697794-0-1.jpg?width=720&height=960' }}
          />
          <Text style={[styles.rat]}>
            {'\n'} Hermes Birkin                    {'\n'}
            <Text style={[styles.rast,]}>
              30cm Craie Epsom Birkin          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
            source={{ uri: 'https://select-orlando.com/wp-content/uploads/2017/11/mWHITEBACKGROUND.jpg' }}
          />
          <Text style={[styles.rat]}>
            {'\n'}Louis Vuitton / Supreme {'\n'}
            <Text style={[styles.rast]}>
              Christopher Backpack PM        <Text style={[styles.views]}>   View    </Text>{'\n'}
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
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.header, styles.All]}>
          2016 Louis Vuitton Keepall
        </Text>
        <Text style={[styles.subtitle, styles.All]}>
          Classic Monogram           <Text style={[styles.transfer,]}> Transfer </Text>
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            paddingBottom: 5,
          }}
          source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
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
          Hash: 0x5e4bb521e0b6c18bd40674474f4b1527...
        </Text>
        <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
        <View style={{ width: 500, height: 2, backgroundColor: '#C9C9C9' }} />
        <Text style={[styles.BlockInfo, styles.All]}>
          History
        </Text>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Transfered to You
          <Text style={[styles.gray, styles.date]}>                               4/1/2018
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          From: 0x6bd2bd4fa7ec27ef0...
          <Text style={[styles.more,]}>                                       more
          </Text>
        </Text>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Transfered
          <Text style={[styles.gray, styles.date]}>                                          3/15/2017
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          From: 0xb35f68a5d0da29...
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          To: 0x6bd2bd4fa7ec27ef0...
         <Text style={[styles.more,]}>                                           more
         </Text>
          <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
        </Text>
        <Text style={[styles.TopText, styles.All, styles.greyText]}>
          Item Created
          <Text style={[styles.gray, styles.date]}>                                              4/26/2016
          </Text>
        </Text>
        <Text style={[styles.BottemText, styles.All, styles.greyText]}>
          Merchant: Louis Vuitton
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

  profile: {
    width: 70,
    height: 60,
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
    fontSize: 23,
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
    color: 'grey'
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