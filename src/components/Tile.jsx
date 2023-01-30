import './style-components/reset.css';
import './style-components/style-view.css';


const Tile = (props) => {

    return (
        <button win={props.win} id={props.id} onClick={props.onClick} className={`${props.disabled ? 'disabled' : 'tile'}`} value={props.value}>
            {props.value}
        </button>
    );
};

export default Tile;
