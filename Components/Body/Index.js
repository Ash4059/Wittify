import Styles from '../../Style/body.module.css';
import { TrendingContainer } from './TrendingContainer';

const BodyContainer = () =>{
    return (
        <div className={Styles.bodyContainer + ' displayFlex'}>
            <div className={Styles.mainContainer}>
                <TrendingContainer />
            </div>
            <div className={Styles.playListContainer}>

            </div>
        </ div>
    );
}

export default BodyContainer;