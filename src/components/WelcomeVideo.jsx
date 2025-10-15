import "./WelcomeVideo.scss";

export default function WelcomeVideo() {
  return (
    <section className="welcome-video">
      <div className="container">
        <h2>Welcome to Topfrançais</h2>
        <p>
          Watch this short video to learn how Topfrançais can help you achieve
          fluency in French with confidence.
        </p>

        <div className="video-wrapper">
          <iframe
            src="https://youtube.com/embed/es6LjyWZmZI?si=qNOFa1Kl_WegLZXi" // 👈 replace this link
            title="Welcome to Topfrançais"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
