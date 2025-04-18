import { Box, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base';
import React from 'react';

import { TitleH1 } from '../../components/typography';

export default function AuthScreen() {
  return (
    <Box alignItems="center">
      <TitleH1>Test</TitleH1>
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
