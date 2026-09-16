
export default async function handler(req: any, res: any) {
  const { budget, niche } = req.query;
  const b = parseInt(budget || "15000");
  return res.status(200).json({
    buyerProfile: { budget: b, niche: niche || "موضة", city: "Casablanca" },
    matches: [
      { store: "bella.moda.ma", price: 14500, matchScore: "94%", reason: "نفس النيتش + نفس المدينة + ضمن الميزانية" },
      { store: "casashoes.ma", price: 8900, matchScore: "87%", reason: "ميزانية أقل - فرصة" }
    ],
    escrow: "عقد ضمان تلقائي جاهز - الدفع عبر تليجرام",
    ai: "Matcher AI v1 - Free"
  });
}
