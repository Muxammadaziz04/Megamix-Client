import settings from "./settings.js";

const socialTags = ({
    url,
    type,
    title,
    description,
    image,
}) => {
    const metaTags = [
        { name: "twitter:card", content: "summary" },
        {
            name: "twitter:site",
            content: settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
            name: "twitter:creator",
            content: settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:image:src", content: image },

        { name: "og:title", content: title },
        {
            name: "og:type",
            content: type,
        },
        {
          name: 'og:url',
          content: (typeof window !== 'undefined' && window.location.href) || url,
        },
        { name: "og:image", content: image },
        { name: "og:description", content: description },
        {
            name: "og:site_name",
            content: settings && settings.meta && settings.meta.title,
        },
    ];

    return metaTags;
};

export default socialTags;