import { GET_USER_API } from '../../env.json';

export const getUsersData = async pageCount => {
  try {
    const response = await fetch(
      `${GET_USER_API}?results=15&page${pageCount}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
