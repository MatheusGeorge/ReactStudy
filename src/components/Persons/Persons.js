import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapchot'};
  }

  componentDidUpdate(prevProps, prevState, snapchot) {
    console.log('[Persons.js] componentDidUpdate', snapchot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
  console.log('[Persons.js] render'); 
  return this.props.persons.map((person, index) => {
    return <Person    
      key={person.id}
      name={person.name} 
      age={person.age} 
      click={() => this.props.clicked(index)} 
      changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}


export default Persons; 