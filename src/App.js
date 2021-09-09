import { useEffect, useState } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  // const [addresses, setAddresses] = useState([]);
  const [hideForm, setHideForm] = useState(true);
  const [hideEditForm, setHideEditForm] = useState(true);
  // const [contactEdit, setContactEdit] = useState(null)

  // [TODO] Write a useEffect to fetch contacts here...
  // useEffect(() => {
  //   Promise.all([
  //     fetch("http://localhost:3030/contacts").then((res) => res.json()),
  //     fetch("http://localhost:3030/addresses").then((res) => res.json())
  //   ]).then((fetchedContacts) =>  setContacts(fetchedContacts))
  // }, []);

  useEffect(() => { 
    fetch(`http://localhost:3030/contacts`)
    .then((res) => res.json())
    .then((fetchedContacts) =>
      setContacts(fetchedContacts))
  }, []);
  // console.log("contacts inside APP: ", contacts);

  const [userToEdit, setUserToEdit] = useState(null);
  // console.log("userToEdit state: ", userToEdit);

  return (
    <>
      <ContactsList
        contacts={contacts}
        // addresses={addresses}
        hideForm={hideForm} setHideForm={setHideForm}
        hideEditForm={hideEditForm} setHideEditForm={setHideEditForm}
        setUserToEdit={setUserToEdit}
      />
      <main>{
      !hideForm && <CreateContactForm
      contacts={contacts}
      setContacts={setContacts}
      // userToEdit={userToEdit}
      />},
      {!hideEditForm &&
      <EditContactForm userToEdit={userToEdit}/>}
      </main>
    </>
  );
}


