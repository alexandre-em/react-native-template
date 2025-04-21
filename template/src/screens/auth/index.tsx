import { View } from 'react-native';

import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  InputField,
  Link,
  LinkText,
  VStack,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react-native';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import schema, { SignInFormData } from './schema';
import styles from './style';
import Explore from '../../assets/images/svg/explore';
import { BodyL, HeaderH1, ParagraphP1 } from '../../components/typography';
import Input from '../../components/ui/input';
import Spacer from '../../components/ui/spacer';

export default function AuthScreen() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
  });

  const handleSignIn = useCallback((data: SignInFormData) => {
    console.log(data);
  }, []);

  return (
    <VStack style={styles.container}>
      <Box>
        <HeaderH1>Log in</HeaderH1>
        <ParagraphP1>Login to start using Achievo</ParagraphP1>
      </Box>
      <Center>
        <Explore width={250} height={200} />
      </Center>
      <Box>
        <FormControl isInvalid={!!errors.email?.message}>
          <FormControlLabel>
            <BodyL>Email</BodyL>
          </FormControlLabel>
          <Spacer y={2} />
          <Input>
            <InputField placeholder="Enter email" onChangeText={value => setValue('email', value)} />
          </Input>
          <FormControlError>
            {errors.email?.message && (
              <>
                <FormControlErrorIcon as={AlertCircle} />
                <FormControlErrorText>{errors.email?.message}</FormControlErrorText>
              </>
            )}
          </FormControlError>
        </FormControl>
        <Spacer y={10} />
        <FormControl isInvalid={!!errors.password?.message}>
          <FormControlLabel>
            <BodyL>Password</BodyL>
          </FormControlLabel>
          <Spacer y={2} />
          <Input>
            <InputField
              type="password"
              placeholder="Enter password"
              onChangeText={value => setValue('email', value)}
              returnKeyType="done"
            />
          </Input>
          <FormControlError>
            {errors.password?.message && (
              <>
                <FormControlErrorIcon as={AlertCircle} />
                <FormControlErrorText>{errors.password?.message}</FormControlErrorText>
              </>
            )}
          </FormControlError>
        </FormControl>
        <Spacer y={5} />
        <Link>
          <LinkText style={styles.link}>Forgot Password?</LinkText>
        </Link>
        <Spacer y={25} />
        <Button>
          <ButtonText disabled={!isValid}>Sign In</ButtonText>
        </Button>
      </Box>
    </VStack>
  );
}
