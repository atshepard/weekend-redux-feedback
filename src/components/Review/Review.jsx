import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Review () {

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

              axios.post('/feedback', {reflection})
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
        <div>
            {submitted ? 
            <div>
            <h3>Would you like to add another reflection?</h3>
            <button onClick={handleYes}>YES</button>
            <button onClick={handleNo}>NO</button>
            </div>
            :
            <div>
            <h3>Would you like to save this reflection?</h3>
            <p>Feeling: <span>{reflection.feeling}</span>out of 10</p>
            <p>Understanding: <span>{reflection.understanding}</span>out of 10</p>
            <p>Support: <span>{reflection.support}</span>out of 10</p>
            <p>Comments:<span>{reflection.comments}</span></p>
            <button onClick={handleSubmit}>Submit</button>
            </div>
            }   
        </div>
    
    </>)
}

export default Review;