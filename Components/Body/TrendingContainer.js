import PropTypes from 'prop-types'
import { TrendingTemplate } from "./TrendingTemplate";

export const TrendingContainer = (props) => {

    const { TrendingSongs } = props;
    
    return (
        <>
            <h1 style={{textAlign : 'center'}}>Top Trending Songs</h1>
            <div className="dF" style={style}>
                {
                    TrendingSongs.map(song => (
                            <TrendingTemplate key={"trending-"+song.id} Song = {song} />
                        ))
                }
            </div>
        </>
    );
}

TrendingContainer.prototype = {
    props : PropTypes.array.isRequired
}

const style = {
    overflow : 'hidden',
    width : "100%",
    height : "360px",
    alignItems : 'center',
    justifyContent : 'center'
}