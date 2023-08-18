export interface IProgressText {
    success: string;
    error: string;
    default: string;
}

export interface IProgress {
    loading: boolean;
    success: boolean;
    error: boolean;
    data: IProgressText | undefined;
    fn: () => Promise<void>;
}