import React, { useEffect } from "react";
import { Text, View,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({ notification }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText1}>{notification.name}</Text>
      <Text style={styles.headerText2}>Inventory list physical devices Systems request item nam</Text>
    </View>
  );
};

const NotificationsReusableScreen = ({ route }) => {
  const navigation = useNavigation();
  const { notification } = route.params;
  useEffect(() => {
    // Update the header title with the name from the API data
   navigation.setOptions({
      headerLeft: () => (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{uri: 'https://i.ibb.co/Pzh0rYt/backarrow.png'}} style={styles.backButtonIcon} />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => <CustomHeader notification={notification} />,
      headerStyle: styles.headerStyle,
    });
  }, []);

return (
    <View style={styles.container}>
    <View style={{display:'flex',justifyContent:"space-between",marginTop:41}}>
    <View>
         <ImageBackground
        source={{ uri: 'https://i.ibb.co/NLQ0rGv/BG.png' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
          <Image
            source={{ uri: 'https://i.ibb.co/HxFCWR3/outline.png' }}
            style={styles.image}
          />
      </ImageBackground>
      </View>
    <View style={{marginHorizontal:17,marginTop:49,width: 341,}}>
    <Text 
    style={styles.topTextStyle}>Your scheduled report {notification.name} has been {notification.title}
</Text>
       </View>
       </View>
      <View style={styles.absoluteContainer}>
      <View style={styles.hortzontalLine}/>
      <Text style={{marginBottom:6,textAlign:'center'}}>Note:</Text>
        <Text style={styles.textStyle}>To View the risk item, please login into Central Comamnd from a desktop browser</Text>
        <View style={styles.hortzontalLine}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    marginBottom:15,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  headerText2: {
    fontSize: 12,
    color: 'black',
  },
  backButtonIcon: {
    width: 24,
    height: 24,
    // Add any additional styles for the back button icon
  },
  headerStyle: {
    // Add your custom header styles here
  },
  container: {
    flex: 1,
    justifyContent:"space-between",
  },
  backgroundImage: {
    left: 102,
    width: 172,
    height: 172,
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    width: 105,
    height: 105,
  },
  topTextStyle:{
    color: '#252733',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.15
  },
  absoluteContainer: {
    marginBottom: 60,
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize:12,
    lineHeight:16,
    letterSpacing:0.5,
    textAlign:"center",
    marginBottom:16
  },
  hortzontalLine:{
    width: 335,
    borderWidth: 2,
    borderColor:'#E5E5E5',
    marginBottom:16,
  }
});

export default NotificationsReusableScreen




// const CustomHeader = ({ notification }) => {
//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerText1}>{notification.name}</Text>
//       <Text style={styles.headerText2}>Inventory list physical devices</Text>
//       <Text style={styles.headerText2}>Systems request item name</Text>
//     </View>
//   );
// };

// const NotificationsReusableScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { notification } = route.params;

//   useEffect(() => {
//     // Update the header title with the name from the API data
//     navigation.setOptions({
//       header: () => <CustomHeader notification={notification} />,
//     });
//   }, []);
