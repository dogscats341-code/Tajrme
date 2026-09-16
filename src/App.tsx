import { useState, useRef } from "react";

// ===== TAJR.ME CONFIG - TELEGRAM =====
const TELEGRAM_USERNAME = "jones010203";
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;
const TELEGRAM_CHANNEL = `https://t.me/${TELEGRAM_USERNAME}`;
const WHATSAPP_LINK = TELEGRAM_LINK; // keep variable name for compatibility, now points to Telegram
// =======================================
import {
  Search,
  ShieldCheck,
  Eye,
  Gem,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Instagram,
  Users,
  TrendingUp,
  CheckCircle2,
  Lock,
  Handshake,
  MessageCircle,
  Store,
  Sparkles,
  Clock,
  Award,
  Globe,
  Languages,
} from "lucide-react";

type Lang = "ar" | "fr" | "en";

const CATEGORIES = [
  { key: "all", ar: "الكل", fr: "Tous", en: "All", match: "" },
  { key: "fashion", ar: "موضة", fr: "Mode", en: "Fashion", match: "موضة" },
  { key: "perfume", ar: "عطور", fr: "Parfums", en: "Perfumes", match: "عطور" },
  { key: "electronics", ar: "إلكترونيات", fr: "Électronique", en: "Electronics", match: "إلكترونيات" },
  { key: "beauty", ar: "تجميل", fr: "Beauté", en: "Beauty", match: "تجميل" },
  { key: "shoes", ar: "أحذية", fr: "Chaussures", en: "Shoes", match: "أحذية" },
];

const nicheMap: Record<string, { fr: string; en: string }> = {
  "موضة نسائية": { fr: "Mode femme", en: "Women's fashion" },
  "عطور و بخور": { fr: "Parfums & encens", en: "Luxury perfumes" },
  "إلكترونيات و أكسسوارات": { fr: "Électronique", en: "Electronics" },
  "تجميل طبيعي": { fr: "Beauté naturelle", en: "Natural beauty" },
  "أحذية رياضية": { fr: "Sneakers", en: "Sneakers" },
  "ديكور منزلي": { fr: "Décoration", en: "Home decor" },
};

const reasonMap: Record<string, { fr: string; en: string }> = {
  "السفر للخارج": { fr: "Départ à l'étranger", en: "Moving abroad" },
  "تغيير المجال": { fr: "Changement d'activité", en: "Changing business" },
  "ضيق الوقت": { fr: "Manque de temps", en: "Lack of time" },
  "مولود جديد": { fr: "Nouveau bébé", en: "New baby" },
  "مشروع أكبر": { fr: "Projet plus grand", en: "Bigger project" },
  "الانتقال": { fr: "Déménagement", en: "Relocation" },
};

const translations = {
  ar: {
    header: { live: "مباشر الآن", stores: "المتاجر", how: "كيف نخدمو؟", guarantee: "الضمان", sell: "بيع متجرك" },
    hero: {
      badge: "أول ماركت بليس للمتاجر الجاهزة فالمغرب",
      new: "جديد",
      l1a: "لا تبدأ من",
      l1b: "الصفر،",
      l2a: "اشترِ",
      l2b: "متجراً",
      l2c: "يشتغل",
      subtitle: "كاينين الآلاف ديال المتاجر الميتة فالمغرب عندها متابعين و زبناء و لكن مولاها ما بقاش خدام. حنا كنوصلو الصيادة بالشراية، بضمان كامل.",
      subtitleEn: "Dead stores marketplace, mais make it Moroccan.",
      browse: "تصفح المتاجر",
      sell48: "بيع متجرك فـ 48 ساعة",
      secure: "دفع آمن",
      transfer: "نقل الملكية",
      support: "دعم واتساب",
    },
    stats: { stores: "عدد المتاجر النشطة", deals: "صفقة ناجحة هذا الشهر", avg: "متوسط سعر البيع" },
    how: {
      badge: "كيفاش كنخدمو؟",
      title: "3 ديال الناس كيحميوك، مشي غير سيت",
      desc: "ماشي بحال Avito. حنا كنقلبو، كنقيمو، و كنضمنو. نتا غير كتختار.",
      steps: [
        { iconTitle: "الصياد يجلب المتجر", sub: "Le Chasseur", desc: "كنقلبو على المتاجر الميتة فانستغرام، تيك توك، و يوبيكان. كنأكدو من الأرقام الحقيقية، المتابعين ماشي مزورين، و الطلبات كاينة بصح.", time: "24 ساعة فحص" },
        { iconTitle: "المثمن يحدد السعر", sub: "L'Estimateur", desc: "خبير كيقيم المتجر على حساب: عدد المتابعين الحقيقيين، معدل الطلبات، نيتش، و إمكانية النمو. ما كاين لا نصب لا ثمن خيالي.", time: "تقييم في نفس اليوم" },
        { iconTitle: "الحارس يضمن حقك", sub: "Le Gardien - Escrow", desc: "فلوسك كتبقى عندنا حتى تستلم كلشي: انستغرام، دومين، فايسبوك بيكسل، و الموردين. إلا ما عجبكش، كنرجعو ليك فلوسك 100%.", time: "حماية 7 أيام" },
      ],
    },
    listings: {
      title: "متاجر للبيع دابا",
      subtitle: "كل متجر فحصناه يدويا. الأرقام حقيقية، ماشي SMM.",
      followers: "متابعين",
      orders: "طلبات",
      price: "الثمن",
      reason: "سبب البيع",
      details: "تفاصيل",
      verified: "محمي بالضمان",
      reviewing: "قيد المراجعة",
      viewMore: "شوف 121 متجر آخر",
      translateBtn: "ترجم",
      translated: "مترجم",
      original: "الأصل بالعربية",
    },
    escrow: {
      badge: "نظام الضمان ESCROW",
      title: "فلوسك ما كتخرجش حتى تكون راضي 100%",
      desc: "حنا الوسيط. الشاري كيحط الفلوس عندنا، البايع كيعطي كلشي (انستا، دومين، موردين). ملي كتأكد كلشي خدام، كنصيفطو الفلوس للبايع. إلا كان شي مشكل، كنرجعو ليك فلوسك.",
      s1k: "1. كتحط الفلوس",
      s1v: "عند الحارس",
      s2k: "2. كتستلم المتجر",
      s2v: "7 أيام فحص",
      s3k: "3. إلا ما عجبكش",
      s3v: "استرجاع كامل",
      bank: "الدفع محمي 100% عبر SAHAM BANK كضامن رسمي و Wafacash / MoPay للسحب الفوري",
      txTitle: "عملية #TAJR-8392",
      txSub: "محمية بالكامل",
      done: "مكتملة",
      txStore: "المتجر",
      txAmount: "المبلغ في الضمان",
      txStatus: "الحالة",
      delivered: "تم التسليم",
      txNote: "تم نقل انستغرام، دومين .ma، بيكسل فيسبوك، و لائحة 3 موردين في تركيا.",
      txNoteFr: "Transfert : Instagram, domaine .ma, pixel Facebook et 3 fournisseurs en Turquie.",
      txNoteEn: "Transferred: Instagram, .ma domain, Facebook pixel and 3 suppliers list in Turkey.",
    },
    sell: {
      title: "عندك متجر ما بقيتيش خدام بيه؟",
      desc: "بيعه فـ 48 ساعة. حنا كنقلبو ليك على شاري، كنقيمو الثمن، و كنضمنو الفلوس. نتا غير كتجاوب فواتساب.",
      bullets: ["تقييم مجاني في أقل من 24 ساعة", "ما كناخدوش فلوس حتى يتباع", "عمولة 12% فقط عند البيع", "دفع عبر SAHAM BANK / Wafacash / MoPay"],
      avgBoxTitle: "+127 متجر تباعو هاد العام",
      avgBoxSub: "متوسط وقت البيع: 3.2 أيام",
      form: {
        titleStore: "اسم المتجر",
        niche: "النيتش",
        followers: "عدد المتابعين",
        insta: "رابط انستغرام",
        reasonSell: "علاش باغي تبيع؟",
        price: "الثمن المطلوب (DH)",
        whatsapp: "واتساب للتواصل",
        submit: "صيفط المتجر للتقييم — فابور",
        terms: "بالضغط، كتوافق على شروط المنصة و عمولة 12% عند البيع",
        successTitle: "وصلنا الطلب ديالك!",
        successDesc: "الصياد غادي يشوف المتجر ديالك في أقل من 24 ساعة و يتواصل معاك فواتساب باش يأكد الأرقام. خليك قريب من التليفون.",
        tracking: "رقم التتبع:",
        addAnother: "إضافة متجر آخر",
      },
      placeholders: {
        store: "مثال: Bella Moda",
        followers: "12400",
        insta: "https://instagram.com/...",
        price: "14500",
        wa: "06 xx xx xx xx",
      },
      reasonOptions: ["السفر / الهجرة", "ضيق الوقت", "تغيير المجال", "مشروع أكبر", "أسباب شخصية"],
      nicheOptions: ["موضة نسائية", "عطور", "إلكترونيات", "تجميل", "أحذية", "ديكور", "أخرى"],
    },
    footer: {
      desc: "أول سوق للمتاجر الجاهزة في المغرب. كنخليو التجارة الإلكترونية ساهلة: تشري متجر واجد، ولا تبيع لي ما بقاش خدام.",
      platform: "المنصة",
      links: ["تصفح المتاجر", "كيف نخدمو؟", "نظام الضمان", "الأسئلة الشائعة"],
      legal: "قانوني",
      legalLinks: ["شروط الاستخدام", "سياسة الخصوصية", "عقد الضمان"],
      copy: "© 2026 Tajr.me - SAHAM BANK Escrow - صنع بحب فـ كازا",
      disclaimer: "Tajr.me ليس متجرا، بل وسيط ضامن. جميع المتاجر تم فحصها يدويا. الأسعار تقريبية و قابلة للتفاوض.",
      langNote: "الرسائل الأصلية بالعربية مع إمكانية الترجمة الفورية • الدفع عبر SAHAM BANK و Wafacash",
    },
  },
  fr: {
    header: { live: "En direct", stores: "Boutiques", how: "Comment ça marche ?", guarantee: "Garantie", sell: "Vendre ma boutique" },
    hero: {
      badge: "Premier marketplace de boutiques prêtes au Maroc",
      new: "Nouveau",
      l1a: "Ne partez pas de",
      l1b: "zéro,",
      l2a: "achetez une",
      l2b: "boutique qui",
      l2c: "marche",
      subtitle: "Des milliers de boutiques dormantes au Maroc ont déjà des abonnés et des clients, mais leurs propriétaires ne sont plus actifs. Nous connectons acheteurs et vendeurs avec garantie totale.",
      subtitleEn: "Dead stores marketplace, version marocaine sécurisée.",
      browse: "Voir les boutiques",
      sell48: "Vendez en 48h",
      secure: "Paiement sécurisé",
      transfer: "Transfert de propriété",
      support: "Support WhatsApp",
    },
    stats: { stores: "Boutiques actives", deals: "Ventes réussies ce mois", avg: "Prix moyen de vente" },
    how: {
      badge: "Comment on travaille ?",
      title: "3 personnes vous protègent, pas juste un site",
      desc: "Ce n'est pas Avito. On cherche, on évalue et on garantit. Vous choisissez seulement.",
      steps: [
        { iconTitle: "Le Chasseur trouve", sub: "Le Chasseur", desc: "On déniche les boutiques inactives sur Instagram, TikTok et YouCan. On vérifie les vrais chiffres, pas de faux abonnés.", time: "Vérification 24h" },
        { iconTitle: "L'Estimateur fixe le prix", sub: "L'Estimateur", desc: "Un expert évalue selon les abonnés réels, le taux de commandes, la niche et le potentiel de croissance.", time: "Évaluation le jour même" },
        { iconTitle: "Le Gardien garantit", sub: "Le Gardien - Escrow", desc: "Votre argent reste chez nous jusqu'à réception de tout : Instagram, domaine, pixel Facebook, fournisseurs. Satisfait ou remboursé 100%.", time: "Protection 7 jours" },
      ],
    },
    listings: {
      title: "Boutiques à vendre maintenant",
      subtitle: "Chaque boutique est vérifiée manuellement. Chiffres réels, pas de SMM.",
      followers: "Abonnés",
      orders: "Commandes",
      price: "Prix",
      reason: "Raison de vente",
      details: "Détails",
      verified: "Protégé par garantie",
      reviewing: "En cours de vérif.",
      viewMore: "Voir 121 autres boutiques",
      translateBtn: "Traduire",
      translated: "Traduit",
      original: "Original en arabe",
    },
    escrow: {
      badge: "Système ESCROW",
      title: "Votre argent ne sort pas tant que vous n'êtes pas 100% satisfait",
      desc: "Nous sommes l'intermédiaire. L'acheteur dépose chez nous, le vendeur transfère tout (insta, domaine, fournisseurs). Une fois vérifié, on libère les fonds. Sinon, remboursement.",
      s1k: "1. Vous déposez",
      s1v: "Chez le gardien",
      s2k: "2. Vous recevez",
      s2v: "7 jours de test",
      s3k: "3. Pas satisfait",
      s3v: "Remboursement total",
      bank: "Paiement 100% sécurisé via SAHAM BANK comme banque séquestre officielle et Wafacash / MoPay pour retrait instantané",
      txTitle: "Transaction #TAJR-8392",
      txSub: "Entièrement protégée",
      done: "Terminée",
      txStore: "Boutique",
      txAmount: "Montant en séquestre",
      txStatus: "Statut",
      delivered: "Livré",
      txNote: "تم نقل انستغرام، دومين .ma، بيكسل فيسبوك، و لائحة 3 موردين في تركيا.",
      txNoteFr: "Transfert : Instagram, domaine .ma, pixel Facebook et 3 fournisseurs en Turquie.",
      txNoteEn: "Transferred: Instagram, .ma domain, Facebook pixel and 3 suppliers list in Turkey.",
    },
    sell: {
      title: "Vous avez une boutique inactive ?",
      desc: "Vendez-la en 48h. On trouve l'acheteur, on fixe le prix, on garantit le paiement. Vous répondez juste sur WhatsApp.",
      bullets: ["Évaluation gratuite en <24h", "0 frais tant que non vendu", "Commission 12% seulement à la vente", "Paiement via SAHAM BANK / Wafacash / MoPay"],
      avgBoxTitle: "+127 boutiques vendues cette année",
      avgBoxSub: "Temps moyen de vente : 3.2 jours",
      form: {
        titleStore: "Nom de la boutique",
        niche: "Niche",
        followers: "Nombre d'abonnés",
        insta: "Lien Instagram",
        reasonSell: "Pourquoi vendre ?",
        price: "Prix souhaité (DH)",
        whatsapp: "WhatsApp",
        submit: "Envoyer pour évaluation — gratuit",
        terms: "En cliquant, vous acceptez les conditions et la commission 12% à la vente",
        successTitle: "Demande reçue !",
        successDesc: "Le chasseur va examiner votre boutique en moins de 24h et vous contacter sur WhatsApp pour vérifier les chiffres.",
        tracking: "Suivi :",
        addAnother: "Ajouter une autre boutique",
      },
      placeholders: { store: "Ex: Bella Moda", followers: "12400", insta: "https://instagram.com/...", price: "14500", wa: "06 xx xx xx xx" },
      reasonOptions: ["Voyage / Immigration", "Manque de temps", "Changement d'activité", "Projet plus grand", "Raisons personnelles"],
      nicheOptions: ["Mode femme", "Parfums", "Électronique", "Beauté", "Chaussures", "Décoration", "Autre"],
    },
    footer: {
      desc: "Premier marché de boutiques prêtes au Maroc. On rend l'e-commerce simple : achetez une boutique qui marche, ou vendez celle qui dort.",
      platform: "Plateforme",
      links: ["Voir boutiques", "Comment ça marche", "Système garantie", "FAQ"],
      legal: "Légal",
      legalLinks: ["CGU", "Confidentialité", "Contrat séquestre"],
      copy: "© 2026 Tajr.me - SAHAM BANK Escrow - Fait avec amour à Casa",
      disclaimer: "Tajr.me n'est pas une boutique, mais un tiers de confiance. Toutes les boutiques sont vérifiées manuellement. Prix indicatifs.",
      langNote: "Messages originaux en arabe avec traduction instantanée • Paiement via SAHAM BANK et Wafacash",
    },
  },
  en: {
    header: { live: "Live now", stores: "Stores", how: "How it works", guarantee: "Guarantee", sell: "Sell your store" },
    hero: {
      badge: "Morocco's first ready-made store marketplace",
      new: "New",
      l1a: "Don't start from",
      l1b: "scratch,",
      l2a: "buy a store that",
      l2b: "store that",
      l2c: "works",
      subtitle: "Thousands of dormant stores in Morocco already have followers and customers, but owners stopped. We connect hunters and buyers with full escrow protection.",
      subtitleEn: "Dead stores marketplace, made Moroccan and safe.",
      browse: "Browse stores",
      sell48: "Sell in 48 hours",
      secure: "Secure payment",
      transfer: "Ownership transfer",
      support: "WhatsApp support",
    },
    stats: { stores: "Active stores", deals: "Successful deals this month", avg: "Average sale price" },
    how: {
      badge: "How we work",
      title: "3 people protect you, not just a website",
      desc: "Not like Avito. We hunt, evaluate and guarantee. You just choose.",
      steps: [
        { iconTitle: "The Hunter finds", sub: "The Hunter", desc: "We hunt dormant stores on Instagram, TikTok, YouCan. We verify real numbers, no fake followers.", time: "24h check" },
        { iconTitle: "The Appraiser prices", sub: "The Appraiser", desc: "Expert evaluates based on real followers, order rate, niche and growth potential. No scams.", time: "Same-day valuation" },
        { iconTitle: "The Guardian secures", sub: "The Guardian - Escrow", desc: "Your money stays with us until you receive everything: Instagram, domain, Facebook pixel, suppliers. 100% refund if not happy.", time: "7-day protection" },
      ],
    },
    listings: {
      title: "Stores for sale now",
      subtitle: "Each store manually verified. Real numbers, no SMM.",
      followers: "Followers",
      orders: "Orders",
      price: "Price",
      reason: "Reason",
      details: "Details",
      verified: "Escrow protected",
      reviewing: "Under review",
      viewMore: "See 121 more stores",
      translateBtn: "Translate",
      translated: "Translated",
      original: "Original in Arabic",
    },
    escrow: {
      badge: "ESCROW System",
      title: "Your money doesn't leave until you're 100% happy",
      desc: "We are the middleman. Buyer deposits with us, seller transfers everything (insta, domain, suppliers). Once you confirm everything works, we release funds. If not, full refund.",
      s1k: "1. You deposit",
      s1v: "With guardian",
      s2k: "2. You receive store",
      s2v: "7 days inspection",
      s3k: "3. Not happy",
      s3v: "Full refund",
      bank: "100% secured payment via SAHAM BANK as official escrow bank and Wafacash / MoPay for instant cash-out",
      txTitle: "Transaction #TAJR-8392",
      txSub: "Fully protected",
      done: "Completed",
      txStore: "Store",
      txAmount: "Escrow amount",
      txStatus: "Status",
      delivered: "Delivered",
      txNote: "تم نقل انستغرام، دومين .ma، بيكسل فيسبوك، و لائحة 3 موردين في تركيا.",
      txNoteFr: "Transfert : Instagram, domaine .ma, pixel Facebook et 3 fournisseurs en Turquie.",
      txNoteEn: "Transferred: Instagram, .ma domain, Facebook pixel and 3 suppliers list in Turkey.",
    },
    sell: {
      title: "Have a store you no longer run?",
      desc: "Sell it in 48 hours. We find buyer, price it, secure money. You just reply on WhatsApp.",
      bullets: ["Free valuation in <24 hours", "No fees until sold", "Only 12% commission on sale", "Payout via SAHAM BANK / Wafacash / MoPay"],
      avgBoxTitle: "+127 stores sold this year",
      avgBoxSub: "Avg sale time: 3.2 days",
      form: {
        titleStore: "Store name",
        niche: "Niche",
        followers: "Followers count",
        insta: "Instagram link",
        reasonSell: "Why selling?",
        price: "Asking price (DH)",
        whatsapp: "WhatsApp contact",
        submit: "Send for evaluation — free",
        terms: "By clicking, you agree to terms and 12% commission on sale",
        successTitle: "Request received!",
        successDesc: "The hunter will review your store in less than 24h and contact you on WhatsApp to verify numbers.",
        tracking: "Tracking:",
        addAnother: "Add another store",
      },
      placeholders: { store: "Ex: Bella Moda", followers: "12400", insta: "https://instagram.com/...", price: "14500", wa: "06 xx xx xx xx" },
      reasonOptions: ["Travel / Immigration", "Lack of time", "Change field", "Bigger project", "Personal reasons"],
      nicheOptions: ["Women fashion", "Perfumes", "Electronics", "Beauty", "Shoes", "Decor", "Other"],
    },
    footer: {
      desc: "Morocco's first marketplace for ready-made stores. We make e-commerce easy: buy a working store, or sell the dormant one.",
      platform: "Platform",
      links: ["Browse stores", "How it works", "Guarantee system", "FAQ"],
      legal: "Legal",
      legalLinks: ["Terms", "Privacy", "Escrow contract"],
      copy: "© 2026 Tajr.me - SAHAM BANK Escrow - Made with love in Casa",
      disclaimer: "Tajr.me is not a store, but a trusted escrow. All stores manually verified. Prices indicative.",
      langNote: "Original messages in Arabic with instant translation • Payment via SAHAM BANK & Wafacash",
    },
  },
} as const;

const listings = [
  {
    id: 1,
    name: "Bella Moda - ملابس نسائية",
    niche: "موضة نسائية",
    followers: "12.4K",
    price: "14,500",
    reason: "السفر للخارج",
    location: "الدار البيضاء",
    insta: "@bella.moda.ma",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
    verified: true,
    orders: 342,
  },
  {
    id: 2,
    name: "Oud LUXE - عطور فاخرة",
    niche: "عطور و بخور",
    followers: "8.9K",
    price: "22,000",
    reason: "تغيير المجال",
    location: "الرباط",
    insta: "@oudluxe.ma",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=400&fit=crop",
    verified: true,
    orders: 189,
  },
  {
    id: 3,
    name: "TechMart - إلكترونيات",
    niche: "إلكترونيات و أكسسوارات",
    followers: "15.2K",
    price: "18,750",
    reason: "ضيق الوقت",
    location: "مراكش",
    insta: "@techmart.ma",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231666?w=600&h=400&fit=crop",
    verified: false,
    orders: 521,
  },
  {
    id: 4,
    name: "Natura - تجميل طبيعي",
    niche: "تجميل طبيعي",
    followers: "6.3K",
    price: "9,900",
    reason: "مولود جديد",
    location: "فاس",
    insta: "@natura.ma",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
    verified: true,
    orders: 124,
  },
  {
    id: 5,
    name: "SneakZone - أحذية",
    niche: "أحذية رياضية",
    followers: "21K",
    price: "31,000",
    reason: "مشروع أكبر",
    location: "طنجة",
    insta: "@sneakzone.ma",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    verified: true,
    orders: 812,
  },
  {
    id: 6,
    name: "Dar Deco - ديكور",
    niche: "ديكور منزلي",
    followers: "4.7K",
    price: "7,200",
    reason: "الانتقال",
    location: "أكادير",
    insta: "@dardeco.ma",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    verified: false,
    orders: 98,
  },
];

export default function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [lang, setLang] = useState<Lang>("ar");
  const [filterKey, setFilterKey] = useState("all");
  const [expandedReasons, setExpandedReasons] = useState<Record<number, boolean>>({});
  const [escrowTranslated, setEscrowTranslated] = useState(false);
  const listingsRef = useRef<HTMLDivElement>(null);
  const sellRef = useRef<HTMLDivElement>(null);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const tr = translations[lang];
  const isRTL = lang === "ar";

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const filtered =
    filterKey === "all"
      ? listings
      : listings.filter((l) => {
          const cat = CATEGORIES.find((c) => c.key === filterKey);
          return cat?.match ? l.niche.includes(cat.match) : true;
        });

  return (
    <div dir={dir} className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#00D084]/30 selection:text-white" style={{ fontFamily: lang === "ar" ? "'Tajawal', sans-serif" : "'Inter','Tajawal', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Inter:wght@400;500;700;800&display=swap');
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0B; }
        ::-webkit-scrollbar-thumb { background: #00D084; border-radius: 999px; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00D084] text-black font-black text-[18px]">ت</div>
            <div className="leading-none">
              <div className="font-black text-[20px] tracking-tight">Tajr.me</div>
              <div className="text-[11px] text-white/50 -mt-1 tracking-widest">{lang === "ar" ? "تاجر" : lang === "fr" ? "Tajer" : "Tajer"}</div>
            </div>
            <span className={`hidden items-center gap-1.5 rounded-full border border-[#00D084]/20 bg-[#00D084]/10 px-3 py-1 text-[11px] font-medium text-[#00D084] lg:flex ${isRTL ? "mr-3" : "ml-3"}`}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D084]"></span>
              {tr.header.live}
            </span>
          </div>

          {/* Language Switcher - Center */}
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1">
            {(["ar", "fr", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3.5 py-1.5 text-[12px] font-bold tracking-wide transition ${lang === l ? "bg-white text-black shadow" : "text-white/50 hover:text-white"}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
            <div className="hidden sm:flex items-center gap-1 ml-1 pl-2 border-l border-white/10">
              <Languages className="h-3.5 w-3.5 text-white/40" />
            </div>
          </div>

          <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-white/60 lg:flex">
            <a href="#" onClick={(e)=>{e.preventDefault(); scrollTo(listingsRef)}} className="hover:text-white transition">{tr.header.stores}</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); scrollTo(sellRef)}} className="hover:text-white transition">{tr.header.how}</a>
            <a href="#" className="hover:text-white transition">{tr.header.guarantee}</a>
          </nav>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" title={`Telegram: @${TELEGRAM_USERNAME}`} className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition">
              <MessageCircle className="h-4 w-4" />
            </a>
            <button onClick={()=>scrollTo(sellRef)} className="rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-black hover:bg-white/90 transition">
              {tr.header.sell}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,rgba(0,208,132,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_10%_80%,rgba(0,208,132,0.08),transparent)]" />
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-28 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px]">
              <Sparkles className="h-3.5 w-3.5 text-[#00D084]" />
              <span className="text-white/70">{tr.hero.badge}</span>
              <span className="rounded-full bg-[#00D084] px-2 py-0.5 text-[10px] font-bold text-black">{tr.hero.new}</span>
            </div>
            <h1 className="text-[38px] font-black leading-[0.95] tracking-tight lg:text-[64px]">
              {tr.hero.l1a} <span className="text-[#00D084]">{tr.hero.l1b}</span> {tr.hero.l2a}<br />
              {lang === "en" ? (
                <>
                  {tr.hero.l2b}{" "}
                  <span className="relative inline-block">
                    {tr.hero.l2c}
                    <span className="absolute bottom-1 left-0 right-0 h-[10px] bg-[#00D084]/20 -z-10" />
                  </span>
                </>
              ) : (
                <>
                  {tr.hero.l2b}{" "}
                  <span className="relative inline-block">
                    {tr.hero.l2c}
                    <span className="absolute bottom-1 left-0 right-0 h-[10px] bg-[#00D084]/20 -z-10" />
                  </span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-7 text-white/60 lg:text-[18px]">
              {tr.hero.subtitle}
              <span className="text-white/90 font-medium"> {tr.hero.subtitleEn}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={()=>scrollTo(listingsRef)} className="group inline-flex items-center gap-2 rounded-full bg-[#00D084] px-7 py-3.5 text-[15px] font-bold text-black hover:bg-[#00D084]/90 transition">
                {tr.hero.browse}
                {isRTL ? <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /> : <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
              </button>
              <button onClick={()=>scrollTo(sellRef)} className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-[15px] font-bold backdrop-blur hover:bg-white/[0.1] transition">
                {tr.hero.sell48}
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-[13px] text-white/50">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00D084]" /> {tr.hero.secure}</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00D084]" /> {tr.hero.transfer}</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00D084]" /> {tr.hero.support}</span>
            </div>
          </div>

          {/* Hero Visual - Stacked Cards */}
          <div className="lg:col-span-5 relative lg:h-[520px]">
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-[#00D084]/20 blur-[50px]" />
              <div className="rounded-[28px] border border-white/10 bg-[#151517] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.6)]">
                <div className="rounded-[20px] overflow-hidden bg-[#1C1C1F]">
                  <div className="relative h-[220px]">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop" className="h-full w-full object-cover" alt="" />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="rounded-full bg-black/70 backdrop-blur px-2.5 py-1 text-[11px] font-bold flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-[#00D084]" /> {tr.listings.verified}</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-[13px] font-bold">Bella Moda - 12.4K متابع</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#00D084] font-black text-[18px]">14,500 DH</span>
                        <span className="text-[11px] text-white/60 line-through">28,000 DH {lang==="ar" ? "قيمة فعلية" : lang==="fr" ? "valeur réelle" : "real value"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/[0.04] py-2"><div className="text-[11px] text-white/40">{tr.listings.orders}</div><div className="font-bold text-[14px]">342</div></div>
                    <div className="rounded-xl bg-white/[0.04] py-2"><div className="text-[11px] text-white/40">{lang==="ar" ? "تفاعل" : lang==="fr" ? "Engagement" : "Engagement"}</div><div className="font-bold text-[14px]">4.8%</div></div>
                    <div className="rounded-xl bg-white/[0.04] py-2"><div className="text-[11px] text-white/40">{lang==="ar" ? "مدينة" : lang==="fr" ? "Ville" : "City"}</div><div className="font-bold text-[12px]">Casa</div></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden lg:block rounded-2xl border border-white/10 bg-[#151517] p-3 shadow-xl w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-[#00D084] flex items-center justify-center"><Handshake className="h-4 w-4 text-black" /></div>
                  <div className="text-[12px] leading-tight"><div className="font-bold">{lang==="ar" ? "صفقة تمت" : lang==="fr" ? "Vente conclue" : "Deal done"}</div><div className="text-white/50 text-[11px]">{lang==="ar" ? "قبل 12 دقيقة" : lang==="fr" ? "il y a 12 min" : "12 min ago"}</div></div>
                </div>
                <div className="text-[12px]">SneakZone {lang==="ar" ? "تباع بـ" : lang==="fr" ? "vendu à" : "sold for"} <span className="font-bold text-[#00D084]">31,000 DH</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 grid grid-cols-3 divide-x divide-x-reverse divide-white/[0.06]">
          <div className="py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4">
            <div className="h-10 w-10 rounded-full bg-white/[0.06] flex items-center justify-center"><Store className="h-5 w-5 text-white/70" /></div>
            <div className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}><div className="text-[26px] font-black leading-none">+127</div><div className="text-[12px] text-white/50 mt-1">{tr.stats.stores}</div></div>
          </div>
          <div className="py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4">
            <div className="h-10 w-10 rounded-full bg-[#00D084]/15 flex items-center justify-center"><Award className="h-5 w-5 text-[#00D084]" /></div>
            <div className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}><div className="text-[26px] font-black leading-none">43</div><div className="text-[12px] text-white/50 mt-1">{tr.stats.deals}</div></div>
          </div>
          <div className="py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4">
            <div className="h-10 w-10 rounded-full bg-white/[0.06] flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white/70" /></div>
            <div className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}><div className="text-[26px] font-black leading-none">8,500 DH</div><div className="text-[12px] text-white/50 mt-1">{tr.stats.avg}</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={sellRef} className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D084]/20 bg-[#00D084]/10 px-3 py-1 text-[11px] font-bold text-[#00D084] mb-4">{tr.how.badge}</div>
            <h2 className="text-[32px] font-black leading-[1.1] lg:text-[44px] whitespace-pre-line">{tr.how.title}</h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-6 text-white/50">{tr.how.desc}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {tr.how.steps.map((step, i) => {
            const icons = [Eye, Gem, ShieldCheck];
            const Icon = icons[i];
            const colors = ["bg-white", "bg-[#00D084]", "bg-white"];
            return (
            <div key={i} className="group relative rounded-[28px] border border-white/[0.07] bg-[#141416] p-7 lg:p-8 hover:border-white/15 hover:bg-[#18181B] transition-all">
              <div className="flex items-start justify-between mb-8">
                <div className={`h-12 w-12 rounded-2xl ${colors[i]} flex items-center justify-center text-black`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[12px] font-mono text-white/20">0{i+1} — {step.sub}</span>
              </div>
              <h3 className="text-[20px] font-bold mb-3">{step.iconTitle}</h3>
              <p className="text-[14px] leading-6 text-white/50">{step.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-white/30">
                <Clock className="h-3.5 w-3.5" /> {step.time}
              </div>
            </div>
          )})}
        </div>
      </section>

      {/* Listings */}
      <section ref={listingsRef} className="border-t border-white/[0.06] bg-[#0F0F10]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[28px] font-black lg:text-[36px]">{tr.listings.title}</h2>
              <p className="text-[14px] text-white/50 mt-2">{tr.listings.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.06] border border-white/10">
              {CATEGORIES.map(cat => (
                <button key={cat.key} onClick={()=>setFilterKey(cat.key)} className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${filterKey===cat.key ? "bg-white text-black" : "text-white/60 hover:text-white"}`}>
                  {cat[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(store => {
              const isExpanded = !!expandedReasons[store.id];
              const reasonTr = reasonMap[store.niche ? store.reason : ""] || reasonMap[store.reason];
              const nicheTr = nicheMap[store.niche];
              const translatedReason = lang === "fr" ? reasonTr?.fr : lang === "en" ? reasonTr?.en : null;
              const nicheLabel = lang === "ar" ? store.niche : lang === "fr" ? nicheTr?.fr || store.niche : nicheTr?.en || store.niche;
              return (
              <div key={store.id} className="group rounded-[24px] border border-white/[0.07] bg-[#17171A] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-[200px] overflow-hidden">
                  <img src={store.image} alt={store.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 left-3 flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-bold border border-white/10">
                      <span className={`h-2 w-2 rounded-full ${store.verified ? "bg-[#00D084]" : "bg-amber-400"}`} />
                      {store.verified ? tr.listings.verified : tr.listings.reviewing}
                    </span>
                    <span className="rounded-full bg-white text-black px-2.5 py-1 text-[11px] font-bold">{nicheLabel}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 flex items-end justify-between">
                    <div>
                      <div className="text-[15px] font-bold leading-tight">{store.name}</div>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-white/70">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {store.location}</span>
                        <span className="flex items-center gap-1"><Instagram className="h-3 w-3" /> {store.insta}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.05] p-2.5 text-center">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-white/40 mb-1"><Users className="h-3 w-3" /> {tr.listings.followers}</div>
                      <div className="font-black text-[14px]">{store.followers}</div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.05] p-2.5 text-center">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-white/40 mb-1"><ShoppingBag className="h-3 w-3" /> {tr.listings.orders}</div>
                      <div className="font-black text-[14px]">{store.orders}</div>
                    </div>
                    <div className="rounded-xl bg-[#00D084]/10 border border-[#00D084]/20 p-2.5 text-center">
                      <div className="text-[10px] text-[#00D084]/70 mb-1">{tr.listings.price}</div>
                      <div className="font-black text-[14px] text-[#00D084]">{store.price} DH</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-[12px] flex-1">
                        <span className="text-white/40">{tr.listings.reason}: </span>
                        <span className="text-white/80 font-medium" dir="rtl">{store.reason}</span>
                        <span className="text-[10px] text-white/30 mr-1 ml-1">• {tr.listings.original}</span>
                      </div>
                      <button
                        onClick={() => setExpandedReasons((p) => ({ ...p, [store.id]: !p[store.id] }))}
                        className="inline-flex items-center gap-1 rounded-full bg-[#00D084]/15 border border-[#00D084]/20 px-2.5 py-1 text-[11px] font-bold text-[#00D084] hover:bg-[#00D084]/25 transition shrink-0"
                      >
                        <Globe className="h-3 w-3" /> {tr.listings.translateBtn}
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="mt-2.5 rounded-lg bg-[#00D084]/10 border border-[#00D084]/15 p-2.5 animate-in fade-in">
                        <div className="flex items-center gap-1.5 text-[10px] text-[#00D084] font-bold mb-1">
                          <Languages className="h-3 w-3" /> {tr.listings.translated} {lang !== "ar" ? `(${lang.toUpperCase()})` : "(FR/EN)"}
                        </div>
                        {lang === "ar" ? (
                          <div className="space-y-1 text-[12px] leading-5">
                            <div><span className="text-white/40">FR:</span> <span className="text-white/80">{reasonMap[store.reason]?.fr}</span></div>
                            <div><span className="text-white/40">EN:</span> <span className="text-white/80">{reasonMap[store.reason]?.en}</span></div>
                          </div>
                        ) : (
                          <div className="text-[12px] text-white/80">{translatedReason}</div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[12px]">
                    <span className="text-white/30 text-[11px]">ID: #{store.id.toString().padStart(4,"0")}</span>
                    <button className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-bold text-black hover:bg-white/90 transition">
                      {tr.listings.details} {isRTL ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </div>
            )})}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[14px] font-medium hover:bg-white/[0.08] transition flex items-center gap-2">
              <Search className="h-4 w-4" /> {tr.listings.viewMore}
            </button>
          </div>
        </div>
      </section>

      {/* Escrow */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="rounded-[32px] border border-[#00D084]/20 bg-gradient-to-br from-[#00D084]/[0.08] via-[#141416] to-[#141416] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-[#00D084]/10 blur-[80px] rounded-full" />
          <div className="grid lg:grid-cols-12 gap-10 relative">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00D084] px-3 py-1 text-[11px] font-black text-black mb-5"><Lock className="h-3.5 w-3.5" /> {tr.escrow.badge}</div>
              <h2 className="text-[30px] font-black leading-[1.1] lg:text-[42px] whitespace-pre-line">{tr.escrow.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/60 max-w-[520px]">{tr.escrow.desc}</p>
              <div className="mt-5 inline-flex items-start gap-2 rounded-xl bg-[#00D084]/10 border border-[#00D084]/20 px-4 py-3 text-[13px] leading-5 text-[#00D084]">
                <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{tr.escrow.bank}</span>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  { k: tr.escrow.s1k, v: tr.escrow.s1v },
                  { k: tr.escrow.s2k, v: tr.escrow.s2v },
                  { k: tr.escrow.s3k, v: tr.escrow.s3v },
                ].map((s,i)=>(
                  <div key={i} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <div className="text-[13px] font-bold">{s.k}</div>
                    <div className="text-[12px] text-[#00D084] mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[20px] bg-[#0A0A0B] border border-white/10 p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-[#00D084] flex items-center justify-center font-black text-black">✓</div>
                  <div><div className="font-bold text-[14px]">{tr.escrow.txTitle}</div><div className="text-[11px] text-white/50">{tr.escrow.txSub}</div></div>
                  <div className={`${isRTL ? "mr-auto" : "ml-auto"} text-[11px] px-2 py-1 rounded-full bg-[#00D084]/15 text-[#00D084]`}>{tr.escrow.done}</div>
                </div>
                <div className="space-y-4 text-[13px]">
                  <div className="flex justify-between"><span className="text-white/40">{tr.escrow.txStore}</span><span className="font-medium">Bella Moda</span></div>
                  <div className="flex justify-between"><span className="text-white/40">{tr.escrow.txAmount}</span><span className="font-bold">14,500 DH</span></div>
                  <div className="flex justify-between"><span className="text-white/40">{tr.escrow.txStatus}</span><span className="text-[#00D084] flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> {tr.escrow.delivered}</span></div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="rounded-xl bg-white/[0.03] p-3 text-[12px] text-white/60">
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00D084] mt-0.5 shrink-0" />
                      <span dir="rtl">{tr.escrow.txNote}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] text-white/30">{tr.listings.original}</span>
                      <button
                        onClick={() => setEscrowTranslated(!escrowTranslated)}
                        className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[11px] font-bold hover:bg-white/[0.1] transition"
                      >
                        <Globe className="h-3 w-3" /> {tr.listings.translateBtn}
                      </button>
                    </div>
                    {escrowTranslated && (
                      <div className="mt-2.5 rounded-lg bg-[#00D084]/10 border border-[#00D084]/20 p-2.5">
                        <div className="text-[11px] text-[#00D084] font-bold flex items-center gap-1 mb-1"><Languages className="h-3 w-3" /> {tr.listings.translated}</div>
                        <div className="text-[12px] text-white/80">
                          {lang === "fr" ? tr.escrow.txNoteFr : lang === "en" ? tr.escrow.txNoteEn : `${tr.escrow.txNoteFr} / ${tr.escrow.txNoteEn}`}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Form */}
      <section className="border-t border-white/[0.06] bg-[#0F0F10]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-[32px] font-black leading-[1.1] lg:text-[44px] whitespace-pre-line">{tr.sell.title}</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/50">{tr.sell.desc}</p>
            <div className="mt-8 space-y-3">
              {tr.sell.bullets.map((b,i)=>(
                <div key={i} className="flex items-center gap-3 text-[14px]"><div className="h-6 w-6 rounded-full bg-[#00D084]/15 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-[#00D084]" /></div>{b}</div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">🇲🇦</div>
              <div className="text-[13px]"><div className="font-bold">{tr.sell.avgBoxTitle}</div><div className="text-white/50">{tr.sell.avgBoxSub}</div></div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 bg-[#17171A] p-6 lg:p-8">
              {!formSuccess ? (
                <form onSubmit={handleForm} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.titleStore} *</label>
                      <input required placeholder={tr.sell.placeholders.store} className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50 focus:ring-1 focus:ring-[#00D084]/20 placeholder:text-white/20" />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.niche} *</label>
                      <select required className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50">
                        {tr.sell.nicheOptions.map(o=> <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.followers} *</label>
                      <input required type="number" placeholder={tr.sell.placeholders.followers} className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50 placeholder:text-white/20" />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.insta} *</label>
                      <input required placeholder={tr.sell.placeholders.insta} className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50 placeholder:text-white/20" dir="ltr" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.reasonSell} *</label>
                    <select required className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50">
                      {tr.sell.reasonOptions.map(o=> <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.price} *</label>
                      <input required type="number" placeholder={tr.sell.placeholders.price} className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50 placeholder:text-white/20" />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-white/60 mb-1.5 block">{tr.sell.form.whatsapp} *</label>
                      <input required placeholder={tr.sell.placeholders.wa} className="w-full rounded-xl border border-white/10 bg-[#0A0A0B] px-4 py-3 text-[14px] outline-none focus:border-[#00D084]/50 placeholder:text-white/20" dir="ltr" />
                    </div>
                  </div>
                  <button type="submit" className="mt-2 w-full rounded-xl bg-[#00D084] py-3.5 text-[15px] font-black text-black hover:bg-[#00D084]/90 transition">
                    {tr.sell.form.submit}
                  </button>
                  <p className="text-center text-[11px] text-white/30">{tr.sell.form.terms}</p>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#00D084]/15 flex items-center justify-center mb-5">
                    <CheckCircle2 className="h-8 w-8 text-[#00D084]" />
                  </div>
                  <h3 className="text-[22px] font-black">{tr.sell.form.successTitle}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/60 max-w-[380px] mx-auto">{tr.sell.form.successDesc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-[12px]">
                    <Clock className="h-4 w-4 text-white/50" /> {tr.sell.form.tracking} <span className="font-mono font-bold">#TAJR-{Math.floor(1000+Math.random()*9000)}</span>
                  </div>
                  <button onClick={()=>setFormSuccess(false)} className="mt-6 block mx-auto text-[13px] text-white/40 hover:text-white">{tr.sell.form.addAnother}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#0A0A0B]">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 flex flex-col lg:flex-row gap-10 justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white text-black flex items-center justify-center font-black">ت</div>
              <span className="font-black text-[18px]">Tajr.me - تاجر</span>
            </div>
            <p className="mt-4 max-w-[360px] text-[13px] leading-6 text-white/40">{tr.footer.desc}</p>
            <div className="mt-6 flex gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" title="Replace 212600000000 with your real WhatsApp number" className="inline-flex items-center gap-2 rounded-full bg-[#00D084] px-5 py-2.5 text-[13px] font-bold text-black hover:bg-[#00D084]/90 transition">
                <MessageCircle className="h-4 w-4" /> تواصل واتساب: {WHATSAPP_NUMBER.slice(0,3)} {WHATSAPP_NUMBER.slice(3)} • EDIT ME
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-[13px]">
            <div>
              <div className="font-bold mb-3 text-white/80">{tr.footer.platform}</div>
              <ul className="space-y-2 text-white/40">
                {tr.footer.links.map(l=> <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="font-bold mb-3 text-white/80">{tr.footer.legal}</div>
              <ul className="space-y-2 text-white/40">
                {tr.footer.legalLinks.map(l=> <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
                <li className="pt-2 text-[11px]">{tr.footer.copy}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.04] py-4 px-6 text-center">
          <div className="mx-auto max-w-[1280px]">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2 text-[11px] text-white/50">
              <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-[#00D084]" /> {tr.footer.langNote}</span>
            </div>
            <div className="mt-3 text-[11px] text-white/20">{tr.footer.disclaimer}</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener" title={`WHATSAPP_NUMBER = ${WHATSAPP_NUMBER} - Replace with real number. Link format: https://wa.me/2126XXXXXXXX?text=مرحبا%20Tajr.me`} className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 transition group">
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -top-10 left-0 hidden group-hover:flex whitespace-nowrap rounded-full bg-black border border-white/20 px-3 py-1 text-[11px] text-white/80">EDIT: {WHATSAPP_NUMBER}</span>
      </a>
    </div>
  );
}
