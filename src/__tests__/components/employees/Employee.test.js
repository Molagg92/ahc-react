import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Employee from './../../../components/employees/Employee';


describe('Employee', () => {
  it('should render employee details correctly', () => {
    // Arrange
    const testEmployee = {
      id: '1',
      names: 'John Doe',
      location: 'Example Location',
      issue: 'Example Issue',
    };

    // Act
    const { getByText } = render(<Employee {...testEmployee} whenEmployeeClicked={() => {}} />);

    // Assert
    expect(getByText(`${testEmployee.location} - ${testEmployee.names}`)).toBeInTheDocument();
    expect(getByText(testEmployee.issue)).toBeInTheDocument();
  });

  // it('should call whenEmployeeClicked when clicked', () => {
  //   // Arrange
  //   const testEmployee = {
  //     id: '1',
  //     names: 'John Doe',
  //     location: 'Example Location',
  //     issue: 'Example Issue',
  //   };
  //   const mockClickHandler = jest.fn();

  //   // Act
  //   const { container } = render(<Employee {...testEmployee} whenEmployeeClicked={mockClickHandler} />);
  //   fireEvent.click(container.querySelector('div'));

  //   // Assert
  //   expect(mockClickHandler).toHaveBeenCalledWith(testEmployee.id);
  // });
});