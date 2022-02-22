const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="author">
        <a
          target="_blank"
          href={data.photographer_url}
          rel="noreferrer"
          title={data.photographer}
        >
          Photographer：{data.photographer}
        </a>
      </div>
      <div className="pic_container">
        <a href={data.url} target="_blank" rel="noreferrer">
          <img src={data.src.medium} alt="" />
        </a>
      </div>
      <div className="download">
        <a
          target="_blank"
          href={data.src.medium}
          rel="noreferrer"
          title={data.src.medium}
        >
          Download：Here
        </a>
      </div>
    </div>
  );
};

export default Picture;
