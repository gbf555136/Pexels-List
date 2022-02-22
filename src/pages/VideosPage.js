import React, { useState, useEffect, useRef } from "react";
import Video from "../components/Video";
import Search from "../components/Search";
import Loadmore from "../components/Loadmore";
import IsLoading from "../components/IsLoading";

// const api_key2 = "563492ad6f91700001000001279ab35e2a38409b9d20a6d615d7fd36";
const api_key = "563492ad6f917000010000014e6b42ecf648436ab92e8a52e3046232";
const per_page = 12;

const VideosPage = () => {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const page = useRef(1);

  const getVideos = () => {
    const init_url = `https://api.pexels.com/videos/popular?page=1&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/videos/search?query=${currentInput}&page=1&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
    const url = currentInput ? search_url : init_url;

    if (isLoading) return;
    setIsLoading(true);
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
        setDatas(result.videos);
        page.current = 2;
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const moreVideos = () => {
    //按下Load more後，用currentInput state判斷search or init
    const init_url = `https://api.pexels.com/videos/popular?page=${page.current}&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/videos/search?query=${currentInput}&page=${page.current}&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
    const url = currentInput ? search_url : init_url;

    if (isLoading) return;
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput]);

  return (
    <div>
      {isLoading ? <IsLoading /> : null}
      <Search
        input={input}
        setInput={setInput}
        setCurrentInput={setCurrentInput}
      />
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
