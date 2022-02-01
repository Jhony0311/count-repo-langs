/// <reference types="react" />
import { type Languages } from './types';
interface LangListProps {
    username: string;
    langs?: Languages;
}
declare function LangList({ username, langs }: LangListProps): JSX.Element;
export default LangList;
