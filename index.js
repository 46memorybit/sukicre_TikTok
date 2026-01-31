import { getRandomTikTokLink } from "./scrape.js";
import { postToX } from "./postToX.js";

const TIKTOK_URL = "https://www.tiktok.com/music/好きになるクレッシェンド-7592684513965606929";

(async () => {
  const link = await getRandomTikTokLink(TIKTOK_URL);

  if (!link) {
    console.error("リンク取得失敗");
    process.exit(1);
  }

  console.log("取得リンク:", link);
  await postToX(link);
})();
