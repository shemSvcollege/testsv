import React from 'react'
import {HashRouter as Router, Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import ChooseTest from './Components/ChooseTest'
import QaTest from './Components/Qa/QaTest.js'
import FullstackTest from './Components/FullStack/FullStackTest.js'
import ItTest from './Components/IT/ItTest.js'
import GamingTest from './Components/Gaming/GamingTest.js';
import EnglishTest from './Components/EnglishTest'

export default function App() {



  return (
    <div className='container'>
      <div className="sticky-top center">
        <img style={{width:'60px'}} src='https://svcollege.co.il/wp-content/uploads/2018/08/Vector-Smart-Object.jpg' />
        <h1 style={{color:'black'}}>SVcollege</h1></div>
      <Router >
        <Switch>
          <Route exact path='/' component={ChooseTest}/>
          <Route exact path='/QaTest' component={QaTest}/>
          <Route exact path='/FullstackTest' component={FullstackTest}/>
          <Route exact path='/ItTest' component={ItTest}/>
          <Route exact path='/GamingTest' component={GamingTest}/>
          <Route exact path='/EnglishTest' component={EnglishTest}/>
        </Switch>
      </Router>

      
    

      
    </div>
  )
}
