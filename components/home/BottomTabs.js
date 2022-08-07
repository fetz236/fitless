import React from 'react'
import { View, Text,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BottomTabs() {
    return (
            <View style={{
            flexDirection:'row',
            justifyContent: 'space-around',
            marginTop:10,
            marginLeft:10,
        }}>
            {items.map((item,index) =>(
                <TouchableOpacity>
                    <View key={index} style={{alignItems:'center', marginRight:20}}>
                    <Image source={item.image} 
                    style={{
                        width:25,
                        height:25,
                        resizeMode: "contain",
                    }}/>
                    <Text style={{fontSize: 8, fontWeight:"400", marginTop: 5}}>{item.text}</Text>
                    </View>
                </TouchableOpacity>

                ))}
            </View>
        
    )
}

const items = [
    {
        image : require('../../assets/icons/bottom_icons/home_icon.jpg'),
        text: "Home"
    },
    {
        image : require('../../assets/icons/bottom_icons/search_icon.jpg'),
        text: "Search"
    },
    {
        image : require('../../assets/icons/bottom_icons/upcoming_icon.jpg'),
        text: "Upcoming"
    },
    {
        image : require('../../assets/icons/bottom_icons/account_icon.jpg'),
        text: "Account"
    },
];