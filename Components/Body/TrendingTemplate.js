import { useState } from 'react';
import Styles from '../../Style/trending.module.css';
import Icon from '../../Static/Images/**';

export const TrendingTemplate = (props) => {

    const { name, author, length, image, location } = props.Song;
    const [showInfo,setShowInfo] = useState(false);

    return (
        <div 
            className={Styles.trendingContainer + " cP"} 
            style={{ backgroundImage : `url(${Icon[image]})`}} 
            onMouseEnter={()=>{setShowInfo(true)}} 
            onMouseLeave={()=>{setShowInfo(false)}} 
            onTouchMoveCapture={()=>{setShowInfo(true)}} 
            onTouchEndCapture={()=>{setShowInfo(false)}} >
            {
                showInfo ? (
                    <>
                        <div className={Styles.playIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <h3>{name}</h3>
                        <h3>- {author}</h3>
                    </>
                ) : <></>
            }
        </div>
    );
}