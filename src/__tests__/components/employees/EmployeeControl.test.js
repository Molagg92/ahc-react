import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeControl from './../../../components/employees/EmployeeControl';

describe('EmployeeControl', () => {
  it('renders the Add Employee button by default', () => {
    // Arrange
    const { getByText } = render(<EmployeeControl />);

    // Assert
    expect(getByText('Add Employee')).toBeInTheDocument();
  });

  // it('toggles the visibility of the form when Add Employee button is clicked', () => {
  //   // Arrange
  //   const { getByText, queryByTestId } = render(<EmployeeControl />);
  //   const addButton = getByText('Add Employee');
  
  //   // Act
  //   fireEvent.click(addButton);
  
  //   // Assert
  //   expect(queryByTestId('new-employee-form')).toBeInTheDocument();
  // });
});