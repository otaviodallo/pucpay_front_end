import React from 'react';
import { 
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    ButtonSubmitRegistro,
    TextButton } from './styles'
import Icon from '../../components/Icon';
import { useNavigation } from '@react-navigation/native';

function SignIn() {
        
        const navigation = useNavigation();
      
        const navigateToRegistro = () => {
          navigation.navigate('SignUp');
        }
    

    return(
        <KeyboardView>
            <Icon />
            <Container>  
                <Title>Login</Title>
                <Input 
                    placeholderTextColor='#fff'
                    placeholder="E-mail"
                />
                <Input 
                    placeholderTextColor='#fff'
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextButton>Entrar</TextButton>
                </ButtonSubmit>
                <ButtonSubmitRegistro title="registrar" onPress={navigateToRegistro}>
                    <TextButton>Não possuo login</TextButton>
                </ButtonSubmitRegistro>
            </Container>
        </KeyboardView>
    )
}

export default SignIn;