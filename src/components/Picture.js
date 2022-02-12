const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div>
        <a target="_blank" href={data.photographer_url}>
          Photographer：{data.photographer}
        </a>
      </div>
      <div className="container">
        <a href={data.url} target="_blank">
          <img src={data.src.medium} alt="" />
        </a>
      </div>
      <div>
        <a target="_blank" href={data.src.medium}>
          Download：Here
        </a>
      </div>
    </div>
  );
};

export default Picture;
