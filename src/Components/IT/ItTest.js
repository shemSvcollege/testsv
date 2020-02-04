import React,{useState, useEffect} from 'react'
import {Questions} from '../../Questions/ITQuestions'
import {Link} from 'react-router-dom'
export default function ItTest() {

    const [index , setIndex] = useState(0);
    const [score , setScore] = useState(0);
    const [option,setOption] = useState(0);
    const [english , setEnglish] = useState('');

    useEffect(()=>{
        if(index==10){
            setOption(1);
        }
        else if(index == 11){
            setOption(2)
        }
        
    })

    const checkAnswer = (element) =>{
        if(element.target.value == Questions[index].answer){
            setScore(score+10);
        }
        setIndex(index+1);
    }

    const show = () =>{
        if(option == 0){
            return(
            <div>
                <div className="card" style={{textAlign:"center"}}>
                <img style={{width:'100px'}} src={Questions[index].image} class="card-img-top rounded mx-auto d-block"/>
                    <div className="card-header" style={{fontWeight:'Bold',backgroundColor:'#b3b3b3'}}>
                        {Questions[index].title}
                    </div>
                <ul className="list-group list-group-flush">
                    <li onClick={checkAnswer} value={0} className="list-group-item list-group-item-action">{Questions[index].question[0]}</li>
                    <li onClick={checkAnswer} value={1} className="list-group-item list-group-item-action">{Questions[index].question[1]}</li>
                    <li onClick={checkAnswer} value={2} className="list-group-item list-group-item-action">{Questions[index].question[2]}</li>
                    <li onClick={checkAnswer} value={3} className="list-group-item list-group-item-action">{Questions[index].question[3]}</li>
                </ul>
                </div>
            </div>
            )
        }
        else{
            return(
            <div className="card text-center">
                <div className="card-header">
                    ציון מבחן התאמה
                </div>
                <div className="card-body">
                  <h5 className="card-title">{score}</h5>
                  <p className="card-text">יצאת מתאים לקורס בדיקות תוכנה</p>
                  <Link to='/EnglishTest' className="btn btn-primary">עבור לשאלון האחרון</Link>
                </div>
                <div className="card-footer text-muted">
                  בהצלחה
                </div>
            </div>
            )
        }
    }

    return (
        <div>
        {show()}
        </div>
    )
}
