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
        textAlign: 'center',
        marginVertical: 10
    },
    form: {
        alignItems: 'center'
    },
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputLabel: {
        width: 70,
        fontSize: 20
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    imageContainer: {
        borderWidth: 1, 
        width: 175, 
        height: 175, 
        borderRadius: 200, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: 25
    },
    imagePic: {
        width: 175, 
        height: 175,
        marginVertical: 15,
        borderRadius: 200,
        borderWidth: 1
    },
    loggedInfo: {
        alignItems: 'center'
    },
    infoLabel: {
        fontSize: 20
    },
    botaoCamera: {
        backgroundColor: '#211F20',
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        flex: 1,
        width: '100%',
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