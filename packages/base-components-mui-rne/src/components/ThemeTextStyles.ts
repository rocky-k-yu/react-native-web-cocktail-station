import {StyleSheet} from 'react-native';

const ThemeTextStyles = StyleSheet.create({
    h1 :{
        fontSize:50,
        fontWeight:"400",
    },
    h2 :{
        fontSize:25,
        fontWeight:"200",
    },
    errorMessage: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 10
    },
    warningMessage: {
        backgroundColor: 'yellow',
        fontSize: 10
    },
    paragraph:{
        fontFamily:'courier',
    },
})

export default ThemeTextStyles
