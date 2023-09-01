import PropTypes from 'prop-types';
import { Button, FeedbackList } from './Feedback.styled';

export const Feedback = ({ options, onAddFeedback }) => {
  const obj = Object.keys(options);
  return (
    <div>
      <FeedbackList>
        {obj.map((option, ind) => {
          return (
            <li key={ind}>
              <Button type="button" onClick={() => onAddFeedback(option)}>
                {option}
              </Button>
            </li>
          );
        })}
      </FeedbackList>
    </div>
  );
};

Feedback.protoType = {
  onAddFeedback: PropTypes.func,
};
