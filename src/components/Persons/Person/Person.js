import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext  from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] render'); 
        return (
            //<Fragment>
            <Aux>
                {this.context.authenticated ? (
                    <p>Authenticated!</p>
                ) : (
                    <p>Please Log In!</p>
                )}
                {/* <AuthContext.Consumer>
                {context => 
                    context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>
                }
                </AuthContext.Consumer> */}
                <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                onChange={this.props.changed}
                value={this.props.name} 
                //ref={(inputEL) => {this.inputElement = inputEL}}
                ref={this.inputElementRef}/>
                {/* </Fragment> */}
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);