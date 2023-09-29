import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import AddingChannel from './AddingChannel';
import { messageSchema } from '../schemas';
import { addMessage } from '../slise/messagesSlice';
import useAuth from '../locales/useAuth';
import useSocket from '../locales/useSocket';

const FormMes = () => {
  const { t } = useTranslation();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { socket, newMessage } = useSocket();
  const auth = useAuth();
  const { actualChannelId } = useSelector((state) => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(addMessage(message));
    });

    return () => {
      socket.off('newMessage');
    };
  });

  const formik = useFormik({
    initialValues: { messageBody: '' },
    onSubmit: async ({ messageBody }) => {
      await newMessage({
        message: messageBody,
        channelId: actualChannelId,
        user: auth.getUsername(),
      });
      formik.resetForm();
    },
    validationSchema: messageSchema,
  });

  const initialDisabled = formik.values.messageBody === formik.initialValues.messageBody;

  return (
    <div className="mt-auto px-5 py-3">
      <Form onSubmit={formik.handleSubmit} noValidate className="py-1 border rounded-2">
        <Form.Group className="input-group">
          <Form.Control
            name="messageBody"
            autoComplete="off"
            aria-label={t('messageNev')}
            placeholder={t('enterMessage')}
            className="border-0 p-0 ps-2"
            onChange={formik.handleChange}
            value={formik.values.messageBody}
            ref={inputRef}
          />
          <Button
            type="submit"
            variant="Dark"
            className="border-0"
            disabled={!formik.isValid || initialDisabled}
          >
            <AddingChannel />
            <span className="visually-hidden">
              {t('send')}
            </span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormMes;
