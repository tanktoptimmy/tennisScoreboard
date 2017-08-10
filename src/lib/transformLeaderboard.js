/**
 * Sorts the marketData into an array sorted by displayOrder
 *
 * @param {Object} playersData - object containing a list of markets
 * @returns {Array} marketArr - marketData converted into an array
 */
function transformLeaderboard(playersData) {
    return playersData;
    // Object.keys(marketData)
    //     .reduce((markets, marketId) => {
    //         const market = marketData[marketId];
    //         if (market.displayStatus === "hidden") {
    //             return markets;
    //         }

    //         return markets.concat(market);
    //     }, [])
    //     .sort((a, b) => a.score - b.score);
}

export default transformLeaderboard;
