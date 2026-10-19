// Data resmi & akurat Sate Taichan 56 Djoeanda
// Instagram: @taichan56djoeanda
// Lokasi: Jl. Margonda Raya (Samping KFC Margonda), Depok

export const RESTAURANT_INFO = {
  name: "Taichan 56 Djoeanda",
  officialTitle: "SATE TAICHAN DEPOK",
  tagline: "THE GRILL TAICHAN 🔥",
  shortDesc: "Sate Taichan Depok daging tebal juicy dipadu lelehan mozarella, sambal uleg rawit segar, perasan jeruk nipis asli, dan taburan bumbu gurih khas Taichan 56.",
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
  shopeefoodUrl: "https://shopee.co.id/universal-link/now-food/shop/20311468",
  gofoodUrl: "https://gofood.link",
  grabfoodUrl: "https://grab.com",
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
    image: "/menu/sate_taichan_jakarta.jpg",
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
    image: "/menu/sate_taichan.jpg",
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
    image: "/brand/post_taichan_original.png",
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
    image: "/menu/sate_kulit.jpg",
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
    image: "/brand/post_mozzarella.png",
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
    image: "/menu/paket_sultan.jpg",
    isBestSeller: true,
    spicyLevel: 3,
    badge: "Super Hemat"
  },
  {
    id: "paket-kombo-kenyang",
    name: "Paket Kombo Kenyang Taichan 56",
    category: "paket",
    price: 48000,
    portion: "1 Porsi Lengkap",
    description: "10 Tusuk Sate Taichan (Bebas Pilih Varian) + 1 Nasi Gurih Daun Jeruk + 1 Es Teh Manis Segar Jumbo.",
    image: "/menu/sate_taichan_jakarta.jpg",
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
    image: "/menu/nasi_uduk.jpg",
    isBestSeller: true,
    spicyLevel: 0,
    badge: "Wajib Coba"
  },
  {
    id: "lontong",
    name: "Lontong Daun Spesial",
    category: "pendamping",
    price: 6000,
    portion: "1 Porsi",
    description: "Lontong lembut dan kenyal dibungkus daun pisang alami, cocok dipadu sambal pedas taichan.",
    image: "/menu/lontong_daun.jpg",
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
    image: "/menu/nasi_putih.jpg",
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
    image: "/menu/saus_mentai.jpg",
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
    image: "/menu/sambal_matah.jpg",
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
    image: "/menu/saus_bbq.jpg",
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
    image: "/menu/pisang_bakar.jpg",
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
    image: "/menu/es_jeruk.jpg",
    isBestSeller: true,
    spicyLevel: 0,
    badge: "Best Drink"
  },
  {
    id: "es-teh",
    name: "Es Teh Manis Jumbo",
    category: "dessert",
    price: 6000,
    portion: "Gelas Jumbo",
    description: "Teh seduh wangi melati dengan gula murni, disajikan dingin menyegarkan.",
    image: "/menu/es_teh.jpg",
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
    imageUrl: "/brand/post_mozzarella.png",
    caption: "Lelehan keju Mozarella tebal di atas sate taichan daging bakar panas dipadu perasan jeruk nipis segar & sambal uleg rawit! 🔥🧀 #thegrilltaichan #taichan56djoeanda",
    likes: 842,
    comments: 54,
    isReel: false,
    title: "Taichan Mozarella Melt"
  },
  {
    id: "ig-2",
    imageUrl: "/brand/post_taichan_original.png",
    caption: "Sate Taichan daging pilihan dengan taburan bumbu gurih khas 56, sambal pedas segar, dan jeruk nipis murni. THE GRILL TAICHAN 🔥",
    likes: 1205,
    comments: 89,
    isReel: false,
    title: "Sate Taichan Daging + Taburan Gurih"
  },
  {
    id: "ig-3",
    imageUrl: "/brand/post_taichan_kulit.png",
    caption: "Sate Taichan Kulit Crispy & Daging Mix bakar empuk juicy. Sensasi gurih kenyal renyah nagih khas Margonda Depok! 🍢🍋",
    likes: 963,
    comments: 63,
    isReel: false,
    title: "Sate Taichan Kulit & Mix"
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
    icon: "leaf"
  },
  {
    title: "Lokasi Strategis Margonda",
    desc: "Berada persis di samping KFC Margonda, mudah dijangkau, parkir nyaman, dan buka hingga pukul 02:00 WIB.",
    icon: "map-pin"
  }
];
