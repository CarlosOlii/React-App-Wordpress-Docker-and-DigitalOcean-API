import React, { Fragment } from 'react';

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function NotFoundPage() {
    return (
        <Fragment>
            <main className="container py-3">
                <h1>Not Found</h1>
                <p>Page not found</p>
            </main>
        </Fragment>
    );
}