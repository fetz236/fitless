import React from 'react'
import { View, Text, Image } from 'react-native'



export default function About(props) {
    const fitness = [
        {
            image : props.route.params.image,
            category: ["Dance"],
            name: props.route.params.name,
            description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
            price: 7,
            reviews: 213,
            rating: 4.5,
        },
    ];
    
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