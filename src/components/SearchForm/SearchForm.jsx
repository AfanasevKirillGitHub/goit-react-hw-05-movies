import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={searchValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Please enter your request"
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
