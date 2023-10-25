import { getProducts } from "services/products";
import { getNews } from 'services/news'

const generateSiteMap = ({products = [], news = []}) => {
    return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <!-- Главная страница -->
    <url>
        <loc>https://megamix.uz/</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/uz</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/en</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/tr</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/tj</loc>
        <priority>1.0</priority>
    </url>

    <!-- Категории каталога -->
    <url>
        <loc>https://megamix.uz/products?id=45eeeec8-7ec5-4463-939d-e2a94dd30c1c</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/products?id=94cc257e-cf79-4326-9c98-96e283d756cf</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/products?id=6127e6b4-e60f-4c96-b442-f27b9bfa4a92</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://megamix.uz/products?id=6a5d4242-cfd1-4ce9-8294-da0fc4dc8156</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- Новости -->
    ${
        news?.length > 0 && news.map(news => (
          `<url>
                <loc>https://megamix.uz/press-release/news/${news?.id}</loc>
                <priority>0.6</priority>
                <image:image>
                    <image:loc>${news?.image}</image:loc>
                </image:image>
            </url>`
        ))
    }

    <!-- Товары в категориях -->
    ${
        products?.length > 0 && products.map(product => (
        `<url>
            <loc>https://megamix.uz/products/${product?.id}</loc>
            <priority>1.0</priority>
            <image:image>
                <image:loc>${product?.image}</image:loc>
            </image:image>
        </url>`
        ))
    }

    <!-- Другие страницы сайта -->
    <url>
        <loc>https://megamix.uz/company/about</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/company/factory</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/press-release/news</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/press-release/journal</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/press-release/vacancies</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/press-release/foto-gallery</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://megamix.uz/press-release/video-gallery</loc>
        <priority>0.9</priority>
    </url>
</urlset>
    `
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const products = await getProducts();
    const news = await getNews()
    const sitemap = generateSiteMap({ products: products?.rows, news: news?.rows });

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap