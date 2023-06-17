import React from 'react';
import { Image } from 'react-native'
import { Container } from './styles'
import Logo from '../../assets/logo_PUCPAY_V.1.0.png'

function Icon() {
    return(
        <Container>
            <Image 
                source={Logo}
            />
        </Container>
    )
}

export default Icon;