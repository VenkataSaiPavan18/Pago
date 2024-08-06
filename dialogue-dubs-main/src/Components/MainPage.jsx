
// import React, { useState ,useRef} from 'react';
// import './Styles/mainpage.css'; // Import a CSS file for styling


// const MainPage = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [audioFile, setAudioFile] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const videoRef = useRef(null);
//   const audioRef = useRef(null);


//   const handleVideoFileChange = (event) => {
//     const file = event.target.files[0];
//     setVideoFile(file);
//   };

//   const handleAudioFileChange = (event) => {
//     const file = event.target.files[0];
//     setAudioFile(file);
//   };

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   const handleVideoUpload = () => {
//     if (videoFile) {
//       const videoUrl = URL.createObjectURL(videoFile);
//       videoRef.current.src = videoUrl;
//     }
//   };

//   const handleAudioUpload = () => {
//     if (audioFile) {
//       const audioUrl = URL.createObjectURL(audioFile);
//       audioRef.current.src = audioUrl;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform any additional actions you need here, such as sending data to a server.

//     // Set submitted to true to trigger the display of the submission message.
//     setSubmitted(true);
//     // Set the source of the submitted video
   
//   };

//   return (
//     <div className="container-fluid" style={{display:"flex",justifyContent:"space-around",fontWeight:"bold",color:"#b3afaa"}} >
//       <div className=''>
//       <h2>Upload your Video and Audio</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Video Section */}
//         <div className="form-group">
//           <label htmlFor="videoInput">Upload Video:</label>
//           <input
//             type="file"
//             id="videoInput"
//             accept="video/*"
//             onChange={handleVideoFileChange}
//             style={{fontSize:"14px",marginLeft:"10px",marginRight:"10px"}}
//           />
//           <button className='btn ' onClick={handleVideoUpload} style={{ fontSize:"12px",backgroundColor:"#f5f3f0",fontWeight:"bold"}}> Upload Video</button>
//           <video ref={videoRef} controls style={{ display: videoFile ? 'block' : 'none' }} className='mt-3 mb-3'>
//             Your browser does not support the video tag.
//           </video>
//           <hr style={{color:"white"}}></hr>
//         </div>

//         {/* Audio Section */}
//         <div className="form-group">
//           <label htmlFor="audioInput">Upload Audio:</label>
//           <input
//             type="file"
//             id="audioInput"
//             accept="audio/*"
//             onChange={handleAudioFileChange}
//             style={{fontSize:"14px",marginLeft:"10px",marginRight:"10px"}}
//           />
//           <button className='btn' onClick={handleAudioUpload} style={{ fontSize:"12px",backgroundColor:"#f5f3f0",fontWeight:"bold"}}>Upload Audio</button>
//           <audio ref={audioRef} controls style={{ display: audioFile ? 'block' : 'none' }} className='mt-3 mb-3'>
//             Your browser does not support the audio tag.
//           </audio>
//           <hr style={{color:"white"}}></hr>
//         </div>

//         {/* Language Selection */}
//         <div className="form-group">
//           <label htmlFor="languageSelect">Select Language:</label>
//           <select
//             id="languageSelect"
//             value={selectedLanguage}
//             onChange={handleLanguageChange}
//             style={{fontSize:"14px",marginLeft:"10px",marginRight:"10px",fontWeight:"bold"}}
//           >
//             <option value="">Select Language</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//             <option value="german">German</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>

//       {submitted && (
//         <div>
//           <h3>Submission Successful!</h3>
//           <p>Uploaded Video: {videoFile ? videoFile.name : 'No video selected'}</p>
//           <p>Uploaded Audio: {audioFile ? audioFile.name : 'No audio selected'}</p>
//           <p>Selected Language: {selectedLanguage || 'Not selected'}</p>
//         </div>
//       )}
//       </div>
//       <div>
//       <h2>Generated Video will play here</h2>
     
//       </div>
//     </div>
//   );
 
// };




// export default MainPage


import React, { useState, useRef } from 'react';
import './Styles/mainpage.css'; // Import a CSS file for styling

const MainPage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const handleVideoFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);

    // Update video element
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      videoRef.current.src = videoUrl;
    }
  };

  const handleAudioFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);

    // Update audio element
    if (file) {
      const audioUrl = URL.createObjectURL(file);
      audioRef.current.src = audioUrl;
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional actions you need here, such as sending data to a server.

    // Set submitted to true to trigger the display of the submission message.
    setSubmitted(true);
  };

  return (
    <div className="container-fluid mainpage1" style={{  fontWeight: "bold", color: "#b3afaa" }}>
      <div className=''>
        <h2 style={{color:"whitesmoke",marginTop:"25px",marginBottom:"25px"}}>Upload your Video and Audio</h2>
        <form onSubmit={handleSubmit}>
          {/* Video Section */}
          <div className="form-group">
            <label htmlFor="videoInput">Upload Video:</label>
            <input
              type="file"
              id="videoInput"
              accept="video/*"
              onChange={handleVideoFileChange}
              style={{ fontSize: "14px", marginLeft: "10px", marginRight: "10px" }}
            />
            <video ref={videoRef} controls style={{ display: videoFile ? 'block' : 'none' }} className='mt-3 mb-3'>
              Your browser does not support the video tag.
            </video>
            <hr style={{ color: "white" }}></hr>
          </div>

          {/* Audio Section */}
          <div className="form-group">
            <label htmlFor="audioInput">Upload Audio:</label>
            <input
              type="file"
              id="audioInput"
              accept="audio/*"
              onChange={handleAudioFileChange}
              style={{ fontSize: "14px", marginLeft: "10px", marginRight: "10px" }}
            />
            <audio ref={audioRef} controls style={{ display: audioFile ? 'block' : 'none' }} className='mt-3 mb-3'>
              Your browser does not support the audio tag.
            </audio>
            <hr style={{ color: "white" }}></hr>
          </div>

          {/* Language Selection */}
          <div className="form-group">
            <label htmlFor="languageSelect">Select Language:</label>
            <select
              id="languageSelect"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              style={{ fontSize: "14px", marginLeft: "10px", marginRight: "10px", fontWeight: "bold" }}
            >
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>

        {submitted && (
          <div>
            <h3>Submission Successful!</h3>
            <p>Uploaded Video: {videoFile ? videoFile.name : 'No video selected'}</p>
            <p>Uploaded Audio: {audioFile ? audioFile.name : 'No audio selected'}</p>
            <p>Selected Language: {selectedLanguage || 'Not selected'}</p>
          </div>
        )}
      </div>

      <div>
        <h2 style={{color:"whitesmoke",marginTop:"25px",marginBottom:"25px"}}>Generated Video will play here</h2>
      </div>
    </div>
  );
};

export default MainPage;


