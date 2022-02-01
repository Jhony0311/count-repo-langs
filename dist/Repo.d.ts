/// <reference types="react" />
import { type Repo } from './types';
declare type RepoCompProps = Repo;
declare function RepoComp({ full_name, html_url }: RepoCompProps): JSX.Element;
export default RepoComp;
