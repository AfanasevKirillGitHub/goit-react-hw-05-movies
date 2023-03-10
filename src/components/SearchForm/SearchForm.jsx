import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Input, SubmitButton, Form } from './SearchForm.styled';
import { BsSearch } from 'react-icons/bs';
export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.error('Please enter your request');
      resetForm();
      return;
    }
    onSubmit(searchValue);
    resetForm();
  };

  const resetForm = () => {
    setSearchValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={searchValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Please enter your request"
      />

      <SubmitButton type="submit">
        <BsSearch />
      </SubmitButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
