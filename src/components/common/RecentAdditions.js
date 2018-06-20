import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';
import api from '../api'

class RecentAdditions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    componentDidMount() {
        api.twoApi().then((res) => {
            this.setState({
                RAP1T: res.RAP1T,
                RAP1ST: res.RAP1ST,
                RAP1img: res.RAP1img,
                RAP2T: res.RAP2T,
                RAP2ST: res.RAP2ST,
                RAP2img: res.RAP2img,
                RAP3T: res.RAP3T,
                RAP3ST: res.RAP3ST,
                RAP3img: res.RAP3img,
            })
        })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        return (
            <View>
                <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
                <Text style={[styles.all, styles.recentAdd ]}>Recent Additions
                    <Text style={[styles.seeAll, ]}>                          See All</Text>
                    <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
                </Text>
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
        )
    }
}

const styles = StyleSheet.create({
    all: {
        marginLeft: 20,
    },
    recentAdd: {
        fontSize: 22,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    seeAll: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'blue'
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
})

export default RecentAdditions;