import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {handleClick} from '../handleClick'

function Understanding () {
//This component should dispatch an integer between 1-10. 
const dispatch = useDispatch();
const history = useHistory();

const [inputVal, setInputVal] = useState(0);


// onClick={handleClick}

    return(<>
        <div>
            <h2>Understanding Goes Here:</h2>
            <input 
            onChange={(event) => setInputVal(event.target.value)}
            type="range" 
            id="understanding" 
            name="understanding"
            value={inputVal} 
            min="0" max="10"></input>
            <button onClick={(event) => handleClick('support', 'ADD_UNDERSTANDING', inputVal)}>NEXT</button>
        </div>
        
    </>)
}

export default Understanding;
