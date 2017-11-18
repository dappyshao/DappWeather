import React from 'react';

export default (props) => {
  return(
    <div className="error-center">
      <div>
        <p className="error-h1"> Sorry, something went wrong...</p>
        <div className="error-img">
          <img src={require('../images/error.png')}  alt="sad_face"/>
        </div>
        <p className="error-h1"> Please try again later. </p>
      </div>
    </div>
  );
}
