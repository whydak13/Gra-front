import React, { Component } from 'react';
import Popup from './Popup';
import Table from 'react-bootstrap/Table'
import {Dropdown, Button,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
//import Select from 'react-select'
//import GlobalFiter from './GlobalFilter'
import {useState} from 'react'
class WeaponList extends Component {

  state = {
    data: [],
  }



  constructor(props) {
    super(props);
    this.state = {
      weapons: []
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://localhost:8080/weapons')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            weapons: result
          });
        }
      );
  }

  //handleEdit = () => {   // arrow function zeby przekierować "this" w kontrolerze na oryginalny obiekt
  //  console.log('Edit Clicked');}

 // handleAdd = () => {   // arrow function zeby przekierować "this" w kontrolerze na oryginalny obiekt
 //   console.log('Add Clicked');
  //  this.setState({add_clicked: 1});  }

  //handleClose = () => {   // arrow function zeby przekierować "this" w kontrolerze na oryginalny obiekt
   // console.log('Close Clicked');
  //  this.setState({add_clicked: 0});  }
  
  

  render() {
    //const [buttonPopup, setButtonPopup] =useState(false);
    return (
      <div>
        <h2>Broń do walki wręcz</h2>
        <Table >
          <thead>
            <tr>
              <th>Id</th>
              <th>Nazwa</th>
              <th>Zasięg</th>
              <th>Celność</th>
              <th>Impet</th>
              <th>Koszt</th>
              <th>Opis</th>
            </tr>
          </thead>
          <tbody>
            {this.state.weapons.map(w => (
                 <tr >
                 <td>{w.id}</td>
                 <td>{w.name}</td>
                 <td>{w.reach}"</td>
                 <td>{w.agility}</td>
                 <td>{w.impact}</td>
                 <td>{w.cost}</td>
                 <td>{w.description}</td>
               </tr>
             
            ))}

          </tbody>
        </Table>


      </div>
    );
  }

}
export default WeaponList;


  // {this.state.data.map(Weapon => <Weapon info={Weapon}/>)}
        //<Weapon/>