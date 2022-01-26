import React from 'react'
import { View, Text, Image } from 'react-native'

const fitness = [
    {
        image : require('../../assets/images/store_images/dance_1.jpeg'),
        category: ["Dance"],
        name: "Dance 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    /*
    {
        image : require('../../assets/images/store_images/weights_1.jpeg'),
        category: ["Weights"],
        name: "Weights 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    {
        image : require('../../assets/images/store_images/ballet_1.jpeg'),
        category: ["Ballet", "Dance"],
        name: "Ballet 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.4,
    },
    {
        image : require('../../assets/images/store_images/yoga_1.jpeg'),
        category: ["Yoga"],
        name: "Yoga 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.3,
    },
    {
        image : require('../../assets/images/store_images/cycling_1.jpeg'),
        category: ["Cycling"],
        name: "Cycling 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.2,
    },
    {
        image : require('../../assets/images/store_images/karate_1.jpeg'),
        category: ["Karate"],
        name: "Karate 1",
        description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
        price: 7,
        reviews: 213,
        rating: 4.1,
    },
    */
];


export default function About() {
    return (
        <View>
            {fitness.map((fit, index) =>
            (
                <View key={index} style={{
                    marginTop:10,
                    padding:15,
                    backgroundColor: "white"
                }}>
                    <FitnessImage image={fit.image}/>
                    <FitnessTitle name={fit.name}></FitnessTitle>
                    <FitnessDescription description={fit.description}></FitnessDescription>
                </View> 
            ))}
        </View>
    )
}

const FitnessImage = (props) =>(
    <Image source={props.image} style={{
        width:"100%",
        height:180
    }}/>
)

const FitnessTitle = (props)=>(
    <Text style={{
        fontSize:29,
        fontWeight:"600",
        marginTop: 10,
        marginHorizontal:15,
    }}>{props.name}</Text> 
)

const FitnessDescription = (props) => (
    <Text style ={{
        fontSize:15.5,
        fontWeight:"400",
        marginTop:10,
        marginHorizontal: 15,

    }}>{props.description}
    </Text>
)