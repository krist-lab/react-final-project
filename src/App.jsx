import React, { useState } from 'react';
import googleIcon from "./assets/googleIcon.svg";
import facebookIcon from "./assets/facebookIcon.svg";
import twiterIcon from "./assets/twiterIcon.svg";

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
const [isMessageVisible, setIsMessageVisible] = useState(false);
const [message, setMessage] = useState({ text: '', type: '' });

const showMessageBox = (text, type) => {
  setMessage({ text, type });
  setIsMessageVisible(true);
  setTimeout(() => setIsMessageVisible(false), 3000);
};

// JSX: conditionally render message box at top
{isMessageVisible && (
  <div className={`fixed top-4 ...`}>
    {message.text}
  </div>
)}

const handleSocialLogin = (platform) => {
  showMessageBox(`Logging in with ${platform}`, 'info');
};

// JSX
<div className="flex justify-center space-x-6">
  <button onClick={() => handleSocialLogin('Google')}>
    <img src={googleIcon} alt="Google" />
  </button>
  <button onClick={() => handleSocialLogin('Facebook')}>
    <img src={facebookIcon} alt="Facebook" />
  </button>
  <button onClick={() => handleSocialLogin('Twitter')}>
    <img src={twiterIcon} alt="Twitter" />
  </button>
</div>

export default App;
