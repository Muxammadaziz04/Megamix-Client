import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import locales from 'constants/locales.constants'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 
                    ym(95359781, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true,
                         webvisor:true
                    });
                    `
                }}></script>


                <script async src="https://www.googletagmanager.com/gtag/js?id=G-F4BNLZENTP"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-F4BNLZENTP');
                    `
                }}>
                </script>
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