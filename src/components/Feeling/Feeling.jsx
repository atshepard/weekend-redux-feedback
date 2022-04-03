import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Slider, Button } from '@mui/material';
import swal from 'sweetalert'

function Feelings() {

    const [inputVal, setInputVal] = useState(null);
    const reflection = useSelector(store => store.reflectReducer)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        if (inputVal == null) {
            swal({
                title: "Are you sure?",
                text: "Your current selection is 0.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((okieDokie) => {
                    if (okieDokie) {
                        swal("We'll move on to the next question, then!", {
                            icon: "success"
                        });
                        dispatch({ type: 'ADD_FEELINGS', payload: inputVal });
                        history.push('/understanding');
                    } else {
                        swal("Please adjust your entry!");
                    }
                });
        } else {
            dispatch({ type: 'ADD_FEELINGS', payload: inputVal });
            history.push('/understanding');
        }
     }

    // setInputVal(reflection.feeling);

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
                min={0} max={10}
                required></Slider>
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    </>)
}

export default Feelings;