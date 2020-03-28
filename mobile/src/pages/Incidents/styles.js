import {StyleSheet}from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        
    },
    headerTextBold:{
        fontWeight:"bold",
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:"bold"
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color: '#737380'
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom: 16,
    },
    incidentPropert:{
        fontSize:14,
        color:'#41414d',
        fontWeight: "bold",
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:"#737380"
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center"
    },
    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:"bold"
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom: 16,
    },
    heroTItle:{
        fontWeight:"bold",
        fontSize:15,
        color:"#737380",
        marginTop:16,
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16,
    },
    actions:{
        marginTop:16,
        flexDirection:"row",
        justifyContent: "space-between",

    },  
    action:{
        backgroundColor:"#E02041",
        borderRadius:8,
        height:50,
        width:"48%",
        justifyContent:'center',
        alignItems:'center',
    },
    actionText:{
        color:"#FFF",
        fontSize:15,
        fontWeight:"bold"
    }






});