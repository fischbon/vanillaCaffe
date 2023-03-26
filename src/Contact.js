import './css/Contact.css'
import {useState} from "react";

function Contact (){
    const [first_name, setFirst_name] =useState("");
    const [last_name, setLast_name] =useState("");
    const [email, setEmail] =useState("");
    const [message, setMessage] = useState("");

  const handleSubmit=(e) =>{
    e.preventDefault();
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setMessage("");
    console.log('Form submitted!');
  };

  return(
    <div className='contact'>
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="first_name">First name:</label>
            <input
            id="first_name" 
            type="text" 
            placeholder="First name" 
            name="first_name" 
            value={first_name} 
            onChange={(e)=>setFirst_name(e.target.value)} 
            />
          </div>
          <div className='Field'>
            <label htmlFor='last_name'>Last name:</label>
            <input
            id='last_name'
            type="text"
            placeholder='Last name'
            name='last_name'
            value={last_name}
            onChange={(e)=>setLast_name(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor='email'>e-mail:</label>
            <input
            id='email'
            type="text"
            placeholder='e-mail'
            name='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor='message'>message:</label>
            <input
            id='message'
            type="text"
            placeholder="You're message"
            name='message'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            </div>
          <button disabled={!first_name || !last_name || !email || !message} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
    </div>
  );
}

export default Contact;