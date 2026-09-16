const TELEGRAM_LINK = "https://t.me/jones010203";

const listings = [
  { name: "Bella Moda", price: "14,500 DH", followers: "12.4K", city: "الدار البيضاء", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop" },
  { name: "Oud LUXE", price: "22,000 DH", followers: "8.9K", city: "الرباط", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop" },
  { name: "TechMart", price: "18,750 DH", followers: "15.2K", city: "مراكش", img: "https://images.unsplash.com/photo-1498049794561-7780e7231666?w=400&h=300&fit=crop" },
  { name: "Natura", price: "9,900 DH", followers: "6.3K", city: "فاس", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
  { name: "SneakZone", price: "31,000 DH", followers: "21K", city: "طنجة", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { name: "Dar Deco", price: "7,200 DH", followers: "4.7K", city: "أكادير", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
  { name: "Atlas Beauty", price: "11,300 DH", followers: "9.1K", city: "مكناس", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop" },
  { name: "Sahara Style", price: "16,800 DH", followers: "13.5K", city: "وجدة", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" },
  { name: "Rif Shop", price: "8,500 DH", followers: "5.8K", city: "تطوان", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop" },
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

      <section style={{ padding: "50px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", display: "inline-flex", padding: "6px 14px", borderRadius: 999, fontSize: 12, marginBottom: 20, color: "#00D084" }}>
          🇲🇦 نغطي جميع مدن المغرب - من طنجة إلى الكويرة
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>
          لا تبدأ من <span style={{ color: "#00D084" }}>الصفر،</span><br />اشتر متجراً يشتغل
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
          نحن نجد لك متاجر انستجرام جاهزة بمتابعين حقيقيين في <b style={{color:"white"}}>الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير، وجدة، مكناس، تطوان، القنيطرة وكل مدن المغرب</b> - مع فحص وضمان.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <a href="#stores" style={{ background: "#00D084", color: "black", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: "bold" }}>تصفح متاجر المغرب ↓</a>
          <a href={TELEGRAM_LINK} target="_blank" style={{ background: "#1A1A1D", border: "1px solid #333", color: "white", padding: "14px 24px", borderRadius: 999, textDecoration: "none" }}>تواصل معنا</a>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20, fontSize: 11, color: "#888" }}>
          {["الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير", "وجدة", "مكناس", "تطوان", "القنيطرة", "العيون", "الناظور"].map(c => (
            <span key={c} style={{ background: "#151517", border: "1px solid #222", padding: "4px 10px", borderRadius: 999 }}>📍 {c}</span>
          ))}
        </div>
      </section>

      <section id="stores" style={{ padding: "30px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>متاجر جاهزة من جميع أنحاء المغرب</h2>
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

      <section style={{ padding: "40px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "#151517", border: "1px solid #222", borderRadius: 20, padding: 24 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>💳 طرق الدفع المتاحة في المغرب</h3>
          <p style={{ color: "#888", fontSize: 13, marginTop: 6 }}>ادفع بالطريقة اللي تناسبك - آمنة وسهلة</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginTop: 20 }}>
            <div style={{ background: "#0A0A0B", border: "1px solid #333", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "#FF6B00", width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 12 }}>Wafacash</div>
              <div><b style={{ fontSize: 13 }}>وفاكاش</b><div style={{ fontSize: 11, color: "#888" }}>في جميع أنحاء المغرب</div></div>
            </div>
            
            <div style={{ background: "#0A0A0B", border: "1px solid #333", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "#00A651", width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 10 }}>CASHPLUS</div>
              <div><b style={{ fontSize: 13 }}>كاش بلس</b><div style={{ fontSize: 11, color: "#888" }}>سريع وآمن</div></div>
            </div>

            <div style={{ background: "#0A0A0B", border: "1px solid #333", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "white", width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "black", fontSize: 16 }}>🏦</div>
              <div><b style={{ fontSize: 13 }}>تحويل بنكي</b><div style={{ fontSize: 11, color: "#888" }}>Attijari, CIH, BMCE...</div></div>
            </div>

            <div style={{ background: "#0A0A0B", border: "1px solid #00D084", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "#00D084", width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "black", fontSize: 16 }}>💵</div>
              <div><b style={{ fontSize: 13 }}>الدفع عند التسليم</b><div style={{ fontSize: 11, color: "#00D084" }}>للمدن الكبرى</div></div>
            </div>
          </div>

          <div style={{ marginTop: 16, background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#aaa" }}>
            ✅ <b style={{color:"#00D084"}}>ضمان Tajr.me:</b> فلوسك تبقى عندنا حتى تستلم المتجر وتتأكد أنه شغال 100% - بعدها نحول الفلوس للبائع. آمان كامل للطرفين.
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "30px", fontSize: 12, color: "#666", borderTop: "1px solid #222", marginTop: 20 }}>
        © 2026 Tajr.me - نغطي جميع مدن المغرب 🇲🇦<br />من طنجة إلى الكويرة - الدفع عبر وفاكاش، كاش بلس، أو البنك
      </footer>
    </div>
  );
  }
