import Image from 'next/image';
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import parseTimestamp from 'utils/parceTimestamp';
import { breadCrumbs } from './data';
import cls from './SingleMastersClub.module.scss'
import { useRouter } from 'next/router';

const SingleMasterClubPage = ({
    title = '',
    description = '',
    image = '',
    createdAt = ''
}) => {
    const router = useRouter()
    const { data, month, year, hours, minutes } = parseTimestamp(createdAt, router.locale)

    return (
        <>
            <div className={cls.news}>
                <Container>
                    <BreadCrumbs title={title} breadCrumbs={[...breadCrumbs, { label: title }]} />
                    <h1 className={cls.news__title}>{title}</h1>
                    <span className={cls.news__date}>{data} {month} {year}  |  {hours}:{minutes}</span>
                </Container>
            </div>
            <div className={cls.news__body}>
                <Container className={cls.news__body__container}>
                    <div className={cls.news__body__image}>
                        <Image
                            src={image}
                            layout='fill'
                            objectFit='cover'
                            alt={title}
                        />
                    </div>
                    <p className={cls.news__body__desc}>{description}</p>
                </Container>
            </div>
        </>
    );
}

export default SingleMasterClubPage;
