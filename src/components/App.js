import React,{useState,useEffect} from 'react';
import './css/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  //instead of static contact we are managing contacts arry with useState
  const [contacts, setContacts] = useState([]);
  //To recieve the data form AddContact.js we added a handler
  const addContactHandler = (contact) =>{
    // console.log(contact);
    setContacts([...contacts,contact]);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]) // adding dependency as contacts

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
