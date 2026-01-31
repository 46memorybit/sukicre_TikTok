import puppeteer from "puppeteer";

export async function getRandomTikTokLink(url) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

  // 対象divが出るまで待つ
  await page.waitForSelector('#music-item-list > div', { timeout: 60000 });

  const link = await page.evaluate(() => {
    const parent = document.querySelector('#music-item-list');
    if (!parent) return null;

    const children = Array.from(parent.children);
    if (children.length === 0) return null;

    // ランダムで1つ選択
    const picked = children[Math.floor(Math.random() * children.length)];

    // より深い階層の <a href>
    const anchor = picked.querySelector('a[href]');
    return anchor ? anchor.href : null;
  });

  await browser.close();
  return link;
}
