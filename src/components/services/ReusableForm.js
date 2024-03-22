import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <select name="type" placeholder="Service Type">
        <option value="standard">Standard</option>
        <option value="deep_cleaning">Deep Cleaning</option>
      </select>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Emplyee Names' />
        <input
          type='text'
          name='location'
          placeholder='Employee Address' />
        <textarea
          name='issue'
          placeholder='Employee issue? [working test].' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;





/////////////////////////////////////////////////////////////////////////////




// import React, { useState } from "react";
// import PropTypes from "prop-types";

// function ReusableForm(props) {
//   const [formData, setFormData] = useState({
//     names: "",
//     type: "standard", // Default to standard service type
//     location: "",
//     issue: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.formSubmissionHandler(formData); // Pass formData to parent component
//     // Reset form fields after submission
//     setFormData({
//       names: "",
//       type: "standard",
//       location: "",
//       issue: "",
//     });
//   };

//   return (
//     <React.Fragment>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='names'
//           placeholder='Employee Names'
//           value={formData.names}
//           onChange={handleChange}
//         />
//         <select
//           name='type'
//           value={formData.type}
//           onChange={handleChange}
//         >
//           <option value='standard'>Standard</option>
//           <option value='deep_cleaning'>Deep Cleaning</option>
//         </select>
//         <input
//           type='text'
//           name='location'
//           placeholder='Employee Address'
//           value={formData.location}
//           onChange={handleChange}
//         />
//         <textarea
//           name='issue'
//           placeholder='Employee issue? [working test].'
//           value={formData.issue}
//           onChange={handleChange}
//         />
//         <button type='submit'>{props.buttonText}</button>
//       </form>
//     </React.Fragment>
//   );
// }

// ReusableForm.propTypes = {
//   formSubmissionHandler: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

// export default ReusableForm;
