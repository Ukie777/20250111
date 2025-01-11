import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`谢谢你的留言，${name}！`);
  };

  return (
    <div className="contact">
      <h2>联系我们</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="你的电子邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="你的留言"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default Contact;