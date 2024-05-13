import "./Introduction.css";

function Introduction() {
  return (
    <div className="grid grid-cols-12 gap-4 justify-items-center">
      <div className="col-span-12 sm:col-span-3">
        <div className="relative">
          <img
            src="/me.jpg"
            alt="Picture of me on a hike in Dumbarton."
            title="Picture of me on a hike in Dumbarton."
            className="rounded-full image-border w-64"
          />
          <a
            href="https://barclays.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/barclays_logo.png"
              alt="Barclays logo."
              title="Barlcays logo."
              className="max-w-16 bottom-0 p-2 absolute rounded-full image-border"
            />
          </a>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9 content-center *:my-3">
        <p>
          Hey! My name is Luke Holland and I am a Software Engineer working at
          Barclays.
        </p>
        <p>
          I am very passionate about creating software that solves real-world
          problems to help people which leads me to developing many applications
          in my free time.
        </p>
        <p>
          I try my best to keep up to date with latest technology and news in
          the industry, I am always looking for opportunities to grow and learn.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
