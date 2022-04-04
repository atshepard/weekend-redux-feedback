import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Slider, Button } from '@mui/material';

function Support() {
    //This component should dispatch an integer between 1-10. 
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputVal, setInputVal] = useState(0);

    const handleClick = () => {
        if (inputVal == 0) {
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
                        dispatch({ type: 'ADD_SUPPORT', payload: inputVal });
                        history.push('/comments');
                    } else {
                        swal("Please adjust your entry!");
                    }
                });
        } else {
            dispatch({ type: 'ADD_SUPPORT', payload: inputVal });
            history.push('/comments');
        }
    }

    return (<>
        <div className="container">
            <form>
                <h2>Support</h2>
                <h4>How supported did you feel today?</h4>
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
            </form>
        </div>
    </>)
}

export default Support;