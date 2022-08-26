import React from 'react';

/**
 * @returns {JSX.Element}
 */
export default function Footer() {
    return (
        <footer className="blog-footer">
            <p>
                <span>Blog template built with: </span>
                <a href="https://reactjs.org/">React</a>,&nbsp;
                <a href="https://getbootstrap.com/">Bootstrap</a>,&nbsp;
                <a href="https://wordpress.com/">Wordpress</a>&nbsp;by&nbsp;
                <a href="https://github.com/CarlosOlii/">Carlos Oliveira</a>.
            </p>
        </footer>
    );
}