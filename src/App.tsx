import { useState, useEffect } from "react";
import Admin from "./pages/Admin";
const TELEGRAM_LINK = "https://t.me/jones010203";
const listings = [
  { name: "Bella Moda - مثال", price: "14,500 DH", followers: "12.4K", city: "كازا", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
  { name: "Oud LUXE - مثال", price: "22,000 DH", followers: "8.9K", city: "الرباط", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
  { name: "TechMart - مثال", price: "18,750 DH", followers: "15.2K", city: "مراكش", img: "https://images.unsplash.com/photo-1498049794561-7780e7231666?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
  { name: "Natura - مثال", price: "9,900 DH", followers: "6.3K", city: "فاس", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
  { name: "SneakZone - مثال", price: "31,000 DH", followers: "21K", city: "طنجة", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
  { name: "Dar Deco - مثال", price: "7,200 DH", followers: "4.7K", city: "أكادير", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", badge: "مثال توضيحي" },
];

function Home() {
  return (
    <div dir="rtl" style={{fontFamily:"Tajawal, sans-serif", background:"#0A0A0B", minHeight:"100vh", color:"white"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap'); body{margin:0;background:#0A0A0B;color:white} *{box-sizing:border-box}`}</style>
      <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 24px", borderBottom:"1px solid #222", position:"sticky", top:0, background:"rgba(10,10,11,0.9)", backdropFilter:"blur(12px)", zIndex:10}}>
        <div style={{display:"flex", gap:8, alignItems:"center", fontWeight:900, fontSize:20}}><span style={{background:"#00D084", color:"black", width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10}}>ت</span>Tajr.me</div>
        <a href={TELEGRAM_LINK} target="_blank" title="تليجرام" style={{background:"white", width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:999, textDecoration:"none"[STRIPPED 25 bytes]"20" height="20" viewBox="0 0 24 24" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.945c-.643-.2-.658-.643.135-.954l11.566-4.458c.538-.196 1.006.12.832.941z"/></svg>
        </a>
      </header>
      <section style={{padding:"60px 24px", maxWidth:1100, margin:"0 auto"}}>
        <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", display:"inline-flex", padding:"6px 12px", borderRadius:999, fontSize:12, marginBottom:16}}>✨ أول سوق للمتاجر الجاهزة - مدعوم بـ 4 خوادم AI</div>
        <h1 style={{fontSize:42, fontWeight:900, lineHeight:1.1, margin:0}}>لا تبدأ من <span style={{color:"#00D084"}}>الصفر،</span><br/>اشتر متجراً يشتغل</h1>
        <p style={{color:"rgba(255,255,255,0.6)", maxWidth:500, marginTop:16}}>4 خوادم ذكاء اصطناعي تفحص وتسعر وتطابق تلقائيا - مجانية ولا تبطئ الموقع.</p>
        <div style={{display:"flex", gap:12, marginTop:24}}>
          <a href="#stores" style={{background:"#00D084", color:"black", padding:"14px 28px", borderRadius:999, textDecoration:"none", fontWeight:"bold"}}>تصفح الأمثلة ↓</a>
          <a href={TELEGRAM_LINK} target="_blank" style={{background:"white", width:48, height:48, display:"flex", alignItems:"center", justifyContent:"center"[STRIPPED 32 bytes]"22" height="22" viewBox="0 0 24 24" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.945c-.643-.2-.658-.643.135-.954l11.566-4.458c.538-.196 1.006.12.832.941z"/></svg></a>
        </div>
      </section>
      <section id="stores" style={{padding:"20px 24px", maxWidth:1100, margin:"0 auto"}}>
        <h2 style={{fontSize:24, fontWeight:900}}>أمثلة توضيحية - سيتم استبدالها بمتاجر حقيقية من AI</h2>
        <p style={{fontSize:13, color:"rgba(255,255,255,0.4)", marginTop:4}}>هذه أمثلة فقط - Hunter AI سيجلب متاجر حقيقية قريبا</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:16, marginTop:20}}>
          {listings.map((l,i)=>(
            <div key={i} style={{background:"#151517", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, overflow:"hidden", position:"relative"}}>
              <div style={{position:"absolute", top:10, left:10, background:"rgba(0,0,0,0.7)", color:"#00D084", fontSize:10, padding:"4px 8px", borderRadius:999, fontWeight:"bold", zIndex:2}}>{l.badge}</div>
              <img src={l.img} alt="" style={{width:"100%", height:180, objectFit:"cover"}} />
              <div style={{padding:14}}>
                <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold"}}><span>{l.name}</span><span style={{color:"#00D084"}}>{l.price}</span></div>
                <div style={{display:"flex", justifyContent:"space-between", fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:8}}><span>📍 {l.city}</span><span>👥 {l.followers}</span></div>
                <a href={TELEGRAM_LINK} target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginTop:12, background:"white", color:"black", padding:"10px", borderRadius:999, textDecoration:"none", fontWeight:"bold"[STRIPPED 46 bytes]"16" height="16" viewBox="0 0 24 24" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.945c-.643-.2-.658-.643.135-.954l11.566-4.458c.538-.196 1.006.12.832.941z"/></svg>
                  استفسر
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{textAlign:"center", padding:30, fontSize:12, color:"rgba(255,255,255,0.3)", borderTop:"1px solid #222", marginTop:40}}>
        © 2026 Tajr.me - 4 خوادم AI نشطة - كازا
      </footer>
    </div>
  );
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(()=>{
    const p = window.location.pathname.toLowerCase();
    const h = window.location.hash.toLowerCase();
    if (p.includes("admin") || h.includes("admin")) setIsAdmin(true);
  },[]);
  if (isAdmin) return <Admin />;
  return <Home />;
      }
