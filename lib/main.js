const init = () => {
  console.log("init");
  loadVideoJs();
};

/**
 *
 * @param {HTMLElement} ele
 */
const loadPromise = ele => {
  document.head.appendChild(ele);
  return new Promise((resolve, reject) => {
    ele.onload = () => resolve();
    ele.onerror = () => reject();
  });
};

const loadVideoJs = () => {
  console.log("loading video.js");
  const jsUrl = "https://unpkg.com/video.js@8.0.4/dist/video.min.js";
  const cssUrl = "https://unpkg.com/video.js@8.0.4/dist/video-js.min.css";

  const link = document.createElement("link");
  link.href = cssUrl;
  link.rel = "stylesheet";
  const script = document.createElement("script");
  script.src = jsUrl;

  Promise.all([loadPromise(link), loadPromise(script)]).then(() => {
    console.log("video.js 加载完成");
    dealVideo();
  });
};

const dealVideo = () => {
  const video = document.querySelector("video");
  if (!video) return;
  video.classList.add("video-js");
  const _videojs = videojs(video, {});
  console.log(_videojs);
};

init();
