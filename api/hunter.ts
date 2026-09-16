
export default async function handler(req: any, res: any) {
  const { city = "Casablanca" } = req.query;
  // Simulated Hunter AI - finds dead stores pattern
  const mockDeadStores = [
    { username: "bella.moda.ma", followers: 12400, lastPostDays: 95, city, status: "ميت - فرصة", score: 92 },
    { username: "casashoes.ma", followers: 8700, lastPostDays: 120, city, status: "ميت جدا", score: 88 },
    { username: "oudluxe.rabat", followers: 15200, lastPostDays: 67, city, status: "شبه ميت", score: 75 },
    { username: "natura.fes", followers: 6300, lastPostDays: 200, city, status: "ميت - رخيص", score: 95 },
  ];
  return res.status(200).json({ city, found: mockDeadStores.length, stores: mockDeadStores, ai: "Hunter AI v1 - Free" });
}
