import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#B6B4B4',
        borderRadius: 5,
        marginVertical: 10,
        overflow: "hidden"
    },
    top: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    wrap_text: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#FFF'
    },
    text: {
        marginBottom: 7
    },
    link: {
        textDecorationLine: 'underline'
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 25,
    }
});