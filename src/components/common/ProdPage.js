import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Linking } from 'react-native';


export default class LotsOfStyles extends Component {
  render() {
    return (
      
      <View>
        <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
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
          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              paddingBottom: 5,
            }}
            source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
          />
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
  }
}

const styles = StyleSheet.create({
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
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },

  profile: {
    width: 70,
    height: 60,
  }


});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
