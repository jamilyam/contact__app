import React from 'react';
import ContactItem from './ContactItem';

function ContactList(props){
  return(
    <div>
      {props.contacts.map((item)=>{
        return(
          <ContactItem 
            item={item}
            key={item.id}
            editContact={props.editContact}
            removeContact={props.removeContact}
          />
        ) 
      })}
    </div>
  )
}
export default ContactList;
