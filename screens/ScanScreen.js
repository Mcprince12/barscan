import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as Permissions from 'expo-permissions';


export default class ScanScreen extends React.Component{
   constructor(){
       super();
       this.state={
           hasCameraPermissions:null,
           scanned:false,
           scannedData:'',
           buttonState:'normal'
       }
   }

   getCameraPermission = async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
        hasCameraPermissions:status==="granted"
    })
}

handleBarCodeScanned = async({type, data})=>{
    this.setState({scanned:true, scannedData:data, buttonState:'normal'})
}

render(){
    return(
        <View>
            <Image
          style={styles.img}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
          }}
        />

            <Text style = {styles.button2ext}>
                Bar Code Scanner
            </Text>
            <Text style = {styles.button3ext}>
                Request camera Permission
            </Text>
            <TouchableOpacity onPress={this.getCameraPermission}
            style={styles.scanButton}
            >
                <Text style={styles.buttonText}>Scan QR code</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    scanButton:{
        backgroundColor:'blue', padding:10, margin:10
    },
    buttonText:{
        fontSize:20
    },
    button2ext:{
      fontSize:30,
      textAlign:'center',  
    },
    button3ext:{
        fontSize:25,
        textAlign:'center'
    },
    img:{
        alignSelf:'center',
        width:200,
        height:200
    }
})