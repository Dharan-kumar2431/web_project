import React from 'react';
import { useState } from 'react';
import testimonial from './images/testimonial.png';
import profile from './images/profile.jpg';
import './testimonial.css';
import {Image,Button} from 'react-bootstrap';


function Testimonial(){

    const heading="My Testimonial"
    const[values,setValues]=useState({
     firstname:"",
     lastname:"",
     email:"",
     phonenumber:"",
    });
    const handlefirstnameinputchange=(event) =>{
      setValues({...values,firstname:event.target.value})
    }
    const handlelastnameinputchange=(event) =>{
      setValues({...values,lastname:event.target.value})
    }
    const handleemailinputchange=(event) =>{
      setValues({...values,email:event.target.value})
    }
    const handlephonenumberinputchange=(event) =>{
      setValues({...values,phonenumber:event.target.value})
    }
  
  


     return(

         <div>
<h2 class="headingtestimonial">{heading}</h2>
     <Image className="Testimoniallogo" src={testimonial} alt="Testlogo"></Image>
     <input 
     onChange={handlefirstnameinputchange}
     value={values.firstname}
     class="input1" 
     type="text"
     name="First name" 
     placeholder="First name"/>
     <input 
     onChange={handlelastnameinputchange}
     value={values.lastname}
     class="input2" 
     type="text" 
     name="Last name" 
     placeholder="Last name"/>
     <input 
     onChange={handleemailinputchange}
     value={values.email}
     class="input3" 
     type="email" 
     name="Email" 
     placeholder="Email"/>
     <input 
     onChange={handlephonenumberinputchange}
     value={values.phonenumber}
     class="input4" 
     type="tel" 
     name="Phone Number" 
     placeholder="Phone Number"/>
     <label class="label1">What is the experience in DataDNA?</label>
     <textarea class ="textarea1" rows="4" cols="50" name="Comment1" placeholder="Your comment here.."/>
     <label class="label2">What are your top learning?</label>
     <textarea class ="textarea2" rows="4" cols="50" name="Comment2" placeholder="Your comment here.."/>
     <label class="label3">Would you like recommend us to your friend?</label>
     <input
     class="radiono"
     type="radio"
     name="yes"
     value="Yes"/>
     <input
     class="radioyes"
      type="radio"
      name="yes"
      value="Yes"/>
      <label class="label4">Yes</label>
      <label class="label5">No</label>
      <label class="label6">Anything else would you like to add?</label>
      <textarea class ="textarea3" rows="4" cols="50" name="Comment2" placeholder="Your comment here.."/>
      <Button className="buttontestimonial">SUBMIT</Button>
      {Testimonial}
      <div class="testimonial-box">
      <Button className="view-more">View More</Button>
      </div>
      <label class="person1">Monica MGM</label>
      <label class="Review">Review:⭐⭐⭐⭐</label>
      <Image className="profile-img" src={profile} alt=""/>
      <p class="content">Positive:  Communication,Professionalism,Quality 
      <br/><br/>Great learning experience,upto date concept been taught is impressive.
      <br/>Thanks for the support sir.</p>
      
      </div>
     
     );
 }

 export default Testimonial;