export class CustomTextBoxProps {
    bold?: boolean = false;
    multiline?: boolean = false;
    placeholder?: string;
    value?: string;
    className?: string;
    containerClassName?: string;

    onChange?: (event: any) => any;
}