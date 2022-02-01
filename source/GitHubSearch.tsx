import React, {useState} from 'react';
import {Box, Text} from 'ink';
import Spinner from 'ink-spinner';
import axios, {AxiosResponse} from 'axios';

import SearchBox from './SearchBox';
import RepoList from './LangList';

import {STATUS, type Repo, type Languages} from './types';

type GHReposResponse = AxiosResponse<Array<Repo>>;
type GHLangsRepoResponse = AxiosResponse<Array<{[name: string]: number}>>;

export default function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [langs, setLangs] = useState<Languages>();

  async function handleSubmit() {
    setStatus(STATUS.PENDING);
    try {
      const {data: repos} = await axios.get<any, GHReposResponse>(`https://api.github.com/users/${username}/repos`);

      const langsPerRepo = await Promise.all(
        repos.map(async (repo) => {
          return await axios.get<any, GHLangsRepoResponse>(repo.languages_url).then((res) => res.data);
        })
      );

      const langCount: Languages = langsPerRepo.reduce((count: Languages, repoLangs) => {
        const languages = Object.keys(repoLangs);

        return languages.reduce((acc, lang) => {
          if (acc[lang]) {
            return {
              ...acc,
              [lang]: (acc[lang] || 0) + 1,
            };
          }
          return {
            ...acc,
            [lang]: 1,
          };
        }, count);
      }, {});

      setLangs(langCount);

      setStatus(STATUS.RESOLVED);
    } catch (err) {
      setStatus(STATUS.REJECTED);
    }
  }

  const isStarting = status !== STATUS.RESOLVED && status !== STATUS.REJECTED;
  const isSuccess = status === STATUS.RESOLVED;

  return (
    <Box flexDirection="column">
      {isStarting ? (
        <>
          <SearchBox username={username} onChange={setUsername} onSubmit={handleSubmit} />
          {status === STATUS.PENDING && (
            <Text>
              <Text color="green">
                <Spinner />
              </Text>
              {' Searching on GH'}
            </Text>
          )}
        </>
      ) : (
        <>
          {isSuccess ? (
            <RepoList username={username} langs={langs} />
          ) : (
            <Text>Sorry, your username could not be found or hitted API rate limit</Text>
          )}
        </>
      )}
    </Box>
  );
}
