import React from 'react';
import SurveyContainer from '../containers/SurveyContainer'

export default ({bnw, setBnW}) => {
  const onInputChange = (e)=> {
    setBnW({[e.target.name]: e.target.value})
  }
  const onSubmitName = (e)=> {
    e.preventDefault();
    bnw.name.length === 0 ? setBnW({submitName: true, name: 'Buddy'}) : setBnW({submitName: true});
  }
  return (
    <div>
      <div id='main-sect' className={bnw.submitName ? 'hidden' : 'visible'}>
        <div className="overlay">
          <div className="pattern-overlay">
            <div className="right">
              <p className='hi animated fadeInDown'>Hi There!</p>
              <div className='animated bounceInRight'>
                <p>My name is <a target='_link' href="https://www.linkedin.com/in/peter-muturi">Peter M. :)</a></p>
                <p>I'm a Front-End web/mobile Developer!</p>
                <p>I live somewhere on this planet Earth.<sup><a href="https://en.wikipedia.org/wiki/Nairobi" target="_nrb">NRB</a></sup></p>
                <p>I believe everything on this planet is Art!</p>
                <p>Enough about me, for now;)</p>
                <p>What's Your Name?</p>
              </div>
              <div className="form-group">
                <input className="form-control" onChange={onInputChange} name="name" type="text" maxLength="25"/>
              </div>
              <a className="send btn" onClick={onSubmitName}>Tell Me! :D</a>
            </div>
          </div>
        </div>
      </div>
      <div className={!bnw.submitName ? 'hidden' : 'visible'}>
          <SurveyContainer/>
      </div>
    </div>
  )
}
