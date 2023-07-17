import cls from './VideoCard.module.scss'

const VideoCard = () => {
    return (
        <li className={cls.card}>
            <h2>MEGAMIX на 5-й международной выставке строительства и мебели BuildExpo Uzbekistan 2010</h2> 
            <video src="/video.mp4" controls></video>           
        </li>
    );
}

export default VideoCard;
