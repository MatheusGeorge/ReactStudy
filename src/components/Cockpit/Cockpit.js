import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    //http request
    // const timer = setTimeout(() => {
    //   alert('save data to cloud');
    // }, 1000);
    toggleButtonRef.current.click();
    //using useEffect after component fade away
    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] clean up work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect');
    }
  });

    let AssignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      AssignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      AssignedClasses.push(classes.bold); //
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={AssignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked} ref={toggleButtonRef}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
              {context => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);