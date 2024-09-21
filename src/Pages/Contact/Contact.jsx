import * as yup from "yup"
import './Contact.css'
import { useState } from 'react'
const Contact = () => {
  function handlesubmit(event) {
    event.preventDefault();
    testValidation();
   
   }
   const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:''
  })
  const [errors, setErrors] = useState({});
  function handleChange(event){
    var value=event.target.value;
    const key=event.target.name;
    setFormData({
      ...formData,
      [key]:value
    })
    setErrors({ ...errors, [event.target.name]: '' });
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    message: yup.string().required('Message is required'),
  });
  async function testValidation() {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Validation passed");
      setErrors({});
      
    } catch (err) {
      const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
      
        setErrors(validationErrors);
    }
  }
  return (
    <div id="contactPage">
      <h1>Contact Us</h1>
     <form onSubmit={handlesubmit}>
      <div id="name">
        <label htmlFor="Name">Name: </label>
        <input type="text" onChange={handleChange} id="Name" 
        value={formData.name} name="name"
        style={{
          borderColor: errors.name? 'red' : '#ccc',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        />
        <br />
      {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

      </div>
      <br />
      <div id="email">
        <label htmlFor="mail">Email: </label>
        <input type="email" name="email" id="mail"  value={formData.email}
        onChange={handleChange} 
        style={{
          borderColor: errors.email ? 'red' : '#ccc',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        
        />
        <br />
     {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

      </div>
      <br />
      <div id="message">
        <label htmlFor="message">Message: </label>
        <br /> <br />
        <textarea name="message" id="message"  value={formData.message}
        onChange={handleChange}
        style={{
          borderColor: errors.message? 'red' : '#ccc',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        ></textarea>
         {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>
      <br />
      <input type="submit" value="Send" id="submit"/>
     </form>
    </div>
   
  )
}

export default Contact