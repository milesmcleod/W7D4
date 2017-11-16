export const fetchAllPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
);

// export const fetchPokemon = (pokemon) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/pokemon/${pokemon.id}`
//   });
// };
