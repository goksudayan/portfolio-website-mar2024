import React from 'react'
import SectionHeader from '../Components/SectionHeader'
import Contact from '../Components/Contact-old'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import { Helmet } from "react-helmet"

export default function PageNotFound() {

  const YouTubeVideo = () => {
    const videoId = 'r5_NvFTfAWc';
  
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return <YouTube videoId={videoId} opts={opts} />;
  };

  return (<>
    <Helmet><title>Göksu Dayan | Oops, you are lost!</title></Helmet>

    <section className="section-container" id="user-lost">

      <SectionHeader description={"01 / 02 | 404 Not Found"} title="It looks like you are lost" />
            <div style = { { display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center'}}>
            <div className="content-container" style = { {justifyContent: 'center'}}>
              <p>Click <Link to="/">here</Link> to go back to the homepage. In the mean time, enjoy this video.</p>
              <div  >
                {YouTubeVideo()}
              </div>

            </div>

            </div>

    </section>

    </>
  )
}
