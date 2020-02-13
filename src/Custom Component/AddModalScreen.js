import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Video from "react-native-video";

export default class AddModalScreen extends Component {
    
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style = {{width:300,height:300,alignSelf:'center',backgroundColor:'transparent'}}>
                {this.props.isVideo? <Video resizeMode = "contain" style = {{position: 'absolute',top: 0,left: 0,bottom: 0,right: 0}} source={this.props.source}></Video> : <Image style = {{flex:1,height:300,width:300}} resizeMode = "contain" source = {this.props.source}></Image>}
            </View>
        )
    }
}
