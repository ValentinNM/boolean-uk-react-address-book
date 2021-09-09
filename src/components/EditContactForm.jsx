import { useState } from "react";
import { useEffect } from "react";

    export default function EditContactForm (props) { 

        const {userToEdit } = props; 
        console.log("inside EditContactForm props: ", props);
        
        const[userToUpdate, setUserToUpdate] = useState({
            address: {
                street: "",
                city: "",
                postCode: "" 
            },
            firstName: "",
            lastName: "",
            blockContact: null
        })

        useEffect(() => {
            if(userToEdit) { 
                setUserToUpdate(inputName)    
            }
        },[userToEdit])


        const handleContactInputs = event => { 
            // console.log(
            //   "Inisde handleContactInputs: ",
            //   event.target.type,
            //   event.target.value
            //   )
      
              const inputType = event.target.type
              const inputName = event.target.name
              console.log
              ("inputType: ", inputType, "\n",
              "inputName: " ,inputName, "\n",
              event.target.value
              )
      
              if (inputType === "checkbox"){ 
                // console.log("inputType if:", inputType)
                setUserToUpdate({
                  ...userToUpdate,
                  [inputName]: event.target.checked
                })
              } else { 
                setUserToUpdate({
                  ...userToUpdate,
                  [inputName]: event.target.value
                })
              }
          }
      


        return ( 
        <form className="form-stack light-shadow center contact-form">
            <h1>Edit Selected Contact</h1>
            <label htmlFor="first-name-input">First Name:</label>
            <input
            id="first-name-input"
            name="firstName"
            type="text"
            value={userToUpdate.firstName}
            onChange={handleContactInputs}
            />
            <label htmlFor="last-name-input">Last Name:</label>
            <input
            id="last-name-input"
            name="lastName"
            type="text"
            value={userToUpdate.lastName}
            onChange={handleContactInputs}
            />
            <label htmlFor="street-input">Street:</label>
            <input
            id="street-input"
            name="street"
            type="text"
            value={userToUpdate.address.street}
            onChange={handleContactInputs}
            />
            <label htmlFor="city-input">City:</label>
            <input
            id="city-input"
            name="city"
            type="text"
            value={userToUpdate.address.city}
            onChange={handleContactInputs}
            />
            <label htmlFor="post-code-input">Post Code:</label>
            <input
            id="post-code-input"
            name="postCode"
            type="text"
            value={userToUpdate.address.postCode}
            onChange={handleContactInputs}
            />
            <div className="checkbox-section">
                <input
                id="block-checkbox"
                name="blockContact"
                type="checkbox"
                value={userToUpdate.postCode}
                onChange={handleContactInputs}
                />
                <label htmlFor="block-checkbox">Block</label>
            </div>
            <div className="actions-section">
                <button className="button blue" type="submit">Submit</button>
            </div>
        </form>
        )

    }

