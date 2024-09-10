import React, { useState, useTransition } from 'react'

const Header = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      } 
      console.log("first", error)
      // redirect("/");
    })
  };




  
  async function updateName(name) {
    return new Promise((resolve) => {
      // Simulating network delay
      setTimeout(() => {
        // Mock validation logic
        if (name.trim() === "") {
          resolve("Name cannot be empty"); // Return an error message
        } else if (name.length < 3) {
          resolve("Name must be at least 3 characters long"); // Another validation error
        } else {
          // Success scenario
          resolve("Name updated successfully"); // No error, simulating a successful response
        }
      }, 5000); // Simulate 1-second delay
    });
  }
  


  return (
    <div className='header-main'>   
     <div>Real Virtual</div>
     <div className='header-main2'>
     <div className='header-main1'>
     <input className='input' value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter here to test UseTransition' />
      <button className='button1' onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
     
      </div>
      {error && <p>{error}</p>}
      </div>
     
    </div>

  )
}

export default Header