export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I am Shreyansh</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{' '}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Skilled in full-stack development with expertise in front-end
            technologies like React, back-end frameworks such as Node.js and
            Express, and database management using MongoDB and SQL. Proficient
            in building scalable, end-to-end applications and APIs.
            <br />
            Experienced in integrating APIs, managing deployments, and ensuring
            responsive design across devices and platforms.
          </p>
        </div>
        <br />
        <a href="#Contact">
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpeg" alt="Hero Section" />
      </div>
    </section>
  )
}
