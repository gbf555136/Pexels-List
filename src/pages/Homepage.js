import React, { useState, useEffect, useRef } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Loadmore from "../components/Loadmore";

const api_key = "563492ad6f91700001000001279ab35e2a38409b9d20a6d615d7fd36";
// const api_key2 = "563492ad6f917000010000014e6b42ecf648436ab92e8a52e3046232";
const per_page = 12;

const Homepage = () => {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  const page = useRef(1);

  const getPictures = () => {
    //page = 1
    const init_url = `https://api.pexels.com/v1/curated?page=1&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=${per_page}`;
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
        // console.log(result.photos);
        setDatas(result.photos);
        page.current = 2;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const morePictures = () => {
    //按下Load more後，用input state判斷search or init
    const init_url = `https://api.pexels.com/v1/curated?page=${page.current}&per_page=${per_page}`;
    const search_url = `https://api.pexels.com/v1/search?query=${input}&page=${page.current}&per_page=${per_page}`;
    let url = input ? search_url : init_url;

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
        page.current++;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPictures();
  }, [input]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search setInput={setInput} />
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
