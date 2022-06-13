import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements';
import { colors } from '../../../../../values/colors';

const CharacterItem = props => {
    const {item,index} = props;
  return (
    <View style={styles.parent}>
      <Image 
        style={styles.image}
        source={{uri : item.image}}
        resizeMode={'contain'}
        PlaceholderContent={
            <ActivityIndicator 
                size={'small'}
                color={colors.primary}
            />
        }
      />
      <View style={styles.view}>
          <Text style={styles.name}>{item.name}</Text>
          <Item 
              iconName={'human-female-female'}
              iconType={'material-community'}
              value={item.gender}
          />
          <Item 
              iconName={'earth'}
              iconType={'material-community'}
              value={item.species}
          />
          <Item 
              iconName={'origin'}
              iconType={'material-community'}
              value={item.origin.name}
          />
          <Item 
              iconName={'map-marker'}
              iconType={'material-community'}
              value={item.location.name}
          />
      </View>
    </View>
  )
}

export default CharacterItem

const styles = StyleSheet.create({
    parent : {
        flexDirection:'row',
        marginTop:16,
        marginHorizontal:16,
        shadowColor: "#000",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius:8,
        overflow:'hidden'
    },
    image : {
        height:120,
        width:120,
        
    },
    view : {
        flex:1,
        justifyContent: 'center',
        marginHorizontal:12
    },
    name : {
        fontSize:18,
        fontWeight:'800'
    },
    itemRow : {
        flexDirection:'row',
        alignItems:'center',
        marginTop:2
    },
    itemValue : {
        fontSize:12,
        color:'#888'
    }
})


const Item = props => {
    const {iconName,iconType,value} = props;
    
    return (
        <View style={styles.itemRow}>
            {/* <Icon 
                name={iconName}
                type={iconType}
            /> */}
            <Text style={styles.itemValue}>{value}</Text>
        </View>
    )
}