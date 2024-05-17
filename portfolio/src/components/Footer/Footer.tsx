import { getEnvValue, getRelativeTime } from "../../util/util";
import { Social, SocialProps } from "../Social/Social";
import "./Footer.css";

function Footer({ socialData }: { socialData: SocialProps }) {
  const timestamp = getEnvValue("VITE_LAST_UPDATED");

  return (
    <div className="footer text-center py-8 px-4">
      <p>
        Thanks for viewing my website! If you want to see more or get in contact
        checkout my social links.
      </p>
      <Social {...socialData} />
      {timestamp ? (
        <p className="mt-2 text-sm">
          Website last updated{" "}
          <a href="https://github.com/LukeHollandDev/portfolio" className="underline" target="_blank" rel="noopener noreferrer">
            {getRelativeTime(timestamp)}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}

export default Footer;