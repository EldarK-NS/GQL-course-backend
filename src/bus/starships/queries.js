export const queries = {
    starships: async (_, __, { dataSources }) => {
        const { results } = await dataSources.starshipsAPI.getStarships()
        // console.log(results)
        return results;
    }
}
