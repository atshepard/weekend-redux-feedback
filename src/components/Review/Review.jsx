import { useSelector } from 'react-redux';
import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';

function Review() {
    const history = useHistory();

    let reflection = useSelector(store => store.reflectReducer);
    console.log(reflection);

    const [submitted, setSubmit] = useState(false);

    const handleSubmit = () => {

        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willSubmit) => {
                if (willSubmit) {
                    swal("Your reflection has been saved", {
                        icon: "success",
                    });

                    axios.post('/feedback', { reflection })
                        .then(response => {
                            //getRoute would go here
                            setSubmit(true);
                        })
                        .catch(error => {
                            console.log('error in axios post:', error)
                        })

                } else {
                    swal("Come back when you're ready");
                }
            });
    }

    const handleYes = () => {
        history.push('/')
    }

    const handleNo = () => {
        swal('No problem. Thank you for your reflection.')
    }

    return (<>
        <div className="container">
            <form>
                {submitted ?
                    <div>
                        <h3>Would you like to add another reflection?</h3>
                        <Button onClick={handleYes}>YES</Button>
                        <Button onClick={handleNo}>NO</Button>
                    </div>
                    :
                    <div>
                        <h3>Here is your reflection:</h3>
                        <p>Feeling: <span>{reflection.feeling}</span> out of 10</p>
                        <p>Understanding: <span>{reflection.understanding}</span> out of 10</p>
                        <p>Support: <span>{reflection.support}</span> out of 10</p>
                        <p>Comments: <span>{reflection.comments}</span></p>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                }
            </form>
        </div>

    </>)
}

export default Review;