import charAPI from '../services/charAPI';

export const SEARCH_CHARACTER = 'SEARCH_CHARACTER';
export const ON_SUCESS = 'ON_SUCESS';
export const ON_ERROR = 'ON_ERROR';

const searchCharcter = () => ({ type: SEARCH_CHARACTER });
const onSucess = (character) => ({ type: ON_SUCESS, character });
const onError = (error) => ({ type: ON_ERROR, error });

export const fetchCharacter = (name) => {
  return async (dispatch) => {
    dispatch(searchCharcter())
    try {
      const response = await charAPI(name);
      const character = response[0];
      if (!character) {
        throw new Error();
      }
      dispatch(onSucess(character));
    } catch (error) {
      dispatch(onError('Personagem não encontrado'));
    }
  }
}
