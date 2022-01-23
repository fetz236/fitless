import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const fitness = [
    {
        image : require('../../assets/images/store_images/dance_1.jpeg'),
        category: ["Dance"],
        name: "Dance 1",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    {
        image : require('../../assets/images/store_images/weights_1.jpeg'),
        category: ["Weights"],
        name: "Weights 1",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    {
        image : require('../../assets/images/store_images/ballet_1.jpeg'),
        category: ["Ballet", "Dance"],
        name: "Ballet 1",
        price: 7,
        reviews: 213,
        rating: 4.4,
    },
    {
        image : require('../../assets/images/store_images/yoga_1.jpeg'),
        category: ["Yoga"],
        name: "Yoga 1",
        price: 7,
        reviews: 213,
        rating: 4.3,
    },
    {
        image : require('../../assets/images/store_images/cycling_1.jpeg'),
        category: ["Cycling"],
        name: "Cycling 1",
        price: 7,
        reviews: 213,
        rating: 4.2,
    },
    {
        image : require('../../assets/images/store_images/karate_1.jpeg'),
        category: ["Karate"],
        name: "Karate 1",
        price: 7,
        reviews: 213,
        rating: 4.1,
    },
];

export default function FitnessItems(props) {
    console.log(props);
    return (
        <TouchableOpacity activeOpacity={1} style={{
            marginBottom:30
        }}>
            {fitness.map((fit, index) =>
            (
                <View key={index} style={{
                    marginTop:10,
                    padding:15,
                    backgroundColor: "white"
                }}>
                    <GymImage image={fit.image}/>
                    <GymInfo name={fit.name} rating={fit.rating}/>
                </View> 
            ))}
            
        </TouchableOpacity>

    )
}

const GymImage = (props) => (
    <View style={{

        marginTop:5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 15,
    }}>

            
            <View style={{alignItems:'center', marginRight:20}}>
            <>
            <Image source={props.image} 
            style={{
                width:500,
                height:200,
                resizeMode: "contain",
            }}/>
            <TouchableOpacity style={{position: "absolute", right: 20, marginTop:20}}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='white'></MaterialCommunityIcons>
            </TouchableOpacity>
            </>
        </View>  
    </View>
)

const GymInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 5,
        }}>
            <View>
                <Text style={{fontSize: 14, fontWeight:"600"}}>{props.name}</Text>
                <Text style={{fontSize: 12, fontWeight:"600", color: "gray"}}>headline 2</Text>
            </View>
        <View style={{
            fontSize: 12, 
            fontWeight:"600", 
            backgroundColor:"lightgray", 
            height:30, 
            width:30, 
            alignItems:"center",
            justifyContent: 'center',
            borderRadius: 15,}}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)