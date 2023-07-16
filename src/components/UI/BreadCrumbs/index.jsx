import { Fragment } from 'react';
import Link from 'next/link'
import cls from './BreadCrumbs.module.scss'

const BreadCrumbs = ({
    title = '',
    breadCrumbs = []
}) => {
    return (
        <div className={cls.breadcrumb}>
            {title && <h2 className={cls.breadcrumb__title}>{title}</h2>}
            <ul className={cls.breadcrumb__items}>
                {
                    breadCrumbs?.length > 0 && breadCrumbs.map((crumb, index) => (
                        <Fragment key={index}>
                            <li className={cls.breadcrumb__items__children}>
                                {crumb.link ? (
                                    <Link href={crumb.link}>
                                        <a>{crumb.label}</a>
                                    </Link>
                                ) : (
                                    <>{crumb.label}</>
                                )}
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
