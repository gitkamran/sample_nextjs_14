//check empty fields
export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};

//check email format
export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

//check mobile format
export const isMobile = (mobile) => {
  const re = /^09[0|1|2|3|4|9][0-9]{8}$/;

  return re.test(mobile);
};

//check password length
export const isLength = (password) => {
  if (password.length < 8) return true;
  return false;
};

//check password char
export const isPassword = (password) => {
  const re =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{8,16}$/;

  return re.test(password);
};

//check password match

export const isMatch = (password, cf_password) => {
  if (password === cf_password) return true;
  return false;
};
