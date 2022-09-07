// Fetch the first 3 stories from top market news
export const fetchMarketNews = async () => {
  let res = await fetch("/api/finnhub/market-news");
  let data = await res.json();
  let topNews = data.slice(0, 3);
  return topNews;
};
