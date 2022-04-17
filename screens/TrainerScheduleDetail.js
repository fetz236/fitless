import React from 'react'
import { View, Text } from 'react-native'
import ViewCart from '../components/fitnessDetail/ViewCart'
import TrainerSchedule from '../components/trainers/TrainerSchedule'

export default function TrainerScheduleDetail({route, navigation}) {
    return (
        <View>
            <TrainerSchedule route={route}></TrainerSchedule>
            <ViewCart navigation={navigation} fitnessName = {route.params.name}/>
        </View>
    )
}
