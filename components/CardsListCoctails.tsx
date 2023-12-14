import Image from "next/image";
import classNames from "classnames";
import s from "./CardsListCoctails.module.scss";
import { CardData } from "../assets/data";

interface CardProps {
  cardData: CardData;
  onButtonClick: () => void;
}

const CardsListCoctails: React.FC<CardProps> = ({
  cardData,
  onButtonClick,
}) => {
  const { imageSrc, text } = cardData;

  return (
    <div className={s.cards}>
      <Image className={s.cards__img} src={imageSrc} alt="Card" width={395} height={395}/>
      <h3 className={s.cards__title}>{text}</h3>
      <div className={s.cards__buttons}>
        <button className={s.cards__buttons__more}>Learn more</button>
        <button className={s.cards__buttons__add}>Add to</button>
      </div>
    </div>
  );
};

export default CardsListCoctails;
