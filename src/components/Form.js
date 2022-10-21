import React from "react";

const Form = (props) => {
  const onChange = (evt) => {
    const { name, value } = evt.target;
    props.change(name, value);
  };

  const formSubmit = (evt) => {
    evt.preventDefault();
    props.submit();
  };
  return (
    <form onSubmit={onChange}>
      <label>
        Name
        <input
          type="name"
          name="name"
          placeholder="Enter your name"
          value={props.values.name}
          onChange={onChange}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={props.values.email}
          onChange={onChange}
        />
      </label>

      <label>
        Role
        <select value={props.values.role} name="role" onChange={onChange}>
          <option value="">Choose your role</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
          <option value="Student">Student</option>
        </select>
      </label>
      <input type="submit" value="Create" />
    </form>
  );
};

export default Form;
