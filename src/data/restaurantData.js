// Data resmi & akurat Sate Taichan 56 Djoeanda
// Instagram: @taichan56djoeanda
// Lokasi: Jl. Margonda Raya (Samping KFC Margonda), Depok

export const RESTAURANT_INFO = {
  name: "Sate Taichan 56 Djoeanda",
  tagline: "Sensasi Sate Taichan Pedas Gurih Nampol di Margonda Depok",
  shortDesc: "Daging ayam tebal & juicy dibakar sempurna, disiram sambal uleg rawit merah pedas segar berpadu perasan jeruk nipis asli dan nasi daun jeruk wangi legendaris.",
  instagramHandle: "taichan56djoeanda",
  instagramUrl: "https://www.instagram.com/taichan56djoeanda/",
  locationName: "Jl. Margonda Raya (Samping KFC Margonda)",
  fullAddress: "Jl. Margonda Raya, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16418 (Dekat Simpang Juanda & Samping KFC)",
  mapsEmbedQuery: "https://maps.google.com/maps?q=KFC+Margonda+Depok&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsUrl: "https://maps.google.com/?q=KFC+Margonda+Raya+Depok",
  operationalHours: "18:00 - 02:00 WIB",
  operationalDays: "Buka Setiap Hari (Senin - Minggu)",
  openTimeHour: 18,
  closeTimeHour: 2, // 02:00 next day
  whatsappNumber: "6281299565656",
  gofoodUrl: "https://gofood.link",
  grabfoodUrl: "https://grab.com",
  shopeefoodUrl: "https://shopee.co.id",
  rating: 4.8,
  totalReviews: "1.200+",
  skewersSoldThisMonth: "25.000+"
};

export const MENU_CATEGORIES = [
  { id: "all", name: "Semua Menu" },
  { id: "taichan", name: "Sate Taichan", badge: "Utama" },
  { id: "paket", name: "Paket Rame-Rame", badge: "Hemat" },
  { id: "saus", name: "Saus Tambahan" },
  { id: "pendamping", name: "Nasi & Lontong" },
  { id: "dessert", name: "Dessert & Minuman" },
];

export const MENU_ITEMS = [
  {
    id: "taichan-mix",
    name: "Sate Taichan Mix (Dada + Kulit)",
    category: "taichan",
    price: 35000,
    portion: "10 Tusuk",
    description: "Kombinasi juara daging dada empuk tebal dan kulit renyah gurih. Sudah termasuk sambal taichan khas & jeruk nipis.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Paling Laris 🔥"
  },
  {
    id: "taichan-dada",
    name: "Sate Taichan Daging Dada",
    category: "taichan",
    price: 35000,
    portion: "10 Tusuk",
    description: "Daging dada ayam pilihan tanpa lemak, potongan tebal, juicy di dalam, dan dibakar dengan marinasi kaldu gurih.",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Favorit Fitness/Lean"
  },
  {
    id: "taichan-paha",
    name: "Sate Taichan Daging Paha",
    category: "taichan",
    price: 35000,
    portion: "10 Tusuk",
    description: "Daging paha ayam super lembut (tender), berpadu gurih alaminya sari daging ayam saat dibakar arang panas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Super Tender"
  },
  {
    id: "taichan-kulit",
    name: "Sate Taichan Kulit Crispy",
    category: "taichan",
    price: 35000,
    portion: "10 Tusuk",
    description: "Kulit ayam renyah garing di luar, kenyal gurih di dalam. Bumbu meresap sampai gigitan terakhir.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 3,
    badge: "Kriuk Nagih"
  },
  {
    id: "taichan-mozarella",
    name: "Sate Taichan Mozarella Melt",
    category: "taichan",
    price: 40000,
    portion: "10 Tusuk",
    description: "Sate taichan daging tebal dibalut keju mozarella tebal yang ditorch hingga meleleh gurih creamy.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 2,
    badge: "Special Mozza"
  },
  {
    id: "paket-sultan-30",
    name: "Paket Sultan 30 Tusuk",
    category: "paket",
    price: 100000,
    portion: "30 Tusuk",
    description: "Pilihan puas rame-rame bareng teman/keluarga. Bebas mix Dada, Paha, dan Kulit + 2 Porsi Sambal Original & Jeruk Nipis.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Super Hemat 💰"
  },
  {
    id: "paket-kombo-kenyang",
    name: "Paket Kombo Kenyang Taichan 56",
    category: "paket",
    price: 48000,
    portion: "1 Porsi Lengkap",
    description: "10 Tusuk Sate Taichan (Bebas Pilih Varian) + 1 Nasi Gurih Daun Jeruk + 1 Es Teh Manis Segar Jumbo.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Kombo Komplit"
  },
  {
    id: "nasi-daun-jeruk",
    name: "Nasi Gurih Daun Jeruk",
    category: "pendamping",
    price: 10000,
    portion: "1 Porsi",
    description: "Nasi pulen hangat dimasak dengan rempah kaldu dan rajangan daun jeruk wangi khas Taichan 56 Djoeanda.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 0,
    badge: "Wajib Coba ✨"
  },
  {
    id: "lontong",
    name: "Lontong Daun Spesial",
    category: "pendamping",
    price: 6000,
    portion: "1 Porsi",
    description: "Lontong lembut dan kenyal dibungkus daun pisang alami, cocok dipadu sambal pedas taichan.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 0,
  },
  {
    id: "nasi-putih",
    name: "Nasi Putih Pulen",
    category: "pendamping",
    price: 7000,
    portion: "1 Porsi",
    description: "Nasi putih hangat berkualitas tinggi yang pulen dan bersih.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 0,
  },
  {
    id: "saus-mentai",
    name: "Extra Saus Mentai Torched",
    category: "saus",
    price: 7000,
    portion: "1 Cup",
    description: "Saus mentai gurih khas Jepang dengan tobiko lembut yang ditorch beraroma smokey.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 1,
    badge: "Creamy"
  },
  {
    id: "sambal-matah",
    name: "Extra Sambal Matah Bali",
    category: "saus",
    price: 7000,
    portion: "1 Cup",
    description: "Rajangan cabai rawit merah, bawang merah segar, serai, dan siraman minyak kelapa wangi.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 3,
    badge: "Segar"
  },
  {
    id: "saus-bbq",
    name: "Extra Saus Barbeque Smoky",
    category: "saus",
    price: 7000,
    portion: "1 Cup",
    description: "Saus BBQ kental dengan cita rasa manis, gurih, dan aroma asap yang pekat.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 1,
  },
  {
    id: "pisang-bakar",
    name: "Pisang Bakar Cokelat Keju Susu",
    category: "dessert",
    price: 18000,
    portion: "1 Porsi",
    description: "Pisang uli pilihan dibakar wangi, bertabur keju cheddar gurih parut, cokelat meses, dan susu kental manis.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 0,
    badge: "Penetral Pedas"
  },
  {
    id: "es-jeruk",
    name: "Es Jeruk Peras Murni",
    category: "dessert",
    price: 10000,
    portion: "Gelas Jumbo",
    description: "Perasan jeruk peras asli dengan rasa asam manis segar yang langsung mendinginkan lidah.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    spicyLevel: 0,
    badge: "Best Drink 🍊"
  },
  {
    id: "es-teh",
    name: "Es Teh Manis Jumbo",
    category: "dessert",
    price: 6000,
    portion: "Gelas Jumbo",
    description: "Teh seduh wangi melati dengan gula murni, disajikan dingin menyegarkan.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    spicyLevel: 0,
  }
];

export const SPICE_LEVELS = [
  {
    level: 1,
    name: "Level 1: Santai Dulu",
    tagline: "Ramah lidah & pemula",
    scoville: "1.000 SHU",
    heatPercentage: 25,
    flameCount: 1,
    color: "from-amber-400 to-yellow-500",
    description: "Pedas tipis gurih dengan aroma jeruk nipis lembut. Cocok buat kamu yang baru eksplor sate taichan.",
    recommendation: "Pas dinikmati dengan Lontong Daun!"
  },
  {
    level: 2,
    name: "Level 2: Nendang Pas",
    tagline: "Favorit Warga Margonda",
    scoville: "5.000 SHU",
    heatPercentage: 50,
    flameCount: 2,
    color: "from-orange-500 to-amber-500",
    description: "Sensasi cabai rawit merah mulai terasa hangat di lidah, rasa gurih kaldu dan asinnya seimbang nikmat.",
    recommendation: "Cocok dipadukan dengan Nasi Gurih Daun Jeruk!"
  },
  {
    level: 3,
    name: "Level 3: Nampol 56",
    tagline: "Karakter Asli Taichan 56",
    scoville: "15.000 SHU",
    heatPercentage: 80,
    flameCount: 3,
    color: "from-red-500 to-orange-600",
    description: "Cabai rawit uleg melimpah bikin keringat bercucuran, sensasi asam segar jeruk nipis bikin nagih terus!",
    recommendation: "Wajib siapkan Es Jeruk Segar di sampingmu!"
  },
  {
    level: 4,
    name: "Level Dewa: Juanda Membara",
    tagline: "Khusus Jawara Pedas Sejati!",
    scoville: "35.000 SHU",
    heatPercentage: 100,
    flameCount: 4,
    color: "from-purple-600 via-red-600 to-flame-600",
    description: "Tingkat kepedasan ekstrem rawit merah murni tanpa ampun! Bikin melek semalaman di Margonda.",
    recommendation: "Pesan Pisang Bakar Keju + 2 Gelas Es Jeruk untuk pertolongan pertama! 🔥"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    caption: "Malam-malam di Margonda paling nikmat bakar sate taichan yang dagingnya tebel-tebel! 🔥🍢 #taichan56djoeanda #kulinermargonda",
    likes: 842,
    comments: 54,
    isReel: false
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    caption: "Kunci nikmatnya ada di perasan jeruk nipis segar di atas sambal rawit merah uleg asli. Segar, pedas, gurih! 🌶️🍋",
    likes: 1205,
    comments: 89,
    isReel: true
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    caption: "Siapa tim kulit krispi? Garing di luar tapi pas digigit juicy kenyal gurihnya meledak di mulut! 🤤✨",
    likes: 963,
    comments: 63,
    isReel: false
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    caption: "Aroma nasi daun jeruknya aja udah bikin lapar. Dipakein sate taichan paha + kuah kaldu pedas, auto nambah porsi!",
    likes: 1530,
    comments: 112,
    isReel: false
  },
  {
    id: "ig-5",
    imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    caption: "Topping Mozarella Melt yang ditorch langsung pas kamu pesan. Lelehannya creamy banget nemenin pedasnya taichan! 🧀🔥",
    likes: 1140,
    comments: 77,
    isReel: true
  },
  {
    id: "ig-6",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    caption: "Paket Sultan 30 tusuk siap meluncur nemenin nobar & nongkrong malam ini di samping KFC Margonda! Kuy merapat!",
    likes: 1890,
    comments: 145,
    isReel: false
  }
];

export const TESTIMONIALS = [
  {
    name: "Rian Aditya",
    role: "Mahasiswa UI Depok",
    comment: "Langganan tiap abis nugas malam! Taichan 56 Margonda dagingnya beneran tebel ga kaleng-kaleng, sambelnya pedes seger jeruk nipis asli bukan cabe bubuk abal-abal.",
    rating: 5,
    favorite: "Sate Mix + Nasi Daun Jeruk"
  },
  {
    name: "Nadia Larasati",
    role: "Kuliner Hunter Depok",
    comment: "Kulitnya the best in town! Garing tapi pas digigit masih empuk kenyal gurih. Mozarella torched-nya juga melimpah banget.",
    rating: 5,
    favorite: "Taichan Mozarella & Kulit Crispy"
  },
  {
    name: "Dimas Nugraha",
    role: "Warga Sukmajaya / Juanda",
    comment: "Tempat nongkrong kuliner malam andalan di Margonda samping KFC. Buka sampe jam 2 pagi, porsi 30 tusuk paling hemat buat dimakan bareng temen kantor.",
    rating: 5,
    favorite: "Paket Sultan 30 Tusuk"
  }
];

export const WHY_US_FEATURES = [
  {
    title: "100% Daging Ayam Segar",
    desc: "Bukan ayam beku berhari-hari. Daging dipotong tebal, juicy, dan dimarinasi kaldu gurih rempah setiap hari.",
    icon: "drumstick"
  },
  {
    title: "Sambal Uleg Rawit Asli",
    desc: "Cabai rawit merah segar diuleg dengan takaran presisi, dipadukan perasan jeruk nipis murni yang menyegarkan.",
    icon: "flame"
  },
  {
    title: "Nasi Gurih Daun Jeruk",
    desc: "Nasi pulen dengan wangi daun jeruk yang harum semerbak, menyempurnakan santapan taichan malammu.",
    icon: "sparkles"
  },
  {
    title: "Lokasi Strategis Margonda",
    desc: "Berada persis di samping KFC Margonda, mudah dijangkau, parkir nyaman, dan buka hingga pukul 02:00 WIB.",
    icon: "map-pin"
  }
];
