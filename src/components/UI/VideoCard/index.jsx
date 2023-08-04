import cls from './VideoCard.module.scss'

const VideoCard = ({
    title = '',
    video = ''
}) => {
    return (
        <li className={cls.card}>
            <h2>{title}</h2> 
            <video src={video} controls></video>           
        </li>
    );
}

export default VideoCard;
