export declare enum STATUS {
    IDLE = "IDLE",
    PENDING = "PENDING",
    RESOLVED = "RESOLVED",
    REJECTED = "REJECTED"
}
export declare type Repo = {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    languages_url: string;
};
export declare type Languages = {
    [name: string]: number;
};
