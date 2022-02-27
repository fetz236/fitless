import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import TrainerItems from '../components/trainers/TrainerItems'

export default function TrainerHome({route, navigation}) {
    return (
        <SafeAreaView style= {{ backgroundColor: "lightgray", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs
                    navigation = {navigation}
                />
                <SearchBar/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TrainerItems></TrainerItems>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs></BottomTabs>
        </SafeAreaView>
    )
}
