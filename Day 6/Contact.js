// import React, { useState } from 'react';
// import './Contact.css';
// function ContactPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactPage;
import React from 'react'
import Gardeningplanning from './Gardeningplanning.jpg';
import './Contact.css';
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contactbg">
      <header class="header">
      {/* <img src={Gardeningplanning} width={70}></img> */}
    <a href="home" class="logo">HomeGarden</a>
    <nav class="nav-items">
      <a href="home">Home</a>
      <a href="garden">Garden Calender</a>
      <a href="remainder">Remainder</a> 
      <a href="#">Garden Journal</a>
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="reg">Register</a>
      
    </nav>
  </header>
    <div className="container-mt-5">
      <h2 className="mb-3">Contact</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="c-form-control" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="c-form-control" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="c-form-control" id="message" required />
        </div>
        <center>
        <button className="c-btn btn-danger" type="submit">
          {formStatus}
        </button></center>
      </form>
    </div>
    </div>
    //  </div>
  )
}
export default Contact