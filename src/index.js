// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins=[{Key:"H", Value:50}, {Key:"Q", Value:25},{Key:"D", Value:10},{Key:"N", Value:5},{Key:"P", Value:1}];
    if (currency<=0) return {};
    if (currency>10000) return {error:"You are rich, my friend! We don't have so much coins for exchange"};
    let ret={};
    let leftovers=currency;
    coins.forEach(coin => {
        let count=Math.floor(leftovers/coin.Value);
        if (count>=1)
        {
            ret[coin.Key]=count;
            leftovers=leftovers%coin.Value;
        }
    });
    return ret;
}
