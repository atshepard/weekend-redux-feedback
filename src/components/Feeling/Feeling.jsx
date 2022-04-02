import {useState} from 'react'
import {handleClick} from '../handleClick'

function Feelings () {
//This component should dispatch an integer between 1-10. 

const [inputVal, setInputVal] = useState(0);

// const handleClick = () => {
//     dispatch({type: 'ADD_FEELINGS', payload: inputVal});
//     history.push('/understanding')
// } 

// onClick={handleClick}

    return(<>
        <div>
            <h2>Feelings Go Here:</h2>
            <input 
            onChange={(event) => setInputVal(event.target.value)}
            type="range" 
            id="feeling" 
            name="feeling"
            value={inputVal} 
            min="0" max="10"></input>
            <button onClick={(event) => handleClick('understanding', 'ADD_FEELINGS', inputVal)}>NEXT</button>
        </div>
        
    </>)
}

export default Feelings;