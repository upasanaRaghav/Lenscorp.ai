import React from "react";
import styles from "../styles/CardSection.module.css";

export default function CardSection() {
  return (
    <section className={styles.NewServices_Container__MqkmW}>
      <section className={styles.background}>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-center">
          <h1>
            {" "}
            Services
            <div
              className="absolute left-1/2 w-40 h-1 bg-gradient-to-r from-blue-600 via-transparent to-transparent transform -translate-x-1/2"
              style={{ top: "35%", zIndex: 1 }}
            ></div>
          </h1>
          <h1 className={`${styles.AboutUsHeading} relative mb-4`}  style={{ marginBottom: "4rem" }}>
            We provide Artificial <br/> Intelligence Services
          </h1>
        </div>
        <main className={styles.main}>
          <div className={styles.cardContainer}>
            <section className={styles.cardArea}>
              <section className={styles.cardSection}>
                <div className={styles.card}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardContainer}>
                      <div className={styles.cardFront}>
                        <div
                          className={`${styles.cardFrontTp} ${styles.cardFrontTpCity}`}
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 60 60"
                            style={{ enableBackground: "new 0 0 60 60" }}
                            xmlSpace="preserve"
                            className={styles.cardFrontIcon}
                          >
                            {/* Your SVG paths */}
                          </svg>
                          <h2 className={styles.cardFrontHeading}>
                            Biometrics
                          </h2>
                          <p className={styles.cardFrontTextPrice}>1</p>
                        </div>
                        <div className={styles.cardFrontBt}>
                          <p
                            className={`${styles.cardFrontTextView} ${styles.cardFrontTextViewCity}`}
                          >
                            View me
                          </p>
                        </div>
                      </div>
                      <div className={styles.cardBack}>
                        <video
                          className={styles.videoContainer}
                          autoPlay
                          muted
                          loop
                        >
                          <source
                            className={styles.videoMedia}
                            src="https://example.com/video1.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className={styles.insidePage}>
                    <div className={styles.insidePageContainer}>
                      <h3
                        className={`${styles.insidePageHeading} ${styles.insidePageHeadingCity}`}
                      >
                        Biometrics
                      </h3>
                      <p className={`${styles.insidePageText} ${styles.lineHeight1}`}>
                        Academia-backed & In-house researched State-of-the-Art
                        Face, Fingerprint, and Iris Recognition SDKs. Enable
                        real-time automated Biometric applications on edge
                        devices even without an active internet connection.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.cardSection}>
                <div className={styles.card}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardContainer}>
                      <div className={styles.cardFront}>
                        <div
                          className={`${styles.cardFrontTp} ${styles.cardFrontTpSki}`}
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 60 60"
                            style={{ enableBackground: "new 0 0 60 60" }}
                            xmlSpace="preserve"
                            className={styles.cardFrontIcon}
                          >
                            {/* Your SVG paths */}
                          </svg>
                          <h2 className={styles.cardFrontHeading}>
                            Image Analysis
                          </h2>
                          <p className={styles.cardFrontTextPrice}>2</p>
                        </div>
                        <div className={styles.cardFrontBt}>
                          <p
                            className={`${styles.cardFrontTextView} ${styles.insidePageHeadingSki}`}
                          >
                            View me
                          </p>
                        </div>
                      </div>
                      <div className={styles.cardBack}>
                        <video
                          className={styles.videoContainer}
                          autoPlay
                          muted
                          loop
                        >
                          <source
                            className={styles.videoMedia}
                            src="https://example.com/video2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className={styles.insidePage}>
                    <div className={styles.insidePageContainer}>
                      <h3
                        className={`${styles.insidePageHeading} ${styles.insidePageHeadingSki}`}
                      >
                        Image Analysis{" "}
                      </h3>
                      <p className={`${styles.insidePageText} ${styles.lineHeight1}`}>
                        Outsource the overly complex image analysis work to our
                        intelligent machines that adaptively learn, so you can
                        focus on making the best decisions for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.cardSection}>
                <div className={styles.card}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardContainer}>
                      <div className={styles.cardFront}>
                        <div
                          className={`${styles.cardFrontTp} ${styles.cardFrontTpBeach}`}
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 60 60"
                            style={{ enableBackground: "new 0 0 60 60" }}
                            xmlSpace="preserve"
                            className={styles.cardFrontIcon}
                          >
                            {/* Your SVG paths */}
                          </svg>
                          <h2 className={styles.cardFrontHeading}>
                            Cross-Media Translation
                          </h2>
                          <p className={styles.cardFrontTextPrice}>3</p>
                        </div>
                        <div className={styles.cardFrontBt}>
                          <p
                            className={`${styles.cardFrontTextView} ${styles.insidePageHeadingBeach}`}
                          >
                            View me
                          </p>
                        </div>
                      </div>
                      <div className={styles.cardBack}>
                        <video
                          className={styles.videoContainer}
                          autoPlay
                          muted
                          loop
                        >
                          <source
                            className={styles.videoMedia}
                            src="https://example.com/video2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className={styles.insidePage}>
                    <div className={styles.insidePageContainer}>
                      <h3
                        className={`${styles.insidePageHeading} ${styles.insidePageHeadingBeach}`}
                      >
                        Cross-Media Translation{" "}
                      </h3>
                      <p className={`${styles.insidePageText} ${styles.lineHeight1}`}>
                        Will something like Siri or Alexa enhance your business?
                        We can deliver text-to-speech, text-to-image,
                        speech-to-text, speech-to-image, speech-to-image,
                        image-to-text and image-to-speech solutions for maximum
                        convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.cardSection}>
                <div className={styles.card}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardContainer}>
                      <div className={styles.cardFront}>
                        <div
                          className={`${styles.cardFrontTp} ${styles.cardFrontTpCamping}`}
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 60 60"
                            style={{ enableBackground: "new 0 0 60 60" }}
                            xmlSpace="preserve"
                            className={styles.cardFrontIcon}
                          >
                            {/* Your SVG paths */}
                          </svg>
                          <h2 className={styles.cardFrontHeading}>
                            3D Modelling and Design.
                          </h2>
                          <p className={styles.cardFrontTextPrice}>4</p>
                        </div>
                        <div className={styles.cardFrontBt}>
                          <p
                            className={`${styles.cardFrontTextView} ${styles.insidePageHeadingCamping}`}
                          >
                            View me
                          </p>
                        </div>
                      </div>
                      <div className={styles.cardBack}>
                        <video
                          className={styles.videoContainer}
                          autoPlay
                          muted
                          loop
                        >
                          <source
                            className={styles.videoMedia}
                            src="https://example.com/video2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className={styles.insidePage}>
                    <div className={styles.insidePageContainer}>
                      <h3
                        className={`${styles.insidePageHeading} ${styles.insidePageHeadingCamping}`}
                      >
                        3D Modelling and Design.
                      </h3>
                      <p className={`${styles.insidePageText} ${styles.lineHeight1}`}>
                        We offer services for automated generation of 3D assets
                        with realistic shapes and textures. We animate the 3D
                        models with voice and videos with an aim to retarget
                        voice and/or expressions with pose from a single
                        Image/video.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </main>
      </section>
    </section>
  );
}
