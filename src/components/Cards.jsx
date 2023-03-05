import { useState, useEffect, React } from "react";
import Phrase from "./Phrase";

const Cards = (props) => {
  const { setCardCount } = props;
  let wordList = [
    { word: "Start!", translation: "Press button to start" },
    {
      word: "song",
      translation: "うた",
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/9270/iStock-678064058-rev.jpg",
    },
    {
      word: "apartment",
      translation: "アパート",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jGAdJUTgZzNwc8eNYu52dIqa0GANxHT0ug&usqp=CAU",
    },
    {
      word: "older sister",
      translation: "おねえさん",
      image:
        "https://www.sheknows.com/wp-content/uploads/2018/08/abyhzoa0kkom7exoer2r.jpeg?resize=1280,854",
    },
    {
      word: "older brother",
      translation: "おにいさん",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKEBngG8NZx4WClMdeyMWaI-9S23PtWUEBA&usqp=CAU",
    },
    {
      word: "mouth",
      translation: "くち",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3v9dOaCaTSXqpuLYjFygXYO7WIYwfS0aKw&usqp=CAU",
    },
    {
      word: "eye",
      translation: "め",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSwkaNmK_y1PUAPQoP0stHiUUZSTrKviAHA&usqp=CAU",
    },
    {
      word: "cafeteria; dining commons",
      translation: "しょくどう",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nOnmTW_ARBP7z5ei9pQcRUP_b2xzfzDzWw&usqp=CAU",
    },
    {
      word: "summer",
      translation: "なつ",
      image:
        "https://media.cntraveler.com/photos/5ca2606227413200230736ae/master/pass/Summer-Travel_GettyImages-1028278382.jpg",
    },
    {
      word: "winter",
      translation: "ふゆ",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/trees-on-snow-covered-landscape-in-heavy-snow-day-royalty-free-image-1634585533.jpg",
    },
    {
      word: "spring",
      translation: "はる",
      image: "https://media.timeout.com/images/103273081/750/562/image.jpg",
    },
  ];
  const [wordIndex, setWordIndex] = useState(0);

  const [word, setWord] = useState(wordList[0].word);
  const [image, setImage] = useState("");
  setCardCount(wordList.length - 1);
  const [flipCard, setFlipCard] = useState(false);

  useEffect(() => {
    setWord(wordList[wordIndex].word);
    setImage(wordList[wordIndex].image);
  }, [wordIndex]);

  const flip = () => {
    if (!flipCard) {
      setWord(wordList[wordIndex].translation);
      setFlipCard(true);
    } else {
      setWord(wordList[wordIndex].word);
      setFlipCard(false);
    }
  };

  const nextWord = () => {
    let randomNum = wordIndex;
    while (randomNum === wordIndex) {
      randomNum = Math.floor(Math.random() * (wordList.length - 1 - 1 + 1)) + 1;
    }
    setWordIndex(randomNum);
    setFlipCard(false);
  };

  return (
    <div className="Cards">
      <div className="word" onClick={flip}>
        <Phrase word={word} image={image} />
      </div>
      <button onClick={nextWord}>Next</button>
    </div>
  );
};

export default Cards;
