import React from 'react';
import {Text, Box} from 'ink';

interface InfoItemProps {
  label: string;
  children: string;
  color?: string;
}

function InfoItem({label, children, color = '#0ea5e9'}: InfoItemProps) {
  return (
    <Box width="100%">
      <Text>
        {label}: <Text color={color}>{children}</Text>
      </Text>
    </Box>
  );
}

export default InfoItem;
