import ClubCard from 'components/UI/ClubCard';
import Container from 'components/UI/Container';
import cls from './MastersClub.module.scss'

const MastersClubPage = ({club = []}) => {
    
    return (
        <div className={cls.body}>
            <Container className={cls.body__container}>
                {
                    club?.length > 0 && club.map(club => (
                        <ClubCard 
                            link={`/masters-club/${club.id}`} 
                            title={club.title} 
                            desc={club?.shortDescription}
                            image={club.image}
                        />
                    ))
                }
            </Container>
        </div>
    );
}

export default MastersClubPage;
