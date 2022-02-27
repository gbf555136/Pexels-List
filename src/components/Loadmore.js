import React from "react";

const Loadmore = ({ loading }) => {
  // if (datas.length === 0) return null;
  return (
    <div className="loadMore">
      <button onClick={loading}>Load More</button>
    </div>
  );
};

export default Loadmore;
