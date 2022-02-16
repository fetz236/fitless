import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ViewCart() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: "absolute",
            marginTop: 775,
            zIndex: 999,
        }}>
            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                width: "100%",
            }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: 'center',
                    padding: 14,
                    borderRadius: 30,
                    width: 350,
                    position: "relative",
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 17,
                    }}> View Cart </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
