import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import cn from 'classnames';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
// import { addModalSchema } from '../schemas';

const socket = io();

const RenameChannel = ({ active, setActive, channelId }) => {
  const { t } = useTranslation();
  const channels = useSelector((state) => state.channelsReducer.channels);
  const modalName = channels.map((i) => i.name);
  const notify = () => toast.success(t('channelRenamed'));

  const addModalSchema = yup.object().shape({
    modalName: yup.string().trim().min(3).max(20)
      .required()
      .notOneOf(modalName, t('mustUnique')),
  });

  const {
    values, errors, handleChange, handleSubmit,
  } = useFormik({
    initialValues: {
      modalName: '',
    },
    validationSchema: addModalSchema,
    validateOnChange: false,
    errorToken: false,
    onSubmit: () => {
      socket.emit('renameChannel', { id: channelId, name: values.modalName });
      setActive(!active);
      values.modalName = '';
      notify();
    },
  });

  const classError = cn('mb-2 form-control', {
    'mb-2 form-control is-invalid': errors.modalName,
  });
  const inputRef = useRef(null);

  const showModal = () => {
    inputRef.current.focus();
  };
  // onClick={() => setActive(false)}
  return (
    <Modal show={active} centered onShow={showModal} onHide={() => setActive(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{t('renameChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <input
              ref={inputRef}
              name="modalName"
              id="modalName"
              className={classError}
              value={values.modalName}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.modalName}</div>
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              type="button"
              className="me-2"
              onClick={() => setActive(false)}
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              {t('send')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannel;
