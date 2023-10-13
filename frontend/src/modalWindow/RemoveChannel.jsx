import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormGroup from 'react-bootstrap/FormGroup';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();

const RemoveChannel = ({ active, setActive, channelId }) => {
  const { t } = useTranslation();
  const notify = () => toast.success(t('channelDeleted'));

  const check = () => {
    socket.emit('removeChannel', { id: channelId });
    setActive(false);
    notify();
  };
  return (
    <Modal show={active} centered>
      <Modal.Header closeButton onClick={() => setActive(false)}>
        <Modal.Title className="modal-title h4">{t('deleteChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('sure')}</p>
      </Modal.Body>
      <FormGroup className="d-flex justify-content-end m-3">
        <Button
          className="me-2 btn-secondary"
          variant="secondary"
          onClick={() => setActive(false)}
        >
          {t('cancel')}
        </Button>
        <Button
          className="btn-primary"
          type="submit"
          variant="danger"
          onClick={() => check()}
        >
          {t('delete')}
        </Button>
      </FormGroup>
    </Modal>
  );
};

export default RemoveChannel;
