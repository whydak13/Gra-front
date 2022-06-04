import React from 'react'

export function handleSave(name,reach,agility,impact,cost,description){   

    const requestOptions = {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     changeOrigin: true, 
     body: JSON.stringify(  {
       "name": name,
       "reach": reach,
       "agility": agility,
       "impact": impact,
       "cost": cost,
       "description": description
     },)
   } ;
   fetch('/weapons', requestOptions)
       .then(response => response.json());
       //.then(data => this.setState({ postId: data.id }));
 
     console.log('Save Clicked');
     
     //@PostMapping("/weapons")
   } 
 
  export function handleEdit(id, name,reach,agility,impact,cost,description)
   {
 
     const requestOptions = {
       method: 'PUT',
       mode: 'cors',
       headers: { 'Content-Type': 'application/json' },
       changeOrigin: true, 
       body: JSON.stringify(  {
         "name": name,
         "reach": reach,
         "agility": agility,
         "impact": impact,
         "cost": cost,
         "description": description
       },)
     } ;
     const encodedValue = encodeURIComponent(id);

     let url='/weapons/'+id;
     fetch(url, requestOptions)
         .then(response => response.json());
         //.then(data => this.setState({ postId: data.id }));
 
     console.log('Edit '+id);
   }
  