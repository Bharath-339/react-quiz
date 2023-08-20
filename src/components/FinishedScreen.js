function FinishedScreen({points , maxPoints}) {
    const percent = (points/maxPoints)*100;

    let  emoji ;

    if(percent === 100) emoji = '🥇'
    if(percent >= 80 && percent < 100) emoji = '🥈'
    if(percent >= 50 && percent < 80) emoji = '🎉'
    if(percent >= 0 && percent < 50 ) emoji = '🎉'
    if(percent === 0) emoji = '😢'
    return (
        <div>
            <p className="result">
               {emoji} You scored <strong> {points} </strong> out of {maxPoints} {(Math.ceil(percent))}%
            </p>
        </div>
    )
}

export default FinishedScreen
