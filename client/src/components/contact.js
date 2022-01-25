import React, {useState} from 'react'
import emailjs from 'emailjs-com';

const info = {
  name: '',
  email: '',
  message: ''
}

export default function Contact () {

  const [contactInfo, setInfo] = useState(info)

  function handleText (e) {
    const name = e.target.name;
    const value = e.target.value;
    setInfo(prev => ({
      ...prev, [name]: value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(contactInfo)
    emailjs.send('service_sa9uvh2', 'template_bamcn7j', contactInfo, 'user_VkSshblaLMjakGWAw9Ql1').then(()=>{
      alert('Your message was sent!')
    })
    setInfo({
      name: '',
      email: '',
      message: ''
    })
  }


  return (<div className='wrapper'>
    <form onSubmit={handleSubmit} className='styledForm'>
      <div className='title'>Contact Form</div>
      <label>Name</label>
      <input name='name' value={contactInfo.name} onChange={handleText} className='input shared' type='text'></input>
      <br/>
      <label>Email</label>
      <input name='email' value={contactInfo.email} onChange={handleText} className='input shared' type='text'></input>
      <br/>
      <label>Message</label>
      <textarea name='message' value={contactInfo.message} onChange={handleText} className='message textArea shared'></textarea>
      <br/>
      <input className='button send' value='Send' type='submit'></input>
    </form>
  </div>)
}