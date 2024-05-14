import React, { useState } from 'react';
import '../App.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });

        if (value.trim() === '') {
            setErrors({ ...errors, [name]: 'This field is required' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }

        if (name === 'email' && !emailRegex.test(value)) {
            setErrors({ ...errors, email: 'Invalid email address' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {
            name: form.name.trim() === '' ? 'This field is required' : '',
            email: form.email.trim() === ''
                ? 'This field is required'
                : !emailRegex.test(form.email)
                ? 'Invalid email address'
                : '',
            message: form.message.trim() === '' ? 'This field is required' : '',
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((msg) => msg !== '');
        if (!hasErrors) {
            console.log('Form submitted:', form);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={() => {
                        if (form.name.trim() === '') {
                            setErrors({ ...errors, name: 'This field is required' });
                        }
                    }}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={() => {
                        if (form.email.trim() === '') {
                            setErrors({ ...errors, email: 'This field is required' });
                        } else if (!emailRegex.test(form.email)) {
                            setErrors({ ...errors, email: 'Invalid email address' });
                        }
                    }}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={() => {
                        if (form.message.trim() === '') {
                            setErrors({ ...errors, message: 'This field is required' });
                        }
                    }}
                />
                {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
