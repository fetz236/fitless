import React from 'react'
import { View, Text} from 'react-native'
import About from '../components/fitnessDetail/About'
import Home from './Home'
import { Divider } from 'react-native-elements'
import CourseItems from '../components/fitnessDetail/CourseItems'


 
export default function RestaurantDetail() {
    return (
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <CourseItems></CourseItems>
        </View>
    )
}
