import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './component/UserForm'; // Correct the path if necessary

test('it shows 2 input and a button', () => {
  // render the component
  render(<UserForm onUserAdd={() => {}} />); // Provide a mock onUserAdd prop

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
