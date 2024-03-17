import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./feedbackSection.scss";

export const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      <div className="feedback-section__likes">
        <FontAwesomeIcon className="feedback-section__like" icon={faThumbsUp} />
        <FontAwesomeIcon className="feedback-section__dislike" icon={faThumbsDown} />
      </div>

      <div className="feedback-section__saves">
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
};
