import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>About Me</h2>
      <img src="images/shana.jpg" alt="Shana Valencia" style={{ width: '250px', borderRadius: '50%', marginBottom: '20px' }} />
      
      <p style={{ fontSize: '1.1rem', fontWeight: 'bold', lineHeight: '1.5', marginBottom: '40px' }}>
        Hello! I'm Shana Faith Valencia. I like editing, listening to music, and I am interested in game development. 
        I am a 3rd year BSCS student studying in De La Salle Lipa.
      </p>
      
      {/* Mini 3x3 Gallery */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <img src="images/gallery2.jpg" alt="Gallery 1" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
        <img src="images/gallery1.jpg" alt="Gallery 2" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
        <img src="images/gallery3.jpg" alt="Gallery 3" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
    </section>
  );
};

export default AboutMe;
