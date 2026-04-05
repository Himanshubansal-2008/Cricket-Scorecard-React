import { useState } from "react";
import './score.css';



function Score() {
    const [score,setScore] = useState(0)
    const [balls , setBalls] = useState(0)
    const [overs , setOvers] = useState(0)
    const [wicket , setWicket] = useState(0)



    return (
        <div className="main-card">
            <div className="display">
                <h1>Cricket Scorecard</h1>
                <h2>Score: {score}</h2>
                <h3>Balls: {balls}</h3>
                <h3>Overs: {overs}</h3>
                <h3>Wickets: {wicket}</h3>
            </div>

            <div className="score-btn">
                <button onClick={()=> {setScore(score+1)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>1</button>
                <button onClick={()=> {setScore(score+2)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>2</button>
                <button onClick={()=> {setScore(score+3)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>3</button>
                <button onClick={()=> {setScore(score+4)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>4</button>
                <button onClick={()=> {setScore(score+5)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>5</button>
                <button onClick={()=> {setScore(score+6)
                    if (balls==6){
                        setBalls(0)
                        setOvers(overs+1)
                    }else{
                        setBalls(balls+1)}}}>6</button>
            </div>
            <div className="special-btn">
                <button className="wicket-btn" onClick={() => {setWicket(wicket+1)}}>Add Wicket</button>
                <button className="restart-btn" onClick={() => {setScore(0);setBalls(0);setWicket(0);setOvers(0)}}>Restart Match</button>
                <button className="wide-btn" onClick={() => {setScore(score+1)}}>Wide Ball</button>
                <button className="noball-btn" onClick={()=>{setScore(score+1)}}>No Ball</button>
            </div>


        </div>
    )
}

export default Score;