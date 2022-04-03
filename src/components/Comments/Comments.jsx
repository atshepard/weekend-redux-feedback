import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Comments () {
//This component should dispatch an integer between 1-10. 
const dispatch = useDispatch();
const history = useHistory();

const [inputVal, setInputVal] = useState('');

const handleClick = () => {
    dispatch({type: 'ADD_COMMENTS', payload: inputVal});
    history.push('/review')
} 

    return(<>
        <div>
            <h2>Comments Go Here:</h2>
            <input 
            onChange={(event) => setInputVal(event.target.value)}
            type="text" 
            id="comments" 
            name="comments"
            placeholder="Comments Here"
            value={inputVal} ></input>
            <button onClick={handleClick}>NEXT</button>
        </div>
    </>)
}

export default Comments;