// src/pages/Contact.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Input, Textarea, Button } from '../styles';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <Input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
        
        <label>Email:</label>
        <Input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
        
        <label>Message:</label>
        <Textarea {...register('message', { required: true })}></Textarea>
        {errors.message && <span>This field is required</span>}
        
        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
};

export default Contact;
