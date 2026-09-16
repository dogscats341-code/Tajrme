const TELEGRAM_LINK = "https://t.me/jones010203";

const listings = [
  { name: "Bella Moda", price: "14,500 DH", followers: "12.4K", city: "كازا", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop" },
  { name: "Oud LUXE", price: "22,000 DH", followers: "8.9K", city: "الرباط", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop" },
  { name: "TechMart", price: "18,750 DH", followers: "15.2K", city: "مراكش", img: "https://images.unsplash.com/photo-1498049794561-7780e7231666?w=400&h=300&fit=crop" },
  { name: "Natura", price: "9,900 DH", followers: "6.3K", city: "فاس", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
  { name: "SneakZone", price: "31,000 DH", followers: "21K", city: "طنجة", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { name: "Dar Deco", price: "7,200 DH", followers: "4.7K", city: "أكادير", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
];

export default function App() {
  return (
    <div dir="rtl" style={{ fontFamily: "Tajawal, sans-serif", background: "#0A0A0B", minHeight: "100vh", color: "white" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap'); body{margin:0;background:#0A0A0B} *{box-sizing:border-box}`}</style>
      
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #222", position: "sticky", top: 0, background: "rgba(10,10,11,0.95)", zIndex: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: "#00D084", color: "black", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>ت</span>
          Tajr.me
        </div>
        <a href={TELEGRAM_LINK} target="_blank" style={{ background: "white", color: "black", padding: "8px 18px", borderRadius: 999, textDecoration: "none", fontWeight: "bold", fontSize: 14 }}>تليجرام</a>
      </header>

      <section style={{ padding: "60px 24px", maxWidth: 1100, margin: "0 auto", textAlign: "right" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "inline-flex", padding: "6px 14px", borderRadius: 999, fontSize: 12, marginBottom: 20 }}>
          ✨ أول سوق للمتاجر الجاهزة في المغرب
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>
          لا تبدأ من <span style={{ color: "#00D084" }}>الصفر،</span><br />اشتر متجراً يشتغل
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
          نحن نجد لك متاجر انستجرام ميتة لكن عندها متابعين حقيقيين في كازا والرباط ومراكش، ونفحصها ونبيعها لك جاهزة بضمان.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <a href="#stores" style={{ background: "#00D084", color: "black", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: "bold" }}>تصفح المتاجر ↓</a>
          <a href={TELEGRAM_LINK} target="_blank" style={{ background: "#1A1A1D", border: "1px solid #333", color: "white", padding: "14px 24px", borderRadius: 999, textDecoration: "none" }}>تواصل معنا</a>
        </div>
      </section>

      <section id="stores" style={{ padding: "30px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>متاجر جاهزة للبيع</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginTop: 20 }}>
          {listings.map((l, i) => (
            <div key={i} style={{ background: "#151517", border: "1px solid #222", borderRadius: 20, overflow: "hidden" }}>
              <img src={l.img} alt={l.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>{l.name}</span>
                  <span style={{ color: "#00D084" }}>{l.price}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888", marginTop: 8 }}>
                  <span>📍 {l.city}</span>
                  <span>👥 {l.followers}</span>
                </div>
                <a href={TELEGRAM_LINK} target="_blank" style={{ display: "block", textAlign: "center", marginTop: 12, background: "white", color: "black", padding: "10px", borderRadius: 999, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>استفسر الآن</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "30px", fontSize: 12, color: "#666", borderTop: "1px solid #222", marginTop: 50 }}>
        © 2026 Tajr.me - كازا، المغرب<br />أول سوق للمتاجر الجاهزة
      </footer>
    </div>
  );
                       }
