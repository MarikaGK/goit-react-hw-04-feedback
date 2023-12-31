import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { FeedbackProvider } from 'providers/feedbackContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>
);
