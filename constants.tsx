
import { Player, Match, NewsItem, Translations, LeagueEntry } from './types';

export const CLUB_NAME = "نادي شباب هوارة";
export const CLUB_NAME_FR = "Chabab Houara";
export const FOUNDED_YEAR = "1965";
export const FOUNDER_NAME = "أكشود عبد الغني";
export const FOUNDER_NAME_FR = "Abdelghani Akchoud";
export const CLUB_LOGO_URL = "https://share.google/MMGC62l0qVNUArga9";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/clubchababhouara",
  email: "contact@chababhouara.ma",
  phone: "+212 5 28 52 84 45",
  mobile: "+212 6 79 32 40 70",
  address: "ملعب 16 نونبر، أولاد تايمة",
  addressFr: "Stade 16 Novembre, Ouled Teima"
};

export const TRANSLATIONS: Translations = {
  home: { ar: "الرئيسية", fr: "Accueil" },
  about: { ar: "عن النادي", fr: "À Propos" },
  team: { ar: "الفريق الأول", fr: "L'Équipe" },
  matches: { ar: "المباريات", fr: "Matchs" },
  news: { ar: "الأخبار", fr: "Actualités" },
  gallery: { ar: "المعرض", fr: "Galerie" },
  contact: { ar: "اتصل بنا", fr: "Contact" },
  slogan: { ar: "فخر هوارة.. روح الانتصارات", fr: "La Fierté de Houara, l'Esprit de la Victoire" },
  history: { ar: "تاريخنا", fr: "Notre Histoire" },
  players: { ar: "اللاعبين", fr: "Joueurs" },
  staff: { ar: "الطاقم التقني", fr: "Staff Technique" },
  nextMatch: { ar: "المباراة القادمة", fr: "Prochain Match" },
  latestResults: { ar: "آخر النتائج", fr: "Derniers Résultats" },
  leagueTable: { ar: "ترتيب الدوري", fr: "Classement" },
  foundedText: { ar: "تأسس في 1965", fr: "Fondé en 1965" },
  location: { ar: "أولاد تايمة، المغرب", fr: "Ouled Teima, Maroc" },
  palmares: { ar: "الإنجازات", fr: "Palmarès" },
  founderTitle: { ar: "مؤسس النادي", fr: "Fondateur du Club" },
  philosophy: { ar: "فلسفتنا", fr: "Philosophie" },
  academy: { ar: "مدرسة التكوين", fr: "Académie" },
  season: { ar: "موسم 2025/2026", fr: "Saison 2025/2026" },
  homeMatch: { ar: "داخل الميدان", fr: "À domicile" },
  awayMatch: { ar: "خارج الميدان", fr: "À l'extérieur" },
  fixturesTitle: { ar: "برنامج المباريات", fr: "Calendrier des Matchs" },
  tableFull: { ar: "الترتيب الكامل للبطولة الوطنية", fr: "Classement Complet du Championnat" }
};

export const LEAGUE_TABLE: LeagueEntry[] = [
  { pos: 1, team: "أولمبيك خريبكة OCK", played: 13, won: 7, drawn: 4, lost: 2, gf: 14, ga: 7, gd: 7, pts: 25, form: ['W', 'W', 'L', 'W', 'W'] },
  { pos: 2, team: "سريع وادي زم RCOZ", played: 13, won: 7, drawn: 2, lost: 4, gf: 19, ga: 10, gd: 9, pts: 23, form: ['W', 'W', 'W', 'W', 'D'] },
  { pos: 3, team: "اتحاد الخميسات IZK", played: 13, won: 6, drawn: 5, lost: 2, gf: 13, ga: 9, gd: 4, pts: 23, form: ['W', 'W', 'W', 'D', 'D'] },
  { pos: 4, team: "جمعية الشباب الرياضي AJS", played: 13, won: 5, drawn: 6, lost: 2, gf: 17, ga: 11, gd: 6, pts: 21, form: ['D', 'L', 'W', 'D', 'W'] },
  { pos: 5, team: "شباب هوارة CCH", played: 13, won: 5, drawn: 4, lost: 4, gf: 20, ga: 15, gd: 5, pts: 19, form: ['L', 'D', 'W', 'L', 'L'] },
  { pos: 6, team: "مولودية آسا AMSA", played: 13, won: 5, drawn: 4, lost: 4, gf: 10, ga: 9, gd: 1, pts: 19, form: ['W', 'L', 'D', 'D', 'L'] },
  { pos: 7, team: "نادي مستقبل المرسى CMM", played: 13, won: 5, drawn: 4, lost: 4, gf: 15, ga: 14, gd: 1, pts: 19, form: ['L', 'D', 'D', 'L', 'D'] },
  { pos: 8, team: "أولمبيك اليوسفية OCY", played: 13, won: 3, drawn: 9, lost: 1, gf: 9, ga: 7, gd: 2, pts: 18, form: ['D', 'L', 'W', 'D', 'D'] },
  { pos: 9, team: "شباب الفتح البيضاوي CCFAC", played: 13, won: 5, drawn: 3, lost: 5, gf: 12, ga: 12, gd: 0, pts: 18, form: ['D', 'W', 'L', 'W', 'L'] },
  { pos: 10, team: "أولمبيك مراكش OM", played: 13, won: 3, drawn: 7, lost: 3, gf: 12, ga: 11, gd: 1, pts: 16, form: ['D', 'W', 'W', 'D', 'W'] },
  { pos: 11, team: "جمعية المنصورية ASM", played: 13, won: 3, drawn: 6, lost: 4, gf: 10, ga: 10, gd: 0, pts: 15, form: ['W', 'W', 'L', 'L', 'D'] },
  { pos: 12, team: "الفتح الرياضي الناظوري FRN", played: 13, won: 4, drawn: 3, lost: 6, gf: 8, ga: 10, gd: -2, pts: 15, form: ['D', 'L', 'W', 'L', 'D'] },
  { pos: 13, team: "الوداد الرياضي السرغيني WASK", played: 13, won: 3, drawn: 5, lost: 5, gf: 11, ga: 16, gd: -5, pts: 14, form: ['L', 'D', 'L', 'D', 'W'] },
  { pos: 14, team: "حسنية لازاري وجدة HLO", played: 13, won: 3, drawn: 4, lost: 6, gf: 8, ga: 18, gd: -10, pts: 13, form: ['L', 'L', 'L', 'D', 'W'] },
  { pos: 15, team: "الرشاد البرنوصي RB", played: 13, won: 1, drawn: 7, lost: 5, gf: 11, ga: 19, gd: -8, pts: 10, form: ['L', 'D', 'D', 'L', 'L'] },
  { pos: 16, team: "يوسفية برشيد CAYB", played: 13, won: 0, drawn: 5, lost: 8, gf: 10, ga: 21, gd: -11, pts: 5, form: ['L', 'L', 'L', 'L', 'L'] },
];

export const MILESTONES = [
  { year: "1965", ar: "تأسيس النادي رسمياً ليكون قاطرة التنمية الرياضية في منطقة هوارة.", fr: "Fondation officielle du club pour être le moteur du développement sportif à Houara." },
  { year: "2005-06", ar: "موسم تاريخي: بطل القسم الأول هواة والصعود التاريخي إلى القسم الوطني الثاني.", fr: "Saison historique : Champion GNFA 1 et promotion historique en Botola 2." },
  { year: "2006-08", ar: "تحقيق المركز الثالث في القسم الوطني الثاني لموسمين متتاليين والمنافسة بقوة على الصعود.", fr: "3ème place en Botola 2 pendant deux saisons, frôlant la promotion en Botola 1." },
  { year: "2025-26", ar: "الاستثمار في الفئات الصغرى (U13-U19) والتركيز على العودة إلى منصات التتويج.", fr: "Investissement dans les jeunes (U13-U19) et focus sur le retour au sommet." }
];

export const ACHIEVEMENTS = [
  { title: { ar: "بطل القسم الأول هواة", fr: "Champion GNFA 1" }, year: "2005-2006" },
  { title: { ar: "الصعود إلى القسم الوطني الثاني", fr: "Promotion en Botola 2" }, year: "2005-2006" },
  { title: { ar: "المركز الثالث (البطولة 2)", fr: "3ème Place (Botola 2)" }, year: "2006-2007" },
  { title: { ar: "المركز الثالث (البطولة 2)", fr: "3ème Place (Botola 2)" }, year: "2007-2008" },
  { title: { ar: "المركز الرابع (البطولة 2)", fr: "4ème Place (Botola 2)" }, year: "2008-2009" }
];

export const PLAYERS: Player[] = [
  { id: 1, name: "ياسين الإدريسي", position: "حارس مرمى", number: 1, image: "https://picsum.photos/seed/p1/400/500" },
  { id: 2, name: "عمر الهواري", position: "مدافع", number: 4, image: "https://picsum.photos/seed/p2/400/500" },
  { id: 3, name: "حمزة بناني", position: "وسط ميدان", number: 8, image: "https://picsum.photos/seed/p3/400/500" },
  { id: 4, name: "سفيان رحيمي", position: "مهاجم", number: 10, image: "https://picsum.photos/seed/p4/400/500" },
];

export const MATCHES: Match[] = [
  { id: 1, matchday: 1, opponent: "النادي البلدي المرسى", opponentLogo: "", date: "2025-09-15", time: "16:00", venue: "ملعب الحسن الثاني، أولاد تايمة", isHome: true, status: 'upcoming' },
  { id: 2, matchday: 2, opponent: "أولمبيك مراكش", opponentLogo: "", date: "2025-09-22", time: "16:00", venue: "ملعب مراكش", isHome: false, status: 'upcoming' },
  { id: 3, matchday: 3, opponent: "فتح الدار البيضاء", opponentLogo: "", date: "2025-09-29", time: "16:00", venue: "ملعب الحسن الثاني، أولاد تايمة", isHome: true, status: 'upcoming' },
  { id: 4, matchday: 4, opponent: "فتح الناظور", opponentLogo: "", date: "2025-10-06", time: "15:00", venue: "الملعب البلدي بالناظور", isHome: false, status: 'upcoming' },
  { id: 5, matchday: 5, opponent: "يوسفية برشيد", opponentLogo: "", date: "2025-10-13", time: "16:00", venue: "ملعب الحسن الثاني، أولاد تايمة", isHome: true, status: 'upcoming' },
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "انطلاق استعدادات موسم 2025/2026",
    excerpt: "بدأ الفريق الأول تدريباته الرسمية استعداداً لانطلاق منافسات القسم الوطني الأول هواة...",
    date: "2025-08-01",
    image: "https://picsum.photos/seed/news1/800/400",
    category: "الفريق الأول"
  },
  {
    id: 2,
    title: "مدرسة التكوين تفتح أبواب التسجيل",
    excerpt: "تعلن إدارة مدرسة شباب هوارة عن بدء استقبال طلبات التسجيل للفئات الصغرى من U13 إلى U19...",
    date: "2025-07-20",
    image: "https://picsum.photos/seed/news2/800/400",
    category: "الأكاديمية"
  }
];
