function Validation(values) {
    let error = {};
    const email_pattern = /^\S+@\S+\.\S+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.name.trim() === "") {
      error.name = "Name should not be empty";
    } else {
      error.name = "";
    }
  
    if (values.email.trim() === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email.trim())) {
      error.email = "Invalid email format";
    } else {
      error.email = "";
    }
  
    if (values.password.trim() === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password.trim())) {
      error.password =
        "Password should contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default Validation;
  