import { layout } from '../translations/en/layout';
import './index.scss';

interface LayoutProps {
    children: JSX.Element;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header className="header">
                <p className="header__title">{layout.title}</p>
            </header>
            <main className="main">{children}</main>
        </>
    );
};
