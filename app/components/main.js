import React from 'react';
import Nav from './nav'

const Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h3>Hey yeah main</h3>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main;
