// import React from 'react';
// import './Styles/about.css'; // Import your CSS file for styling

// const AboutPage = () => {
//   return (
//     <div className="about-page" >
//       <div className="content">
//         <h2>About Us</h2>
//         <p>
//         Natural language processing (NLP) is an interdisciplinary subfield of computer science and linguistics. It is primarily concerned with giving computers the ability to support and manipulate speech. It involves processing natural language datasets, such as text corpora or speech corpora, using either rule-based or probabilistic (i.e. statistical and, most recently, neural network-based) machine learning approaches. The goal is a computer capable of "understanding" the contents of documents, including the contextual nuances of the language within them. The technology can then accurately extract information and insights contained in the documents as well as categorize and organize the documents themselves.
//         </p>
//       </div>
//       <div className="image">
//         <img src="https://lookinla.com/wp-content/uploads/2018/04/P1.gif" alt="About Us" style={{borderRadius:"10px",boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 1)',padding:"0px",marginBottom:"2rem"}} />
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import './Styles/about.css'; // Import your CSS file

function AboutPage() {
  return (
    <div className="container12" style={{color:"white",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <div className="content">
        {/* Content on the left side */}
        <h1 className=' outlined-text'>Dialogue Dubs</h1>
        <p style={{fontSize:"22px"}}>Say goodbye to unsynchronized visual-aural cues. Say hello to immersive storytelling with visual dubbing while retaining authentic cinematic experience across multiple languages, powered by AI.</p>
      <button style={{fontWeight:"bold"}} className='btn'>Try Demo 
      <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c43c.png" style={{height:"35px",width:"45px",marginLeft:"5px"}}/>
      </button>
      </div>
      <div className="video-container">
        {/* Video player on the right side */}
        <video controls>
          <source src="https://res.cloudinary.com/dyylqn8vb/video/upload/v1706169227/good_wthiy8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AboutPage;

