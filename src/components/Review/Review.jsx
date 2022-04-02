import {useSelector} from 'react-redux'
import axios from 'axios';
import swal from 'sweetalert';

function Review () {

    let reflection = useSelector(store => store.reflectReducer);
    console.log(reflection);

    axios.post


    return (<>
        <div>
            <h3>Would you like to save this reflection?</h3>
            <p>Feeling: <span>{reflection.feeling}</span>out of 10</p>
            <p>Understanding: <span>{reflection.understanding}</span>out of 10</p>
            <p>Support: <span>{reflection.support}</span>out of 10</p>
            <p>Comments:<span>{reflection.comments}</span></p>
            <button>Submit</button>
        </div>
        

    
    </>)
}

export default Review;