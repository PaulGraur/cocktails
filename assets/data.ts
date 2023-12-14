import A1 from "./../images/coctailCards/A1.png";

export interface CardData {
    id: number;
    imageSrc: string;
    text: string;
  }
  
  const data: CardData[] = [
    {
      id: 1,
      imageSrc: A1,
      text: 'Negroni',
    },
    {
      id: 2,
      imageSrc: A1,
      text: 'Margarita',
    },
    {
      id: 3,
      imageSrc: '',
      text: ' Bellini',
    },
    {
      id: 4,
      imageSrc: '',
      text: 'Piña Colada',
    },
    {
      id: 5,
      imageSrc: '',
      text: 'Mimosa',
    },
    {
      id: 6,
      imageSrc: '',
      text: 'White Lady',
    },
    {
      id: 7,
      imageSrc: '',
      text: 'Cosmopolitan',
    },
    {
      id: 8,
      imageSrc: '',
      text: 'Aviation',
    },
    {
      id: 9,
      imageSrc: '',
      text: 'Manhattan',
    }
  ];
  
  export default data;
  