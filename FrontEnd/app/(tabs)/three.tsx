import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabThreeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tab Three</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.my_text}>Los dioses me han abandonado</Text>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 25,
        fontWeight: '500',
        color: '#791a1a'
    },
    separator:{
        marginVertical: 30,
        height: 1,
        width:'80%'
    },
    my_text:{
        fontSize: 20,
        fontWeight: '500',
        color: '#125f08'
    }
});