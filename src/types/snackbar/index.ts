export type statusSnackType = "success" | "error" | "info" | "warning";

export interface ISnackbar {
    show: boolean;
    message: string;
    status: statusSnackType;
}