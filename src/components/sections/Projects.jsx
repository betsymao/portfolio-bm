function Projects() {
  return (
    <>
      <section id="projects" className="child">

        <h2><span className="declaration">const</span> <span className="variable">projects</span>;</h2>

        <div className="projects__collection">

          <div className="comment project">
            <h3>// @project <a href="https://clik-gallery-portfolio.onrender.com/" className="comment__link">clik</a></h3>
            <p>// @desc an example image host service</p>
            <p>// @tools figma, firebase, express, react, node, sass</p>
            <p>// <a href="https://github.com/betsymao/portfolio-image-host" className="comment__link">source code</a> + <a href="https://clik-gallery-portfolio.onrender.com/" className="comment__link">live demo</a></p>
          </div>

          <div className="comment project">
            <h3>// @project <a href="https://okapi-portfolio.onrender.com/" className="comment__link">okapi</a></h3>
            <p>// @desc an example e-commerce project</p>
            <p>// @tools bootstrap, figma, react, sass</p>
            <p>// <a href="https://github.com/betsymao/portfolio-store" className="comment__link">source code</a> + <a href="https://okapi-portfolio.onrender.com/" className="comment__link">live demo</a></p>
          </div>

          <div className="comment project">
            <h3>// @project <a href="https://search-the-galaxy-portfolio.onrender.com/" className="comment__link">search the galaxy</a></h3>
            <p>// @desc an example project</p>
            <p>// @tools css, react</p>
            <p>// <a href="https://github.com/betsymao/portfolio-search-the-galaxy" className="comment__link">source code</a> + <a href="https://search-the-galaxy-portfolio.onrender.com/" className="comment__link">live demo</a></p>
          </div>
          
        </div>

      </section>
    </>
  );
}

export default Projects;