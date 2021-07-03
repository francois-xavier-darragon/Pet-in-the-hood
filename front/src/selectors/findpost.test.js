 export function findPost(recipes, searchedSlug) {
  return recipes.find((testedRecipe) => testedRecipe.slug === searchedSlug);
 }