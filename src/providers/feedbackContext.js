const { createContext, useContext, useState } = require('react');

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = e => {
    const btnName = e.target.name;
    if (btnName === 'good') {
      setGood(good + 1);
      console.log(good, neutral, bad, countTotalFeedback(), countPositiveFeedbackPercentage());
    }
    if (btnName === 'neutral') setNeutral(neutral + 1);
    if (btnName === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => good + bad + neutral;
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {return Math.floor((good / countTotalFeedback()) * 100)} return 0;
  };

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        options,
        handleIncrement,
        countTotalFeedback,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
