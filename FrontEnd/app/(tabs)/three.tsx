import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabThreeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tab Three</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.my_text}>Los dioses me han abandonado</Text>
            <Pressable style={styles.my_button}
                onPress={() => console.log('Botón presionado!')}
                ><Text style={styles.btext}>Presioname</Text>
            </Pressable>
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
    },
    my_button:{
        marginTop: 20,
        color: '#d21b1b',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },
    btext:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500'
    }
});