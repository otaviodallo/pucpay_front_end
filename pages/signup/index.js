import React from 'react';
import { 
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextButton } from './styles'
import Icon from '../../components/Icon';
import { useNavigation } from '@react-navigation/native';

function SignUp(){
    const navigation = useNavigation();
      
        const navigateToLogin = () => {
          navigation.navigate('Home');
        }
        
    return (
        <KeyboardView>
            <Icon />
            <Container>
                <Title>Faça seu registro</Title>
                <Input 
                    placeholder="Nome Completo"
                    placeholderTextColor='#fff'
                />
                <Input 
                    placeholder="E-mail"
                    placeholderTextColor='#fff'
                />
                <Input 
                    placeholder="Senha"
                    placeholderTextColor='#fff'
                />
                <Input 
                    placeholder="Confirme sua senha"
                    placeholderTextColor='#fff'
                />
                <ButtonSubmit title="login" onPress={navigateToLogin}>
                    <TextButton>Registrar</TextButton>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    )
}

export default SignUp;