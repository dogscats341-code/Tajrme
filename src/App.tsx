import { useState, useEffect } from "react";
const TELEGRAM_LINK = "https://t.me/jones010203";

function AdminPage(){
  const [city,setCity]=useState("Casablanca");
  const [data,setData]=useState<any>(null);
  const [loading,setLoading]=useState(false);
  const run=async()=>{
    setLoading(true);
    try{
      const r=await fetch(`/api/hunter?city=${city}`);
      const j=await r.json();
      setData(j);
    }catch(e){ setData({error:"أضف ملفات api أولا"}); }
    setLoading(false);
  };
  return(
    <div dir="rtl" style={{background:"#0A0A0B",minHeight:"100vh",color:"white",padding:24,fontFamily:"Tajawal"}}>
      <h1 style={{fontSize:28,fontWeight:900}}>🛰️ لوحة تحكم 4 خوادم AI</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:16,marginTop:24}}>
        <div style={{background:"#151517",border:"1px solid #222",borderRadius:16,padding:16}}>
          <h3>🔍 Hunter AI</h3>
          <input value={city} onChange={e=>setCity(e.target.value)} style={{width:"100%",padding:8,borderRadius:8,background:"#1C1C1F",border:"1px solid #333",color:"white",marginTop:8}} />
          <button onClick={run} style={{marginTop:8,width:"100%",background:"#00D084",color:"black",padding:10,borderRadius:999,fontWeight:"bold",border:"none"}}>{loading?"يبحث...":"ابدأ الصيد"}</button>
          {data && <pre style={{marginTop:10,fontSize:11,background:"#000",padding:8,borderRadius:8,overflow:"auto"}}>{JSON.stringify(data,null,2)}</pre>}
        </div>
        <div style={{background:"#151517",border:"1px solid #222",borderRadius:16,padding:16}}><h3>🛡️ Verifier</h3><p style={{fontSize:12,color:"#888"}}>يعمل تلقائيا</p></div>
        <div style={{background:"#151517",border:"1px solid #222",borderRadius:16,padding:16}}><h3>💰 Pricer</h3><p style={{fontSize:12,color:"#888"}}>يسعر + عمولتك 12%</p></div>
        <div style={{background:"#151517",border:"1px solid #222",borderRadius:16,padding:16}}><h3>🤝 Matcher</h3><a href={TELEGRAM_LINK} target="_blank" style={{display:"block",textAlign:"center",background:"white",color:"black",padding:10,borderRadius:999,textDecoration:"none",fontWeight:"bold",marginTop:8}}>تليجرام</a></div>
      </div>
      <a href="/" style={{display:"inline-block",marginTop:24,color:"#00D084"}}>← رجوع</a>
    </div>
  );
}

const listings=[
  {name:"Bella Moda",price:"14,500 DH",followers:"12.4K",city:"كازا",img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop"},
  {name:"Oud LUXE",price:"22,000 DH",followers:"8.9K",city:"الرباط",img:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop"},
  {name:"TechMart",price:"18,750 DH",followers:"15.2K",city:"مراكش",img:"https://images.unsplash.com/photo-1498049794561-7780e7231666?w=400&h=300&fit=crop"},
];

function Home(){
  return(
    <div dir="rtl" style={{fontFamily:"Tajawal",background:"#0A0A0B",minHeight:"100vh",color:"white"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap'); body{margin:0;background:#0A0A0B;color:white} *{box-sizing:border-box}`}</style>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 24px",borderBottom:"1px solid #222"}}>
        <div style={{fontWeight:900,fontSize:20}}>Tajr.me</div>
        <a href={TELEGRAM_LINK} target="_blank" style={{background:"white",padding:"8px 16px",borderRadius:999,textDecoration:"none",color:"black",fontWeight:"bold"}}>تليجرام</a>
      </header>
      <section style={{padding:"60px 24px",maxWidth:1100,margin:"0 auto"}}>
        <h1 style={{fontSize:42,fontWeight:900}}>لا تبدأ من <span style={{color:"#00D084"}}>الصفر</span></h1>
        <p style={{color:"rgba(255,255,255,0.6)"}}>4 خوادم AI - مجانية</p>
      </section>
      <section style={{padding:"20px 24px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
          {listings.map((l,i)=>(
            <div key={i} style={{background:"#151517",borderRadius:20,overflow:"hidden",border:"1px solid #222"}}>
              <img src={l.img} style={{width:"100%",height:180,objectFit:"cover"}} />
              <div style={{padding:14}}><div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}><span>{l.name}</span><span style={{color:"#00D084"}}>{l.price}</span></div></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App(){
  const [isAdmin,setIsAdmin]=useState(false);
  useEffect(()=>{
    const path=window.location.pathname.toLowerCase();
    const hash=window.location.hash.toLowerCase();
    if(path.includes("admin")||hash.includes("admin")) setIsAdmin(true);
  },[]);
  if(isAdmin) return <AdminPage />;
  return <Home />;
      }
