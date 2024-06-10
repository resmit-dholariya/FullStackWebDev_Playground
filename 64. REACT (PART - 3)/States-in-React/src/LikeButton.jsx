import { useState } from "react";

export default function isLiked() {
  let [isLiked, setIsLiked] = useState(false);
  let [likeCount, setLikeCount] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <>
      <div onClick={toggleLike} style={{ marginTop: "20px" }}>
        {isLiked ? (
          <i style={{ color: "red" }} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        <p>{likeCount}</p>
      </div>
    </>
  );
}
