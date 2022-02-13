import React, { useState, useEffect, useRef } from "react";
import Video from "../components/Video";
import Search from "../components/Search";
import Loadmore from "../components/Loadmore";

const api_key = "563492ad6f91700001000001279ab35e2a38409b9d20a6d615d7fd36";
// const api_key2 = "563492ad6f917000010000014e6b42ecf648436ab92e8a52e3046232";
const per_page = 12;

const VideosPage = () => {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  const page = useRef(1);

  const getVideos = () => {
    //page=1
    const init_url = `https://api.pexels.com/videos/popular?page=1&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/videos/search?query=${input}&page=1&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
    const url = input ? search_url : init_url;
    fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: api_key,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result.videos);
        setDatas(result.videos);
        page.current = 2;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const moreVideos = () => {
    //按下Load more後，用input state判斷search or init
    const init_url = `https://api.pexels.com/videos/popular?page=${page.current}&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/videos/search?query=${input}&page=${page.current}&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
    const url = input ? search_url : init_url;

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api_key,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setDatas([...datas, ...result.videos]);
        page.current++;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideos();
  }, [input]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search setInput={setInput} />
      <div className="videos">
        {datas.map((data) => {
          return <Video data={data} key={data.id} />;
        })}
        {/* keep 4 columns layout*/}
        <div className="video" style={{ padding: 0 }}></div>
        <div className="video" style={{ padding: 0 }}></div>
        <div className="video" style={{ padding: 0 }}></div>
      </div>
      <Loadmore loading={moreVideos} />
    </div>
  );
};

export default VideosPage;
