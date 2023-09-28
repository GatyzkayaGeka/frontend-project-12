import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import AddingChannel from './AddingChannel';

const FormMes = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: { messageBody: '' },
    onSubmit: ({ messageBody }) => {
      console.log(messageBody);
      formik.resetForm();
    },
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
