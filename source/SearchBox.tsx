import React from 'react';
import {Text, Box} from 'ink';
import TextInput from 'ink-text-input';

interface SearchBoxProps {
  username: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export default function GitHubSearch({username, onChange, onSubmit}: SearchBoxProps) {
  return (
    <Box>
      <Box>
        <Text>Enter a GitHub username: </Text>
      </Box>
      <TextInput value={username} onChange={onChange} onSubmit={onSubmit} />
    </Box>
  );
}
