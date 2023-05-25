const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className="buttonList">
      {options.map((option) => (
        <li key={option}>
          <button type='button' onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  </>
);

export default FeedbackOptions;
