import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    layout: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        marginBottom: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },

    pressable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderWidth: 1,
        backgroundColor: '#1F2937',
        borderColor: '#D1D5DB',
        borderRadius: 7,
    }
})

export default styles