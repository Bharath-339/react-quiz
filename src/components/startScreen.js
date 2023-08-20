function startScreen({numQuestions, dispatch}) {
    return (
        <div>
            <h2> Welcome to the React Quiz!</h2>
            <h3> {numQuestions} questions are ready to test your understanding of react</h3>

            <button className="btn btn-ui" onClick={()=>{dispatch({type : "start"})}}>Let's Start</button>
        </div>
    )
}

export default startScreen
