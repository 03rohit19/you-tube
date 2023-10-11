import React from "react";

const VideoCards = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return <div>Video data not available.</div>;
  }
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg "
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>

        <li>{statistics?.viewCount} views</li>
        <li>{statistics.likeCount} likes</li>
      </ul>
    </div>
  );
};

export default VideoCards;
