import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    profileContainer: {
        padding: 20,
        alignItems: 'center'
    },
    titleText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    botaoCamera: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 150,
        padding: 10,
        borderRadius: 15,
        marginVertical: 15
    },
    botaoText: {
        color: 'white',
        fontSize: 24
    },
    container: {
        flex: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        flex: 1,
        width: '70%',
    },
    test: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    buttonContainer: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    botaoFoto: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    }
})