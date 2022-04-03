import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Slider, Button } from '@mui/material';

function Feelings() {

    const [inputVal, setInputVal] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({ type: 'ADD_FEELINGS', payload: inputVal });
        history.push('/understanding')
    }

    return (<>
        <div className="container">
            <h2>Feelings</h2>
            <h4>How are you feeling about today?</h4>
            <br />
            <Slider
                onChange={(event) => setInputVal(event.target.value)}
                value={inputVal}
                valueLabelDisplay="on"
                step={1}
                marks
                min={0} max={10}></Slider>
            <Button onClick={handleClick}>NEXT</Button>
        </div>

    </>)
}

export default Feelings;