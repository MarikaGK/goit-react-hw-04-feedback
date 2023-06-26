import { useFeedback } from 'providers/feedbackContext';

const FeedbackOptions = () => {
  const { options, handleIncrement } = useFeedback();

  return (
    <>
      <ul className="buttonList">
        {options.map(option => (
          <li key={option}>
            <button type="button" name={option} onClick={handleIncrement}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackOptions;
