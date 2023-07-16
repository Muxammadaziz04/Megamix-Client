import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import locales from 'constants/locales.constants'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx) => {
    const initialProps = await NextDocument.getInitialProps(ctx)
    const { locale } = ctx.req?.cookies || {}
    const currentLocale = ctx.locale

    if (locale !== currentLocale && locales.includes(locale) && ctx.req.url === '/') {
        if (ctx.res) {
            ctx.res.writeHead(307, { Location: locale === 'ru' ? ctx.req.url : `/${locale}${ctx.req.url}` }).end();
        }
    }

    return { ...initialProps, props: {} };
}