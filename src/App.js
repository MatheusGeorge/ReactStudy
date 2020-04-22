import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// const App = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 26},
//     ]
//   });

//   //DONT MERGE REPLACE IT;
//   const [otherState, setOtherState] = useState('some other value')

//   console.log(otherState, personsState);

//   const switchNameHandler = () => {
//     //DONT DO THIS = this.state.persons[0].name = "Maximillium";
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Stephanie', age: 27}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am React</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   )
// }



class App extends Component {

  state = {
    persons: [
      { id: 'asdd', name: 'Max', age: 28},
      { id: 'dsad', name: 'Manu', age: 29},
      { id: 'asdsadasdd', name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DONT DO THIS = this.state.persons[0].name = "Maximillium";
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign([], this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green', 
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} 
            name={person.name} 
            age={person.age} click={() => this.deletePersonHandler(index)} 
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
      </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I am React</h1>
        <p>This is really working!</p>
        <button 
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        {/* { 
          this.state.showPersons === true ? 
          <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}/>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
          </div> : null
        } */}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is working now??'));
  }

}

export default App;
