import React from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, WebView } from 'react-native';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';

export class URExampleDetailView extends React.Component {  
    static navigationOptions = ({navigation}) => ({
        title: `Title : ${navigation.state.params.data.title}`,
    })

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        const { params } = this.props.navigation.state
        console.log('URExampleDetailView')
        console.log(this.props.navigation.state.params)
        console.log(params)
        return (
        <View style={styles.container}>
            <Text>여기는 디테일</Text>
            <Image style={styles.image} source={params.data.img} blurRadius={1} />
            <Text style={styles.text}>여기는 밑</Text>
            <WebView 
            style={styles.web}
            source={{uri: 'https://m.zigbang.com/app/map/reactmap.html?37.485851784894855,130.90828949055285'}}
            scrollEnabled={false}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1
    },
    web: {
        flex: 1
    }
})