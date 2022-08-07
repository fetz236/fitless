import React from 'react'
import { View, Text, Image } from 'react-native'

export const ViewTrainer = (props) => {

    const trainers = [
        {
            name: props.route.params.name,
            description: props.route.params.description,
            price: props.route.params.price,
            image: props.route.params.image,
        },
    ]
    return (
        <View>
            {trainers.map((trainer,index) => 
            (
                <View>
                    <Text>{trainer.name}</Text>
                    <TrainerImage image={trainer.image}></TrainerImage>
                </View>
            ))}

        </View>
    )
}

const TrainerImage = (props) => (
    <Image source={props.image}></Image>
);
export default ViewTrainer; 