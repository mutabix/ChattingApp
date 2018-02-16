import React from 'react';
import {View, Image} from 'react-native';


const Logo = ()=>(
    <View>
        <Image source={require('./images/logo.png')}/>
    </View>
);

export default Logo;