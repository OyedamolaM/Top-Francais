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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 👈 replace this link
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
