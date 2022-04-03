import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support () {
//This component should dispatch an integer between 1-10. 
const dispatch = useDispatch();
const history = useHistory();

const [inputVal, setInputVal] = useState(0);

const handleClick = () => {
    dispatch({type: 'ADD_SUPPORT', payload: inputVal});
    history.push('/comments')
} 

    return(<>
        <div>
            <h2>Feelings Go Here:</h2>
            <input 
            onChange={(event) => setInputVal(event.target.value)}
            type="range" 
            id="support" 
            name="support"
            value={inputVal} 
            min="0" max="10"></input>
            <button onClick={handleClick}>NEXT</button>
        </div>
        
    </>)
}

export default Support;