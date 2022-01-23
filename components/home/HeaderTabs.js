import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Gyms")
    return (
        <View style={{flexDirection: "row" , alignSelf: "center" }}>
            {/* */}
            <HeaderButton 
                text="Gyms" 
                btnColor= "black" 
                textColor ="white" 
                activeTab = {activeTab} 
                setActiveTab = {setActiveTab}
            />
            <HeaderButton 
                text="Trainers" 
                btnColor= "white" 
                textColor ="black" 
                activeTab = {activeTab} 
                setActiveTab = {setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={{ 
            backgroundColor: props.activeTab === props.text ? "black" : "white", 
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style = {{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: '500'}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    
); 