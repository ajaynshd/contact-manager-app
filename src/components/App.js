import React,{useState} from 'react';
import './css/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {

  //instead of static contact we are managing contacts arry with useState
  const [contacts, setContacts] = useState([]);
  //To recieve the data form AddContact.js we added a handler
  const addContactHandler = (contact) =>{
    // console.log(contact);
    setContacts([...contacts,contact]);
  }
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
