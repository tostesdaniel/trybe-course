import IFrame from "../../interfaces/Frame";

const frameMock: IFrame = {
  material: "Ouro",
  color: "Daquele naipe",
};

const frameMockWithId: IFrame & { _id: string } = {
  _id: "62cf1fc6498565d94eba52cd",
  material: "Ouro",
  color: "Daquele naipe",
};

export { frameMock, frameMockWithId };
