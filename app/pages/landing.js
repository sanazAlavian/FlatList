import React, {Component} from 'react';
import {Dimensions, fetch, Image, StatusBar,Text, View,ScrollView,FlatList, TouchableOpacity,Linking} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import FastImage from "react-native-fast-image";
import {API} from '../api/api.js';

let {height, width} = Dimensions.get('window');
if (width > height) {
    let t = width;
    width = height;
    height = t;
}
export default class Landing extends Component {
    constructor(props) {
        super(props);
        // the list state should be alter by categoryStore.fruitsList which give list by fruitsList api
        this.state = {
            list: [
            {
                "name" : "Apple",
                "image" :require('../../assets/Diamond.png'),
                "price" : 35,
                "weight": 0.1,

            },
        {
                "name" : "Banana",
            "image" :require('../../assets/Diamond.png'),
                "price" : 12
            },
            {
                "name" : "Grapes",
                "image" :require('../../assets/Diamond.png'),
                "weight": 0.1,
                "price" : 45
            },
            {
                "name" : "Pineapple",
                "image" :require('../../assets/Diamond.png'),
                "price" : 200,
                "weight": 0.1,

            },
                {
                    "name" : "Apple",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 35,
                    "weight": 0.1,

                },
                {
                    "name" : "Banana",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 12,
                    "weight": 0.1,

                },
                {
                    "name" : "Grapes",
                    "image" :require('../../assets/Diamond.png'),
                    "weight": 0.1,
                    "price" : 45
                },
                {
                    "name" : "Pineapple",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 200
                },
                {
                    "name" : "Apple",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 35
                },
                {
                    "name" : "Banana",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 12
                },
                {
                    "name" : "Grapes",
                    "image" :require('../../assets/Diamond.png'),
                    "weight": 0.1,
                    "price" : 45
                },
                {
                    "name" : "Pineapple",
                    "image" :require('../../assets/Diamond.png'),
                    "price" : 200
                },

        ],
        };
    }

    async componentDidMount() {
        this.callingApis();

    }

    async callingApis() {
        const api = new API();
        this.fruitsList();
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    renderContent(item){
        console.log("step2");
        return(
            <View style={
                {
                    flexDirection:'row',
                    alignItems:'center',
                    width:width/1.3,
                    height:width/8,
                    backgroundColor:'white',
                    marginBottom:width/15,
                    borderRadius:width/50

                }}>
                <FastImage
                    style={{
                        width: width /8,
                        height: width/8,
                        marginRight:width/50,
                        marginLeft:width/60,

                    }}
                    resizeMode={'cover'}
                    source={item.image}
                />
                <Text style={{
                    // justifyContent: "center",
                    width: width / 5,
                    fontWeight: 'bold',
                    color: '#424143',
                    fontSize: width / 25,

                }}>

                    {item.name}
                </Text>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft:width/4,
                    width:width/8,
                    height:width/8
                }}>
                    {item.weight?
                    <Text style={{
                        justifyContent: "center",
                        textAlign:'center',
                        width: width /5,
                        color: '#424143',
                        fontSize: width / 28,
                    }}>
                        {item.weight + " kgr"}
                    </Text>
                        :null}
                    {item.price?
                        <Text style={{
                            justifyContent: "center",
                            textAlign:'center',
                            width: width /5,
                            color: '#424143',
                            fontSize: width / 28,
                        }}>
                            {item.price + " $"}
                        </Text>
                        :null}
                </View>
            </View>
        );
    }
    touchableButton(list, index) {
        console.log("step1");
        console.log("kist:" +JSON.stringify(list));
        return (
            <View>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) =>
                       this.renderContent(item)
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }

    render() {
        return (
            <View
                style={
                    {
                        flex: 1,
                        backgroundColor: '#424143',
                        alignItems: 'center'
                    }}
            >
                <KeepAwake/>
                <StatusBar hidden={true}/>
                <ScrollView
                    style={{
                        marginTop: width/56,
                    }}
                    contentContainerStyle={{
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {this.state.list.length ? this.touchableButton() : null}
                </ScrollView>
            </View>
        );
    }

}
