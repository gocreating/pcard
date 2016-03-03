import { isEmail } from 'validator';

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

export default {
  type: String,
  validate: {
    validator: validateEmail,
    message: 'invalid email',
  },
};