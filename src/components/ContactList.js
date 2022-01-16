import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }; 
    // const contacts = [
    //     {
    //         "id": "5f8c14f7-52fd-405d-b9ee-ea1715bcb5b0",
    //         "name": "asansjdn",
    //         "email": "ajsndnajn12ajsc"
    //     }
    // ];
    const renderContactList = [...props.contacts].reverse().map((contact)=>{ //last on first
        return(
            <ContactCard 
                contact = {contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}/>
        );
    })
    return(
        <div className="main">
            <h2>Contact list
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
        
    );
}

export default ContactList;