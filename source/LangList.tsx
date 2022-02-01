import React from 'react';
import {Text, Box} from 'ink';

import InfoItem from './InfoItem';

import {type Languages} from './types';

interface LangListProps {
  username: string;
  langs?: Languages;
}

function LangList({username, langs}: LangListProps) {
  return (
    <Box marginY={2} flexDirection="column">
      <Box width="100%">
        <Text>
          Languages used by <Text color="#10b981">{username}</Text> on public repos
        </Text>
      </Box>
      <Box width="100%" marginY={1} flexDirection="column">
        {langs ? (
          Object.entries(langs).map(([lang, count]) => <InfoItem label={lang}>{`${count}`}</InfoItem>)
        ) : (
          <Text>No languages found</Text>
        )}
      </Box>
    </Box>
  );
}

export default LangList;
