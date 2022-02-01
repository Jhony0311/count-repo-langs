/// <reference types="react" />
interface SearchBoxProps {
    username: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
}
export default function GitHubSearch({ username, onChange, onSubmit }: SearchBoxProps): JSX.Element;
export {};
