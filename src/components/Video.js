import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Video = ({ data }) => {
  const handleVideoMouseOver = (e) => {
    e.target.play();
  };
  const handleVideoMouseOut = (e) => {
    //video載入完成以後才暫停
    e.target
      .play()
      .then(() => {
        e.target.pause();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="video">
      <div className="author">
        <a
          target="_blank"
          href={data.user.url}
          rel="noreferrer"
          title={data.user.name}
        >
          Uploader：{data.user.name}
        </a>
      </div>
      <div className="video_container">
        <a href={data.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPlay} />
          <img src={data.video_pictures[0].picture} alt="" />
          <video
            muted
            onMouseOver={handleVideoMouseOver}
            onMouseOut={handleVideoMouseOut}
            preload="none"
          >
            {/* video_files倒數第二個是解析度比較低的mp4*/}
            <source
              src={data.video_files[data.video_files.length - 2].link}
              type="video/mp4"
            />
          </video>
        </a>
      </div>
      <div className="download">
        <a
          target="_blank"
          href={data.video_files[data.video_files.length - 2].link}
          rel="noreferrer"
        >
          Download：Here
        </a>
      </div>
    </div>
  );
};

export default Video;
