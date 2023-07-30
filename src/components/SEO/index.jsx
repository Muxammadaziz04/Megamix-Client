import Head from "next/head";
import PropTypes from "prop-types";
import settings from "./settings";
import socialTags from "./socialTags";

const SEO = (props) => {
    const { title, description, keywords } = props;

    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1  maximum-scale=2, user-scalable=0"
            />
            <meta charSet="utf-8" />
            <title>{title || "Megamix"}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="apple-touch-icon" sizes="180x180" href="/faicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/faicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/faicon/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/faicon/safari-pinned-tab.svg" color="#6e99a6" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

            {socialTags(props).map(({ name, content }) => {
                return <meta key={name} property={name} content={content} />;
            })}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    );
};

SEO.defaultProps = {
    url: settings && settings.meta && settings.meta.url,
    type: settings && settings.meta && settings.meta.type,
    title: settings && settings.meta && settings.meta.title,
    description: settings && settings.meta && settings.meta.description,
    image:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.graphic,
    keywords: settings && settings.meta && settings.meta.keywords,
};

SEO.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};

export default SEO;