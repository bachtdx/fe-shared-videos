const isYouTubeLink = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const queryParams = new URLSearchParams(new URL(url).search);
    let videoId = queryParams.get("v");
    if (!videoId && url.includes("youtu.be")) {
      videoId = url.split("/").pop() || null;
    }
    if (videoId !== null && videoId !== "") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

export default isYouTubeLink;
