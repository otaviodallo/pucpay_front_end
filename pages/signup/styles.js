import styled from 'styled-components/native';


export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 15px;
`
export const Input = styled.TextInput`
    border: 2px solid #12E6C8;
    margin-bottom: 20px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`
export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #A287f4;
    border-radius: 9px;
    width: 90%;
    padding: 15px;
    align-items: center;
`
export const TextButton = styled.Text`
   color: #fff;
   font-size: 20px;
   font-weight: bold;
`