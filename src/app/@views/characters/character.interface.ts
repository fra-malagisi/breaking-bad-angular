export interface ICharacter {
  char_id: number;
  name: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
}

export interface ICharacterFilter {
  name: string;
  birthday: string;
  occupation: string;
  status: string;
  nickname: string;
}
