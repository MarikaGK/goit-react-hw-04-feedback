import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import { useFeedback } from 'providers/feedbackContext';

const App = () => {
  const { countTotalFeedback } = useFeedback();

  return (
    <main>
      <Section title="Leave your feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </main>
  );
};

export default App;
