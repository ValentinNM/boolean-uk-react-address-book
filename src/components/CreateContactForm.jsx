import { useState } from "react";


function CreateContactForm(props) {

  // [TODO] Write form handlers here and POST requests here...
  
  const {contacts,setContacts, userToEdit} = props;

  const [addressInputs, setAddressInputs] = useState({ 
      city: "", 
      postCode: "",
      street: ""
  })    

  const [contactInputs, setContactInputs] = useState({
    firstName: "",
    lastName: "",
    blockContact: false
    // addressId: ""
  })

  // console.log("create contact form state: ", contactInputs, addressInputs)
  const handleSubmit = (event) => {
    event.preventDefault();

  const newUserAddress = { 
    city: addressInputs.city, 
    postCode: addressInputs.postCode,
    street: addressInputs.street
  }

  const fetchOptions = { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(newUserAddress)
  };

  fetch("http://localhost:3030/addresses", fetchOptions)
  .then((res) => res.json())
  .then((newAddress) => { 
    console.log(
      "addressInputs:", addressInputs ,
    "\n" , "newUserAddress: ", newUserAddress);
    // setAddressInputs({...addressInputs, newAddress})

    const userNewSubmission = { 
      firstName: contactInputs.firstName,
      lastName: contactInputs.lastName,
      blockContact: contactInputs.blockContact,
      addressId: newAddress.id
    };

    const fetchOptions = { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify(userNewSubmission)
    };
  
    fetch("http://localhost:3030/contacts", fetchOptions)
    .then((res) => res.json())
    .then((newContact) => { 
      console.log(
        "contactInputs:", contactInputs ,
      "\n" , "newContact: ", newContact)
      const contactToAdd = {
        ...newContact,
        address: newAddress,
      }
      setContactInputs({...contactInputs, userNewSubmission})
      setContacts([...contacts, newContact]);
    })
  })
}

  const handleAddressInputs = event => { 

    console.log(
      "Inisde handleContactInputs: ",
      event.target.name,
      event.target.value
      )

      const inputValue = event.target.value
      const inputName = event.target.name
      console.log
      ("inputValue: ", inputValue, "\n",
      "inputName: " ,inputName, "\n",
      event.target.value
      )

      setAddressInputs({
        ...addressInputs,
        [inputName]: event.target.value
      })
  }

    const handleContactInputs = event => { 
      // console.log(
      //   "Inisde handleContactInputs: ",
      //   event.target.type,
      //   event.target.value
      //   )

        const inputType = event.target.type
        const inputName = event.target.name
        // console.log
        // ("inputType: ", inputType, "\n",
        // "inputName: " ,inputName, "\n",
        // event.target.value
        // )

        if (inputType === "checkbox"){ 
          console.log("inputType if:", inputType)
          setContactInputs({
            ...contactInputs,
            [inputName]: event.target.checked
          })
        } else { 
          setContactInputs({
            ...contactInputs,
            [inputName]: event.target.value
          })
        }
    }


  return (
    <form
    className="form-stack light-shadow center contact-form"
    onSubmit={handleSubmit}
    >
      <h1>Create Contact</h1>
      <label htmlFor="first-name-input">First Name:</label>
      <input
      id="first-name-input"
      name="firstName"
      type="text"
      onChange={handleContactInputs}
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
      id="last-name-input"
      name="lastName"
      type="text"
      onChange={handleContactInputs}
      />
      <label htmlFor="street-input">Street:</label>
      <input
      id="street-input"
      name="street"
      type="text"
      onChange = {handleAddressInputs}
      />
      <label htmlFor="city-input">City:</label>
      <input
      id="city-input"
      name="city"
      type="text"
      onChange={handleAddressInputs}
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
      id="post-code-input"
      name="postCode"
      type="text"
      onChange={handleAddressInputs}
      />
      <div className="checkbox-section">
        <input id="block-checkbox"
        name="blockContact"
        type="checkbox"
        onChange={handleContactInputs}
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateContactForm;
