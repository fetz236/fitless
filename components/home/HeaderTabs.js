import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function HeaderTabs({navigation}) {
    const [activeTab, setActiveTab] = useState("Gyms");
    return (
        <View style={{flexDirection: "row" , alignSelf: "center" }}>
            {/* */}
            <HeaderButton 
                text="Gyms" 
                btnColor= "black" 
                textColor ="white" 
                activeTab = {activeTab} 
                navigation = {navigation}
                setActiveTab = {setActiveTab}
                page = "Home"
            />
            <HeaderButton 
                text="Trainers" 
                btnColor= "white" 
                textColor ="black" 
                activeTab = {activeTab} 
                navigation = {navigation}
                setActiveTab = {setActiveTab}
                page = "TrainerHome"
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
        onPress={() => 
            {
                props.navigation.navigate(props.page);
                props.setActiveTab(props.text);

            }
        }
        >
            <Text style = {{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: '500'}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    
); 