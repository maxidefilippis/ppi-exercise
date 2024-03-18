import React from 'react';
import './index.scss';

interface LayoutProps {
    children: JSX.Element;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header className="header">
                <p className="header__title">Currency exchange</p>
            </header>
            <main className="main">{children}</main>
        </>
    );
};
