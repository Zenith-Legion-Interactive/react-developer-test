export const formatImage = (url) => {
  const wordToCheck = "images";

  console.log(url, `${process.env.PUBLIC_URL}${url}`);
  if (!url) return null;

  if (!url.includes(wordToCheck)) return url;

  return `${process.env.PUBLIC_URL}/${url}`;
};

export const generateRandomImage = () => {
  const images = [
    "images/chaeyoung.webp",
    "images/dahyun.jpeg",
    "images/jeongyon.webp",
    "images/jihyo.webp",
    "images/mina.jpeg",
    "images/momo.webp",
    "images/nayeon.jpeg",
    "images/sana.webp",
    "images/tzuyu.webp",
  ];

  const index = parseInt(Math.floor(Math.random() * images.length));

  return images[index];
};
