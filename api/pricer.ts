
export default async function handler(req: any, res: any) {
  const { followers, niche, engagement } = req.query;
  const f = parseInt(followers || "10000");
  const eng = parseFloat(engagement || "2.5");
  const nicheMultipliers: any = { "موضة": 1.4, "عطور": 1.6, "إلكترونيات": 1.2, "تجميل": 1.5, "أحذية": 1.3, "default": 1.0 };
  const mult = nicheMultipliers[niche] || 1.0;
  const basePrice = f * 1.2 * mult;
  const engagementBonus = eng > 3 ? basePrice * 0.3 : 0;
  const finalPrice = Math.round((basePrice + engagementBonus) / 100) * 100;
  const rangeMin = Math.round(finalPrice * 0.85);
  const rangeMax = Math.round(finalPrice * 1.15);
  return res.status(200).json({
    followers: f, niche, engagement: eng + "%",
    suggestedPrice: finalPrice,
    priceRange: `${rangeMin} - ${rangeMax} DH`,
    breakdown: `القاعدة: ${Math.round(basePrice)} + بونص تفاعل: ${Math.round(engagementBonus)}`,
    commission: Math.round(finalPrice * 0.12) + " DH (12%)",
    ai: "Pricer AI v1 - Free"
  });
}
