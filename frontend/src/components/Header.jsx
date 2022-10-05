import React, { useEffect, useState } from 'react';
import logoReact from '../logo.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import MenuService from '../services/menuService';

/**
 * @param {Object} props
 * @param {function(string)} props.setLocation
 * @returns {JSX.Element}
 */
export default function Header({ setLocation }) {
    const [menu, setMenu] = useState([]);
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
        async function getMenu() {
            const menu = await new MenuService().get();
            setMenu(menu);
        }

        getMenu();
    }, []);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    }

    const handleSetMenu = (slug) => {
        handleMenuToggle();
        setLocation(`/${slug}/`);

        menu.map((item) => {
            item.active = item.slug === slug;

            return item;
        });
    }

    return (
        <header>
            <Link to="/" onClick={() => handleSetMenu('/')} className="text-decoration-none">
                <img src={logoReact} alt="logo react" className="logo" height="60" />
            </Link>
            <button
                onClick={handleMenuToggle}
                className={classNames('nav-toggle', { 'nav-open': menuToggle })}
                aria-label="toggle navigation"
            >
                <span className="hamburger"></span>
            </button>
            {
                menu.length > 0 && (
                    <nav className="nav">
                        <ul className="nav__list">
                            {
                                menu.map(({ id, title, slug, active }) =>
                                    <li key={id} className="nav__item">
                                        <Link
                                            onClick={() => handleSetMenu(slug)}
                                            to={`/${slug}/`}
                                            className={classNames('nav__link', { 'nav__link--active': active })}
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                )
            }
        </header>
    );
}