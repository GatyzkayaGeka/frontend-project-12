/* eslint-disable import/prefer-default-export */

import * as yup from 'yup';
import { useSelector } from 'react-redux';

export const loginSchema = yup.object().shape({
  username: yup.string().min(3).max(20).required(),
  password: yup.string().min(4).max(30).required(),
});

export const messageSchema = yup.object().shape({
  messageBody: yup.string().required(),
});

export const registrationSchema = yup.object().shape({
  username: yup.string().min(3).max(20).required(),
  password: yup.string().min(4).max(30).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required(),
});

// eslint-disable-next-line no-use-before-define
const channelNames = channels.map((i) => i.name);
// eslint-disable-next-line react-hooks/rules-of-hooks
const channels = useSelector((state) => state.channelReduser.channels);

export const addModalSchema = yup.object().shape({
  modalName: yup.string().min(3).max(20).required()
    .notOneOf(channelNames, 'Должно быть уникальным'),
});
