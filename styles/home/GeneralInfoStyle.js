import { StyleSheet } from 'react-native'

export const general_info_css = StyleSheet.create({
    gi_container: {
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:'3%',
        marginLeft:'2%',
    },
    logo_container:{
        marginTop:'2%',
        marginLeft:'2%'
    },
    image_def:{
        width:35,
        height:35,
        resizeMode: "contain",
    },
    profile_container:{
        position:'absolute',
        right:'5%',
        marginTop:'6%',

    },
    logo_def:{
        width:65,
        height:65,
        left:'0.1%'
    }
});

