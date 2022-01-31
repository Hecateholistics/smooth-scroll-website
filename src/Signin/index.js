import React from 'react';
import { Container, Form, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon } from './SigninElements';

const SignIn = () => {
    return <>
        <Container>
            <FromWrap>
                <Icon> Dolla</Icon>
                <FormContent>
                    <Form>
                        <FormH1> Signin in  to  your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Fassword</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>ForgotPasword</Text>
                    </Form>
                </FormContent>
            </FromWrap>
        </Container>
    </>;
};

export default SignIn;


