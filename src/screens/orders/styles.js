import React from 'react';
import {
    StyleSheet,
  } from 'react-native';
import { PRIMARY } from '../../styles/colors';
const styles = StyleSheet.create({
    //tab styles start
    tabContainer: {
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      paddingVertical:10,
      paddingHorizontal:5
    },
    tab: {
      padding:8,
      borderRadius:10,
      backgroundColor:"#b6bab6",
      elevation:10,
      shadowColor:PRIMARY,
      flexDirection:"row",
      justifyContent:"space-between",
      width:"32%",
      alignItems:"center",
    },
    tabActive: {
      padding:10,
      borderRadius:10,
      backgroundColor:PRIMARY,
      elevation:10,
      shadowColor:PRIMARY,
      flexDirection:"row",
      justifyContent:"space-between",
      width:"32%",
      alignItems:"center",
    },
    tabLabelActive: {
      fontSize:14,
      color:"#FFF"
    },
    tabLabel: {
      fontSize:14,
    },
    tabLabel: {
      fontSize:14,
      color:"#FFF"
    },
    tabIcon: {
      backgroundColor: '#FFF',
      borderRadius:30,
      padding:5,
      justifyContent:"center",
      alignItems:"center",
    },
    tabIconText: {
        fontSize:14,
    },
    tabIconTextActive: {
        fontSize:14,
        color:PRIMARY
    },
    searchBox: {
        height:60,
        backgroundColor:"#e3e4e6",
        margin:10,
        borderRadius:5,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        padding:20
    },
    inputStyle: {
        fontSize:14,
        height:40,
        width:"80%",
        color:"white"
    },
    searchIcon: {
        width:20,
        height:20,
        tintColor:PRIMARY
    },
    card: {
        backgroundColor:"#fff",
        margin:10,
        // padding:10,
        borderRadius:10,
        elevation:10,
        marginVertical:20,
        shadowColor:PRIMARY
    },
    cardHeader: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
    cardHeaderLeft: {
        backgroundColor:"#f7d4c3",
        borderWidth:1,
        borderRadius:20,
        borderColor:PRIMARY,
        padding:5,
        paddingHorizontal:15,
        justifyContent:"center",
        alignItems:"center",
    },
    cardHeaderLeftText: {
        color:PRIMARY
    },
    cardHeaderRightText: {
        fontWeight:"bold",
        fontSize:16
    },
    cardSubHeader: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
    cardSubHeaderLeft: {
        
    },
    cardSubHeaderLeftText: {
        fontWeight:"bold",
        fontSize:18,
        color:"#000"
    },
    cardSubHeaderRight: {
        backgroundColor:"#d9f7c3",
        padding:2,
        paddingHorizontal:25,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#5fcf65"
    },
    cardSubHeaderRightText: {
        fontWeight:"bold",
        fontSize:14
    },
    toolBar: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#cccdcf"
    },
    toolBarLabel: {
        fontWeight:"bold",
        fontSize:14,
        color:"blue"
    },
    icon: {
        width:20,
        height:20,
        resizeMode:"contain",
        tintColor:PRIMARY
    },
    ctaBtn: {
        backgroundColor:"red",
        paddingHorizontal:25,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
    },
    ctaBtnText: {
        fontWeight:"bold",
        fontSize:14,
        color:"#FFF"
    },
    progressView: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
    },
    infoView: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#cccdcf"
    },
    infoViewLeft: {
        width:"65%"
    },
    infoTitle: {
        fontWeight:"bold",
        fontSize:16,
        color:"#000"
    },
    infoSubTitle: {
        marginTop:10,
        fontSize:14,
        // width:"60%"
    },
    infoViewRight: {
        width:"35%",
        alignItems:"flex-end"
    },
    infoViewRightTitle: {
        fontSize:12,
        color:PRIMARY,
        marginBottom:5
    },
    totalView: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#cccdcf"
    },
    totalViewTitle: {
        fontSize:14,
        color:"#000",
    },
    totalViewPrice: {
        fontSize:14,
        color:"#000",
        fontWeight:"bold",
    },
    acoTabView: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    acoTabViewCol: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#b6bab6",
        flex:1,
        padding:10
    },
    acoTabViewColText: {
        fontSize:14,
        color:"blue",
        fontWeight:"bold",
    },
    caretUp: {
        width:20,
        height:20,
        tintColor:"blue"
    },
    acoTabViewColActive: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"red",
        flex:1,
        padding:10
    },
    acoTabViewColActiveText: {
        fontSize:14,
        color:"#fff",
        fontWeight:"bold",
    },
    caretDown: {
        width:20,
        height:20,
        tintColor:"#fff"
    },
    acoTabDetailView: {
        padding:10,
    },
    acoTabDetailRow: {
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    acoTabDetailCol: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    vegIcon: {
        width:25,
        height:25,
        tintColor:"green",
        marginRight:10
    },
    nonVegIcon: {
        width:25,
        height:25,
        tintColor:"red",
        marginRight:10
    },
    menuTitle: {
        fontSize:14,
        color:"#000",
        fontWeight:"500",
    },
    menuPrice: {
        fontSize:14,
        color:"#000",
        fontWeight:"900",
    },
    paidView: {
        fontSize:14,
        color:"#000",
        fontWeight:"900",
        borderWidth:1,
        padding:10,
        paddingHorizontal:25,
        borderColor:"green",
    },
    footerView: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
    },
    printer: {
        width:25,
        height:25,
        tintColor:PRIMARY,
        marginRight:10
    },
    footerText: {
        fontSize:14,
        color:"blue",
        fontWeight:"600",
        textDecorationLine:"underline"
    },
  });

export default styles;