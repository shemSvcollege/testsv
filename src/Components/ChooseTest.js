import React from 'react'
import './ChooseTest.css'
import {Link} from 'react-router-dom'
export default function ChooseTest(props) {
    return (
        <div className='center'>
        <h1>בחר מבחן התאמה</h1>
        <h4>יש לבחור את המבחן הרלוונטי</h4>
        <div className="row row-cols-1 row-cols-2 center">
          
                <div classNames="col-4">
                     <div className="card">
                     <div className="card-body">
                         <Link to='/QaTest' className='choose'>
                        <h5 className="card-title">QA</h5>
                        <p className="card-text">האם אתה מתאימ/ה להיות בודק/ת תוכנה QA</p>
                        </Link>
                     </div>
                </div>
            </div>
               <div classNames="col-4">
                    <div className="card">
                    <div className="card-body">
                    <Link to='/FullstackTest' className='choose'>
                       <h5 className="card-title">fullStack</h5>
                       <p className="card-text">האם אתה מתאימ/ה להיות מפתח/ת תוכנה</p>
                     </Link>                   
                    </div>
               </div>
           </div>
              <div classNames="col-4">
                   <div className="card">
                   <div className="card-body">
                   <Link to='/GamingTest' className='choose'>
                      <h5 className="card-title">Gaming</h5>
                      <p className="card-text">האם אתה מתאימ/ה להיות מפתח/ת משחקים</p>
                  </Link>
                   </div>
              </div>
          </div>
             <div classNames="col-4">
                  <div className="card">
                  <div className="card-body">
                  <Link to='/ItTest' className='choose'>
                     <h5 className="card-title">IT</h5>
                     <p className="card-text">האם מתאימ/ה לך להיות מנהל/ת רשת ואבטחת מידע</p>
                  </Link>
                  </div>
                  </div>
         </div>
         </div>
    </div>
    )
}
