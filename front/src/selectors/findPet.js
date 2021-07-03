
// eslint-disable-next-line import/prefer-default-export
export const findPet = (state, slug) => {
  const matchedPet = state.user.OnePetUser.find((testedPet) => {
    return testedPet.id == slug;
  });
  return matchedPet;
};

/*
const matchedPet = state.user.OnePetUser.find((testedPet) => {
    return testedPet.id == 1;
  }); 
*/

