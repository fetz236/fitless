import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
    {
        image : require('../../assets/images/category_images/dance-clip-art-images.png'),
        text: "Dance"
    },
    {
        image : require('../../assets/images/category_images/weights-clip-art-images.jpeg'),
        text: "Weights"
    },
    {
        image : require('../../assets/images/category_images/ballet-clip-art-images.png'),
        text: "Ballet"
    },
    {
        image : require('../../assets/images/category_images/yoga-clip-art-images.jpeg'),
        text: "Yoga"
    },
    {
        image : require('../../assets/images/category_images/cycling-clip-art-images.jpeg'),
        text: "Cycling"
    },
    {
        image : require('../../assets/images/category_images/karate-clip-art-images.png'),
        text: "Karate"
    },
];

export default function Categories() {
    return (
        <View style={{
            marginTop:5,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingLeft: 15,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item,index) =>(
                    <View key={index} style={{alignItems:'center', marginRight:20}}>
                    <Image source={item.image} 
                    style={{
                        width:50,
                        height:40,
                        resizeMode: "contain",
                    }}/>
                    <Text style={{fontSize: 14, fontWeight:"600"}}>{item.text}</Text>
                </View>  
                ))}           
            </ScrollView>
        </View>
    )
}
