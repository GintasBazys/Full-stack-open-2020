import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClick = (e) => {
        if(e.target.value === "Good") {
            setGood(good+1);
        }
        if(e.target.value === "Neutral") {
            setNeutral(neutral+1);
        }
        if(e.target.value === "Bad") {
            setBad(bad+1);
        }
        else {
            console.log("Error occurred");
        }
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button value="Good" handleClick={handleClick} />
            <Button value="Neutral" handleClick={handleClick} />
            <Button value="Bad" handleClick={handleClick} />
            <h1>Statistics</h1>
            { good  === 0 && neutral === 0 && bad === 0 ? <h1>No feedback given</h1> :<Statistics good={good} neutral={neutral} bad={bad} />}
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
