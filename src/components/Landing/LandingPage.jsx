import swal from 'sweetalert';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material'

function LandingPage() {
    // shows current moment, asks if you would like to do a reflection. If yes, push to Feelings.
    const history = useHistory();

    const handleNo = () => {
        swal(`That's fine. Come back when you're ready.`)
    }

    const handleClick = (nextPage) => {
        history.push(`/${nextPage}`);
    }

    const time = moment().format("MMM Do YY")

    return (<>

        <div>

            <h2>Welcome</h2>

            <p>It is {time}.</p>

            <p>Would you like to reflect on today?</p>

            <button onClick={(event) => { handleClick('feeling') }}>YES</button>
            <button onClick={handleNo}>NO</button>

        </div>

    </>)
}

export default LandingPage;