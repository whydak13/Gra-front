import React, { Component } from 'react';


class Counter extends Component {
  state = { 
      count: 0,
      tags: ['tag1', 'tag2', 'tag3']

   } ;



   handleIncrement =() =>{   // arrow function zeby przekierować "this" w kontrolerze na oryginalny obiekt
       console.log('Increment Clicked');
       this.setState({count: this.state.count+1});
   }

    render() { 
        return (
        <div>
       
            <span className={this.getBadgeClassesd()}>  {/* te klasy sa w dokumentacji bootstrap*/}
            {this.state.count}
            </span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>
                Increment
             </button>

        </div>);
    }

    getBadgeClassesd() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }
}
 
export default Counter;