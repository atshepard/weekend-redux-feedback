import swal from 'sweetalert';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Button } from '@mui/material'

function LandingPage() {
    // shows current moment, asks if you would like to do a reflection. If yes, push to Feelings.
    const history = useHistory();
    const theme = useTheme();

    const handleNo = () => {
        swal(`That's fine. Come back when you're ready.`);
    }

    const handleClick = (nextPage) => {
        history.push(`/${nextPage}`);
    }

    const time = moment().format('MMMM Do YYYY');

    return (<>

        <div className="container">

            <h2>Welcome</h2>

            <h4>It is {time}</h4>

            <p>Would you like to reflect on today?</p>

            <Button color={theme.primary} variant="contained" onClick={(event) => { handleClick('feeling') }}>YES</Button>
            <br />
            <Button color={theme.primary} variant="contained" onClick={handleNo}>NO</Button>

        </div>

    </>)
}

export default LandingPage;