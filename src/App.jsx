import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl pr-12"
      />

      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
