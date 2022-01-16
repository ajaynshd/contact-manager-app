import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {uuid} from 'uuidv4';



function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  //instead of static contact we are managing contacts arry with useState
  const [contacts, setContacts] = useState([]);

  // retriving all the contact from loacal storage on page load
  // or when setContact fires (this function should be on top, otherwise localstorage will empty)
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[]) // adding dependency as empty

  //for add contact
    //To recieve the data form AddContact.js we added a handler
    const addContactHandler = (contact) =>{
      setContacts([...contacts,{id:uuid(), ...contact}]);// uuid for gerating unique id
    }

    //adding contact when useState's setContact fires
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]) // adding dependency as contacts
  //END add contact


  // Delete Contact through handler (parent->child->subchild)
  const removeContactHadler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" excat element={<ContactList contacts={contacts} getContactId={removeContactHadler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        </Routes>

      </Router>
      
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHadler} /> */}
    </div>
  );
}

export default App;
