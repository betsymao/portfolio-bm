import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <>
      <section id="about" className="child">
        
        <h1><span className="declaration">const</span> <span className="variable">developer</span> = <span className="value">"betsy mao"</span>;</h1>

        <div className="comment">

          <p>// to do</p>

          <TypeAnimation
            sequence={[
              '// work on',
              1000,
              '// work on fixing bugs',
              1000,
            ]}
            speed={40}
            repeat={0}
          />
        </div>
        
      </section>
    </>
  );
}

export default About;