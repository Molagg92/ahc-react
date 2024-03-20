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

  // You can add more tests for other functionalities of EmployeeControl here
});