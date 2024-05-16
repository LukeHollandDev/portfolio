import { Social, SocialProps } from "../Social/Social";
import "./Footer.css";

function Footer({ socialData }: { socialData: SocialProps }) {
  return (
    <div className="footer text-center py-8 px-4">
      <p>
        Thanks for viewing my website! If you want to see more or get in contact
        checkout my social links.
      </p>
      <Social {...socialData} />
      {import.meta.env.VITE_LAST_UPDATED ? (
        <p>Webiste updated {import.meta.env.VITE_LAST_UPDATED}.</p>
      ) : null}
    </div>
  );
}

export default Footer;
