import React, { useEffect } from 'react';

const Chat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Перенаправить на страницу входа при отсутствии токена
    }
  }, [navigate]);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <span>Chat</span>
      </div>
    </div>
  );
};

export default Chat;
