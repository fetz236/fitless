import React from 'react'
import { View, Text} from 'react-native'
import About from '../components/fitnessDetail/About'
import Home from './Home'
import { Divider } from 'react-native-elements'
import CourseItems from '../components/fitnessDetail/CourseItems'
import ViewCart from '../components/fitnessDetail/ViewCart'


 
export default function FitnessDetail({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <CourseItems></CourseItems>
            <ViewCart navigation={navigation} fitnessName = {route.params.name}/>
        </View>
    )
}
