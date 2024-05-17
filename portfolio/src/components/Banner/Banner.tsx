import { Social, SocialProps } from "../Social/Social";
import "./Banner.css";

function Banner({ socialData }: { socialData: SocialProps }) {
  return (
    <header className="banner py-8 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Luke Holland
      </h1>
      <p className="text-lg md:text-xl">Software Engineer</p>
      <Social {...socialData} />
    </header>
  );
}

export default Banner;
