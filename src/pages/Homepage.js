import React, { useState, useEffect, useRef } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Loadmore from "../components/Loadmore";
import IsLoading from "../components/IsLoading";

const api_key = "563492ad6f91700001000001279ab35e2a38409b9d20a6d615d7fd36";
// const api_key2 = "563492ad6f917000010000014e6b42ecf648436ab92e8a52e3046232";
const per_page = 12;

const Homepage = () => {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const page = useRef(1);

  const getPictures = () => {
    const init_url = `https://api.pexels.com/v1/curated?page=1&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/v1/search?query=${currentInput}&page=1&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
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
        console.log(result);
        setDatas(result.photos);
        setIsLoading(false);
        page.current = 2;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const morePictures = () => {
    //按下Load more後，用currentInput state判斷search or init
    const init_url = `https://api.pexels.com/v1/curated?page=${page.current}&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/v1/search?query=${currentInput}&page=${page.current}&per_page=${per_page}&locale=zh-CN&locale=zh-TW&locale=en-US`;
    let url = currentInput ? search_url : init_url;
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
        // console.log([...datas, ...result.photos]);
        setDatas([...datas, ...result.photos]);
        setIsLoading(false);
        page.current++;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPictures();
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
      <div className="pictures">
        {datas.map((data) => {
          return <Picture data={data} key={data.id} />;
        })}
        {/* keep 4 columns layout*/}
        <div className="picture" style={{ padding: 0 }}></div>
        <div className="picture" style={{ padding: 0 }}></div>
        <div className="picture" style={{ padding: 0 }}></div>
      </div>
      <Loadmore loading={morePictures} />
    </div>
  );
};

export default Homepage;
