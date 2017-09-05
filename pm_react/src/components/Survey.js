import React from 'react';

export default ({bnw, setBnW}) => {
  return(
    <div>
      <div className="top">
        <div className='deep-overlay'>
          <div className="pattern-overlay">
            <p className='top-title animated bounceIn'>Well {bnw.name},</p>
            <p className='top-sub animatde fadeInUp'>This is one of my virtual abstract arts :)</p>
          </div>
        </div>
      </div>
      <div>
        <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
  				<path d="M-5 100 Q 0 20 5 100 Z
  						 M0 100 Q 5 0 10 100
  						 M5 100 Q 10 30 15 100
  						 M10 100 Q 15 10 20 100
  						 M15 100 Q 20 30 25 100
  						 M20 100 Q 25 -10 30 100
  						 M25 100 Q 30 10 35 100
  						 M30 100 Q 35 30 40 100
  						 M35 100 Q 40 10 45 100
  						 M40 100 Q 45 50 50 100
  						 M45 100 Q 50 20 55 100
  						 M50 100 Q 55 40 60 100
  						 M55 100 Q 60 60 65 100
  						 M60 100 Q 65 50 70 100
  						 M65 100 Q 70 20 75 100
  						 M70 100 Q 75 45 80 100
  						 M75 100 Q 80 30 85 100
  						 M80 100 Q 85 20 90 100
  						 M85 100 Q 90 50 95 100
  						 M90 100 Q 95 25 100 100
  						 M95 100 Q 100 15 105 100 Z">
  				</path>
  			</svg>
      </div>
      <div className='second-section animated fadeIn'>
        <p className='header animated'>The Language of Art</p>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 animated">
              <img src={require('../assets/laptop.jpeg')} height="350px" className="laptop " alt="laptop"/>
            </div>
            <div className="col-xs-6">
              <p className="stroke">Ever thought how the world would look, if everything was black and white?
              From my persepctive all programming languages are like a set of paint brushes, and I as an artist, just need a collection of brushes to have the right stroke!</p>
            </div>
          </div>
        </div>
      </div>
      <div id="zebra">
        <div className="deep-overlay">
          <div className="pattern-overlay">
            <svg id="curveDown" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>
            <p className="community">As a community, Everything becomes Black and White.</p>
            <svg id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
      				<path d="M0 100 C 20 0 50 0 100 100 Z"></path>
      			</svg>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  )
}
