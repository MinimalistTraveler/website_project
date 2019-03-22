import Layout from "./Layout";
import styles from "../CSS/about.styl";
import Particles from "react-particles-js";
function About() {
  return (
    <Layout>
      <div className={styles["about"]}>
        <div className={styles["about__header"]}>
          <h1>How It All Begins</h1>
          <span />
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "random",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 350,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 1,
            height: "100%"
          }}
        />
        <article className={styles["about__content"]}>
          <section className={styles["intro"]}>
            <h2>Short History Background</h2>
            <p>
              Hi, if you clicked here you may want to get to know me a little
              bit more. It all started literally from hard work to be honest
              with you. The journey began in 2016 when I decided to make this
              move as a full stack web developer out of inspiration. I like the
              fact that being a web developer you can practically create just
              about anything. At the time I was looking for a new way of
              expressing my creativity and showcasing it. I just didn’t know
              what field would do. There where a lot of choices out there. After
              I did my research and homework I realized that this is it. This is
              what I want to do. Since then I continue to practice. Even to this
              day I still practice. It wasn’t until I gained the confidence that
              I decided to make the big leap to make this a profession. That’s
              how the journey began. To make it short. I don’t want to bore you
              with long paragraphs of text. to be honest with you. The journey
              began in 2016 when I decided to make this move as a full stack web
              developer out of inspiration. I like the fact that being a web
              developer you can practically create just about anything. At the
              time I was looking for a new way of expressing my creativity and
              showcasing it. I just didn’t know what field would do. There where
              a lot of choices out there. After I did my research and homework I
              realized that this is it. This is what I want to do. Since then I
              continue to practice. Even to this day I still practice. It wasn’t
              until I gained the confidence that I decided to make the big leap
              to make this a profession. That’s how the journey began. To make
              it short. I don’t want to bore you with long paragraphs of text.
            </p>
          </section>
          <h3 style={{ paddingTop: 20 }}>My Proficiencies</h3>
          <section className={styles["skills"]}>
            <div className={styles["skills__box"]}>
              <h5>Front End</h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3 </li>
                <li>Stylus</li>
                <li>Modern Javascript</li>
                <li>React JS / Redux</li>
              </ul>
            </div>
            <div className={styles["skills__box"]}>
              <h5>Back End</h5>
              <ul>
                <li>Node JS</li>
                <li>Restful APIs</li>
                <li>Express JS</li>
                <li>Django</li>
                <li>Python 3</li>
              </ul>
            </div>
            <div className={styles["skills__box"]}>
              <h5>Others</h5>
              <ul>
                <li>Problem Solver</li>
                <li>Command Line</li>
                <li>Version Control (Git)</li>
                <li>Critical Thinker</li>
                <li>Self Learning</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </section>
          <section className={styles["workflow"]}>
            <h2>WorkFlow</h2>
            <p>
              As a web developer, I believe it is important to have good and
              thorough planning and organization when building web applications.
              That’s why I have a method when it comes to my workflow known as
              the Plan, Develop (and/or Design), Test, and Deploy. (P.D.T.D).
            </p>
            <p>
              During the planning phase, I brainstorm and think of unique ideas
              based off of the look and feel of the business. I also collaborate
              with my clients to ensure that my ideas are in sync with their
              ideas of their business. This is also the phase where I began to
              sketch the website. (I usually do this on paper).
            </p>
            <p>
              Once planned I move on to the development phase. This is the
              longest phase. This is where I began the development of the web
              application. This can take a while depending on the extent of the
              website. I use multiple web technologies and skills to get the job
              done. Every so often I will email the client to update them on the
              website. This ensures that the client is happy with the web
              application. Changes can occur during this phase when necessary or
              requested by the client.
            </p>
            <p>
              The testing phase is when I check the project for bugs, glitches,
              and potential security holes. The testing phase all varies on the
              length of the website. Tweaks and changes only occur when bugs are
              discovered.
            </p>
            <p>
              The deployment phase is the final phase of my workflow. This is
              where the application will be ready to be accessible to everyone.
              I then give the client a final run down before deploying. The web
              application then gets deployed and will be accessible to everyone.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}

export default About;
