import { TwitterApi } from "twitter-api-v2";

export async function postToX(link) {
  const client = new TwitterApi({
    appKey: process.env.X_API_KEY,
    appSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessSecret: process.env.X_ACCESS_SECRET,
  });

  const text = `好きになるクレッシェンドTikTok
🔗${link}
#日向坂46_好きになるクレッシェンド
#日向坂46_TikTok`;

  await client.v2.tweet(text);
}
