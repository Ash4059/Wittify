import { ListContainer } from "./ListContainer";
import { Logo } from "./Logo";
import { Searchbar } from "./Searchbar";
import Style from '../../Style/header.module.css';


const Index = () => {
    return (
        <div className={"dF " + Style.headerContainer} style={{ width : '100%' }}>
            <Logo />
            <Searchbar />
            <ListContainer />
        </ div>
    )
}

export default Index;