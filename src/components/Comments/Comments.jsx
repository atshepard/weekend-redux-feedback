import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

function Comments() {
    //This component should dispatch an integer between 1-10. 
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputVal, setInputVal] = useState('');

    const handleClick = () => {
        dispatch({ type: 'ADD_COMMENTS', payload: inputVal });
        history.push('/review');
    }

    return (<>
        <form>
            <div className="container">
                <h2>Comments</h2>
                <h4>Are there any comments you would like to share?</h4>
                <br />
                <TextField
                    onChange={(event) => setInputVal(event.target.value)}
                    placeholder="Comments Here"
                    variant="filled"
                    value={inputVal} required ></TextField>
                <Button onClick={handleClick}>NEXT</Button>
            </div>
        </form>
    </>)
}

export default Comments;