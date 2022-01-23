import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import FitnessItems,{
    fitness,
} from '../components/home/FitnessItems'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'


export default function Home() {
    const [city, setCity] = useState("London");
    const [fitness_data, set_fitness_data]= React.useState(fitness)

    const google_fitness_data = () => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCJsjXeNbxR8v3FzL64dusYJ8QGoxxMV_Q',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }      

    return (
        <SafeAreaView style= {{ backgroundColor: "lightgray", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />  
                <FitnessItems fitness_data={fitness_data}/>
            </ScrollView>
        </SafeAreaView>

    )
}