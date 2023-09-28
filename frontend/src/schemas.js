/* eslint-disable import/prefer-default-export */

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().min(3).max(20).required(),
  password: yup.string().min(4).max(30).required(),
});

export default loginSchema;
