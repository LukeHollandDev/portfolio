import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareLetterboxd,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export interface SocialProps {
  LinkedIn: string;
  GitHub: string;
  Letterboxd: string;
  YouTube: string;
  Email: string;
}

const IconContainer = ({ children }: { children: ReactNode }) => (
  <div className="hover:scale-125 ease-in duration-200">{children}</div>
);

export function Social({
  LinkedIn,
  GitHub,
  Letterboxd,
  YouTube,
  Email,
}: SocialProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-2">
      <IconContainer>
        <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </IconContainer>
      <IconContainer>
        <a href={GitHub} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </a>
      </IconContainer>
      <IconContainer>
        <a href={Letterboxd} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareLetterboxd} size="2xl" />
        </a>
      </IconContainer>
      <IconContainer>
        <a href={YouTube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareYoutube} size="2xl" />
        </a>
      </IconContainer>
      <IconContainer>
        <a href={Email} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
        </a>
      </IconContainer>
    </div>
  );
}
