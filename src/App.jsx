import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    // ...same JSX as previous commit, but add:
    // value={email} onChange={(e) => setEmail(e.target.value)}
    // value={password} onChange={(e) => setPassword(e.target.value)}
    // form onSubmit={handleLogin}
  );
};

export default App;