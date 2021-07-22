import React from 'react'

export default function FinalResult(props) {
    const {query} = props.location; 

    

    const chooseBackground=(index,numberOfQu)=>{

        if(index === query.score.option[numberOfQu])
            if(query.Questions[numberOfQu].answer === query.score.option[numberOfQu])
                return 'green'
            else
                return 'red'
        else if(index === query.Questions[numberOfQu].answer && query.Questions[numberOfQu].answer !== query.score.option[numberOfQu] )
            return 'lightgray'
        else
            return 'white'
   
    }

    return (
        <div style={{textAlign:"center"}} >
            <h4>{query.score.score} ציונך הסופי</h4>
            {query.Questions.map((element,numberOfQu)=>{
                return(
                    <div className ='border border-dark'>
                        <h5 className='p-3 mb-2 bg-secondary text-white'>{element.title}</h5>
                        <div> {element.question.map((qu,index)=>{
                            return(
                                <h6 className='card App' style={{backgroundColor:chooseBackground(index,numberOfQu)}}>
                                    {qu}
                                </h6>
                            )
                        })} </div>
                    </div>
                )
            })}
                
        </div>
    )
}
