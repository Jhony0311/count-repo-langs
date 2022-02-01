import React from 'react';
import {Text, Box, Newline} from 'ink';

function Intro() {
  return (
    <Box marginBottom={4} padding={2} borderStyle="double" borderColor="#06b6d4" alignItems="center" justifyContent="center" width="50%">
      <Text>
        <Text bold>Interview assignment</Text>
        <Newline />
        <Text>
          Made by{' '}
          <Text bold color="#60a5fa">
            Jonathan Ortega
          </Text>
        </Text>
      </Text>
    </Box>
  );
}

export default Intro;
