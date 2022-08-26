import React, { Fragment } from 'react';

/**
 * @param {Object} props
 * @param {Array<{title:string, content:string}>} props.page=[]
 * @returns {JSX.Element}
 */
export default function StaticPage({ page: { title, content } = {} }) {
    return (
        <Fragment>
            <main className="container py-3">
                {
                    title && content ? (
                        <Fragment>
                            <h1>{title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: content.rendered}} />
                        </Fragment>
                    ) : (
                        <div className="loading">Loading...</div>
                    )
                }
            </main>
        </Fragment>
    );
}