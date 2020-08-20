import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState({})
    const [mostVotes, setMostVotes] = useState(0);

    const {anecdotes} = props;

    const changeAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const handleVoting = () => {
        // const copy = {...votes}
        // copy[selected] +=1;
        // setVotes(copy);
        const selectedVoteCount = votes[selected] || 0
        setVotes({
            ...votes,
            [selected]: selectedVoteCount + 1
        })
        if (!votes[mostVotes] || selectedVoteCount + 1 > votes[mostVotes] ) {
            setMostVotes(selected)
        }
    }
       // let max = Object.keys(votes).reduce(function(a, b){ return votes[a] > votes[b] ? a : b });
    return (
        <div>
            {anecdotes[selected]}
            <div>
                <p>has {votes[selected]} votes</p>
            </div>
            <div>
                <button onClick={handleVoting}>Vote</button>
                <button onClick={changeAnecdote}>Next anecdote</button>
            </div>
            <div>
                <h1>Anecdote with the most votes</h1>
                {anecdotes[mostVotes]}
            </div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)