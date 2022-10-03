import React, { Fragment } from 'react';

/**
 * @param {Object} props
 * @param {Array<{title:string, content:string}>} props.page=[]
 * @returns {JSX.Element}
 */
export default function StaticPage({ page: { title, content } = {} }) {
    return (
        <Fragment>
            {
                title && content ? (
                    <Fragment>
                        {/*<h1 className="section__title section__title--intro">{title.rendered}</h1>*/}
                        {/*<p className="section__subtitle section__subtitle--intro">{title.rendered}</p>*/}
                        <main dangerouslySetInnerHTML={{__html: content.rendered}} />
                    </Fragment>
                ) : (
                    <main className="loading">Loading...</main>
                )
            }
        </Fragment>
    );
}