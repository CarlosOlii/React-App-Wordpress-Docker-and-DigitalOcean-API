import React from 'react';
import logoReact from '../logo.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {Array<{id:integer, title:string, slug:string, active:bool, content:string}>} props.menu=[]
 * @param {function(string)} props.setLocation
 * @param props.setLocation Function
 * @returns {JSX.Element}
 */
export default function Header({ menu, setLocation }) {
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
                                        <Link
                                            onClick={ () => setLocation(`/${slug}/`) }
                                            to={`/${slug}/`}
                                            className={classNames('nav-link', { 'active': active })}
                                        >
                                            {title}
                                        </Link>
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