import React,{useState, useEffect} from 'react'
import {Questions} from '../../Questions/QaQuestions'
import {Link} from 'react-router-dom'
export default function QaTest() {

    const [index , setIndex] = useState(0);
    const [score , setScore] = useState({score:0,option:[]});
    const [option,setOption] = useState(0);
    const [showRes,setShowRes] = useState('none');



    useEffect(()=>{
        if(index===10){
            setOption(1);
        }
        else if(index === 11){
            setOption(2)
        }
        
    })

    const checkAnswer = (element) =>{
        score.option.push(element.target.value)
        if(element.target.value === Questions[index].answer){
            score.score+=10;
            setScore(score);
        }
        setIndex(index+1);
    }

    const password=(val)=>{

        if(val.target.value === '1234')
            setShowRes('block');
    }

    const show = () =>{
        if(option === 0){
            return(
            <div>
                <div className="card" style={{textAlign:"center"}}>
                <img style={{width:'230px'}} src={Questions[index].image} class="card-img-top rounded mx-auto d-block"/>
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
                <h5 className="card-title" style={{fontSize:'25px',color:'black'}} >
                    סיימת את המבחן, יש לפנות ליועץ הלימודים
                </h5>
                {/* <p className="card-text">{result()}<p>{score} ציון סופי</p></p> */}
                <input type="password" onChange={password}/>
                <p style={{display:showRes}}><Link to={{pathname:`/Result`, query:{Questions:Questions,score:score}}}>תוצאות</Link></p>
                </div>
                <div className="card-footer text-muted">
                  בהצלחה
                </div>
            </div>
            )
        }
    }

    // const result = ()=>{
    //     let res = '';
    //     if(score <= 61){
    //         res+= ' \nאינך מתאימ/ה יש לפנות ליועץ לימודים'
    //         return res
    //     }
    //     else if(score>=70 && score <=79.5){
    //         res+= ' \nnהינך מתאימ/ה לקורס בדיקות תוכנה'
    //         return res;
    //     }
    //     else{
    //         res+= ' \nמצוין! הינך מתאימ/ה ביותר לקורס בדיקות תוכנה`'
    //         return res;
    //     }
    // }
    return (
        <div>
        {show()}
        </div>
    )
}
