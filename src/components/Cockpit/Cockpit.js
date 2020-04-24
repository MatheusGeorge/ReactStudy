import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    //http request
    const timer = setTimeout(() => {
      alert('save data to cloud');
    }, 1000);
    //using useEffect after component fade away
    return () => {
      clearTimeout(timer);
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

    if(props.persons.length <= 2) {
      AssignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      AssignedClasses.push(classes.bold); //
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={AssignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};  

export default cockpit;