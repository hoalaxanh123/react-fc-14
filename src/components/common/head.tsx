import React from 'react';
import { Helmet } from 'react-helmet';

interface headProps {
    title: string;
}

const Head: React.FC<headProps> = (props: headProps) => {
    const { title } = props;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content="Quiz app xịn xò con bò"></meta>
        </Helmet>
    );
};
export default Head;
