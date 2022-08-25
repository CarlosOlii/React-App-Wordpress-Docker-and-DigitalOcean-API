import React from 'react';
import logoReact from '../logo.svg';
import classNames from 'classnames';

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header({ menu }) {
    return (
        <div className="border-bottom">
            <header className="container d-flex align-items-center justify-content-between py-3">
                <a href="/" className="text-decoration-none">
                    <img src={logoReact} alt="logo React" height="60"/>
                </a>
                {
                    menu.length > 0 && (
                        <ul className="nav nav-pills">
                            {
                                menu.map(({ id, title, slug, active }) =>
                                    <li key={id} className="nav-item">
                                        <a
                                            href={`/${slug}/`}
                                            className={classNames('nav-link', { 'active': active })}
                                        >
                                            {title}
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    )
                }
            </header>
        </div>
    );
}