import React from "react";

const Loadmore = ({ loading }) => {
  return (
    <div className="loadMore">
      <button onClick={loading}>Load More</button>
    </div>
  );
};

export default Loadmore;
