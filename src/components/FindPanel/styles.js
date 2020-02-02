import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#B6B4B4',
        overflow: 'hidden'
    },
    input: {
        flex: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        color: '#515151',

    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#B6B4B4',

    },
    button__text: {
        color: '#626262',

    }
});
