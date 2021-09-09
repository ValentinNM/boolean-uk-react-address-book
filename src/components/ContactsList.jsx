function ContactsList(props) {
  const { contacts, hideForm, setHideForm, hideEditForm, setHideEditForm} = props;

  console.log("inisde ContactsList: ",  hideEditForm ,setHideEditForm )
  return (
    <aside className="contacts-section light-shadow">
      <header>
        <h2>Contacts</h2>
        <button
          onClick={() => setHideForm(!hideForm)}
          className="button new-contact-btn"
        >
          {hideForm ? "Create" : "Cancel"}
        </button>
      </header>
      <ul  className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName, address } = contact;

          console.log("Contacts list props inside ContactsList: ", contact)

          return (
            <li key={index}>
              <h3>
                {firstName} {lastName}
              </h3>
              {/* <p> */}
                {/* {address.street}, {address.postCode} */}
              {/* </p> */}
              <button
              className= "button"
              onClick={() => setHideEditForm(!hideEditForm)}
              >Edit</button>
              <button className="button">View</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ContactsList;