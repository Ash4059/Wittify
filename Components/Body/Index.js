import Styles from '../../Style/body.module.css';
import { TrendingContainer } from './TrendingContainer';
import { Songs } from '../../Utils/Music';

const BodyContainer = () =>{

    const { TopTrending } = Songs;

    return (
        <div className={Styles.bodyContainer + ' dF'}>
            <div className={Styles.mainContainer}>
                <TrendingContainer TrendingSongs = {TopTrending} />
            </div>
            <div className={Styles.playListContainer}>

            </div>
        </ div>
    );
}

export default BodyContainer;