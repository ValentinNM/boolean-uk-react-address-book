import { useEffect, useState } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [hideForm, setHideForm] = useState(true);

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

  console.log("contacts", contacts)

  // useEffect(() => { 
  //   fetch(`http://localhost:3030/addresses`)
  //   .then((res) => res.json())
  //   .then((fetchedAddresses) =>
  //     setAddresses(fetchedAddresses))
  // },[]);
  // console.log("addresses", addresses)

  // const userContactsToCreate = {

  // }
  

  return (
    <>
      <ContactsList
        contacts={contacts}
        addresses={addresses}
        hideForm={hideForm}
        setHideForm={setHideForm}
      />
      <main>{!hideForm && <CreateContactForm contacts={contacts}/>}</main>
    </>
  );
}


