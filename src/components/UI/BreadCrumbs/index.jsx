import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'
import cls from './BreadCrumbs.module.scss'

const BreadCrumbs = ({
    title = '',
    breadCrumbs = []
}) => {
    const { t } = useTranslation()

    return (
        <div className={cls.breadcrumb}>
            {title && <h2 className={cls.breadcrumb__title}>{t(title)}</h2>}
            <ul className={cls.breadcrumb__items} itemScope itemType='https://schema.org/BreadcrumbList'>
                {
                    breadCrumbs?.length > 0 && breadCrumbs.map((crumb, index) => (
                        <Fragment key={index}>
                            <li 
                                className={cls.breadcrumb__items__children} 
                                itemScope
                                itemProp="itemListElement" 
                                itemType="https://schema.org/ListItem"
                            >
                                {crumb.link ? (
                                    <Link href={crumb.link}>
                                        <a itemProp='item'><span itemProp='name'>{t(crumb.label)}</span></a>
                                    </Link>
                                ) : (
                                    <span itemProp='name'>{t(crumb.label)}</span>
                                )}
                                <meta itemProp="position" content={index + 1} />
                            </li>
                            {index !== breadCrumbs?.length - 1 && <>&gt;</>}
                        </Fragment>
                    ))
                }
            </ul>
        </div>
    );
}

export default BreadCrumbs;
