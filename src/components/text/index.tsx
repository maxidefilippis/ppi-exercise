interface TextProps {
    text: string;
    classes?: string;
}
export const Text: React.FC<TextProps> = ({ text, classes }) => {
    return <p className={classes}>{text}</p>;
};
