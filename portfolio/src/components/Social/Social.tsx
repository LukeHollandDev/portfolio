import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareLetterboxd,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface SocialProps {
  LinkedIn: string;
  GitHub: string;
  Letterboxd: string;
  YouTube: string;
  Email: string;
}

export function Social({
  LinkedIn,
  GitHub,
  Letterboxd,
  YouTube,
  Email,
}: SocialProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-2">
      <div>
        <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
      <div>
        <a href={GitHub} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </a>
      </div>
      <div>
        <a href={Letterboxd} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareLetterboxd} size="2xl" />
        </a>
      </div>
      <div>
        <a href={YouTube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareYoutube} size="2xl" />
        </a>
      </div>
      <div>
        <a href={Email} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
        </a>
      </div>
    </div>
  );
}
