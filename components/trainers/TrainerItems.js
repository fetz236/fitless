import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'

const trainer_details = [
    {
        name: "Trainer 1",
        description: "wys g i do karate and that",
        price: "69/hr",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
    {
        name: "Roadman Trainer",
        description: "Free Sheeeeshh Class",
        price: "15/hr",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
    {
        name: "Not Digga d",
        description: "Free Siuuu Class",
        price: "bare ps uno/hr",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
];


const style_sheet = StyleSheet.create({
    trainer_item_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginLeft:20,
    },
    trainer_title_style:{
        fontSize:19,
        fontWeight:'600',    },

})
export default function TrainerItems({navigation, ...props}) {
    const dispatch = useDispatch();
    
    const select_item = (item) => dispatch({
        type: 'ADD_TO_CART',
        payload: item,
    });

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {trainer_details.map((trainer, index) => (
            <TouchableOpacity activeOpacity={1} style={{
                }}
                
                onPress={() => navigation.navigate("ScheduleDetail", {
                    name: "fit.name",
                    image: "fit.image",
                    price: "fit.price",
                    reviews: "fit.reviews",
                    rating: "fit.rating",
                    categories: "fit.categories",
                }
            )}>
                <View style ={{marginBottom:10}}>
                    <View style={style_sheet.trainer_item_style}>
                         <TrainerImage trainer_details={trainer}/>
                        <TrainerInfo trainer_details={trainer}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginTop:5}}/>

                </View>
            </TouchableOpacity>
        ))}
        </ScrollView>
    )
}

const TrainerInfo = (props) => (
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={style_sheet.trainer_title_style}>{props.trainer_details.name}</Text>
        <Text>{props.trainer_details.description}</Text>
        <Text>${props.trainer_details.price}</Text>

    </View>
)

const TrainerImage = (props) => (
    <View>
        <Image source={props.trainer_details.image} style={{width:100, height:100, borderRadius:8, marginRight:20, marginBottom:5}}/>
    </View>
)