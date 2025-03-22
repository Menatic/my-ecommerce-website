import { useState, useEffect } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: message }]);

      try {
        const response = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        const data = await response.json();
        if (data.reply) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: data.reply },
          ]);
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Live Chat</h2>
      <div className="chat-box bg-light p-3 rounded" style={{ height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
            <div className={`p-2 mb-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;