const TELEGRAM_LINK = "https://t.me/jones010203";

const listings = [
  { name: "Bella Moda - ملابس", price: "14,500 DH", followers: "12.4K", city: "كازا", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop" },
  { name: "Oud LUXE - عطور", price: "22,000 DH", followers: "8.9K", city: "الرباط", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop" },
  { name: "TechMart", price: "18,750 DH", followers: "15.2K", city: "مراكش", img: "https://images.unsplash.com/photo-1498049794561-7780e7231666?w=400&h=300&fit=crop" },
  { name: "Natura - تجميل", price: "9,900 DH", followers: "6.3K", city: "فاس", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
  { name: "SneakZone", price: "31,000 DH", followers: "21K", city: "طنجة", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { name: "Dar Deco", price: "7,200 DH", followers: "4.7K", city: "أكادير", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
];

export default function App() {
  return (
    <div dir="rtl" style={{fontFamily:"Tajawal, sans-serif", background:"#0A0A0B", minHeight:"100vh", color:"white", padding:0, margin:0}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap'); body{margin:0;background:#0A0A0B;color:white} *{box-sizing:border-box}`}</style>
      
      <header style={{display:"flex", justifyContent:"space-between", padding:"16px 24px", borderBottom:"1px solid #222", position:"sticky", top:0, background:"rgba(10,10,11,0.9)", backdropFilter:"blur(12px)"}}>
        <div style={{display:"flex", gap:8, alignItems:"center", fontWeight:900, fontSize:20}}><span style={{background:"#00D084", color:"black", width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10}}>ت</span>Tajr.me</div>
        <a href={TELEGRAM_LINK} target="_blank" style={{background:"white", color:"black", padding:"8px 16px", borderRadius:999, textDecoration:"none", fontWeight:"bold", fontSize:13}}>تليجرام @jones010203</a>
      </header>

      <section style={{padding:"60px 24px", maxWidth:1100, margin:"0 auto"}}>
        <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", display:"inline-flex", padding:"6px 12px", borderRadius:999, fontSize:12, marginBottom:16}}>✨ أول سوق للمتاجر الجاهزة في المغرب</div>
        <h1 style={{fontSize:42, fontWeight:900, lineHeight:1.1, margin:0}}>لا تبدأ من <span style={{color:"#00D084"}}>الصفر،</span><br/>اشتر متجراً يشتغل</h1>
        <p style={{color:"rgba(255,255,255,0.6)", maxWidth:500, marginTop:16, lineHeight:1.6}}>آلاف المتاجر الميتة عندها متابعين حقيقيين. نحن نوصلك بالبائع بضمان تليجرام.</p>
        <div style={{display:"flex", gap:12, marginTop:24}}>
          <a href="#stores" style={{background:"#00D084", color:"black", padding:"14px 28px", borderRadius:999, textDecoration:"none", fontWeight:"bold"}}>تصفح المتاجر ↓</a>
          <a href={TELEGRAM_LINK} target="_blank" style={{border:"1px solid rgba(255,255,255,0.2)", padding:"14px 28px", borderRadius:999, textDecoration:"none", color:"white", fontWeight:"bold"}}>بيع متجرك</a>
        </div>
      </section>

      <section id="stores" style={{padding:"20px 24px", maxWidth:1100, margin:"0 auto"}}>
        <h2 style={{fontSize:24, fontWeight:900}}>متاجر للبيع دابا</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:16, marginTop:20}}>
          {listings.map((l,i)=>(
            <div key={i} style={{background:"#151517", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, overflow:"hidden"}}>
              <img src={l.img} alt="" style={{width:"100%", height:180, objectFit:"cover"}} />
              <div style={{padding:14}}>
                <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold"}}><span>{l.name}</span><span style={{color:"#00D084"}}>{l.price}</span></div>
                <div style={{display:"flex", justifyContent:"space-between", fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:8}}><span>📍 {l.city}</span><span>👥 {l.followers}</span></div>
                <a href={TELEGRAM_LINK} target="_blank" style={{display:"block", textAlign:"center", marginTop:12, background:"white", color:"black", padding:"10px", borderRadius:999, textDecoration:"none", fontWeight:"bold", fontSize:13}}>تواصل على تليجرام</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"40px 24px", maxWidth:1100, margin:"0 auto", marginTop:40, borderTop:"1px solid #222"}}>
        <h2 style={{fontSize:22, fontWeight:900}}>عندك متجر؟ بيعه في 48 ساعة</h2>
        <form onSubmit={(e)=>{e.preventDefault(); alert("تم! تواصل معك على تليجرام @jones010203");}} style={{marginTop:16, display:"grid", gap:10, maxWidth:500}}>
          <input required placeholder="اسم المتجر" style={{padding:12, borderRadius:999, border:"1px solid #333", background:"#1C1C1F", color:"white"}} />
          <input required placeholder="رابط الانستغرام" style={{padding:12, borderRadius:999, border:"1px solid #333", background:"#1C1C1F", color:"white"}} />
          <input required placeholder="الثمن المطلوب DH" style={{padding:12, borderRadius:999, border:"1px solid #333", background:"#1C1C1F", color:"white"}} />
          <button type="submit" style={{background:"#00D084", color:"black", padding:12, borderRadius:999, fontWeight:"bold", border:"none"}}>إرسال للتقييم - مجاني</button>
        </form>
      </section>

      <footer style={{textAlign:"center", padding:30, fontSize:12, color:"rgba(255,255,255,0.3)", borderTop:"1px solid #222", marginTop:40}}>
        © 2026 Tajr.me - تليجرام @jones010203 - كازا
      </footer>
    </div>
  );
                                                                }
