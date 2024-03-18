interface TextProps {
    text: string;
    classes?: string;
}
export const Title: React.FC<TextProps> = ({ text, classes }) => {
    return <h1 className={classes}>{text}</h1>;
};
