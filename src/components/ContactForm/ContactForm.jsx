import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';

const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChahge = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createContact({
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          onChange={handleChahge}
          value={name}
          required
        />
      </FormLabel>
      <FormLabel htmlFor="name">
        Number
        <FormInput
          type="tel"
          name="number"
          onChange={handleChahge}
          value={number}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func,
};

export default ContactForm;
