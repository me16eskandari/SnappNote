export class ConfirmDialogProps {
    onYes?: () => void;
    onNo?: () => void;

    title: string;
    message?: string;
}