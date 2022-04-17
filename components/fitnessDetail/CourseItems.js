import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'

const course_details = [
    {
        name: "Gym Class",
        description: "Free Trainer Class",
        price: "19.20",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
    {
        name: "Sheeeeshh Class",
        description: "Free Sheeeeshh Class",
        price: "12.20",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
    {
        name: "Siuuu Class",
        description: "Free Siuuu Class",
        price: "12.20",
        image : require('../../assets/images/store_images/karate_1.jpeg'),
    },
];


const style_sheet = StyleSheet.create({
    course_item_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginLeft:20,
    },
    course_title_style:{
        fontSize:19,
        fontWeight:'600',    },

})
export default function CourseItems({navigation, ...props}) {
    const dispatch = useDispatch();
    
    const select_item = (item) => dispatch({
        type: 'ADD_TO_CART',
        payload: item,
    });

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {course_details.map((course, index) => (
            <TouchableOpacity activeOpacity={1} style={{
                }}
                key={index}
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
                    <View style={style_sheet.course_item_style}>
                        <CourseInfo course_details={course}/>
                        <CourseImage course_details={course}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginTop:5}}/>

                </View>
            </TouchableOpacity>
        ))}
        </ScrollView>
    )
}

const CourseInfo = (props) => (
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={style_sheet.course_title_style}>{props.course_details.name}</Text>
        <Text>{props.course_details.description}</Text>
        <Text>${props.course_details.price}</Text>

    </View>
)

const CourseImage = (props) => (
    <View>
        <Image source={props.course_details.image} style={{width:100, height:100, borderRadius:8, marginRight:20, marginBottom:5}}/>
    </View>
)