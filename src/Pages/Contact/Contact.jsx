import React, { useState } from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('Send Message');
    const[alert, setAlert] = useState('');
    const [statusType, setStatusType] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(
            (f) => ({...f, [name]:value})
        )
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStatus('...Sending')
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Chandu',
                from_email: form.email,
                to_email: 'chanduthalati@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(
            setTimeout(()=> {
                setStatus('Sent');
                setStatusType('success')
                setAlert('Thank you for the message 😊');
                setForm({ name: '', email: '', message: '' });
                setTimeout(()=>{
                    setStatus('Send Message');
                    setAlert('');
                },2200)
            },2000)
        ).catch(
            (e) => {
                console.log(e);
                setStatusType('failure')
                setAlert('Your response is not recieved')
            }
        )
    }

  return (
    <section className='con-sec' id='contact'>
        <div className="sec-body">
            <div className={`overlay ${alert ? 'blur' : ''}`}>
                <h1>Let's Connect</h1>
                <form className="main-area" onSubmit={handleFormSubmit}>
                    <label className='name-input'>
                        Name:
                        <input type="text" name = 'name' value={form.name} placeholder='Your name' required onChange={handleChange} />
                    </label>
                    <label className='email-input'>
                        Email:
                        <input type="email" name = 'email' value={form.email} placeholder='xxx@gmail.com' required onChange={handleChange} />
                    </label>
                    <label className='name-input'>
                        Message:
                        <textarea type="text" name = 'message' value={form.message} placeholder='Feel free to express thoughts...' rows={4} onChange={handleChange} />
                    </label>
                    <button type='submit'> {status} </button>
                </form>
            </div>
            {alert && <p className={`alert ${statusType}`}>{alert}</p>}
        </div>
    </section>
  )
}

export default Contact