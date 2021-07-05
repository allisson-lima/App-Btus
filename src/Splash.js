import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#111133'
                }}
            >
                <LottieView style={{flex:1, height: '100%',}}
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.6}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Home');
                    }}
                />
            </View>
        )
    }
}