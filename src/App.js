import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Popup from './components/Popup';
import WeaponList from './components/weaponList'
import {handleSave, handleEdit} from './components/WeaponsBackend'
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import {Dropdown, Button,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

function App() {

const [buttonPopup, setbuttonPopup] =useState(false);
const [editPopup, seteditPopup] =useState(false);
const [addFormData, setAddFormData] =useState({
  weaponName: '',
  weaponRange: '',
  weaponAgility: '',
  weaponImpact: '',
  weaponDescription: ''
})

const handleAddFormChange =(event) => {
  event.preventDefault();

  const fieldName= event.target.getAttribute('name');
  const fieldValue= event.target.value;

  
  const newFormData= {...addFormData};
  newFormData[fieldName]=fieldValue;
  setAddFormData(newFormData);
}

const handleAddFormSubmit= (event) => {
  event.preventDefault();
  let cost=(addFormData.weaponRange*4+addFormData.weaponAgility*2+addFormData.weaponImpact*2)
  handleSave(addFormData.weaponName,addFormData.weaponRange,addFormData.weaponAgility,addFormData.weaponImpact,cost,addFormData.weaponDescription);
  setbuttonPopup(false);
  this.forceUpdate();
}

const handleEditFormSubmit= (event) => {
  event.preventDefault();
  let cost=(addFormData.weaponRange*4+addFormData.weaponAgility*2+addFormData.weaponImpact*2)
  handleEdit(addFormData.weaponId, addFormData.weaponName,addFormData.weaponRange,addFormData.weaponAgility,addFormData.weaponImpact,cost,addFormData.weaponDescription);
  seteditPopup(false);
}


const handleDeleteFormSubmit= (event) => {
  event.preventDefault();
  
  let url='/weapons/'+addFormData.weaponId;

  fetch(url, { method: 'DELETE' })
  .then(() => this.setState({ status: 'Delete successful' }));

  seteditPopup(false);
}




  return (
    <div className="App">
        <WeaponList> </WeaponList>
        <section style={{padding: "20px"}}>
          <button onClick={()=>setbuttonPopup(true)} className='btn btn-secondary btn-sm' style={{position: "relative", right:"10px"}}>
                  Dodaj
          </button>
                
          <button onClick={()=>seteditPopup(true)} className='btn btn-secondary btn-sm' style={{position: "relative", left:"10px"}}>
                  Edytuj
          </button>


        </section>
       

    <Popup trigger={buttonPopup}>
    <button className='btn btn-secondary btn-sm' style={{position: "fixed", right: "16px", top: "6px"}} 
    onClick={()=>setbuttonPopup(false)}> 
          Zamknij
        </button>
    <h3> Dodaj nową broń do walki wręcz</h3>
          <form onSubmit={handleAddFormSubmit}>
            <input type="text" name="weaponName" required="required" placeholder="Nazwa.."
            onChange={handleAddFormChange} />  
            <input type="number" name="weaponRange" required="required" min="0.5" max="2" step="0.5"
            onChange={handleAddFormChange}   />  
            <input type="number" name="weaponAgility" required="required" min="-2" max="5" step="1" 
            onChange={handleAddFormChange}  /> 
            <input type="number" name="weaponImpact" required="required" min="-2" max="5" step="1" 
            onChange={handleAddFormChange}  /> 
            <input type="text" name="weaponDescription" placeholder="Opis.."
            onChange={handleAddFormChange}  />  

          <button type="submit"  >Zapisz </button>
          </form>
      
    </Popup>

    <Popup trigger={editPopup}>
    <button className='btn btn-secondary btn-sm' style={{position: "fixed", right: "16px", top: "6px"}} 
    onClick={()=>seteditPopup(false)}> 
          Zamknij
        </button>
    <h3> Edytuj broń do walki wręcz</h3>
          <form onSubmit={handleEditFormSubmit}>
          <input type="number" name="weaponId" required="required" step="1"
            onChange={handleAddFormChange} /> 
            <input type="text" name="weaponName" required="required" placeholder="Nazwa.."
            onChange={handleAddFormChange} />  
            <input type="number" name="weaponRange" required="required" min="0.5" max="2" step="0.5"
            onChange={handleAddFormChange}   />  
            <input type="number" name="weaponAgility" required="required" min="-2" max="5" step="1" 
            onChange={handleAddFormChange}  /> 
            <input type="number" name="weaponImpact" required="required" min="-2" max="5" step="1" 
            onChange={handleAddFormChange}  /> 
            <input type="text" name="weaponDescription" placeholder="Opis.."
            onChange={handleAddFormChange}  />  

          <button type="submit"  >Zapisz </button>
          </form>

          <h3> Usuń broń do walki wręcz</h3>

          <form onSubmit={handleDeleteFormSubmit}>
          <input type="number" name="weaponId" required="required" step="1"
            onChange={handleAddFormChange} /> 
          <button type="submit"  >Usuń </button>
          </form>
      
    </Popup>




    </div>
  );
}

export default App;
