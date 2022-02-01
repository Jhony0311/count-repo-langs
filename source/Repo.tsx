import React from 'react';
import {Box} from 'ink';

import InfoItem from './InfoItem';
import {type Repo} from './types';

type RepoCompProps = Repo;

function RepoComp({full_name, html_url}: RepoCompProps) {
  return (
    <Box marginY={1} flexDirection="column" width="100%">
      <InfoItem label="Name">{full_name}</InfoItem>
      <InfoItem label="Url">{html_url}</InfoItem>
    </Box>
  );
}

export default RepoComp;
