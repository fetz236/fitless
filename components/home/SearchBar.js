import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
    return (
        <View style={{ marginTop:15, flexDirection: "row"}}>
            <GooglePlacesAutocomplete 
            query = {{key: "AIzaSyCJsjXeNbxR8v3FzL64dusYJ8QGoxxMV_Q"}}
            onPress={(data, details=null) =>{
                const city = data.description.split(",")[0]
            }}
            placeholder ="Search" 
            styles={{
                textInput:{
                    backgroundColor: "lightgray",
                    borderRadius:20,
                    fontWeight: "700",
                    marginTop: 7,
                }, 
                textInputContainer:{
                    backgroundColor: "lightgray",
                    borderRadius:50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                },              
            }}

            renderLeftButton = {() => (
                <View style={{marginLeft: 10}}>
                    <Icon name="location-outline" size= {24}></Icon>
                </View>
            )}

            renderRightButton = {() => (
                <View style={{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"
                    }}
                >
                    <Icon name="time-outline" size={14}></Icon>
                    <Text> Search </Text>
                </View>
            )}
            />
        </View>
    )
}
