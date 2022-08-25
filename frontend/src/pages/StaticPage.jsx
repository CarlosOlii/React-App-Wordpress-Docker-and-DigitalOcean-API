import React, { Fragment } from 'react';

/**
 * @param string title
 * @param string content
 * @returns {JSX.Element}
 * @constructor
 */
export default function StaticPage({ page: { title, content } = {} }) {
    return (
        <Fragment>
            <main className="container py-3">
                {
                    title && content ? (
                        <Fragment>
                            <h1>{title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>
                        </Fragment>
                    ) : (
                        <div className="loading">Loading...</div>
                    )
                }
            </main>
        </Fragment>
    );
}