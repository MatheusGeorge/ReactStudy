import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';
//import styled from 'styled-components';

// retorn um componente react 
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (max-width: 800px) {
//         width: 250px;
//     }
//     `;

const person = (props) => {
    // const style = {
    //     '@media (max-width: 800px)': {
    //         width: '250px'
    //     }
    // }

    return (
        //<div className="Person" style={style}>
        //<StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        //</StyledDiv>
    )
};

// export default Radium(person);
export default person;