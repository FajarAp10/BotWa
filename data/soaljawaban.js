
const truthList = [
  "Apa hal paling memalukan yang pernah kamu lakukan di depan umum?",
  "Siapa nama mantan yang masih suka kamu stalk?",
  "Kalau bisa balikan sama 1 orang, siapa yang bakal kamu pilih?",
  "Pernah pura-pura sakit biar gak sekolah? Ceritakan alasannya.",
  "Siapa teman yang paling ngeselin tapi kamu gak bisa jauhin?",
  "Pernah suka sama pacar orang? Ceritakan!",
  "Kalau kamu punya kekuatan gaib, kamu bakal pakai buat apa?",
  "Pernah curi-curi pandang siapa? Jelaskan.",
  "Pernah suka sama guru/dosen? Siapa?",
  "Hal paling gila yang pernah kamu lakukan demi cinta?",
  "Kalau disuruh jujur, siapa yang paling kamu benci diam-diam?",
  "Pernah diselingkuhin? Atau justru kamu yang selingkuh?",
  "Kapan terakhir kamu pura-pura bahagia?",
  "Siapa nama kontak yang kamu samarkan di HP karena malu?",
  "Kalau bisa ubah 1 hal dari masa lalu, apa itu?",
  "Kamu pilih cinta atau uang? Jelaskan kenapa.",
  "Pernah ciuman? Sama siapa dan di mana?",
  "Kalau bisa hilangin 1 orang dari hidupmu, siapa?",
  "Apa kebohongan terbesar yang belum ketahuan sampai sekarang?",
  "Hal tergila yang pengen kamu coba tapi belum berani?",
  "Siapa orang yang paling kamu pengen ajak chat sekarang?",
  "Apa hal yang paling kamu insecure-in dari dirimu?",
  "Kamu pernah punya pikiran jahat? Tentang apa?",
  "Siapa yang menurutmu paling fake tapi akrab sama kamu?",
  "Apa ketakutan terbesar kamu yang gak pernah kamu bilang ke siapa-siapa?"
];

const dareList = [
  "Ganti bio wa *Aku suka agus* dan biarkan 30 menit!",
  "VN 5 detik dengan suara ketawa paling serem versimu!",
  "Ganti foto profil jadi wajah temen random selama 15 menit!",
  "Kirim stiker paling cringe yang kamu punya!",
  "VN nyanyikan lagu *Balonku Ada Lima* tapi dengan huruf vokal i!",
  "Chat mantan dan bilang *aku masih sayang kamu* (screenshot ya!)",
  "Pake filter jelek di kamera dan kirim fotonya ke sini!",
  "Ketik *Aku ingin menikah tahun ini* di status WhatsApp!",
  "Rekam suara bilang *Aku adalah budak cinta* dan kirim ke sini!",
  "Chat orang random dan tanya *Kamu percaya alien?*",
  "Ketik *Aku lagi pengen dimanja* di grup teman!",
  "Bilang ke orang random *Kamu cakep deh*",
  "Telepon kontak terakhir di WA dan bilang *Aku suka kamu!*",
  "Ganti nama kontak pacar jadi *Calon Suami/Istri*",
  "Ketik *Aku pengen peluk seseorang hari ini* di status WA",
  "Ceritakan rahasia tergokil kamu ke grup ini!",
  "Berikan pujian ke 3 orang di grup ini, sekarang juga!",
  "VN ngomong *aku ngaku salah* sambil pura-pura nangis",
  "VN ngomong dengan suara genit: *Aduh om jangan gitu dong*",
  "Kirim selfie dengan gaya paling kocak!",
  "VN nyebut nama crush kamu 5x nonstop!",
  "Tanya ke orang tua *Boleh nikah umur berapa ya?* lalu screenshot jawabannya",
  "Ketik *Pengen dipeluk* ke nomor orang random dikontakmu!",
  "Kirim foto tampang bangun tidur ke sini tanpa edit!",
  "Kirim emoji 🍑💦 ke orang random dan screenshot reaksinya!",
  "Kirim video kamu joget lagu TikTok yang lagi viral!"
];

// ================== TEBAK-AKU CONFIG ==================
const soalTebakan = [
    { soal: "Aku bisa dibuka tapi tak bisa ditutup. Aku apa?", jawaban: "telur" },
    { soal: "Aku punya kepala tapi tak punya badan. Aku apa?", jawaban: "koin" },
    { soal: "Aku selalu bertambah tapi tak pernah berkurang. Aku apa?", jawaban: "umur" },
    { soal: "Aku putih di luar, kuning di dalam, disukai anak-anak. Aku apa?", jawaban: "telur" },
    { soal: "Aku punya gigi tapi tidak bisa menggigit. Aku apa?", jawaban: "sisir" },
    { soal: "Aku bisa terbang tanpa sayap dan menangis tanpa mata. Aku apa?", jawaban: "awan" },
    { soal: "Aku ada di tengah malam tapi bukan benda. Aku apa?", jawaban: "huruf l" },
    { soal: "Aku selalu di depan cermin tapi tak pernah terlihat. Aku apa?", jawaban: "bayangan" },
    { soal: "Aku selalu datang tapi tak pernah tepat waktu. Aku apa?", jawaban: "kereta" },
    { soal: "Aku sering dipukul tapi tak pernah marah. Aku apa?", jawaban: "bedug" },
    { soal: "Aku bisa bersinar tapi bukan lampu. Aku apa?", jawaban: "matahari" },
    { soal: "Aku basah tapi bisa memadamkan api. Aku apa?", jawaban: "air" },
    { soal: "Aku selalu naik tapi tak pernah turun. Aku apa?", jawaban: "harga" },
    { soal: "Aku berbunyi saat disentuh, punya senar tapi bukan gitar. Aku apa?", jawaban: "biola" },
    { soal: "Aku bisa duduk tapi bukan orang. Aku apa?", jawaban: "kursi" },
    { soal: "Aku bisa diinjak tapi tak pernah protes. Aku apa?", jawaban: "sendal" },
    { soal: "Aku kecil, suka nyedot, bikin gatel. Aku apa?", jawaban: "nyamuk" },
    { soal: "Aku bulat, sering ditendang. Aku apa?", jawaban: "bola" },
    { soal: "Aku suka manjat tapi bukan monyet. Aku apa?", jawaban: "kucing" },
    { soal: "Aku manis, suka dibungkus permen. Aku apa?", jawaban: "gula" },
    { soal: "Aku di tangan tapi bukan jari. Aku apa?", jawaban: "jam" },
    { soal: "Aku nyala kalau gelap. Aku apa?", jawaban: "lampu" },
    { soal: "Aku bisa dibuka, punya gigi. Aku apa?", jawaban: "resleting" },
    { soal: "Aku berbunyi saat lapar disentuh. Aku apa?", jawaban: "perut" },
    { soal: "Aku naik turun tapi tetap di tempat. Aku apa?", jawaban: "lift" },
    { soal: "Aku keras, suka dipakai bangun rumah. Aku apa?", jawaban: "batu" },
    { soal: "Aku suka terbang tapi bukan burung. Aku apa?", jawaban: "pesawat" },
    { soal: "Aku putih, dingin, bisa dimakan. Aku apa?", jawaban: "es" },
    { soal: "Aku kecil, hitam, bikin pedas. Aku apa?", jawaban: "lada" },
    { soal: "Aku bulat, bisa meletus. Aku apa?", jawaban: "balon" },
    { soal: "Aku selalu lapar, makan listrik. Aku apa?", jawaban: "hp" },
    { soal: "Aku bulu tapi bukan bulu mata. Aku apa?", jawaban: "bulu" },
    { soal: "Aku disetrika biar rapi. Aku apa?", jawaban: "baju" },
    { soal: "Aku suka jatuh pas galau. Aku apa?", jawaban: "airmata" },
    { soal: "Aku suka dipegang, kadang dipeluk. Aku apa?", jawaban: "bantal" },
    { soal: "Aku warnanya kuning, suka digoreng. Aku apa?", jawaban: "pisang" },
    { soal: "Aku ada angka, bisa jalan. Aku apa?", jawaban: "jam" },
    { soal: "Aku bening, masuk ke botol. Aku apa?", jawaban: "air" },
    { soal: "Aku ditulis di kertas, bisa bikin senyum. Aku apa?", jawaban: "puisi" },
    { soal: "Aku kering tapi bisa basah. Aku apa?", jawaban: "handuk" },
    { soal: "Aku kecil, putih, bikin senyum cerah. Aku apa?", jawaban: "gigi" },
    { soal: "Aku sering jatuh di malam hari. Aku apa?", jawaban: "embun" },
    { soal: "Aku bisa mencium tapi tak punya hidung. Aku apa?", jawaban: "bunga" }
];

// key: pengirim, value: { jawaban: string, timeout: TimeoutObject }
const soalKuis = [
  {
    soal: "Jika 2 + 3 = 10, 3 + 4 = 21, maka 4 + 5 = ?",
    pilihan: ["A. 20", "B. 27", "C. 36", "D. 45"],
    jawaban: "B" // (2×5, 3×7, 4×9)
  },
  {
    soal: "Benda apa yang makin diisi justru makin ringan?",
    pilihan: ["A. Tas", "B. Botol", "C. Balon", "D. Ember"],
    jawaban: "C"
  },
  {
    soal: "Urutan yang benar: Januari, Februari, ?, April",
    pilihan: ["A. Mei", "B. Maret", "C. Juni", "D. Desember"],
    jawaban: "B"
  },
  {
    soal: "Jika semua bloop adalah blap, dan semua blap adalah blip, maka bloop pasti?",
    pilihan: ["A. Blip", "B. Bloop", "C. Bukan blip", "D. Tidak bisa ditentukan"],
    jawaban: "A"
  },
  {
    soal: "Angka berikutnya dari 2, 4, 8, 16 adalah?",
    pilihan: ["A. 18", "B. 24", "C. 30", "D. 32"],
    jawaban: "D"
  },
  {
    soal: "Apa yang selalu datang tapi tidak pernah tiba?",
    pilihan: ["A. Hujan", "B. Besok", "C. Malam", "D. Libur"],
    jawaban: "B"
  },
  {
    soal: "Jika kamu menghadap ke timur lalu berputar 180°, kamu menghadap ke?",
    pilihan: ["A. Timur", "B. Utara", "C. Selatan", "D. Barat"],
    jawaban: "D"
  },
  {
    soal: "Mana yang BUKAN termasuk segitiga?",
    pilihan: ["A. Sama sisi", "B. Sama kaki", "C. Siku-siku", "D. Persegi"],
    jawaban: "D"
  },
  {
    soal: "Huruf apa yang tidak pernah muncul dalam angka Romawi?",
    pilihan: ["A. L", "B. C", "C. M", "D. K"],
    jawaban: "D"
  },
  {
    soal: "Jika hari ini Jumat, 10 hari lagi hari apa?",
    pilihan: ["A. Minggu", "B. Senin", "C. Selasa", "D. Rabu"],
    jawaban: "C"
  },
  {
    soal: "Benda apa yang punya jarum tapi tidak bisa menjahit?",
    pilihan: ["A. Jam", "B. Pohon", "C. Landak", "D. Kompas"],
    jawaban: "A"
  },
  {
    soal: "3 orang menangkap 3 ikan dalam 3 menit. 6 orang butuh berapa menit untuk menangkap 6 ikan?",
    pilihan: ["A. 3", "B. 6", "C. 9", "D. 12"],
    jawaban: "A"
  },
  {
    soal: "Kata mana yang paling berbeda?",
    pilihan: ["A. Merah", "B. Biru", "C. Hijau", "D. Meja"],
    jawaban: "D"
  },
  {
    soal: "Jika semua kucing adalah hewan, apakah semua hewan adalah kucing?",
    pilihan: ["A. Ya", "B. Tidak", "C. Mungkin", "D. Kadang"],
    jawaban: "B"
  },
  {
    soal: "Apa yang bisa pecah walau tidak dijatuhkan?",
    pilihan: ["A. Gelas", "B. Telur", "C. Janji", "D. Batu"],
    jawaban: "C"
  },
  {
    soal: "Huruf ke-3 dari belakang alfabet?",
    pilihan: ["A. X", "B. Y", "C. Z", "D. W"],
    jawaban: "A"
  },
  {
    soal: "Jika 5 mesin membuat 5 barang dalam 5 menit, berapa mesin untuk membuat 10 barang dalam 5 menit?",
    pilihan: ["A. 5", "B. 8", "C. 10", "D. 15"],
    jawaban: "C"
  },
  {
    soal: "Yang mana lebih berat?",
    pilihan: ["A. 1 kg kapas", "B. 1 kg besi", "C. Sama berat", "D. Tidak tahu"],
    jawaban: "C"
  },
  {
    soal: "Apa yang selalu basah saat mengeringkan?",
    pilihan: ["A. Handuk", "B. Air", "C. Sabun", "D. Kain"],
    jawaban: "A"
  },
  {
    soal: "Jika kamu punya satu korek api dan masuk ke ruangan gelap berisi lilin dan lampu minyak, apa yang dinyalakan dulu?",
    pilihan: ["A. Lilin", "B. Lampu", "C. Korek api", "D. Minyak"],
    jawaban: "C"
  },
   {
    soal: "Siapa proklamator Indonesia selain Soekarno?",
    pilihan: ["A. Soeharto", "B. BJ Habibie", "C. Mohammad Hatta", "D. Sutan Sjahrir"],
    jawaban: "C"
  },
  {
    soal: "Tanggal berapa Indonesia merdeka?",
    pilihan: ["A. 20 Mei 1945", "B. 17 Agustus 1945", "C. 1 Juni 1945", "D. 10 November 1945"],
    jawaban: "B"
  },
  {
    soal: "Apa dasar negara Indonesia?",
    pilihan: ["A. UUD 1945", "B. Bhinneka Tunggal Ika", "C. Trisila", "D. Pancasila"],
    jawaban: "D"
  },
  {
    soal: "Lambang sila ke-2 Pancasila adalah?",
    pilihan: ["A. Rantai", "B. Bintang", "C. Pohon beringin", "D. Banteng"],
    jawaban: "A"
  },
  {
    soal: "Negara pertama yang mengakui kemerdekaan Indonesia?",
    pilihan: ["A. Jepang", "B. Amerika", "C. Mesir", "D. Belanda"],
    jawaban: "C"
  },
  {
    soal: "Apa ibu kota Australia?",
    pilihan: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Perth"],
    jawaban: "C"
  },
  {
    soal: "Planet terbesar di tata surya?",
    pilihan: ["A. Mars", "B. Saturnus", "C. Bumi", "D. Jupiter"],
    jawaban: "D"
  },
  {
    soal: "Siapa penemu listrik yang terkenal dengan eksperimen petir?",
    pilihan: ["A. Edison", "B. Tesla", "C. Benjamin Franklin", "D. Newton"],
    jawaban: "C"
  },
  {
    soal: "Alat untuk mengukur gempa bumi disebut?",
    pilihan: ["A. Barometer", "B. Seismograf", "C. Termometer", "D. Anemometer"],
    jawaban: "B"
  },
  {
    soal: "Samudra terluas di dunia?",
    pilihan: ["A. Atlantik", "B. Hindia", "C. Arktik", "D. Pasifik"],
    jawaban: "D"
  },

  {
    soal: "Siapa penulis buku Laskar Pelangi?",
    pilihan: ["A. Andrea Hirata", "B. Tere Liye", "C. Dee Lestari", "D. Habiburrahman"],
    jawaban: "A"
  },
  {
    soal: "Pulau terbesar di Indonesia?",
    pilihan: ["A. Sumatra", "B. Kalimantan", "C. Sulawesi", "D. Papua"],
    jawaban: "D"
  },
  {
    soal: "Apa fungsi utama jantung?",
    pilihan: ["A. Bernapas", "B. Menyaring darah", "C. Memompa darah", "D. Mengatur suhu"],
    jawaban: "C"
  },
  {
    soal: "Siapa ilmuwan dengan teori relativitas?",
    pilihan: ["A. Newton", "B. Galileo", "C. Tesla", "D. Albert Einstein"],
    jawaban: "D"
  },
  {
    soal: "Negara dengan Menara Eiffel?",
    pilihan: ["A. Italia", "B. Jerman", "C. Prancis", "D. Inggris"],
    jawaban: "C"
  },
  {
    soal: "Gunung tertinggi di dunia?",
    pilihan: ["A. Everest", "B. Kilimanjaro", "C. Elbrus", "D. Fuji"],
    jawaban: "A"
  },
  {
    soal: "Apa nama alat untuk melihat benda kecil?",
    pilihan: ["A. Teleskop", "B. Mikroskop", "C. Periskop", "D. Kamera"],
    jawaban: "B"
  },
  {
    soal: "Siapa pahlawan wanita dari Aceh?",
    pilihan: ["A. RA Kartini", "B. Dewi Sartika", "C. Cut Nyak Dien", "D. Martha Christina"],
    jawaban: "C"
  },
  {
    soal: "Apa mata uang Jepang?",
    pilihan: ["A. Yuan", "B. Yen", "C. Won", "D. Dollar"],
    jawaban: "B"
  },
  {
    soal: "Apa semboyan negara Indonesia?",
    pilihan: ["A. Merdeka atau Mati", "B. Indonesia Raya", "C. Tut Wuri Handayani", "D. Bhinneka Tunggal Ika"],
    jawaban: "D"
  },

  {
    soal: "Berapa hasil 12 × 8?",
    pilihan: ["A. 96", "B. 88", "C. 108", "D. 86"],
    jawaban: "A"
  },
  {
    soal: "Hewan tercepat di darat?",
    pilihan: ["A. Kuda", "B. Cheetah", "C. Singa", "D. Macan"],
    jawaban: "B"
  },
  {
    soal: "Zat hijau pada daun disebut?",
    pilihan: ["A. Karbon", "B. Oksigen", "C. Klorofil", "D. Nitrogen"],
    jawaban: "C"
  },
  {
    soal: "Siapa penemu pesawat terbang?",
    pilihan: ["A. Edison", "B. Wright Bersaudara", "C. Tesla", "D. Bell"],
    jawaban: "B"
  },
  {
    soal: "Apa nama planet terdekat dengan Matahari?",
    pilihan: ["A. Venus", "B. Bumi", "C. Mars", "D. Merkurius"],
    jawaban: "D"
  },
  {
    soal: "Bahasa resmi Brasil?",
    pilihan: ["A. Spanyol", "B. Inggris", "C. Portugis", "D. Prancis"],
    jawaban: "C"
  },
  {
    soal: "Apa lambang kimia air?",
    pilihan: ["A. CO2", "B. O2", "C. NaCl", "D. H2O"],
    jawaban: "D"
  },
  {
    soal: "Berapa jumlah sisi segi enam?",
    pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"],
    jawaban: "B"
  },
  {
    soal: "Siapa penulis Harry Potter?",
    pilihan: ["A. Tolkien", "B. Suzanne Collins", "C. J.K. Rowling", "D. Stephen King"],
    jawaban: "C"
  },
  {
    soal: "Apa fungsi paru-paru?",
    pilihan: ["A. Memompa darah", "B. Menyaring darah", "C. Bernapas", "D. Mengatur suhu"],
    jawaban: "C"
  },

  {
    soal: "Apa warna campuran biru dan kuning?",
    pilihan: ["A. Hijau", "B. Ungu", "C. Jingga", "D. Coklat"],
    jawaban: "A"
  },
  {
    soal: "Berapa planet di tata surya?",
    pilihan: ["A. 7", "B. 8", "C. 9", "D. 10"],
    jawaban: "B"
  },
  {
    soal: "Siapa Bapak Pendidikan Indonesia?",
    pilihan: ["A. Soekarno", "B. Ki Hajar Dewantara", "C. Hatta", "D. Kartini"],
    jawaban: "B"
  },
  {
    soal: "Apa alat pengukur suhu?",
    pilihan: ["A. Barometer", "B. Termometer", "C. Altimeter", "D. Seismograf"],
    jawaban: "B"
  },
  {
    soal: "Apa nama hewan terbesar di dunia?",
    pilihan: ["A. Gajah", "B. Paus Biru", "C. Hiu", "D. Dinosaurus"],
    jawaban: "B"
  },
  {
    soal: "Berapa hasil 100 ÷ 4?",
    pilihan: ["A. 20", "B. 30", "C. 25", "D. 40"],
    jawaban: "C"
  },
  {
    soal: "Apa alat untuk mengukur tekanan udara?",
    pilihan: ["A. Termometer", "B. Barometer", "C. Kompas", "D. Anemometer"],
    jawaban: "B"
  },
  {
    soal: "Negara dengan Tembok Besar?",
    pilihan: ["A. Jepang", "B. Korea", "C. China", "D. Mongolia"],
    jawaban: "C"
  },
  {
    soal: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Jokowi", "C. BJ Habibie", "D. Soekarno"],
    jawaban: "D"
  },
  {
    soal: "Berapa warna pelangi?",
    pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"],
    jawaban: "C"
  },
    {
    soal: "Apa nama perjanjian yang mengakhiri Perang Dunia I?",
    pilihan: ["A. Versailles", "B. Potsdam", "C. Yalta", "D. Geneva"],
    jawaban: "A"
  },
  {
    soal: "Benua yang seluruh wilayahnya berada di belahan bumi selatan adalah?",
    pilihan: ["A. Afrika", "B. Australia", "C. Amerika Selatan", "D. Antartika"],
    jawaban: "B"
  },
  {
    soal: "Apa gas yang paling banyak di udara?",
    pilihan: ["A. Oksigen", "B. Karbon dioksida", "C. Nitrogen", "D. Hidrogen"],
    jawaban: "C"
  },
  {
    soal: "Siapa tokoh penjelajah samudra yang menemukan jalur laut ke India?",
    pilihan: ["A. Vasco da Gama", "B. Christopher Columbus", "C. Ferdinand Magellan", "D. Marco Polo"],
    jawaban: "A"
  },
  {
    soal: "Apa nama alat untuk mengukur waktu?",
    pilihan: ["A. Barometer", "B. Termometer", "C. Stopwatch", "D. Altimeter"],
    jawaban: "C"
  },
  {
    soal: "Negara dengan jumlah penduduk terbanyak di dunia?",
    pilihan: ["A. India", "B. Amerika Serikat", "C. Indonesia", "D. China"],
    jawaban: "A"
  },
  {
    soal: "Apa nama lapisan terluar Bumi?",
    pilihan: ["A. Inti", "B. Mantel", "C. Kerak", "D. Astenosfer"],
    jawaban: "C"
  },
  {
    soal: "Siapa penemu hukum gravitasi?",
    pilihan: ["A. Galileo Galilei", "B. Isaac Newton", "C. Albert Einstein", "D. Nikola Tesla"],
    jawaban: "B"
  },
  {
    soal: "Apa nama sungai terpanjang di dunia?",
    pilihan: ["A. Amazon", "B. Nil", "C. Yangtze", "D. Mississippi"],
    jawaban: "B"
  },
  {
    soal: "Apa satuan arus listrik?",
    pilihan: ["A. Volt", "B. Ohm", "C. Watt", "D. Ampere"],
    jawaban: "D"
  },
  {
    soal: "Siapa tokoh yang dijuluki Bapak Teknologi Indonesia?",
    pilihan: ["A. Soekarno", "B. BJ Habibie", "C. Hatta", "D. Gus Dur"],
    jawaban: "B"
  },
  {
    soal: "Apa nama sistem pemerintahan Indonesia?",
    pilihan: ["A. Parlementer", "B. Presidensial", "C. Monarki", "D. Federal"],
    jawaban: "B"
  },
  {
    soal: "Planet yang memiliki cincin paling jelas adalah?",
    pilihan: ["A. Jupiter", "B. Uranus", "C. Saturnus", "D. Neptunus"],
    jawaban: "C"
  },
  {
    soal: "Apa nama alat untuk mengukur tekanan darah?",
    pilihan: ["A. Barometer", "B. Tensimeter", "C. Termometer", "D. Stetoskop"],
    jawaban: "B"
  },
  {
    soal: "Apa ibu kota negara Kanada?",
    pilihan: ["A. Toronto", "B. Vancouver", "C. Montreal", "D. Ottawa"],
    jawaban: "D"
  },
  {
    soal: "Zat apa yang dibutuhkan tumbuhan untuk fotosintesis?",
    pilihan: ["A. Oksigen", "B. Nitrogen", "C. Karbon dioksida", "D. Hidrogen"],
    jawaban: "C"
  },
  {
    soal: "Apa nama organisasi internasional pengganti Liga Bangsa-Bangsa?",
    pilihan: ["A. NATO", "B. ASEAN", "C. PBB", "D. IMF"],
    jawaban: "C"
  },
  {
    soal: "Berapa jumlah derajat pada satu putaran penuh?",
    pilihan: ["A. 90°", "B. 180°", "C. 270°", "D. 360°"],
    jawaban: "D"
  },
  {
    soal: "Apa nama alat musik tradisional dari Jawa Barat?",
    pilihan: ["A. Gamelan", "B. Angklung", "C. Sasando", "D. Tifa"],
    jawaban: "B"
  },
  {
    soal: "Siapa presiden ketiga Indonesia?",
    pilihan: ["A. BJ Habibie", "B. Abdurrahman Wahid", "C. Megawati", "D. Soeharto"],
    jawaban: "A"
  }

];

const soalKuisSusah = [
  { soal: "Apa satuan SI untuk fluks magnetik?", pilihan: ["A. Gauss", "B. Tesla", "C. Weber", "D. Henry", "E. Farad", "F. Ohm"], jawaban: "C" },
  { soal: "Siapa yang mengembangkan persamaan gelombang elektromagnetik?", pilihan: ["A. Newton", "B. Faraday", "C. Ampere", "D. Maxwell", "E. Tesla", "F. Hertz"], jawaban: "D" },
  { soal: "Apa nama teknik dalam AI untuk evaluasi nilai status permainan?", pilihan: ["A. Alpha-beta pruning", "B. Minimax", "C. Monte Carlo Tree Search", "D. Decision Tree", "E. KNN", "F. Q-Learning"], jawaban: "C" },
  { soal: "Unsur paling reaktif dalam tabel periodik adalah?", pilihan: ["A. Fluorin", "B. Klorin", "C. Litium", "D. Natrium", "E. Cesium", "F. Rubidium"], jawaban: "E" },
  { soal: "Siapa yang menyusun 5 postulat geometri Euclidean?", pilihan: ["A. Euclid", "B. Archimedes", "C. Pythagoras", "D. Thales", "E. Euler", "F. Gauss"], jawaban: "A" },
  { soal: "Apa teori tentang 'lubang cacing' berasal dari solusi persamaan Einstein?", pilihan: ["A. Schwarzschild", "B. Kerr", "C. Reissner-Nordström", "D. Einstein-Rosen Bridge", "E. Minkowski", "F. Penrose Diagram"], jawaban: "D" },
  { soal: "Apa nama model partikel dalam teori standar?", pilihan: ["A. Model Proton", "B. Model Atom Bohr", "C. Model Quark", "D. Model Kuantum", "E. Model String", "F. Model Standard"], jawaban: "F" },
  { soal: "Apa nama teori yang memperkirakan energi nol pada suhu absolut?", pilihan: ["A. Termodinamika I", "B. Termodinamika II", "C. Termodinamika III", "D. Entropi", "E. Kalorimetri", "F. Transfer Panas"], jawaban: "C" },
  { soal: "Apa nama proses pembentukan energi di matahari?", pilihan: ["A. Fisi", "B. Reaksi kimia", "C. Fusi nuklir", "D. Ionisasi", "E. Radiasi termal", "F. Fotosintesis"], jawaban: "C" },
  { soal: "Siapa penemu dasar-dasar kalkulus diferensial?", pilihan: ["A. Newton", "B. Leibniz", "C. Pascal", "D. Descartes", "E. Fermat", "F. Lagrange"], jawaban: "B" },
  { soal: "Apa fungsi utama mitokondria?", pilihan: ["A. Respirasi sel", "B. Sintesis protein", "C. Transport ion", "D. Produksi enzim", "E. Detoksifikasi", "F. Pembelahan sel"], jawaban: "A" },
  { soal: "Apa nama sistem bintang terdekat dari bumi selain Matahari?", pilihan: ["A. Sirius", "B. Vega", "C. Proxima Centauri", "D. Betelgeuse", "E. Rigel", "F. Aldebaran"], jawaban: "C" },
  { soal: "Hewan apa yang berevolusi paling awal di darat?", pilihan: ["A. Ikan", "B. Amfibi", "C. Reptil", "D. Mamalia", "E. Burung", "F. Serangga"], jawaban: "F" },
  { soal: "Apa nama konstanta Planck?", pilihan: ["A. 6.626×10⁻³⁴ Js", "B. 1.602×10⁻¹⁹ C", "C. 9.81 m/s²", "D. 3.0×10⁸ m/s", "E. 1.38×10⁻²³ J/K", "F. 6.022×10²³ mol⁻¹"], jawaban: "A" },
  { soal: "Siapa ilmuwan yang merumuskan prinsip ketidakpastian?", pilihan: ["A. Schrödinger", "B. Dirac", "C. Heisenberg", "D. Einstein", "E. Bohr", "F. Feynman"], jawaban: "C" },
  { soal: "Apa satuan untuk medan listrik dalam SI?", pilihan: ["A. V/m", "B. A/m", "C. N/C", "D. J/s", "E. F/m", "F. T"], jawaban: "C" },
  { soal: "Benda langit terbesar dalam tata surya?", pilihan: ["A. Jupiter", "B. Matahari", "C. Saturnus", "D. Bumi", "E. Neptunus", "F. Bulan"], jawaban: "B" },
  { soal: "Dalam biologi, proses transkripsi terjadi di mana?", pilihan: ["A. Ribosom", "B. Mitokondria", "C. Sitoplasma", "D. Nukleus", "E. Lisosom", "F. Golgi"], jawaban: "D" },
  { soal: "Apa nama kode genetik awal untuk sintesis protein?", pilihan: ["A. AUG", "B. UGA", "C. UAG", "D. UAA", "E. ATG", "F. GCG"], jawaban: "A" },
  { soal: "Apa nama perangkat lunak pertama untuk spreadsheet?", pilihan: ["A. Excel", "B. VisiCalc", "C. Lotus 1-2-3", "D. Numbers", "E. SuperCalc", "F. Quattro Pro"], jawaban: "B" },
  { soal: "Apa nama algoritma penyortiran tercepat rata-rata?", pilihan: ["A. Bubble Sort", "B. Merge Sort", "C. Quick Sort", "D. Heap Sort", "E. Insertion Sort", "F. Selection Sort"], jawaban: "C" },
  { soal: "Apa hasil dari integral tak tentu ∫ e^x dx?", pilihan: ["A. e^x + C", "B. x·e^x + C", "C. ln|x| + C", "D. 1/x + C", "E. x²/2 + C", "F. tan⁻¹(x) + C"], jawaban: "A" },
  { soal: "Siapa penemu transistor?", pilihan: ["A. Bardeen, Brattain, Shockley", "B. Feynman", "C. Tesla", "D. Edison", "E. Marconi", "F. Fleming"], jawaban: "A" },
  { soal: "Apa nama himpunan bilangan yang mencakup bilangan rasional dan irasional?", pilihan: ["A. Bilangan bulat", "B. Bilangan asli", "C. Bilangan real", "D. Bilangan kompleks", "E. Bilangan cacah", "F. Bilangan imajiner"], jawaban: "C" },
  { soal: "Apa hasil limit dari lim x→0 (sin x)/x?", pilihan: ["A. 0", "B. 1", "C. ∞", "D. Tidak ada", "E. x", "F. -1"], jawaban: "B" },
  { soal: "Teorema mana yang menyatakan bahwa fungsi kontinu pada interval tertutup mencapai nilai maksimum dan minimum?", pilihan: ["A. Teorema Rolle", "B. Teorema Nilai Rata-rata", "C. Teorema Bolzano", "D. Teorema Nilai Ekstrem", "E. Teorema L'Hopital", "F. Teorema Taylor"], jawaban: "D" },
  { soal: "Apa turunan dari fungsi f(x) = ln(x² + 1)?", pilihan: ["A. 2x/(x² + 1)", "B. 1/(x² + 1)", "C. x² + 1", "D. 2x ln(x)", "E. x/(x² + 1)", "F. 2/(x² + 1)"], jawaban: "A" },
  { soal: "Integral dari 1/(1 + x²) dx adalah?", pilihan: ["A. ln|x| + C", "B. tan⁻¹(x) + C", "C. e^x + C", "D. sin⁻¹(x) + C", "E. x² + C", "F. ln(1 + x²) + C"], jawaban: "B" },
  { soal: "Jika matriks A berordo 3x3 memiliki determinan 0, maka A bersifat?", pilihan: ["A. Invertibel", "B. Tidak memiliki determinan", "C. Singular", "D. Orthogonal", "E. Diagonal", "F. Simetris"], jawaban: "C" },
  { soal: "Apa nilai dari ∑(k=1 to n) k²?", pilihan: ["A. n(n+1)/2", "B. n(n+1)(2n+1)/6", "C. n³", "D. (n²+n)/2", "E. (n³+n)/3", "F. (n²+2n+1)/2"], jawaban: "B" },
  { soal: "Ruang vektor berdimensi tak hingga sering digunakan dalam?", pilihan: ["A. Geometri analitik", "B. Statistika", "C. Teori bilangan", "D. Analisis fungsional", "E. Trigonometri", "F. Topologi"], jawaban: "D" },
  { soal: "Apa solusi dari persamaan diferensial dy/dx = y?", pilihan: ["A. e^x + C", "B. ln(x) + C", "C. y = Ce^x", "D. x² + C", "E. C/x", "F. y = ln(x)"], jawaban: "C" },
  { soal: "Fungsi mana yang bukan fungsi bijektif?", pilihan: ["A. f(x) = x³", "B. f(x) = x", "C. f(x) = sin(x)", "D. f(x) = e^x", "E. f(x) = tan⁻¹(x)", "F. f(x) = ln(x)"], jawaban: "C" },
  { soal: "Apa nilai dari det([[1, 2], [3, 4]])?", pilihan: ["A. 2", "B. -2", "C. 10", "D. 5", "E. -5", "F. 0"], jawaban: "B" },
  { soal: "Pernyataan 'Setiap bilangan genap > 2 adalah hasil penjumlahan dua bilangan prima' dikenal sebagai?", pilihan: ["A. Hipotesis Riemann", "B. Teorema Fermat", "C. Konjektur Goldbach", "D. Teorema Euclid", "E. Teorema Wilson", "F. Konjektur Collatz"], jawaban: "C" },
  { soal: "Apa syarat agar fungsi f(x) terdiferensial di x = a?", pilihan: ["A. f kontinu di x = a", "B. f′(a) ada", "C. f terbatas", "D. f′(x) kontinu di sekitar a", "E. f′(a) = 0", "F. f tidak berubah di x = a"], jawaban: "A" },
  { soal: "Apa hasil integral ∫ x e^x dx?", pilihan: ["A. e^x(x - 1) + C", "B. e^x(x + 1) + C", "C. x² e^x + C", "D. ln|x|e^x + C", "E. x e^x - ∫ e^x dx", "F. e^(x²) + C"], jawaban: "B" },
  { soal: "Apa nama kurva yang terbentuk dari titik yang berjarak sama dari fokus dan garis directrix?", pilihan: ["A. Lingkaran", "B. Elips", "C. Parabola", "D. Hiperbola", "E. Spiral", "F. Kurva Euler"], jawaban: "C" },
  { soal: "Berapakah nilai dari log₄(64)?", pilihan: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 2.5", "F. 2"], jawaban: "A" },
  { soal: "Apa nama metode iteratif untuk mencari akar fungsi?", pilihan: ["A. Metode Simpson", "B. Metode Runge-Kutta", "C. Metode Newton-Raphson", "D. Metode Euler", "E. Metode Trapesium", "F. Metode Lagrange"], jawaban: "C" },
  { soal: "Jika f(x) = x³ - 3x + 1, berapa jumlah titik stasionernya?", pilihan: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4", "F. Tak Hingga"], jawaban: "C" },
  { soal: "Apa nama operator dalam aljabar linear untuk rotasi vektor di R²?", pilihan: ["A. Matriks Identitas", "B. Matriks Simetris", "C. Matriks Rotasi", "D. Matriks Singular", "E. Matriks Diagonal", "F. Matriks Proyeksi"], jawaban: "C" },
  { soal: "Apa nama teorema yang menyatakan bahwa tidak ada solusi umum untuk polinomial derajat 5 atau lebih?", pilihan: ["A. Teorema Abel-Ruffini", "B. Teorema Gauss", "C. Teorema Fundamental Aljabar", "D. Teorema Lagrange", "E. Teorema Galois", "F. Teorema Fermat"], jawaban: "A" },
  { soal: "Berapakah nilai dari ∑(n=1 to ∞) 1/n²?", pilihan: ["A. π", "B. π²/6", "C. ∞", "D. 1", "E. e", "F. ln(2)"], jawaban: "B" },
  { soal: "Jika z adalah bilangan kompleks, maka z·z̄ = ?", pilihan: ["A. 1", "B. 0", "C. |z|²", "D. -z", "E. z̄", "F. Im(z)"], jawaban: "C" },
  { soal: "Apa nama distribusi probabilitas diskret dengan parameter n dan p?", pilihan: ["A. Normal", "B. Poisson", "C. Binomial", "D. Geometrik", "E. Eksponensial", "F. Beta"], jawaban: "C" },
  { soal: "Apa hasil dari ∫ cos²x dx?", pilihan: ["A. (x + sin2x)/2 + C", "B. sinx + C", "C. cosx + C", "D. x/2 + C", "E. x + cos2x + C", "F. (x - sin2x)/2 + C"], jawaban: "A" },
  { soal: "Persamaan garis singgung lingkaran x² + y² = r² di titik (a,b) adalah?", pilihan: ["A. ax + by = r²", "B. x² + y² = ab", "C. ax + by = ab", "D. x + y = r", "E. ax - by = r", "F. a² + b² = r²"], jawaban: "A" },
  { soal: "Apa nilai dari d/dx (arctan(x))?", pilihan: ["A. 1/(1 + x²)", "B. x/(1 + x²)", "C. 1/√(1 - x²)", "D. x²", "E. e^x", "F. ln(x)"], jawaban: "A" },
  { soal: "Jika A adalah matriks orthogonal, maka AᵀA =", pilihan: ["A. Matriks nol", "B. Matriks identitas", "C. Matriks diagonal", "D. Matriks singular", "E. Matriks rotasi", "F. Matriks transpos"], jawaban: "B" },
  { soal: "Dalam kombinatorik, C(n, r) = ?", pilihan: ["A. n! / (r!(n−r)!)", "B. n! / r!", "C. n × r", "D. (n + r)! / n!", "E. (n−r)! / r!", "F. r! / (n−r)!"], jawaban: "A" },
  { soal: "Apa nama rumus untuk jumlah deret aritmetika?", pilihan: ["A. n/2(a + l)", "B. a·rⁿ", "C. a + (n−1)d", "D. n(a + d)", "E. a + n·d", "F. l·n"], jawaban: "A" },
  { soal: "Apa nama software yang pertama kali menampilkan GUI?", pilihan: ["A. Windows", "B. macOS", "C. Xerox Alto", "D. Linux", "E. Ubuntu", "F. MS-DOS"], jawaban: "C" },
  { soal: "Apa metode untuk mengamati mikroorganisme tanpa pewarnaan?", pilihan: ["A. Mikroskop cahaya", "B. Pewarna Gram", "C. Fase kontras", "D. Elektron transmisi", "E. Fluoresen", "F. SEM"], jawaban: "C" },
  { soal: "Apa nama operasi militer AS di Irak tahun 2003?", pilihan: ["A. Desert Storm", "B. Rolling Thunder", "C. Enduring Freedom", "D. Iraqi Freedom", "E. Anaconda", "F. Neptune Spear"], jawaban: "D" },
  { soal: "Apa teori yang menjelaskan asal semesta paralel?", pilihan: ["A. Relativitas Umum", "B. Big Bang", "C. Multiverse", "D. String", "E. Kuantum", "F. Inflasi"], jawaban: "C" },
  { soal: "Apa nama planet dengan rotasi paling cepat?", pilihan: ["A. Mars", "B. Bumi", "C. Jupiter", "D. Uranus", "E. Saturnus", "F. Venus"], jawaban: "C" },
  { soal: "Nama senyawa dengan rumus H₂SO₄?", pilihan: ["A. Asam nitrat", "B. Asam klorida", "C. Asam sulfat", "D. Asam asetat", "E. Asam fosfat", "F. Asam karbonat"], jawaban: "C" },
  { soal: "Kapan Perang Dunia I dimulai?", pilihan: ["A. 1912", "B. 1914", "C. 1916", "D. 1918", "E. 1920", "F. 1930"], jawaban: "B" },
  { soal: "Apa nama proses perubahan padat ke gas langsung?", pilihan: ["A. Konveksi", "B. Kondensasi", "C. Sublimasi", "D. Deposisi", "E. Evaporasi", "F. Koagulasi"], jawaban: "C" },
  { soal: "Siapa penulis karya *The Republic*?", pilihan: ["A. Aristoteles", "B. Socrates", "C. Plato", "D. Cicero", "E. Seneca", "F. Thales"], jawaban: "C" },
  { soal: "Apa simbol kimia untuk emas?", pilihan: ["A. Au", "B. Ag", "C. Fe", "D. Cu", "E. Sn", "F. Hg"], jawaban: "A" },
  { soal: "Siapa penemu hukum inersia?", pilihan: ["A. Galileo", "B. Newton", "C. Kepler", "D. Descartes", "E. Copernicus", "F. Hooke"], jawaban: "A" },
  { soal: "Berapa jumlah gigi orang dewasa normal?", pilihan: ["A. 30", "B. 32", "C. 28", "D. 36", "E. 34", "F. 26"], jawaban: "B" },
  { soal: "Siapa pelukis *Guernica*?", pilihan: ["A. Da Vinci", "B. Michelangelo", "C. Picasso", "D. Rembrandt", "E. Van Gogh", "F. Matisse"], jawaban: "C" },
  { soal: "Apa nama sistem penyandian genetik?", pilihan: ["A. Triplet", "B. Codon", "C. Nukleotida", "D. RNA", "E. DNA", "F. Ribosom"], jawaban: "B" },
  { soal: "Dimana letak pusat gravitasi pada benda simetris?", pilihan: ["A. Di atas", "B. Di bawah", "C. Di tengah", "D. Di sisi", "E. Di ujung", "F. Tidak ada"], jawaban: "C" },
  { soal: "Apa alat ukur tekanan udara?", pilihan: ["A. Anemometer", "B. Barometer", "C. Termometer", "D. Altimeter", "E. Hygrometer", "F. Dinamometer"], jawaban: "B" },
  { soal: "Apa hukum Boyle menyatakan?", pilihan: ["A. Tekanan berbanding terbalik dengan volume", "B. Volume tetap", "C. Tekanan tetap", "D. Suhu tetap", "E. Massa tetap", "F. Energi tetap"], jawaban: "A" },
  { soal: "Apa nama kode enkripsi publik paling populer saat ini?", pilihan: ["A. AES", "B. DES", "C. RSA", "D. SHA", "E. MD5", "F. ECC"], jawaban: "C" },
  { soal: "Berapa derajat sudut segitiga sama sisi?", pilihan: ["A. 30°", "B. 45°", "C. 60°", "D. 90°", "E. 120°", "F. 180°"], jawaban: "C" },
  { soal: "Satuan daya listrik adalah?", pilihan: ["A. Watt", "B. Volt", "C. Ampere", "D. Joule", "E. Ohm", "F. Henry"], jawaban: "A" },
  { soal: "Apa simbol kimia untuk timah?", pilihan: ["A. Sn", "B. Sb", "C. S", "D. Si", "E. Sr", "F. Sc"], jawaban: "A" },
  { soal: "Apa hukum Newton kedua?", pilihan: ["A. F = ma", "B. Aksi = reaksi", "C. Inersia", "D. Gravitasi", "E. Gaya sentripetal", "F. Momentum"], jawaban: "A" }
];


const soalSusunKata = [
    "komputer", "android", "internet", "bahagia", "semangat", 
    "program", "senyuman", "mainan", "teknologi", "pelajar",
    "sekolah", "rumah", "cerdas", "pintar", "botak", "kecerdasan",
    "belajar", "perpustakaan", "universitas", "penghapus", "penggaris",
    "pelangi", "matahari", "bulan", "bintang", "angkasa", "awan", "langit",
    "merah", "biru", "kuning", "jingga", "hitam", "putih", "ungu", "coklat",
    "kopi", "teh", "susu", "air", "eskrim", "permen", "kue", "nasi", "roti",
    "kucing", "anjing", "kelinci", "ular", "burung", "ikan", "gajah", "singa",
    "pasar", "hotel", "bioskop", "kantor", "bank", "toko", "warung",
    "pagi", "siang", "malam", "subuh", "senja", "fajar", "surya",
    "berlari", "berenang", "makan", "tidur", "mandi", "minum", "menangis",
    "senyum", "tertawa", "menulis", "membaca", "berhitung", "menggambar",
    "peluru", "pisang", "jeruk", "semangka", "apel", "durian", "nanas",
    "televisi", "kamera", "laptop", "printer", "mouse", "keyboard", "monitor",
    "jam", "meja", "kursi", "lemari", "jendela", "pintu", "atap", "dinding",
    "jalan", "mobil", "motor", "sepeda", "kereta", "pesawat", "kapal",
    "dompet", "tas", "buku", "pena", "penggaris", "kalkulator", "kertas",
    "jaket", "baju", "celana", "sepatu", "sandal", "kaos", "topi",
    "telinga", "mata", "hidung", "mulut", "tangan", "kaki", "perut", "kepala",
    "bola", "raket", "gawang", "wasit", "gol", "tim", "lapangan", "penonton",
    "kamera", "drama", "film", "musik", "lagu", "penyanyi", "gitar", "piano",
    "surat", "email", "pesan", "video", "foto", "data", "dokumen"
];

 // key: pengirim, value: { jawaban, timeout }

const soalFamily100 = [
  {
    pertanyaan: "Sesuatu yang sering dicari sebelum berangkat?",
    jawaban: ["hp", "kunci", "dompet", "helm", "jaket"]
  },
  {
    pertanyaan: "Alasan orang telat bangun pagi?",
    jawaban: ["alarm mati", "tidur malam", "begadang", "kecapean", "lupa pasang alarm"]
  },
  {
    pertanyaan: "Sesuatu yang bikin kuota cepat habis?",
    jawaban: ["tiktok", "youtube", "instagram", "streaming", "game online"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan sebelum tidur?",
    jawaban: ["main hp", "rebahan", "scroll sosmed", "doa", "nonton"]
  },
  {
    pertanyaan: "Makanan yang enak dimakan malam hari?",
    jawaban: ["mie instan", "nasi goreng", "ayam goreng", "martabak", "bakso"]
  },
  {
    pertanyaan: "Alasan orang membuka WhatsApp?",
    jawaban: ["chat masuk", "grup rame", "bales pesan", "gabut", "notif"]
  },
  {
    pertanyaan: "Barang yang wajib dibawa saat keluar rumah?",
    jawaban: ["hp", "dompet", "kunci", "masker", "helm"]
  },
  {
    pertanyaan: "Hal yang sering bikin emosi di jalan?",
    jawaban: ["macet", "klakson", "lampu merah", "diserobot", "jalan rusak"]
  },
  {
    pertanyaan: "Aktivitas favorit saat hujan?",
    jawaban: ["tidur", "nonton", "rebahan", "minum hangat", "denger hujan"]
  },
  {
    pertanyaan: "Sesuatu yang sering dilakukan saat bosan?",
    jawaban: ["scroll hp", "tidur", "main game", "nonton", "makan"]
  },
  {
    pertanyaan: "Aplikasi yang paling sering dibuka?",
    jawaban: ["whatsapp", "tiktok", "instagram", "youtube", "browser"]
  },
  {
    pertanyaan: "Makanan yang sering jadi pilihan cepat?",
    jawaban: ["mie instan", "nasi goreng", "ayam geprek", "gorengan", "burger"]
  },
  {
    pertanyaan: "Hal yang sering lupa dibawa ke sekolah?",
    jawaban: ["pulpen", "buku", "tugas", "uang", "id card"]
  },
  {
    pertanyaan: "Alasan orang betah di rumah?",
    jawaban: ["nyaman", "malas keluar", "ada wifi", "capek", "hemat"]
  },
  {
    pertanyaan: "Sesuatu yang sering ada di notifikasi HP?",
    jawaban: ["chat", "grup", "promo", "update", "mention"]
  },
  {
    pertanyaan: "Hal yang bikin susah fokus belajar?",
    jawaban: ["hp", "ngantuk", "berisik", "lapar", "bosan"]
  },
  {
    pertanyaan: "Minuman favorit saat panas?",
    jawaban: ["es teh", "es kopi", "air dingin", "jus", "es jeruk"]
  },
  {
    pertanyaan: "Sesuatu yang sering dilakukan saat menunggu?",
    jawaban: ["main hp", "scroll sosmed", "diam", "ngobrol", "denger musik"]
  },
  {
    pertanyaan: "Alasan orang main game?",
    jawaban: ["hiburan", "gabut", "ngilangin stress", "temen", "hadiah"]
  },
  {
    pertanyaan: "Hal yang bikin orang malas keluar rumah?",
    jawaban: ["hujan", "capek", "macet", "mager", "panas"]
  },

    {
    pertanyaan: "Hal pertama yang dicek setelah bangun tidur?",
    jawaban: ["hp", "jam", "notifikasi", "waktu", "alarm"]
  },
  {
    pertanyaan: "Alasan orang sering pegang HP?",
    jawaban: ["chat", "bosan", "notif", "scroll", "gabut"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan di grup WhatsApp?",
    jawaban: ["chat", "baca doang", "kirim stiker", "nge-spam", "silent"]
  },
  {
    pertanyaan: "Hal yang bikin HP cepat panas?",
    jawaban: ["main game", "ngecas", "streaming", "lama dipakai", "data nyala"]
  },
  {
    pertanyaan: "Hal yang sering dicari di Google?",
    jawaban: ["jawaban", "arti kata", "cara", "lirik lagu", "harga"]
  },
  {
    pertanyaan: "Kegiatan yang sering dilakukan saat sendirian?",
    jawaban: ["main hp", "tidur", "nonton", "denger musik", "rebahan"]
  },
  {
    pertanyaan: "Hal yang sering bikin ketawa di grup?",
    jawaban: ["stiker", "chat typo", "video lucu", "meme", "voice note"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan saat nunggu balasan?",
    jawaban: ["scroll", "buka chat lain", "refresh", "nunggu", "diemin hp"]
  },
  {
    pertanyaan: "Alasan orang malas balas chat?",
    jawaban: ["sibuk", "males", "lupa", "ketiduran", "nggak mood"]
  },
  {
    pertanyaan: "Hal yang sering bikin chat jadi panjang?",
    jawaban: ["debat", "gosip", "salah paham", "bahasan random", "curhat"]
  },
  {
    pertanyaan: "Sesuatu yang sering bikin HP penuh?",
    jawaban: ["foto", "video", "aplikasi", "cache", "file whatsapp"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan sebelum keluar rumah?",
    jawaban: ["cek hp", "pakai sepatu", "ambil kunci", "lihat cermin", "beresin barang"]
  },
  {
    pertanyaan: "Hal yang bikin orang betah main HP lama?",
    jawaban: ["tiktok", "youtube", "chat", "game", "scroll"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan saat lagi ngantuk?",
    jawaban: ["rebahan", "minum", "scroll hp", "tutup mata", "tidur"]
  },
  {
    pertanyaan: "Alasan orang buka grup lama?",
    jawaban: ["notif", "penasaran", "tag", "rame", "nyari info"]
  },
  {
    pertanyaan: "Hal yang sering bikin salah paham di chat?",
    jawaban: ["teks doang", "emoji", "nada", "typo", "salah baca"]
  },
  {
    pertanyaan: "Sesuatu yang sering dilakukan saat hujan deras?",
    jawaban: ["nunggu reda", "tidur", "nonton", "rebahan", "ngopi"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan kalau kuota mau habis?",
    jawaban: ["matin data", "beli kuota", "cari wifi", "hemat", "ngedumel"]
  },
  {
    pertanyaan: "Hal yang sering bikin orang telat?",
    jawaban: ["macet", "bangun kesiangan", "nunggu", "lupa waktu", "mager"]
  },
  {
    pertanyaan: "Hal yang sering dilakukan saat lagi gabut?",
    jawaban: ["scroll hp", "tidur", "nonton", "chat", "main game"]
  },

  {
  pertanyaan: "Kalau lagi lapar, biasanya nyari apa?",
  jawaban: ["makan", "nasi", "mie", "snack", "warung"]
},
{
  pertanyaan: "Kalau bangun tidur, hal pertama yang sering dilakukan?",
  jawaban: ["minum", "ke kamar mandi", "ngelamun", "mandi", "sarapan"]
},
{
  pertanyaan: "Hewan yang sering bikin orang kaget di rumah?",
  jawaban: ["cicak", "kecoa", "tikus", "nyamuk", "tokek"]
},
{
  pertanyaan: "Kalau hujan deras, orang biasanya ngapain?",
  jawaban: ["neduh", "tidur", "nonton", "minum hangat", "masuk rumah"]
},
{
  pertanyaan: "Benda yang sering dicari tapi suka ilang?",
  jawaban: ["kunci", "remote", "hp", "dompet", "sendal"]
},
{
  pertanyaan: "Kalau malam hari, suara apa yang sering terdengar?",
  jawaban: ["jangkrik", "motor", "anjing", "tv", "orang ngobrol"]
},
{
  pertanyaan: "Kalau lagi capek, biasanya pengen apa?",
  jawaban: ["tidur", "rebahan", "minum", "makan", "istirahat"]
},
{
  pertanyaan: "Hewan yang sering lewat di atap rumah?",
  jawaban: ["kucing", "tikus", "cicak", "musang", "burung"]
},
{
  pertanyaan: "Kalau ke dapur, biasanya nyari apa?",
  jawaban: ["air", "makan", "snack", "nasi", "gelas"]
},
{
  pertanyaan: "Kalau bosan di rumah, biasanya ngapain?",
  jawaban: ["tidur", "keluar", "nonton", "makan", "nongkrong"]
},
{
  pertanyaan: "Hal yang sering bikin orang telat berangkat?",
  jawaban: ["bangun kesiangan", "macet", "mandi lama", "lupa", "males"]
},
{
  pertanyaan: "Kalau listrik mati, yang langsung dicari?",
  jawaban: ["lilin", "senter", "korek", "lampu", "hp"]
},
{
  pertanyaan: "Kalau malam-malam lapar, biasanya makan apa?",
  jawaban: ["mie", "nasi", "snack", "roti", "gorengan"]
},
{
  pertanyaan: "Benda yang sering ada di kantong?",
  jawaban: ["uang", "kunci", "hp", "tisu", "koin"]
},
{
  pertanyaan: "Kalau ke pasar, orang biasanya beli apa?",
  jawaban: ["sayur", "ikan", "buah", "daging", "bumbu"]
},
{
  pertanyaan: "Kalau bangun kesiangan, yang sering dilewatin?",
  jawaban: ["sarapan", "mandi", "rapihin kamar", "beresin kasur", "doa"]
},
{
  pertanyaan: "Kalau hujan-hujanan, yang biasanya basah duluan?",
  jawaban: ["baju", "sepatu", "rambut", "celana", "tas"]
},
{
  pertanyaan: "Kalau di rumah sepi, biasanya ngapain?",
  jawaban: ["tidur", "nonton", "denger musik", "rebahan", "keluar"]
},
{
  pertanyaan: "Hewan yang sering bikin jijik?",
  jawaban: ["kecoa", "cacing", "tikus", "lintah", "ulat"]
},
{
  pertanyaan: "Kalau lagi sakit, yang paling sering diminta?",
  jawaban: ["istirahat", "obat", "air", "selimut", "makanan"]
},

{
  pertanyaan: "Pelajaran yang sering bikin pusing di sekolah?",
  jawaban: ["matematika", "fisika", "kimia", "akuntansi", "statistika"]
},
{
  pertanyaan: "Alasan siswa dimarahi guru?",
  jawaban: ["ribut", "telat", "tidak ngerjain tugas", "main hp", "tidur"]
},
{
  pertanyaan: "Barang yang sering ada di tas sekolah?",
  jawaban: ["buku", "pulpen", "pensil", "penghapus", "botol minum"]
},
{
  pertanyaan: "Hal yang sering dilakukan saat pelajaran membosankan?",
  jawaban: ["melamun", "gambar", "tidur", "main hp", "ngobrol"]
},
{
  pertanyaan: "Tempat yang sering dikunjungi setelah pulang sekolah?",
  jawaban: ["rumah", "warung", "kantin", "tempat les", "rumah teman"]
},
{
  pertanyaan: "Alasan orang tidak masuk sekolah?",
  jawaban: ["sakit", "ijin", "ketiduran", "malas", "acara keluarga"]
},
{
  pertanyaan: "Hal yang sering terjadi saat ujian?",
  jawaban: ["deg-degan", "lupa jawaban", "nyontek", "ngantuk", "panik"]
},
{
  pertanyaan: "Barang yang sering dipinjam di kelas?",
  jawaban: ["pulpen", "penghapus", "penggaris", "buku", "kertas"]
},
{
  pertanyaan: "Hal yang sering dilakukan guru di kelas?",
  jawaban: ["ngajar", "marah", "nanya", "nulis", "ceramah"]
},
{
  pertanyaan: "Alasan PR tidak dikerjakan?",
  jawaban: ["lupa", "tidak paham", "ketiduran", "malas", "banyak tugas"]
},
{
  pertanyaan: "Pekerjaan yang sering ditemui di sekitar rumah?",
  jawaban: ["pedagang", "satpam", "tukang", "ojek", "penjual makanan"]
},
{
  pertanyaan: "Alasan orang bekerja?",
  jawaban: ["uang", "kebutuhan", "tanggung jawab", "keluarga", "pengalaman"]
},
{
  pertanyaan: "Hal yang sering dilakukan saat istirahat kerja?",
  jawaban: ["makan", "minum", "main hp", "ngobrol", "rokok"]
},
{
  pertanyaan: "Barang yang sering ada di meja kerja?",
  jawaban: ["komputer", "pulpen", "kertas", "hp", "minuman"]
},
{
  pertanyaan: "Tempat yang sering bikin capek?",
  jawaban: ["kantor", "sekolah", "jalan", "pabrik", "pasar"]
},
{
  pertanyaan: "Alasan orang berhenti kerja?",
  jawaban: ["capek", "gaji kecil", "lingkungan", "kontrak habis", "pindah"]
},
{
  pertanyaan: "Tempat yang biasanya ramai pagi hari?",
  jawaban: ["sekolah", "pasar", "jalan", "terminal", "kantor"]
},
{
  pertanyaan: "Benda yang sering ditemukan di rumah orang tua?",
  jawaban: ["lemari", "kursi", "jam dinding", "kipas", "tv"]
},
{
  pertanyaan: "Hal yang sering dilakukan orang tua di rumah?",
  jawaban: ["nonton tv", "masak", "bersih-bersih", "ngobrol", "tidur"]
},
{
  pertanyaan: "Benda yang sering rusak di rumah?",
  jawaban: ["remote", "kipas", "charger", "lampu", "stop kontak"]
},
{
  pertanyaan: "Tempat yang sering bikin orang ngantri?",
  jawaban: ["bank", "kasir", "atm", "rumah sakit", "kantin"]
},
{
  pertanyaan: "Hal yang sering bikin orang sabar?",
  jawaban: ["nunggu", "ngalah", "diam", "doa", "menahan emosi"]
},
{
  pertanyaan: "Hal yang sering bikin orang kesel?",
  jawaban: ["nunggu lama", "dibohongi", "diganggu", "macet", "disalahkan"]
},
{
  pertanyaan: "Barang yang sering ada di ruang tamu?",
  jawaban: ["sofa", "kursi", "meja", "tv", "karpet"]
},
{
  pertanyaan: "Tempat yang sering didatangi saat akhir pekan?",
  jawaban: ["rumah", "mall", "tempat makan", "pasar", "rumah keluarga"]
}

];



// Database bendera (100+ negara, contoh sebagian)
const soalBendera = [
    { soal: "🇮🇩", jawaban: "indonesia" },
    { soal: "🇲🇾", jawaban: "malaysia" },
    { soal: "🇸🇬", jawaban: "singapura" },
    { soal: "🇧🇳", jawaban: "brunei" },
    { soal: "🇹🇭", jawaban: "thailand" },
    { soal: "🇻🇳", jawaban: "vietnam" },
    { soal: "🇵🇭", jawaban: "filipina" },
    { soal: "🇲🇲", jawaban: "myanmar" },
    { soal: "🇰🇭", jawaban: "kamboja" },
    { soal: "🇱🇦", jawaban: "laos" },
    { soal: "🇨🇳", jawaban: "cina" },
    { soal: "🇯🇵", jawaban: "jepang" },
    { soal: "🇰🇷", jawaban: "korea selatan" },
    { soal: "🇰🇵", jawaban: "korea utara" },
    { soal: "🇮🇳", jawaban: "india" },
    { soal: "🇵🇰", jawaban: "pakistan" },
    { soal: "🇧🇩", jawaban: "bangladesh" },
    { soal: "🇳🇵", jawaban: "nepal" },
    { soal: "🇱🇰", jawaban: "sri lanka" },
    { soal: "🇧🇹", jawaban: "bhutan" },
    { soal: "🇲🇻", jawaban: "maladewa" },
    { soal: "🇸🇦", jawaban: "arab saudi" },
    { soal: "🇦🇪", jawaban: "uni emirat arab" },
    { soal: "🇶🇦", jawaban: "qatar" },
    { soal: "🇰🇼", jawaban: "kuwait" },
    { soal: "🇧🇭", jawaban: "bahrain" },
    { soal: "🇴🇲", jawaban: "oman" },
    { soal: "🇮🇷", jawaban: "iran" },
    { soal: "🇮🇶", jawaban: "irak" },
    { soal: "🇹🇷", jawaban: "turki" },
    { soal: "🇮🇱", jawaban: "israel" },
    { soal: "🇵🇸", jawaban: "palestina" },
    { soal: "🇪🇬", jawaban: "mesir" },
    { soal: "🇿🇦", jawaban: "afrika selatan" },
    { soal: "🇳🇬", jawaban: "nigeria" },
    { soal: "🇰🇪", jawaban: "kenya" },
    { soal: "🇹🇿", jawaban: "tanzania" },
    { soal: "🇪🇹", jawaban: "ethiopia" },
    { soal: "🇲🇦", jawaban: "maroko" },
    { soal: "🇩🇿", jawaban: "aljazair" },
    { soal: "🇹🇳", jawaban: "tunisia" },
    { soal: "🇱🇾", jawaban: "libya" },
    { soal: "🇸🇩", jawaban: "sudan" },
    { soal: "🇫🇷", jawaban: "prancis" },
    { soal: "🇩🇪", jawaban: "jerman" },
    { soal: "🇮🇹", jawaban: "italia" },
    { soal: "🇪🇸", jawaban: "spanyol" },
    { soal: "🇬🇧", jawaban: "inggris" },
    { soal: "🇷🇺", jawaban: "rusia" },
    { soal: "🇺🇦", jawaban: "ukraina" },
    { soal: "🇵🇱", jawaban: "polandia" },
    { soal: "🇷🇴", jawaban: "romania" },
    { soal: "🇬🇷", jawaban: "yunani" },
    { soal: "🇧🇷", jawaban: "brasil" },
    { soal: "🇦🇷", jawaban: "argentina" },
    { soal: "🇨🇱", jawaban: "chile" },
    { soal: "🇵🇪", jawaban: "peru" },
    { soal: "🇨🇴", jawaban: "kolombia" },
    { soal: "🇲🇽", jawaban: "meksiko" },
    { soal: "🇺🇸", jawaban: "amerika serikat" },
    { soal: "🇨🇦", jawaban: "kanada" },
    { soal: "🇦🇺", jawaban: "australia" },
    { soal: "🇳🇿", jawaban: "selandia baru" },
    // ... tambah sampai 100++
];


// Array soal tebak gambar
const tebakgambar = [
  {
    "index": 0,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-1.jpg",
    "jawaban": "TANTANGAN SERU",
    "deskripsi": "Gambar tang (huruf G dicoret), tangan dan tanda seru (pentung)."
  },
  {
    "index": 1,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-2.jpg",
    "jawaban": "TENAGA LISTRIK",
    "deskripsi": "Gambar huruf TE, ular naga dan tegangan listrik (petir)."
  },
  {
    "index": 2,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-3.jpg",
    "jawaban": "SARUNG BANTAL",
    "deskripsi": "Gambar sarung dan bantal."
  },
  {
    "index": 3,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-4.jpg",
    "jawaban": "ALAS KAKI",
    "deskripsi": "Gambar huruf A, orang mengelas dan kaki."
  },
  {
    "index": 4,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-5.jpg",
    "jawaban": "POTONGAN HARGA",
    "deskripsi": "Gambar pot bunga, tong, huruf AN, dan harga diskon (bandrol 5$)."
  },
  {
    "index": 5,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-6.jpg",
    "jawaban": "TUANG AIR",
    "deskripsi": "Gambar orang tua membawa tongkat, huruf NG, dan tetesan air."
  },
  {
    "index": 6,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-7.jpg",
    "jawaban": "JAM TANGAN",
    "deskripsi": "Gambar jam dinding dan tangan."
  },
  {
    "index": 7,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-8.jpg",
    "jawaban": "JAMBU BATU",
    "deskripsi": "Gambar jam dinding, huruf BU, dan bebatuan."
  },
  {
    "index": 8,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-9.jpg",
    "jawaban": "MATI RASA",
    "deskripsi": "Gambar kuburan/pusara dengan tulisan RIP, dan hewan rusa (huruf U diganti A)."
  },
  {
    "index": 9,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-10.jpg",
    "jawaban": "UDANG REBUS",
    "deskripsi": "Gambar udang, huruf RE, dan kendaraan bus."
  },
  {
    "index": 10,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-11.jpg",
    "jawaban": "TAHI LALAT",
    "deskripsi": "Gambar tahu (huruf U diganti I), dan lalat."
  },
  {
    "index": 11,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-12.jpg",
    "jawaban": "MINTA UANG",
    "deskripsi": "Gambar semangkuk mie, huruf N, tas (huruf S dicoret), dan karung tulisan Rp (rupiah)."
  },
  {
    "index": 12,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-13.jpg",
    "jawaban": "SATU JALAN",
    "deskripsi": "Gambar dua tusuk sate (huruf E diganti U), dan jalan aspal."
  },
  {
    "index": 13,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-14.jpg",
    "jawaban": "OBAT NYAMUK",
    "deskripsi": "Gambar pil obat dan nyamuk."
  },
  {
    "index": 14,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-15.jpg",
    "jawaban": "MARI MAKAN",
    "deskripsi": "Gambar orang lari (huruf L diganti M), dan orang makan nasi."
  },
  {
    "index": 15,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-16.jpg",
    "jawaban": "PISAU TAJAM",
    "deskripsi": "Gambar pisau, raja (huruf R diganti T), dan huruf M."
  },
  {
    "index": 16,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-17.jpg",
    "jawaban": "IGA BAKAR",
    "deskripsi": "Gambar angka 3 (huruf T dicoret), dan akar (ditambah huruf B)."
  },
  {
    "index": 17,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-18.jpg",
    "jawaban": "DAUN BAYAM",
    "deskripsi": "Gambar daun, huruf B, dan ayam."
  },
  {
    "index": 18,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-19.jpg",
    "jawaban": "KAMBING GULING",
    "deskripsi": "Gambar kambing, dan seruling/suling (huruf S diganti G)."
  },
  {
    "index": 19,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-1-nomor-20.jpg",
    "jawaban": "AKU SAYANG AYAH",
    "deskripsi": "Gambar saku (huruf S dicoret), wayang (huruf W diganti S), dan ayam (huruf M diganti H)."
  },
  {
    "index": 20,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-1.jpg",
    "jawaban": "NASIB BURUK",
    "deskripsi": "Gambar nasi, huruf B, burung (huruf NG dicoret), dan huruf K."
  },
  {
    "index": 21,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-2.jpg",
    "jawaban": "RACUN TIKUS",
    "deskripsi": "Gambar botol beracun (tengkorak) dan tikus."
  },
  {
    "index": 22,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-3.jpg",
    "jawaban": "LEBIH BAIK",
    "deskripsi": "Gambar lebah madu (huruf A diganti I) dan kain batik (huruf T dicoret)."
  },
  {
    "index": 23,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-4.jpg",
    "jawaban": "BUKU CERITA",
    "deskripsi": "Gambar buku, buah cherry, dan huruf TA."
  },
  {
    "index": 24,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-5.jpg",
    "jawaban": "TANGAN KESEMUTAN",
    "deskripsi": "Gambar tangan, huruf KE, semut, dan huruf AN."
  },
  {
    "index": 25,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-6.jpg",
    "jawaban": "POLISI TIDUR",
    "deskripsi": "Gambar petugas (polisi) tidur dengan tulisan zzz…"
  },
  {
    "index": 26,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-7.jpg",
    "jawaban": "HIDUP SENANG",
    "deskripsi": "Gambar hidung (huruf NG dicoret), huruf P, dan orang berenang (huruf R diganti S)."
  },
  {
    "index": 27,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-8.jpg",
    "jawaban": "SENAM OTAK",
    "deskripsi": "Gambar huruf S, angka 6, dan otak."
  },
  {
    "index": 28,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-9.jpg",
    "jawaban": "TEMPAT MAKAN",
    "deskripsi": "Gambar huruf T, angka 4, dan orang makan."
  },
  {
    "index": 29,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-10.jpg",
    "jawaban": "KUCING BELANG",
    "deskripsi": "Gambar kucing, bel ditekan, dan uang (huruf U dicoret)."
  },
  {
    "index": 30,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-11.jpg",
    "jawaban": "UNTAIAN BUNGA",
    "deskripsi": "Gambar unta, ikan (huruf K dicoret), dan bunga."
  },
  {
    "index": 31,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-12.jpg",
    "jawaban": "RUMAH TANGGA",
    "deskripsi": "Gambar rumah dan tangga."
  },
  {
    "index": 32,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-13.jpg",
    "jawaban": "MINUM JAMU",
    "deskripsi": "Gambar orang minum, jam dinding dan huruf U."
  },
  {
    "index": 33,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-14.jpg",
    "jawaban": "PETENIS HANDAL",
    "deskripsi": "Gambar pete (ditambah huruf NIS), dan sandal (huruf S diganti H)."
  },
  {
    "index": 34,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-15.jpg",
    "jawaban": "HARGA PAS",
    "deskripsi": "Gambar bandrol harga, huruf P dan kartu remi AS."
  },
  {
    "index": 35,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-16.jpg",
    "jawaban": "PULANG SEKOLAH",
    "deskripsi": "Gambar tulang (huruf T diganti P) dan anak sekolah."
  },
  {
    "index": 36,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-17.jpg",
    "jawaban": "PINJAM KEMEJA",
    "deskripsi": "Gambar huruf PIN, jam dinding, huruf KE, dan meja."
  },
  {
    "index": 37,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-18.jpg",
    "jawaban": "JANGKA KAKI",
    "deskripsi": "Gambar jangkar (huruf R dicoret), dan kaki."
  },
  {
    "index": 38,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-19.jpg",
    "jawaban": "RUMPUT KERING",
    "deskripsi": "Gambar rumput, huruf KE, dan ring tinju."
  },
  {
    "index": 39,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-2-nomor-20.jpg",
    "jawaban": "POHON RAMBUTAN ROBOH",
    "deskripsi": "Gambar pohonGambar huruf RAM, orang buta, dan huruf NGambar robot (huruf T diganti H)"
  },
  {
    "index": 40,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-1.jpg",
    "jawaban": "RADIASI MATAHARI",
    "deskripsi": "Gambar radio (huruf O dicoret), dasi (huruf D dicoret), dan matahari."
  },
  {
    "index": 41,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-2.jpg",
    "jawaban": "BUAH TANGAN",
    "deskripsi": "Gambar buah-buahan dan tangan."
  },
  {
    "index": 42,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-3.jpg",
    "jawaban": "BATU AKIK",
    "deskripsi": "Gambar ratu (huruf R diganti B), huruf A, dan kok/bola bulutangkis (huruf O diganti I)."
  },
  {
    "index": 43,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-4.jpg",
    "jawaban": "UANG HABIS",
    "deskripsi": "Gambar uang, huruf HA, dan kendaraan bus/bis."
  },
  {
    "index": 44,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-5.jpg",
    "jawaban": "MENANGKAP ULAR",
    "deskripsi": "Gambar orang menang (juara), huruf KAP, dan ular."
  },
  {
    "index": 45,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-6.jpg",
    "jawaban": "PANJANG UMUR",
    "deskripsi": "Gambar ranjang/kasur (huruf R diganti P) dan sumur (huruf S dicoret)."
  },
  {
    "index": 46,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-7.jpg",
    "jawaban": "JALAN BECEK",
    "deskripsi": "Gambar jalan dan kendaraan becak (huruf A diganti E)."
  },
  {
    "index": 47,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-8.jpg",
    "jawaban": "DARAH MUDA",
    "deskripsi": "Gambar darah dan kuda (huruf K diganti M)."
  },
  {
    "index": 48,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-9.jpg",
    "jawaban": "RAJIN BELAJAR",
    "deskripsi": "Gambar huruf RA, jin dan orang belajar."
  },
  {
    "index": 49,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-10.jpg",
    "jawaban": "PANCING IKAN",
    "deskripsi": "Gambar panci, huruf NG, dan ikan."
  },
  {
    "index": 50,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-11.jpg",
    "jawaban": "DAUR ULANG",
    "deskripsi": "Gambar daun (huruf N diganti R) dan tulang (huruf T dicoret)."
  },
  {
    "index": 51,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-12.jpg",
    "jawaban": "PELAMPUNG RENANG",
    "deskripsi": "Gambar alat pel, lampu, huruf NG, dan orang berenang."
  },
  {
    "index": 52,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-13.jpg",
    "jawaban": "CALON PENARI",
    "deskripsi": "Gambar galon (huruf G diganti C), pena, dan huruf RI."
  },
  {
    "index": 53,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-14.jpg",
    "jawaban": "PATAH HATI",
    "deskripsi": "Gambar kayu dipatahkan dan hati."
  },
  {
    "index": 54,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-15.jpg",
    "jawaban": "FERMENTASI SUSU",
    "deskripsi": "Gambar permen (huruf P diganti F), tas, huruf I, dan susu."
  },
  {
    "index": 55,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-16.jpg",
    "jawaban": "PENDUDUK ASLI",
    "deskripsi": "Gambar huruf PEN, orang duduk, kartu AS remi, dan huruf LI."
  },
  {
    "index": 56,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-17.jpg",
    "jawaban": "KAPAL KERUK",
    "deskripsi": "Gambar kapal dan buah jeruk (huruf J diganti K)."
  },
  {
    "index": 57,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-18.jpg",
    "jawaban": "SAKIT PERUT",
    "deskripsi": "Gambar orang sakit, pegas (per), dan huruf UT."
  },
  {
    "index": 58,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-19.jpg",
    "jawaban": "KOMPUTER LELET",
    "deskripsi": "Gambar komputer, lele, dan huruf T."
  },
  {
    "index": 59,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-3-nomor-20.jpg",
    "jawaban": "SEBELAS KORBAN KEBAKARAN",
    "deskripsi": "Gambar huruf SE, dan gelas (huruf G diganti B)Gambar ekor (huruf E dicoret), dan ban/rodaGambar kera (huruf R diganti B), dan koran (huruf O diganti A)."
  },
  {
    "index": 60,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-1.jpg",
    "jawaban": "PEMIMPIN BANGSA",
    "deskripsi": "Gambar huruf PE, orang tidur, huruf N, huruf B, dan angsa/unggas/itik."
  },
  {
    "index": 61,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-2.jpg",
    "jawaban": "KERAMIK LANTAI",
    "deskripsi": "Gambar kera/monyet, mix/microphone, dan rantai (huruf R diganti L)."
  },
  {
    "index": 62,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-3.jpg",
    "jawaban": "ANGKAT KAKI",
    "deskripsi": "Gambar angka 1 s/d 9, huruf T, dan kaki."
  },
  {
    "index": 63,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-4.jpg",
    "jawaban": "TANDUK SAPI",
    "deskripsi": "Gambar tandu, huruf K, dan sapi."
  },
  {
    "index": 64,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-5.jpg",
    "jawaban": "KUNCIR KUDA",
    "deskripsi": "Gambar kunci, huruf R, dan kuda."
  },
  {
    "index": 65,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-6.jpg",
    "jawaban": "SURAT PERIJINAN",
    "deskripsi": "Gambar amplop surat, peri/malaikat, jin dan huruf AN."
  },
  {
    "index": 66,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-7.jpg",
    "jawaban": "GAGAL JANTUNG",
    "deskripsi": "Gambar burung gagak (huruf K diganti L) dan jantung."
  },
  {
    "index": 67,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-8.jpg",
    "jawaban": "MENITI WAKTU",
    "deskripsi": "Gambar peniti (huruf P diganti M) dan jam."
  },
  {
    "index": 68,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-9.jpg",
    "jawaban": "HITUNG PERSENTASE",
    "deskripsi": "Gambar hidung (huruf D diganti T), per/pegas, huruf SEN, tas, dan huruf E."
  },
  {
    "index": 69,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-10.jpg",
    "jawaban": "PASUKAN KHUSUS",
    "deskripsi": "Gambar paku (huruf K diganti S), ikan (huruf I dicoret), huruf KH, dan usus."
  },
  {
    "index": 70,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-11.jpg",
    "jawaban": "PULAU BATAM",
    "deskripsi": "Gambar pulau ditengah laut, batu bata merah, dan huruf M."
  },
  {
    "index": 71,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-12.jpg",
    "jawaban": "GELANG PERAK",
    "deskripsi": "Gambar tangan memakai gelang, per/pegas dan rak."
  },
  {
    "index": 72,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-13.jpg",
    "jawaban": "JAMU KUAT",
    "deskripsi": "Gambar jamur (huruf R dicoret), dan orang berotot."
  },
  {
    "index": 73,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-14.jpg",
    "jawaban": "MATADOR BANTENG",
    "deskripsi": "Gambar mata, huruf DOR, ban (roda) dan tank."
  },
  {
    "index": 74,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-15.jpg",
    "jawaban": "KURANG PEDAS",
    "deskripsi": "Gambar kura-kura, huruf NG, pedang (huruf NG dicoret), dan huruf S."
  },
  {
    "index": 75,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-16.jpg",
    "jawaban": "DATANG PETAKA",
    "deskripsi": "Gambar huruf DA, tang, peta, dan huruf KA."
  },
  {
    "index": 76,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-17.jpg",
    "jawaban": "BAU BADAN",
    "deskripsi": "Gambar paku (huruf T dicoret), dan badak (huruf K diganti N)."
  },
  {
    "index": 77,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-18.jpg",
    "jawaban": "KOPI SUSU",
    "deskripsi": "Gambar topi (huruf T diganti K) dan susu."
  },
  {
    "index": 78,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-19.jpg",
    "jawaban": "TANDA JASA",
    "deskripsi": "Gambar tenda (huruf E diganti A) dan baju/jas (dengan huruf A)."
  },
  {
    "index": 79,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-4-nomor-20.jpg",
    "jawaban": "KITA HARUS HORMATI BUNDA",
    "deskripsi": "Gambar pita (huruf P diganti K).Gambar paru-paru (huruf P diganti H) dan huruf S.Gambar orang hormat, huruf I, dan bunga (huruf G diganti D)."
  },
  {
    "index": 80,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-1.jpg",
    "jawaban": "TANAH AIR",
    "deskripsi": "Gambar panah (huruf P diganti T) dan tetesan air."
  },
  {
    "index": 81,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-2.jpg",
    "jawaban": "DEMAM TINGGI",
    "deskripsi": "Gambar orang sakit demam, tang (huruf A diganti I), dan huruf GI."
  },
  {
    "index": 82,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-3.jpg",
    "jawaban": "UKURAN SEPATU",
    "deskripsi": "Gambar huruf U, kura-kura, huruf N, dan sepatu."
  },
  {
    "index": 83,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-4.jpg",
    "jawaban": "SATELIT INDONESIA",
    "deskripsi": "Gambar sate, huruf LIT, dan bendera Indonesia."
  },
  {
    "index": 84,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-5.jpg",
    "jawaban": "ANGKATAN PERANG",
    "deskripsi": "Gambar orang mengangkat benda, huruf AN, dan pedang (huruf D diganti R)."
  },
  {
    "index": 85,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-6.jpg",
    "jawaban": "KARTU NAMA",
    "deskripsi": "Gambar kartu remi dan naga (huruf G diganti M)."
  },
  {
    "index": 86,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-7.jpg",
    "jawaban": "TAHAN AMARAH",
    "deskripsi": "Gambar daging paha (huruf P diganti T), huruf N, dan orang marah (ditambah huruf A)."
  },
  {
    "index": 87,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-8.jpg",
    "jawaban": "DEKORASI RUANG",
    "deskripsi": "Gambar huruf D, ekor, dasi (huruf D dicoret), huruf R, dan uang."
  },
  {
    "index": 88,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-9.jpg",
    "jawaban": "KRITIK TAJAM",
    "deskripsi": "Gambar huruf KR, bebek/itik, huruf TA, dan jam."
  },
  {
    "index": 89,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-10.jpg",
    "jawaban": "TARIF BULANAN",
    "deskripsi": "Gambar orang menari, huruf F, bulan, dan huruf AN."
  },
  {
    "index": 90,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-11.jpg",
    "jawaban": "LABA BISNIS",
    "deskripsi": "Gambar laba-laba, dan bus (dengan huruf NIS)."
  },
  {
    "index": 91,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-12.jpg",
    "jawaban": "KERANGKA RUMAH",
    "deskripsi": "Gambar kerang, huruf KA, dan rumah."
  },
  {
    "index": 92,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-13.jpg",
    "jawaban": "ASAH GOLOK",
    "deskripsi": "Gambar asap pabrik (huruf P diganti H), jala gol, dan huruf OK."
  },
  {
    "index": 93,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-14.jpg",
    "jawaban": "CAKAR KUCING",
    "deskripsi": "Gambar huruf C, akar, dan kucing."
  },
  {
    "index": 94,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-15.jpg",
    "jawaban": "PIRING TERBANG",
    "deskripsi": "Gambar ring bersayap (ditambah huruf PI)."
  },
  {
    "index": 95,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-16.jpg",
    "jawaban": "BERUANG KUTUB",
    "deskripsi": "Gambar beruang, kutu, dan huruf B."
  },
  {
    "index": 96,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-17.jpg",
    "jawaban": "CALON MERTUA",
    "deskripsi": "Gambar balon (huruf B diganti C), huruf MER, dan orang tua."
  },
  {
    "index": 97,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-18.jpg",
    "jawaban": "PINTU TOBAT",
    "deskripsi": "Gambar pintu, huruf T, dan obat."
  },
  {
    "index": 98,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-19.jpg",
    "jawaban": "PENYUMBATAN PIPA",
    "deskripsi": "Gambar penyu/kura-kura (dengan huruf M), bata (dengna huruf N), dan pipa."
  },
  {
    "index": 99,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-5-nomor-20.jpg",
    "jawaban": "KERAJINAN BUATAN WARGA KAMPUNG",
    "deskripsi": "Gambar kera, jin, dan huruf AN.Gambar huruf BU, dan awan (huruf W diganti T).Gambar bandrol harga (huruf H diganti W), lampu (huruf L diganti K), dan huruf NG."
  },
  {
    "index": 100,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-1.jpg",
    "jawaban": "KAWAN SERUMAH",
    "deskripsi": "Gambar huruf K, awan, tanda seru, dan huruf MAH."
  },
  {
    "index": 101,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-2.jpg",
    "jawaban": "DUA ANAK",
    "deskripsi": "Gambar dua jari dan anak."
  },
  {
    "index": 102,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-3.jpg",
    "jawaban": "BUNGA IMITASI",
    "deskripsi": "Gambar bunga, mie (ditambah huruf I), tas, dan huruf I."
  },
  {
    "index": 103,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-4.jpg",
    "jawaban": "BENDERA PARTAI",
    "deskripsi": "Gambar bendera, ikan pari (huruf I dicoret) dan tai (kotoran)."
  },
  {
    "index": 104,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-5.jpg",
    "jawaban": "TIDUR SIANG",
    "deskripsi": "Gambar orang tidur dan tanda silang (huruf L dicoret)."
  },
  {
    "index": 105,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-6.jpg",
    "jawaban": "MERAKIT SEPEDA",
    "deskripsi": "Gambar merak, huruf IT, dan sepeda."
  },
  {
    "index": 106,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-7.jpg",
    "jawaban": "SEKITAR PASAR",
    "deskripsi": "Gambar orang maen ski, penari (huruf I dicoret) dan pagar (huruf G diganti S)."
  },
  {
    "index": 107,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-8.jpg",
    "jawaban": "GIGIT JARI",
    "deskripsi": "Gambar gigi, huruf T, dan jari tangan."
  },
  {
    "index": 108,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-9.jpg",
    "jawaban": "KOLAM SUSU",
    "deskripsi": "Gambar Kembang Kol, huruf AM, dan susu kemasan."
  },
  {
    "index": 109,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-10.jpg",
    "jawaban": "KEPALA SUKU",
    "deskripsi": "Gambar kepala dan buku (huruf B diganti S)."
  },
  {
    "index": 110,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-11.jpg",
    "jawaban": "WAJAH KUSAM",
    "deskripsi": "Gambar wajan (huruf N diganti H), rusa (huruf R diganti K), dan huruf M."
  },
  {
    "index": 111,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-12.jpg",
    "jawaban": "KACANG POLONG",
    "deskripsi": "Gambar kaca (dengan huruf NG) dan hantu pocong (huruf C diganti L)."
  },
  {
    "index": 112,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-13.jpg",
    "jawaban": "NAFAS CINTA",
    "deskripsi": "Gambar vas bunga berlogo hati (dengan huruf NA)."
  },
  {
    "index": 113,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-14.jpg",
    "jawaban": "BANDAR TEKOR",
    "deskripsi": "Gambar ban, huruf DAR, dan teko (dengan huruf R)."
  },
  {
    "index": 114,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-15.jpg",
    "jawaban": "KOREKSI GURU",
    "deskripsi": "Gambar korek (dengan huruf SI), dan guru."
  },
  {
    "index": 115,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-16.jpg",
    "jawaban": "MOBIL MOBILAN",
    "deskripsi": "Gambar dua mobil (dengan huruf AN)."
  },
  {
    "index": 116,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-17.jpg",
    "jawaban": "GULALI MATANG",
    "deskripsi": "Gambar toples gula yang dikerubungi semut (dengan huruf LI), mata, dan huruf NG."
  },
  {
    "index": 117,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-18.jpg",
    "jawaban": "BORONG BAJU",
    "deskripsi": "Gambar bor, tong (huruf T dicoret), dan batu (huruf T diganti J)."
  },
  {
    "index": 118,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-19.jpg",
    "jawaban": "HUTAN GUNDUL",
    "deskripsi": "Gambar hujan (huruf J diganti T) dan orang gundul."
  },
  {
    "index": 119,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-6-nomor-20.jpg",
    "jawaban": "SUPIR MOBIL TINJA SEDANG TIDUR / SUPIR MOBIL TINJA SEDANG KECAPEKAN",
    "deskripsi": "Gambar huruf SU, buah pir, dan mobil.Gambar petinju (huruf U diganti A), dan pedang (huruf P diganti S).Gambar orang tidur. *Gambar kecap dan ikan."
  },
  {
    "index": 120,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-1.jpg",
    "jawaban": "BELUM DEWASA",
    "deskripsi": "Gambar belut (huruf T diganti M) dan malaikat/dewa (ditambah huruf SA)."
  },
  {
    "index": 121,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-2.jpg",
    "jawaban": "KESELAMATAN PRESIDEN",
    "deskripsi": "Gambar huruf KE, orang menyelam, mata, huruf N, dan presiden."
  },
  {
    "index": 122,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-3.jpg",
    "jawaban": "DAUN PANDAN",
    "deskripsi": "Gambar daun, panda, dan huruf N."
  },
  {
    "index": 123,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-4.jpg",
    "jawaban": "BUAH BIBIR",
    "deskripsi": "Gambar buah-buahan yang mempunyai bibir."
  },
  {
    "index": 124,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-5.jpg",
    "jawaban": "MALAM KELABU",
    "deskripsi": "Gambar bulan, huruf KE, dan labu."
  },
  {
    "index": 125,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-6.jpg",
    "jawaban": "DARAH TINGGI",
    "deskripsi": "Gambar darah merah empat, salah satunya lebih tinggi dari yang lain."
  },
  {
    "index": 126,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-7.jpg",
    "jawaban": "LAPANG DADA",
    "deskripsi": "Gambar lapangan sepakbola dan dada."
  },
  {
    "index": 127,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-8.jpg",
    "jawaban": "SEDOT WC",
    "deskripsi": "Gambar dot (ditambah huruf SE), dan huruf WC."
  },
  {
    "index": 128,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-9.jpg",
    "jawaban": "JEMBATAN LAYANG",
    "deskripsi": "Gambar lem (huruf L diganti J), bata merah, huruf N, dan layangan."
  },
  {
    "index": 129,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-10.jpg",
    "jawaban": "BUNGA SAKURA",
    "deskripsi": "Gambar bunga matahari dan saku (dengan huruf RA)."
  },
  {
    "index": 130,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-11.jpg",
    "jawaban": "BALING PESAWAT",
    "deskripsi": "Gambar orang bali, huruf NG, dan pesawat terbang."
  },
  {
    "index": 131,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-12.jpg",
    "jawaban": "ANJING TETANGGA",
    "deskripsi": "Gambar anjing dan tangga (yang membentuk pola TE)."
  },
  {
    "index": 132,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-13.jpg",
    "jawaban": "GUDANG LAMPION",
    "deskripsi": "Gambar huruf G, udang, lampu (huruf U dicoret), dan pion catur."
  },
  {
    "index": 133,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-14.jpg",
    "jawaban": "SAMBAL KECAP",
    "deskripsi": "Gambar sambal dan kecap."
  },
  {
    "index": 134,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-15.jpg",
    "jawaban": "KEONG RACUN",
    "deskripsi": "Gambar keong/siput dan tanda racun."
  },
  {
    "index": 135,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-16.jpg",
    "jawaban": "KUALITAS FILM",
    "deskripsi": "Gambar orang pamer otot (huruf T dicoret), pita (huruf P diganti L), huruf S, dan rol film."
  },
  {
    "index": 136,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-17.jpg",
    "jawaban": "KOPERASI MANDIRI",
    "deskripsi": "Gambar koper, dasi (huruf D dicoret), dan orang mandi (dengan huruf RI)."
  },
  {
    "index": 137,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-18.jpg",
    "jawaban": "GEJALA AWAL",
    "deskripsi": "Gambar huruf GE, jaring/jala dan awan (huruf N diganti L)."
  },
  {
    "index": 138,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-19.jpg",
    "jawaban": "SOLIDARITAS BURUH",
    "deskripsi": "Gambar huruf S, oli, jari tangan (huruf J diganti D), tas, burung (huruf NG dicoret), dan huruf H."
  },
  {
    "index": 139,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-7-nomor-20.jpg",
    "jawaban": "TAK TAHU ARAH JALAN PULANG",
    "deskripsi": "Gambar orang botak (huruf BO dicoret) dan tahu.Gambar darah (huruf D dicoret).Gambar jalan dan tulang (huruf T diganti P)."
  },
  {
    "index": 140,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-1.jpg",
    "jawaban": "MASA REFORMASI",
    "deskripsi": "Gambar mata (huruf T diganti S), huruf R, ekor (huruf K diganti F), emas (huruf E dicoret), dan huruf I."
  },
  {
    "index": 141,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-2.jpg",
    "jawaban": "LINGKARAN SETAN",
    "deskripsi": "Gambar setan dalam lingkaran merah."
  },
  {
    "index": 142,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-3.jpg",
    "jawaban": "BERAT BAJA",
    "deskripsi": "Gambar orang buang air besar/berak (huruf K diganti T) dan raja (huruf R diganti B)."
  },
  {
    "index": 143,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-4.jpg",
    "jawaban": "GULAT JEPANG",
    "deskripsi": "Gambar ulat (ditambah huruf G) dan bendera Jepang."
  },
  {
    "index": 144,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-5.jpg",
    "jawaban": "TENDANG SELANGKANGAN",
    "deskripsi": "Gambar tenda, huruf NG, selang, dan tangan (huruf T diganti K)."
  },
  {
    "index": 145,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-6.jpg",
    "jawaban": "AKAL BULUS",
    "deskripsi": "Gambar otak/pikiran/akal, bulu, dan huruf S."
  },
  {
    "index": 146,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-7.jpg",
    "jawaban": "DISTRIBUSI GAS",
    "deskripsi": "Gambar bus (huruf B diganti D), penari (huruf A dicoret), busi, huruf G, dan kartu AS."
  },
  {
    "index": 147,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-8.jpg",
    "jawaban": "MENANAK NASI",
    "deskripsi": "Gambar huruf MEN, anak, dan nasi."
  },
  {
    "index": 148,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-9.jpg",
    "jawaban": "KERACUNAN FORMALIN",
    "deskripsi": "Gambar kera, orang Cina (huruf I diganti A), huruf N, bor (huruf B diganti F), dan maling (huruf G dicoret)."
  },
  {
    "index": 149,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-10.jpg",
    "jawaban": "SEMESTA RAYA",
    "deskripsi": "Gambar orang melakukan smash (voli), huruf TA, dan raja (huruf J diganti Y)."
  },
  {
    "index": 150,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-11.jpg",
    "jawaban": "REKENING GENDUT",
    "deskripsi": "Gambar huruf RE, kening, dan anak gendut."
  },
  {
    "index": 151,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-12.jpg",
    "jawaban": "PATROLI GABUNGAN",
    "deskripsi": "Gambar huruf PA, troli, huruf GA, dan bunga (dengan huruf N)."
  },
  {
    "index": 152,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-13.jpg",
    "jawaban": "KENCING MANIS",
    "deskripsi": "Gambar orang kencing dan semut."
  },
  {
    "index": 153,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-14.jpg",
    "jawaban": "PANGKUAN IBUNDA",
    "deskripsi": "Gambar wanita memangku anak (ditambah huruf AN), huruf I, dan bunga (huruf G diganti D)."
  },
  {
    "index": 154,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-15.jpg",
    "jawaban": "UPIL JOROK",
    "deskripsi": "Gambar pil yang membentuk huruf U, huruf JO, dan rok."
  },
  {
    "index": 155,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-16.jpg",
    "jawaban": "LIDAH BUAYA",
    "deskripsi": "Gambar lidah dan buaya."
  },
  {
    "index": 156,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-17.jpg",
    "jawaban": "RELAKAN PERGI",
    "deskripsi": "Gambar rel, orang makan (huruf M dicoret), per/pegas, dan huruf GI."
  },
  {
    "index": 157,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-18.jpg",
    "jawaban": "POHON KERAMAT",
    "deskripsi": "Gambar pohon dan orang keramas (huruf S diganti T)."
  },
  {
    "index": 158,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-19.jpg",
    "jawaban": "PASANG PARABOLA",
    "deskripsi": "Gambar pisang (huruf I diganti A), paru-paru (huruf U diganti A), dan bola."
  },
  {
    "index": 159,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-8-nomor-20.jpg",
    "jawaban": "SAUDAGAR KOPI BERUSAHA MERAYU RAJA",
    "deskripsi": "Gambar sapu (huruf P dicoret), pagar (huruf P diganti D), dan secangkir kopi.Gambar tanda seru (huruf S diganti B), dan daging paha (huruf P diganti S).Gambar merak (huruf K dicoret), huruf YU, dan raja."
  },
  {
    "index": 160,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-1.jpg",
    "jawaban": "SEPERTI PELANGI",
    "deskripsi": "Gambar bilangan 1/3 (huruf GA dicoret), selang (huruf S diganti P), dan huruf I."
  },
  {
    "index": 161,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-2.jpg",
    "jawaban": "ANGGARAN TIPIS",
    "deskripsi": "Gambar anggar, huruf AN, topi (huruf O diganti I), dan huruf S."
  },
  {
    "index": 162,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-3.jpg",
    "jawaban": "SELALU SAYANG",
    "deskripsi": "Gambar orang dalam penjara (sel), palu (huruf P dicoret), dan wayang ( huruf W diganti S)."
  },
  {
    "index": 163,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-4.jpg",
    "jawaban": "ROTI KADALUARSA",
    "deskripsi": "Gambar roti, kadal dan ular (huruf L dicoret), dan huruf SA."
  },
  {
    "index": 164,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-5.jpg",
    "jawaban": "TUANG KOPI",
    "deskripsi": "Gambar uang (membentuk huruf T) dan secangkir kopi."
  },
  {
    "index": 165,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-6.jpg",
    "jawaban": "SUP JAGUNG",
    "deskripsi": "Gambar wanita menyuapi (huruf A dicoret), dagu (huruf D diganti J), dan huruf NG."
  },
  {
    "index": 166,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-7.jpg",
    "jawaban": "SEDANG PAMERAN",
    "deskripsi": "Gambar mobil sedan, huruf G, huruf PA, dan merak (huruf K diganti N)."
  },
  {
    "index": 167,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-8.jpg",
    "jawaban": "PEREMPUAN PILIHANKU",
    "deskripsi": "Gambar pegas (per), sepeda motor yang mengerem, dua jari (huruf D diganti P), pil, huruf I, dan hantu (huruf T diganti K)."
  },
  {
    "index": 168,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-9.jpg",
    "jawaban": "BABI NGOROK",
    "deskripsi": "Gambar babi, huruf NGO, dan rok."
  },
  {
    "index": 169,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-10.jpg",
    "jawaban": "KAPTEN KAPAL",
    "deskripsi": "Gambar kapten sepakbola, dan kapal."
  },
  {
    "index": 170,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-11.jpg",
    "jawaban": "INFORMASI CUACA",
    "deskripsi": "Gambar jin (huruf J dicoret), bor (huruf B diganti F), dasi (huruf D diganti M), awan dan hujan."
  },
  {
    "index": 171,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-12.jpg",
    "jawaban": "ISU PENGASINGAN",
    "deskripsi": "Gambar tisu (huruf T dicoret), obeng (huruf OB diganti P), huruf A, dan singa (ditambah huruf N)."
  },
  {
    "index": 172,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-13.jpg",
    "jawaban": "BISIKAN LEMBUT",
    "deskripsi": "Gambar Bus, ikan, dan orang kerja lembur sampai malam (huruf R diganti T)."
  },
  {
    "index": 173,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-14.jpg",
    "jawaban": "KUASA PRESIDEN",
    "deskripsi": "Gambar kuas, huruf A, dan presiden."
  },
  {
    "index": 174,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-15.jpg",
    "jawaban": "NINA BOBO",
    "deskripsi": "Gambar orang Cina (huruf C diganti N) sedang tidur ."
  },
  {
    "index": 175,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-16.jpg",
    "jawaban": "BUKU EKONOMI",
    "deskripsi": "Gambar buku, teko (huruf T dicoret), huruf NO, dan mie."
  },
  {
    "index": 176,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-17.jpg",
    "jawaban": "KEBELET PIPIS",
    "deskripsi": "Gambar huruf KE, belut (huruf U diganti E), pipi, dan huruf S."
  },
  {
    "index": 177,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-18.jpg",
    "jawaban": "PERINTAH ATASAN",
    "deskripsi": "Gambar peri/malaikat (ditambah huruf N), tahu (huruf U dicoret), bata merah (huruf B dicoret), dan tanda & (huruf D diganti S)."
  },
  {
    "index": 178,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-19.jpg",
    "jawaban": "STRUKTUR KRISTAL",
    "deskripsi": "Gambar truk (ditambah huruf S), huruf TUR, keris, dan tali (huruf I dicoret)."
  },
  {
    "index": 179,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-9-nomor-20.jpg",
    "jawaban": "BIBI POTONG SEMANGKA PAKAI PISAU / *SEMANGKA DIPOTONG SEPARUH PAKAI PISAU",
    "deskripsi": "Gambar bibir (huruf R dicoret), pot, dan tong kayu.Gambar semangka, paku (huruf U diganti A), huruf I.Gambar pisau."
  },
  {
    "index": 180,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-1.jpg",
    "jawaban": "PELATIH ANJING",
    "deskripsi": "Gambar plat nomor kendaraan (ditambah huruf IH) dan anjing."
  },
  {
    "index": 181,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-2.jpg",
    "jawaban": "CUKUP BOSAN",
    "deskripsi": "Gambar buku (huruf B diganti C), huruf P, dan bos/direktur (ditambah huruf AN)."
  },
  {
    "index": 182,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-3.jpg",
    "jawaban": "MENDADAK MIMISAN",
    "deskripsi": "Gambar dada (ditambah huruf MEN), huruf K, dua mie, dan ban (huruf B diganti S)."
  },
  {
    "index": 183,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-4.jpg",
    "jawaban": "ANAK PANGLIMA",
    "deskripsi": "Gambar anak kecil, potongan rambut punk, dan angka 5."
  },
  {
    "index": 184,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-5.jpg",
    "jawaban": "HAK CIPTA",
    "deskripsi": "Gambar hak sepatu dan lambang cinta (huruf N diganti P)."
  },
  {
    "index": 185,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-6.jpg",
    "jawaban": "INDUKSI MAGNET",
    "deskripsi": "Gambar induk ayam, huruf SI, dan magnet."
  },
  {
    "index": 186,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-7.jpg",
    "jawaban": "JEJAKA TUA",
    "deskripsi": "Gambar jejak telapak kaki, huruf A, dan orang tua."
  },
  {
    "index": 187,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-8.jpg",
    "jawaban": "PENYUSUTAN ASET",
    "deskripsi": "Gambar penyu/kura, setan (huruf E diganti U), dan kaset (huruf K dicoret)."
  },
  {
    "index": 188,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-9.jpg",
    "jawaban": "TES LABORATORIUM",
    "deskripsi": "Gambar teh (huruf H diganti S), huruf LA, bola (huruf L diganti R), topi (huruf P diganti R) dan huruf UM."
  },
  {
    "index": 189,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-10.jpg",
    "jawaban": "KEJEPIT RESLETING",
    "deskripsi": "Gambar keju (huruf U diganti E), pot (huruf O diganti I), dan resleting."
  },
  {
    "index": 190,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-11.jpg",
    "jawaban": "RELOKASI NARAPIDANA",
    "deskripsi": "Gambar rel, huruf O, dasi (huruf D diganti K), huruf NA, sapi (huruf S diganti R), tanda &, dan huruf A."
  },
  {
    "index": 191,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-12.jpg",
    "jawaban": "ANGKAT TANGAN",
    "deskripsi": "Gambar angka 368, huruf T, dan dua tangan."
  },
  {
    "index": 192,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-13.jpg",
    "jawaban": "JATUH BANGUN",
    "deskripsi": "Gambar orang terjatuh dan orang bangun tidur."
  },
  {
    "index": 193,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-14.jpg",
    "jawaban": "KODE POS",
    "deskripsi": "Gambar konde (huruf N dicoret) dan pot (huruf T diganti S)."
  },
  {
    "index": 194,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-15.jpg",
    "jawaban": "RASA EMPATI",
    "deskripsi": "Gambar rusa (huruf U diganti A) dan empat jari tangan (ditambah huruf I)."
  },
  {
    "index": 195,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-16.jpg",
    "jawaban": "LARIS MANIS",
    "deskripsi": "Gambar orang berlari, huruf S, orang mandi (huruf D dicoret), dan huruf S."
  },
  {
    "index": 196,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-17.jpg",
    "jawaban": "KECANTIKAN WAJAH",
    "deskripsi": "Gambar kecoak (huruf O dicoret), huruf N, ikan (ditambah huruf T), dan wajan (huruf N diganti H)."
  },
  {
    "index": 197,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-18.jpg",
    "jawaban": "SEKOPER LIONTIN",
    "deskripsi": "Gambar sekop, peri (huruf I dicoret), pion catur (huruf P diganti L), dan pin bowling (huruf P diganti T)."
  },
  {
    "index": 198,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-19.jpg",
    "jawaban": "NOTA HUTANG",
    "deskripsi": "Gambar not lagu, huruf A, huruf HU, dan tang."
  },
  {
    "index": 199,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-10-nomor-20.jpg",
    "jawaban": "SERDADU GAGAH DIANGKAT JADI KOMANDAN",
    "deskripsi": "Gambar dadu (ditambah huruf SER), dan gajah (huruf J diganti G).Gambar huruf DI, orang mengangkat beban, dan padi (huruf P diganti J).Gambar tanda koma, huruf N, dan tanda &."
  },
  {
    "index": 200,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-1.jpg",
    "jawaban": "SEKUAT TENAGA",
    "deskripsi": "Gambar orang pamer otot (ditambah huruf SE) dan naga (ditambah huruf TE)."
  },
  {
    "index": 201,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-2.jpg",
    "jawaban": "KURANG WARAS",
    "deskripsi": "Gambar penyu/kura-kura (ditambah huruf NG), burung dara/merpati (huruf D diganti W), dan huruf S."
  },
  {
    "index": 202,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-3.jpg",
    "jawaban": "KULIT PISANG",
    "deskripsi": "Gambar huruf K, ulat (huruf A diganti I) dan menara miring pisa (ditambah huruf NG)."
  },
  {
    "index": 203,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-4.jpg",
    "jawaban": "TOKO BORGOL",
    "deskripsi": "Gambar obor (ditambah huruf TOK), dan bola masuk gawang."
  },
  {
    "index": 204,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-5.jpg",
    "jawaban": "MAMI PAPI",
    "deskripsi": "Gambar mumi (huruf U diganti A) dan api (dengan huruf P)."
  },
  {
    "index": 205,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-6.jpg",
    "jawaban": "RUMPUT LIAR",
    "deskripsi": "Gambar rerumputan yang membentuk tulisan ‘Liar’."
  },
  {
    "index": 206,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-7.jpg",
    "jawaban": "TISU MOBIL",
    "deskripsi": "Gambar pegulat sumo (ditambah huruf TI) dan pil (huruf P diganti B)."
  },
  {
    "index": 207,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-8.jpg",
    "jawaban": "KIRIM BUNGA",
    "deskripsi": "Gambar orang mengangkat tangan kiri, huruf M, dan bunga."
  },
  {
    "index": 208,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-9.jpg",
    "jawaban": "TANGAN KOSONG",
    "deskripsi": "Gambar tangan memegang angka 0."
  },
  {
    "index": 209,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-10.jpg",
    "jawaban": "TUKANG BUBUR AYAM SEKARANG NAIK PELAMINAN",
    "deskripsi": "Gambar tulang (huruf L diganti K), huruf B, dan ubur-ubur.Gambar ayam, huruf SE, dan kerang (huruf E diganti A).Gambar naik tangga, pel (ditambah huruf A), mie, dan ban (huruf B diganti N)."
  },
  {
    "index": 210,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-11.jpg",
    "jawaban": "GARIS POLISI",
    "deskripsi": "Gambar garis vertikal dan polisi."
  },
  {
    "index": 211,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-12.jpg",
    "jawaban": "PENDIDIKAN JASMANI",
    "deskripsi": "Gambar kendi (huruf K diganti P), ikan (ditambah huruf D), jas, dan orang mandi (huruf D dicoret)."
  },
  {
    "index": 212,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-13.jpg",
    "jawaban": "MOTIVASI BELAJAR",
    "deskripsi": "Gambar roti (huruf R diganti M), vas (dengan tambahan huruf I) dan orang belajar."
  },
  {
    "index": 213,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-14.jpg",
    "jawaban": "TITIK DUA",
    "deskripsi": "Gambar huruf T, itik, dan angka 2."
  },
  {
    "index": 214,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-15.jpg",
    "jawaban": "APELKU BUSUK",
    "deskripsi": "Gambar apel diatas kotak kubus, dan huruf UK."
  },
  {
    "index": 215,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-16.jpg",
    "jawaban": "BERUSAHA PAHAMI",
    "deskripsi": "Gambar tanda seru (huruf S diganti B), dua daging paha (huruf P diganti S), dan microphone (huruf C dicoret)."
  },
  {
    "index": 216,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-17.jpg",
    "jawaban": "KEMBAR SIAM",
    "deskripsi": "Gambar dua orang kembar dan bunga yang disiram (huruf R dicoret)."
  },
  {
    "index": 217,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-18.jpg",
    "jawaban": "SUMBANGAN DONATUR",
    "deskripsi": "Gambar kumbang (huruf K diganti S), huruf AN, donat, dan huruf UR."
  },
  {
    "index": 218,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-19.jpg",
    "jawaban": "AKU PUCAT",
    "deskripsi": "Gambar huruf A, kupu-kupu dan cat."
  },
  {
    "index": 219,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-11-nomor-20.jpg",
    "jawaban": "JANGAN KAMU PAKSAKAN BILA TAK CINTA",
    "deskripsi": "Gambar tangan (huruf T diganti J), dan buku kamus (huruf S dicoret).Gambar paku (huruf U dicoret), orang makan (huruf M diganti S), dan biola (huruf O dicoret).Gambar tas (huruf S diganti K) dan lambang cinta."
  },
  {
    "index": 220,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-1.jpg",
    "jawaban": "TARIK KESIMPULAN",
    "deskripsi": "Gambar orang menarik tali, huruf KE, SIM, dan bulan."
  },
  {
    "index": 221,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-2.jpg",
    "jawaban": "BAJU MELAYU",
    "deskripsi": "Gambar batu, huruf ME, dan bunga layu."
  },
  {
    "index": 222,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-3.jpg",
    "jawaban": "HARGA LONTONG",
    "deskripsi": "Gambar galon dan tong."
  },
  {
    "index": 223,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-4.jpg",
    "jawaban": "LAYAR KACA",
    "deskripsi": "Gambar kapal layar dan kaca."
  },
  {
    "index": 224,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-5.jpg",
    "jawaban": "KOTA BESAR",
    "deskripsi": "Gambar tulisan “kota” yang tercetak besar."
  },
  {
    "index": 225,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-6.jpg",
    "jawaban": "BANTING RAKET",
    "deskripsi": "Gambar huruf B, anting dan raket."
  },
  {
    "index": 226,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-7.jpg",
    "jawaban": "SAKSI BISU",
    "deskripsi": "Gambar taksi dan bis."
  },
  {
    "index": 227,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-8.jpg",
    "jawaban": "BAGIAN LANGKA",
    "deskripsi": "Gambar lambang bagi, huruf AN, huruf L, dan angka."
  },
  {
    "index": 228,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-9.jpg",
    "jawaban": "HARGA SOLAR",
    "deskripsi": "Gambar harga dan lambang dolar."
  },
  {
    "index": 229,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-10.jpg",
    "jawaban": "BELAJAR KERAS SIANG MALAM SAMPAI PUSING",
    "deskripsi": "Gambar anak belajar, kera/monyet, dan huruf S.Gambar matahari dan bulan.Gambar sampah, dan orang pusing."
  },
  {
    "index": 230,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-11.jpg",
    "jawaban": "CARI JAWABAN",
    "deskripsi": "Gambar jari, orang jawa, dan ban."
  },
  {
    "index": 231,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-12.jpg",
    "jawaban": "KALKULASI PUTARAN",
    "deskripsi": "Gambar ayam kalkun, orang mengelas, siput dan orang Arab."
  },
  {
    "index": 232,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-13.jpg",
    "jawaban": "KAMERA RUSAK",
    "deskripsi": "Gambar huruf K berwarna merah, rusa, dan huruf K."
  },
  {
    "index": 233,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-14.jpg",
    "jawaban": "PANJANG KARTU",
    "deskripsi": "Gambar panci, jangkar, dan huruf TU."
  },
  {
    "index": 234,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-15.jpg",
    "jawaban": "KECAMATAN MAJU",
    "deskripsi": "Gambar kecap, mata, huruf N, dan madu."
  },
  {
    "index": 235,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-16.jpg",
    "jawaban": "BEBAN DOSAKU",
    "deskripsi": "Gambar huruf BE, bando dan saku."
  },
  {
    "index": 236,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-171.jpg",
    "jawaban": "PEDANGDUT GANTENG",
    "deskripsi": "Gambar pedang, dot, dan teng (tank)."
  },
  {
    "index": 237,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-17.jpg",
    "jawaban": "SURYA TENGGELAM",
    "deskripsi": "Gambar anak kecil meneriakkan kata “SURYA” dan tangan tenggelam."
  },
  {
    "index": 238,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-19.jpg",
    "jawaban": "NAMA WARGA",
    "deskripsi": "Gambar huruf NA, bunga mawar dan gas."
  },
  {
    "index": 239,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-12-nomor-20.jpg",
    "jawaban": "SURAT EDARAN ASLI PENANGKAPAN ANAK PEJABAT",
    "deskripsi": "Gambar surat, huruf E, dan darah.Gambar kartu as, huruf LI, anak juara, dan kapal.Gambar anak, pena, dan batu."
  },
  {
    "index": 240,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-1.jpg",
    "jawaban": "CERITA IMAJINASI",
    "deskripsi": "Gambar buah ceri, tai, huruf MA, jin, dan nasi."
  },
  {
    "index": 241,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-2.jpg",
    "jawaban": "HUBUNGAN MEMANAS",
    "deskripsi": "Gambar huruf HU, bunga, huruf N, huruf ME, dan monas."
  },
  {
    "index": 242,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-3.jpg",
    "jawaban": "PELANGGARAN BERAT",
    "deskripsi": "Gambar pelangi, burung dara, huruf N, dan orang buang air besar (berak)."
  },
  {
    "index": 243,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-4.jpg",
    "jawaban": "BAHAN TULISAN",
    "deskripsi": "Gambar hantu dan lipan."
  },
  {
    "index": 244,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-5.jpg",
    "jawaban": "KELUARGA NELAYAN",
    "deskripsi": "Gambar keluarga dan nelayan."
  },
  {
    "index": 245,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-6.jpg",
    "jawaban": "PUSAT EVALUASI",
    "deskripsi": "Gambar pusar, huruf E, palu, dan nasi."
  },
  {
    "index": 246,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-7.jpg",
    "jawaban": "BACA PIKIRAN",
    "deskripsi": "Gambar orang membaca dan pikiran/otak."
  },
  {
    "index": 247,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-8.jpg",
    "jawaban": "PINJAM BANTAL",
    "deskripsi": "Gambar pin bowling, jamban (kloset), dan tali."
  },
  {
    "index": 248,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-9.jpg",
    "jawaban": "RAMBUT KERITING",
    "deskripsi": "Gambar rambu, huruf T, dan kepiting."
  },
  {
    "index": 249,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-10.jpg",
    "jawaban": "PRESIDEN PRIHATIN NASIB PENDUDUK MISKIN",
    "deskripsi": "Gambar presiden, peri, hati, dan huruf N.Gambar nasi, huruf B, per, dan orang duduk.Gambar mi, orang bermain ski, dan huruf N."
  },
  {
    "index": 250,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-11.jpg",
    "jawaban": "PRIA DUNGU",
    "deskripsi": "Gambar peri, dan huruf D yang berwarna ungu."
  },
  {
    "index": 251,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-12.jpg",
    "jawaban": "PANTAUAN POLISI",
    "deskripsi": "Gambar pantai, uang, dan polisi."
  },
  {
    "index": 252,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-13.jpg",
    "jawaban": "SIFAT BAIK",
    "deskripsi": "Gambar sikat dan batik."
  },
  {
    "index": 253,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-14.jpg",
    "jawaban": "OBATI KESEPIAN",
    "deskripsi": "Gambar obat, huruf I, keset, pita, dan huruf N."
  },
  {
    "index": 254,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-15.jpg",
    "jawaban": "DARAH PANAS",
    "deskripsi": "Gambar darah dan termometer."
  },
  {
    "index": 255,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-16.jpg",
    "jawaban": "HORMATI GADIS",
    "deskripsi": "Gambar orang hormat, jari, dan bis."
  },
  {
    "index": 256,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-17.jpg",
    "jawaban": "BASKOM AIR",
    "deskripsi": "Gambar gitar bass, tanda koma, dan tetesan air."
  },
  {
    "index": 257,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-18.jpg",
    "jawaban": "PERUSAHAAN KECIL",
    "deskripsi": "Gambar perut, daging paha, huruf AN, peci, dan huruf L."
  },
  {
    "index": 258,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-19.jpg",
    "jawaban": "KOIN TIPIS",
    "deskripsi": "Gambar huruf KO, orang mengintip dan pisau."
  },
  {
    "index": 259,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-13-nomor-20.jpg",
    "jawaban": "GADIS BISU MERANGKUL GULING KETIKA TIDUR",
    "deskripsi": "Gambar gading gajah, huruf S, bis, dan huruf U.Gambar kerang, kembang kol, dan guling.Gambar tangan mengetik, huruf A, dan orang tidur."
  },
  {
    "index": 260,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-1.jpg",
    "jawaban": "PELUKAN MAMA",
    "deskripsi": "Gambar pel, ikan, dan mata."
  },
  {
    "index": 261,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-2.jpg",
    "jawaban": "PANGKAT POLISI",
    "deskripsi": "Gambar huruf P, orang mengangkat benda, voli, dan huruf SI."
  },
  {
    "index": 262,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-3.jpg",
    "jawaban": "API PANAS",
    "deskripsi": "Gambar huruf A, pipa dan kartu remi N & AS."
  },
  {
    "index": 263,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-4.jpg",
    "jawaban": "RACUN SERANGGA",
    "deskripsi": "Gambar racun, huruf SE, dan mangga."
  },
  {
    "index": 264,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-5.jpg",
    "jawaban": "MACAN OMPONG",
    "deskripsi": "Gambar orang makan dengan gigi ompong."
  },
  {
    "index": 265,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-6.jpg",
    "jawaban": "TANGGAL TUA",
    "deskripsi": "Gambar tangga (dengan huruf L) dan orang tua."
  },
  {
    "index": 266,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-7.jpg",
    "jawaban": "LORONG WAKTU",
    "deskripsi": "Gambar orang mendorong dan jam."
  },
  {
    "index": 267,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-8.jpg",
    "jawaban": "HIDUNG BELANG",
    "deskripsi": "Gambar hidung, huruf B, dan elang."
  },
  {
    "index": 268,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-9.jpg",
    "jawaban": "IBUKU PANDAI",
    "deskripsi": "Gambar huruf I, buku, panda, dan huruf I."
  },
  {
    "index": 269,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-10.jpg",
    "jawaban": "RATU KECANTIKAN DUNIA MAKAN ROTI BAKAR / *RONA WAJAH ALAMI RATU KECANTIKAN DUNIA",
    "deskripsi": "Gambar ratu, keran, huruf T, dan ikan.Gambar dunia, dan anak makan.Gambar roti, huruf B, dan akar."
  },
  {
    "index": 270,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-11.jpg",
    "jawaban": "GAPURA JAWA",
    "deskripsi": "Gambar garpu dan raja."
  },
  {
    "index": 271,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-12.jpg",
    "jawaban": "TULAR PENYAKIT",
    "deskripsi": "Gambar ular, penyu/kura, dan rakit."
  },
  {
    "index": 272,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-13.jpg",
    "jawaban": "LAPANGAN KERJA",
    "deskripsi": "Gambar lapangan dan orang berangkat kerja."
  },
  {
    "index": 273,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-14.jpg",
    "jawaban": "MANGKOK KOKOH",
    "deskripsi": "Gambar tang dan dua kok."
  },
  {
    "index": 274,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-15.jpg",
    "jawaban": "DUA PERISTIWA",
    "deskripsi": "Gambar angka 2, keris, dan angka 3."
  },
  {
    "index": 275,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-16.jpg",
    "jawaban": "BISA PUSING",
    "deskripsi": "Gambar huruf BI, sapu dan singa."
  },
  {
    "index": 276,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-17.jpg",
    "jawaban": "KAKI PERAWAT",
    "deskripsi": "Gambar kiper dan awan."
  },
  {
    "index": 277,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-18.jpg",
    "jawaban": "OMBAK TENANG",
    "deskripsi": "Gambar tombak dan benang."
  },
  {
    "index": 278,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-19.jpg",
    "jawaban": "TERSIPU MALU",
    "deskripsi": "Gambar per/pegas, siput, dan madu."
  },
  {
    "index": 279,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-14-nomor-20.jpg",
    "jawaban": "MULUT TUAN TANAH BAU SEMUR JENGKOL",
    "deskripsi": "Gambar bulu, huruf T, orang tua, dan huruf N.Gambar anak panah dan baut.Gambar semut, tank, dan bola masuk gawang."
  },
  {
    "index": 280,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-1.jpg",
    "jawaban": "INJAK GAS",
    "deskripsi": "Gambar orang menginjak gas elpiji."
  },
  {
    "index": 281,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-2.jpg",
    "jawaban": "BANYAK MULUT",
    "deskripsi": "Gambar manusia dengan empat mulut."
  },
  {
    "index": 282,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-3.jpg",
    "jawaban": "MUKA TEMBOK",
    "deskripsi": "Gambar ekspresi muka pada tembok."
  },
  {
    "index": 283,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-4.jpg",
    "jawaban": "ANGKARA MURKA",
    "deskripsi": "Gambar angka 0 s/d 9, jamur, dan huruf KA."
  },
  {
    "index": 284,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-5.jpg",
    "jawaban": "KEDOK TERBUKA",
    "deskripsi": "Gambar dokter dan orang buta."
  },
  {
    "index": 285,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-6.jpg",
    "jawaban": "PILOT HANDAL",
    "deskripsi": "Gambar pil, huruf OT, dan sandal."
  },
  {
    "index": 286,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-7.jpg",
    "jawaban": "BUAYA DARAT",
    "deskripsi": "Gambar buaya dan burung dara."
  },
  {
    "index": 287,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-8.jpg",
    "jawaban": "PETAKA SURAM",
    "deskripsi": "Gambar peta dan kasur."
  },
  {
    "index": 288,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-9.jpg",
    "jawaban": "KOREKSI OTOMATIS",
    "deskripsi": "Gambar korek, huruf SI, tomat, dan huruf IS."
  },
  {
    "index": 289,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-10.jpg",
    "jawaban": "NENEK MINTA AKU JANGAN MEROKOK LAGI",
    "deskripsi": "Gambar nenek, dan lambang cinta.Gambar saku, dan tangan.Gambar huruf ME, rok, kok, dan orang berlari."
  },
  {
    "index": 290,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-11.jpg",
    "jawaban": "PAMERAN KOMPUTER",
    "deskripsi": "Gambar kamera (dengan huruf N) dan komputer."
  },
  {
    "index": 291,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-12.jpg",
    "jawaban": "TEKANAN BATIN",
    "deskripsi": "Gambar huruf TE, tangan kanan dan batik."
  },
  {
    "index": 292,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-13.jpg",
    "jawaban": "KOMPOSISI CAIRAN",
    "deskripsi": "Gambar kompor, sisir, huruf C, air, dan huruf AN."
  },
  {
    "index": 293,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-14.jpg",
    "jawaban": "CUMAN RAHASIA",
    "deskripsi": "Gambar huruf CU, orang marah, tanda seru, nasi, dan huruf A."
  },
  {
    "index": 294,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-15.jpg",
    "jawaban": "KUTUB SELATAN",
    "deskripsi": "Gambar kumpulan kutu yang membentuk huruf B, tahanan dalam sel, dan awan."
  },
  {
    "index": 295,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-16.jpg",
    "jawaban": "JANGAN BEGADANG",
    "deskripsi": "Gambar tangan, huruf BE, dan rumah gadang."
  },
  {
    "index": 296,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-17.jpg",
    "jawaban": "LUKAI BADAN",
    "deskripsi": "Gambar huruf LU, lambang perkalian (X), dan badak."
  },
  {
    "index": 297,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-18.jpg",
    "jawaban": "PRASANGKA BURUK",
    "deskripsi": "Gambar simbol pria, sangkar, guru, dan huruf K."
  },
  {
    "index": 298,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-19.jpg",
    "jawaban": "DILANDA MUSIBAH",
    "deskripsi": "Gambar huruf DI, landak, busi dan bahu."
  },
  {
    "index": 299,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-15-nomor-20.jpg",
    "jawaban": "PEMIMPIN HARUS HADAPI KELICIKAN WARGA KAPITALIS",
    "deskripsi": "Gambar huruf PE, orang tidur/bermimpi, huruf N, paru-paru, dan huruf S.Gambar huruf HA, sapi, kelinci, dan ikan.Gambar bandrol harga, huruf K, api, tali, dan huruf IS."
  },
  {
    "index": 300,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-1.jpg",
    "jawaban": "DAUN SALAM",
    "deskripsi": "Gambar daun dan berjabat tangan."
  },
  {
    "index": 301,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-2.jpg",
    "jawaban": "BUANG MUKA",
    "deskripsi": "Gambar tangan membuang kepala orang ke tempat sampah."
  },
  {
    "index": 302,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-3.jpg",
    "jawaban": "PENAMBANG KUAT",
    "deskripsi": "Gambar pena, huruf M, dan bangku (dengan huruf AT)."
  },
  {
    "index": 303,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-4.jpg",
    "jawaban": "CUMA SEPELE",
    "deskripsi": "Gambar cumi, sup, dan pel (dengan huruf E)."
  },
  {
    "index": 304,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-5.jpg",
    "jawaban": "DEMAM MENGGIGIL",
    "deskripsi": "Gambar orang demam, tank, dan gigi yang membentuk huruf L."
  },
  {
    "index": 305,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-6.jpg",
    "jawaban": "BALITA BUNGKUK",
    "deskripsi": "Gambar orang Bali, bangun tabung, dan kok."
  },
  {
    "index": 306,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-7.jpg",
    "jawaban": "ASA PASTI",
    "deskripsi": "Gambar asap dan kartu remi (dengan huruf P, kartu AS, TI)."
  },
  {
    "index": 307,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-8.jpg",
    "jawaban": "BAU KAKUS",
    "deskripsi": "Gambar baut dan kaktus."
  },
  {
    "index": 308,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-9.jpg",
    "jawaban": "PEMENTASAN WAYANG",
    "deskripsi": "Gambar permen, tas, huruf AN, dan wayang."
  },
  {
    "index": 309,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-10.jpg",
    "jawaban": "MALING MOBIL MENANGIS MERATAPI NASIB PILU",
    "deskripsi": "Gambar baling, dan mobil.Gambar menang/juara (dengan huruf IS), kera/monyet, dan topi.Gambar nasi, huruf B, pil, dan huruf U."
  },
  {
    "index": 310,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-11.jpg",
    "jawaban": "DISAMBAR HALILINTAR",
    "deskripsi": "Gambar huruf DI, sambal, lilin (membentuk huruf HA), dan penari."
  },
  {
    "index": 311,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-12.jpg",
    "jawaban": "BANDAR EKSTASI",
    "deskripsi": "Gambar bando, huruf RX, dan tas (dengan huruf I)."
  },
  {
    "index": 312,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-13.jpg",
    "jawaban": "MESKI DISAKITI",
    "deskripsi": "Gambar bermain ski, huruf DI, dan orang sakit."
  },
  {
    "index": 313,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-14.jpg",
    "jawaban": "BIODATA SUPIR",
    "deskripsi": "Gambar biola, tas, huruf SU, dan buah pir."
  },
  {
    "index": 314,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-15.jpg",
    "jawaban": "ABSEN TERATUR",
    "deskripsi": "Gambar huruf AB, senter dan catur."
  },
  {
    "index": 315,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-16.jpg",
    "jawaban": "KELIPATAN RIBUAN",
    "deskripsi": "Gambar clip kertas, kayu patah, huruf R, ibu, dan huruf AN."
  },
  {
    "index": 316,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-17.jpg",
    "jawaban": "AURA JAHAT",
    "deskripsi": "Gambar huruf AU, raja, dan hati."
  },
  {
    "index": 317,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-18.jpg",
    "jawaban": "FREKUENSI GETARAN",
    "deskripsi": "Gambar kue gratis, huruf N, kartu sim, dan gitar (dengan huruf AN)."
  },
  {
    "index": 318,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-19.jpg",
    "jawaban": "PECAT KOMISARIS",
    "deskripsi": "Gambar huruf PE, cat, kumis, jari tangan, dan huruf S."
  },
  {
    "index": 319,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-16-nomor-20.jpg",
    "jawaban": "KAKI BERDARAH DITABRAK TUKANG BECAK AMATIR",
    "deskripsi": "Gambar kaki, burung dara, dan huruf H.Gambar pita, orang berak, dan tulang.Gambar becak, huruf A, pemakaman, dan huruf R."
  },
  {
    "index": 320,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-1.jpg",
    "jawaban": "RANGKUL LAWAN",
    "deskripsi": "Gambar cangkul, huruf L, dan awan."
  },
  {
    "index": 321,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-2.jpg",
    "jawaban": "KOPI ALAMI",
    "deskripsi": "Gambar tropi/piala (dengan huruf KO) dan mi."
  },
  {
    "index": 322,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-3.jpg",
    "jawaban": "HANTU PENASARAN",
    "deskripsi": "Gambar hantu, pena dan sarang."
  },
  {
    "index": 323,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-4.jpg",
    "jawaban": "SEDOT WC",
    "deskripsi": "Gambar sedotan dan wc."
  },
  {
    "index": 324,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-5.jpg",
    "jawaban": "LISTRIK MATI",
    "deskripsi": "Gambar nisan kubur dengan lambang petir/tegangan listrik."
  },
  {
    "index": 325,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-6.jpg",
    "jawaban": "DATANG BULAN",
    "deskripsi": "Gambar tang dan bulan."
  },
  {
    "index": 326,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-7.jpg",
    "jawaban": "JASA MURAH",
    "deskripsi": "Gambar jas, jamu, dan rak."
  },
  {
    "index": 327,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-8.jpg",
    "jawaban": "DIBORGOL SERDADU",
    "deskripsi": "Gambar huruf DI, bor, bola masuk gawang, huruf SRRR, dan dadu."
  },
  {
    "index": 328,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-9.jpg",
    "jawaban": "FASE KEMOTERAPI",
    "deskripsi": "Gambar vas (dengan huruf E), emo, huruf TE, dan sapi."
  },
  {
    "index": 329,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-10.jpg",
    "jawaban": "MARI PANJATKAN DOA SUPAYA KITA SELAMAT",
    "deskripsi": "Gambar lemari, orang memanjat, dan ikan.Gambar orang berdoa, sup, dan ayam.Gambar pita, orang menyelam, dan huruf AT."
  },
  {
    "index": 330,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-11.jpg",
    "jawaban": "PELANGSING PERUT",
    "deskripsi": "Gambar warna putih dan ungu, singa, dan perut."
  },
  {
    "index": 331,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-12.jpg",
    "jawaban": "PISAH RUMAH",
    "deskripsi": "Gambar pizza, huruf H, dan rumah."
  },
  {
    "index": 332,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-13.jpg",
    "jawaban": "SPONSOR BANK",
    "deskripsi": "Gambar spon, sorban, dan huruf K."
  },
  {
    "index": 333,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-14.jpg",
    "jawaban": "PELURUS AKIDAH",
    "deskripsi": "Gambar peluru (membentuk huruf S), aki, dan lambang &."
  },
  {
    "index": 334,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-15.jpg",
    "jawaban": "GARIS BAWAH",
    "deskripsi": "Gambar garis-garis dan panah menunjukkan garis paling bawah."
  },
  {
    "index": 335,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-16.jpg",
    "jawaban": "MAKALAH AKUNTANSI",
    "deskripsi": "Gambar huruf MA, orang kalah, huruf AK, unta, dan nasi."
  },
  {
    "index": 336,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-17.jpg",
    "jawaban": "PESAN MINUMAN",
    "deskripsi": "Gambar pesan dalam telepon, orang minum, dan huruf AN."
  },
  {
    "index": 337,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-18.jpg",
    "jawaban": "BERSILAT LIDAH",
    "deskripsi": "Gambar silat dan lidah."
  },
  {
    "index": 338,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-19.jpg",
    "jawaban": "CUCU PANGLIMA",
    "deskripsi": "Gambar ikan cupang, dan bangun limas."
  },
  {
    "index": 339,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-17-nomor-20.jpg",
    "jawaban": "SERATUS LAMPU TEMPEL BERSINAR TERANG BENDERANG",
    "deskripsi": "Gambar huruf SE, ratu, huruf S, dan lampu.Gambar lem, pel, orang bersin, dan huruf AR.Gambar terong, bendera, dan huruf NG."
  },
  {
    "index": 340,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-1.jpg",
    "jawaban": "BAYI TENGKURAP",
    "deskripsi": "Gambar bayi, tank, dan kura-kura."
  },
  {
    "index": 341,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-2.jpg",
    "jawaban": "RUANG KAPAL",
    "deskripsi": "Gambar huruf RU, angka 0 – 9, dan palu."
  },
  {
    "index": 342,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-3.jpg",
    "jawaban": "PUTAR FILM",
    "deskripsi": "Gambar putaran dan roll film."
  },
  {
    "index": 343,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-4.jpg",
    "jawaban": "KERTAS LOAK",
    "deskripsi": "Gambar kertas dan sayur lobak."
  },
  {
    "index": 344,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-5.jpg",
    "jawaban": "PETIK APEL",
    "deskripsi": "Gambar tanda petik dan apel."
  },
  {
    "index": 345,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-6.jpg",
    "jawaban": "LIRIK PUITIS",
    "deskripsi": "Gambar wajah melirik, huruf PU, dan itik."
  },
  {
    "index": 346,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-7.jpg",
    "jawaban": "PEMERAH SAPI",
    "deskripsi": "Gambar huruf PE berwarna merah dan api (dengan huruf S)."
  },
  {
    "index": 347,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-8.jpg",
    "jawaban": "SUSUN SERANGAN",
    "deskripsi": "Gambar susu, huruf N, tanda seru, dan tangan."
  },
  {
    "index": 348,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-9.jpg",
    "jawaban": "KEJUTAN DUKA",
    "deskripsi": "Gambar keju, tandu, dan huruf KA."
  },
  {
    "index": 349,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-10.jpg",
    "jawaban": "TETANGGA KEPERGOK BAWA SEKOPER PERMATA CURIAN",
    "deskripsi": "Gambar huruf TE, tangga, kiper, dan rok.Gambar bawang, sekop, dan per.Gambar per, mata dan durian."
  },
  {
    "index": 350,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-11.jpg",
    "jawaban": "ISU MIRING",
    "deskripsi": "Gambar tisu dan orang miring."
  },
  {
    "index": 351,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-12.jpg",
    "jawaban": "KERANJINGAN BOLA",
    "deskripsi": "Gambar kera, anjing, huruf AN, dan bola."
  },
  {
    "index": 352,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-13.jpg",
    "jawaban": "BIRO DAGANG",
    "deskripsi": "Gambar huruf BI, roda dan gong."
  },
  {
    "index": 353,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-14.jpg",
    "jawaban": "LAHAR PANAS",
    "deskripsi": "Gambar orang mengelas, harpa, huruf N, dan kartu remi AS."
  },
  {
    "index": 354,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-15.jpg",
    "jawaban": "ALAT BERAT",
    "deskripsi": "Gambar ulat, dan orang mengangkat batu."
  },
  {
    "index": 355,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-16.jpg",
    "jawaban": "ADU DOMBA",
    "deskripsi": "Gambar mengaduk gelas dan domba."
  },
  {
    "index": 356,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-17.jpg",
    "jawaban": "GAGAL DISKUSI",
    "deskripsi": "Gambar gagak, bis, dan kursi."
  },
  {
    "index": 357,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-18.jpg",
    "jawaban": "MELATIH GAJAH",
    "deskripsi": "Gambar bunga melati, huruf H, dan gajah."
  },
  {
    "index": 358,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-19.jpg",
    "jawaban": "BINTANG KECIL",
    "deskripsi": "Gambar 5 bintang (panah menunjuk bintang paling kecil)."
  },
  {
    "index": 359,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-18-nomor-20.jpg",
    "jawaban": "PARA JAWARA SILAT BAKAR CATATAN KERAMAT",
    "deskripsi": "Gambar paru-paru, orang Jawa, dan huruf RA.Gambar silet, dan cakar.Gambar cat, bata (dengan huruf N), dan orang keramas."
  },
  {
    "index": 360,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-1.jpg",
    "jawaban": "PANJANG TANGAN",
    "deskripsi": "Gambar 5 tangan (panah menunjuk ke tangan yang paling panjang)."
  },
  {
    "index": 361,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-2.jpg",
    "jawaban": "IMIGRAN GELAP",
    "deskripsi": "Gambar mi (dengan huruf I), kran, dan gelas."
  },
  {
    "index": 362,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-3.jpg",
    "jawaban": "JEJAKA LUNGLAI",
    "deskripsi": "Gambar meja, kalung, dan orang berlari."
  },
  {
    "index": 363,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-4.jpg",
    "jawaban": "USIR NYAMUK",
    "deskripsi": "Gambar kusir dan nyamuk."
  },
  {
    "index": 364,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-5.jpg",
    "jawaban": "MENDARAH DAGING",
    "deskripsi": "Gambar darah (dengan huruf MEN) dan daging."
  },
  {
    "index": 365,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-6.jpg",
    "jawaban": "GARIS BANGSAWAN",
    "deskripsi": "Gambar garis, huruf B, angsa, dan lambang &."
  },
  {
    "index": 366,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-7.jpg",
    "jawaban": "PERANG KOMANDAN",
    "deskripsi": "Gambar perangko, panda, dan huruf N."
  },
  {
    "index": 367,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-8.jpg",
    "jawaban": "HURUF ROMAWI",
    "deskripsi": "Gambar huruf ABCDEF dan pasukan romawi."
  },
  {
    "index": 368,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-9.jpg",
    "jawaban": "SETAN TERKUTUK",
    "deskripsi": "Gambar setan, per, kutu, dan huruf K."
  },
  {
    "index": 369,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-10.jpg",
    "jawaban": "HATI AKAN TENANG BILA RAJIN IBADAH",
    "deskripsi": "Gambar hati, dan orang makan.Gambar benang, dan biola.Gambar jin, dan badak."
  },
  {
    "index": 370,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-11.jpg",
    "jawaban": "PEMBANTU ASING",
    "deskripsi": "Gambar ban (dengan huruf PEM), orang tua, dan ring."
  },
  {
    "index": 371,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-12.jpg",
    "jawaban": "SALURAN TANGGUL",
    "deskripsi": "Gambar sapu, rantang, dan gula."
  },
  {
    "index": 372,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-13.jpg",
    "jawaban": "UMPANG SILANG",
    "deskripsi": "Gambar umpan memancing dan tanda silang."
  },
  {
    "index": 373,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-14.jpg",
    "jawaban": "TULANG BELAKANG",
    "deskripsi": "Gambar 5 tulang (dengan tanda di tulang paling belakang)."
  },
  {
    "index": 374,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-15.jpg",
    "jawaban": "KANTOR KUA",
    "deskripsi": "Gambar ikan, bor, dan orang berotot."
  },
  {
    "index": 375,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-16.jpg",
    "jawaban": "URUSAN DUNIA",
    "deskripsi": "Gambar huruf U, rusa, huruf N, dan bola dunia."
  },
  {
    "index": 376,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-17.jpg",
    "jawaban": "BAYAR HUTANG",
    "deskripsi": "Gambar buaya, huruf R, dan hutan."
  },
  {
    "index": 377,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-18.jpg",
    "jawaban": "TIGA PERSEN",
    "deskripsi": "Gambar 3 lambang %."
  },
  {
    "index": 378,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-19.jpg",
    "jawaban": "PERISTIWA GANJIL",
    "deskripsi": "Gambar peri (dengan huruf S), tiga jari tangan, dan angka ganjil."
  },
  {
    "index": 379,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-19-nomor-20.jpg",
    "jawaban": "UANG PINJAMAN DARI BAPAK CALON BUPATI",
    "deskripsi": "Gambar uang, pin bowling, jam, dan huruf AN.Gambar ikan pari, orang membaca, dan huruf K.Gambar balon, ibu, dan padi."
  },
  {
    "index": 380,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-1.jpg",
    "jawaban": "BUNGA ANGSURAN",
    "deskripsi": "Gambar bunga, tang, dan surat."
  },
  {
    "index": 381,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-2.jpg",
    "jawaban": "RINGAN TANGAN",
    "deskripsi": "Gambar timbangan dan tangan didalamnya."
  },
  {
    "index": 382,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-3.jpg",
    "jawaban": "PETINGGI POLISI",
    "deskripsi": "Gambar huruf PE yang tinggi dan polisi."
  },
  {
    "index": 383,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-4.jpg",
    "jawaban": "KAMAR TIDUR",
    "deskripsi": "Gambar huruf KA, palu/martil dan duri."
  },
  {
    "index": 384,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-5.jpg",
    "jawaban": "KOSMETIK MAMA",
    "deskripsi": "Gambar kaos, sepeda matic, dan mata."
  },
  {
    "index": 385,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-6.jpg",
    "jawaban": "ZEBRA LIAR",
    "deskripsi": "Gambar zebra dengan corak tulisan ‘LIAR’ ditubuhnya."
  },
  {
    "index": 386,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-7.jpg",
    "jawaban": "SETELAN BUSANA",
    "deskripsi": "Gambar huruf SE, orang menelan, bus, dan anak."
  },
  {
    "index": 387,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-8.jpg",
    "jawaban": "SEDANG KAGUMI",
    "deskripsi": "Gambar semangka dan cumi-cumi."
  },
  {
    "index": 388,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-9.jpg",
    "jawaban": "DONGKRAK POPULARITAS",
    "deskripsi": "Gambar tong, kera, huruf K, pot,ular, pita, dan huruf S."
  },
  {
    "index": 389,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-10.jpg",
    "jawaban": "PENYUSUTAN ANGGARAN YANG KURANG MEMIHAK RAKYAT",
    "deskripsi": "Gambar penyu, setan, anggar, dan huruf AN.Gambar uang, dan kura-kura (dengan hurug NG).Gambar mie, hak sepatu, rok, dan cat."
  },
  {
    "index": 390,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-11.jpg",
    "jawaban": "OPERA SABUN",
    "deskripsi": "Gambar koper, huruf A, dan sabun."
  },
  {
    "index": 391,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-12.jpg",
    "jawaban": "LABA KOTOR",
    "deskripsi": "Gambar laba-laba dan sampah."
  },
  {
    "index": 392,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-13.jpg",
    "jawaban": "ASLI MANADO",
    "deskripsi": "Gambar kartu remi AS dan 5, dan kado."
  },
  {
    "index": 393,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-14.jpg",
    "jawaban": "HARAP TENANG",
    "deskripsi": "Gambar huruf H, orang Arab dan orang berenang."
  },
  {
    "index": 394,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-15.jpg",
    "jawaban": "BUAH PIKIRAN",
    "deskripsi": "Gambar buah dan pikiran."
  },
  {
    "index": 395,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-16.jpg",
    "jawaban": "JAUHI ULAR",
    "deskripsi": "Gambar jamu, hiu, dan orang berlari."
  },
  {
    "index": 396,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-17.jpg",
    "jawaban": "MEJA RUMAHAN",
    "deskripsi": "Gambar huruf ME, jarum dan orang makan."
  },
  {
    "index": 397,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-18.jpg",
    "jawaban": "TINDAKAN POSITIF",
    "deskripsi": "Gambar tenda, ikan, dan lambang +."
  },
  {
    "index": 398,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-19.jpg",
    "jawaban": "DISUSUPI MALING",
    "deskripsi": "Gambar huruf DI, susu, pil, dan maling."
  },
  {
    "index": 399,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-20-nomor-20.jpg",
    "jawaban": "REMAJA PRIA PECINTA BUDIDAYA BUNGA TERATAI",
    "deskripsi": "Gambar sepeda mengerem, meja, peri, dan huruf A.Gambar peci, tas, busi, dan burung dara.Gambar bunga, kera dan tai."
  },
  {
    "index": 400,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-1.jpg",
    "jawaban": "RINDUKU PADAMU",
    "deskripsi": "Gambar ring, buku, padi, dan huruf MU."
  },
  {
    "index": 401,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-2.jpg",
    "jawaban": "GADIS AYU",
    "deskripsi": "Gambar gading, huruf S, dan kayu."
  },
  {
    "index": 402,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-3.jpg",
    "jawaban": "RAYUAN GOMBAL",
    "deskripsi": "Gambar ratu, huruf AN, bom, dan orang Bali."
  },
  {
    "index": 403,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-4.jpg",
    "jawaban": "INGAT MANTAN",
    "deskripsi": "Gambar singa, huruf T, dan intan."
  },
  {
    "index": 404,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-5.jpg",
    "jawaban": "LUPAKAN CINTAMU",
    "deskripsi": "Gambar kaca pembesar (lup), huruf A, kancing, dan tahu."
  },
  {
    "index": 405,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-6.jpg",
    "jawaban": "PENJARA CINTA",
    "deskripsi": "Gambar orang dalam tahanan dan lambang hati."
  },
  {
    "index": 406,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-7.jpg",
    "jawaban": "HARAPAN CINTAKU",
    "deskripsi": "Gambar harpa, panci, huruf N, dan paku."
  },
  {
    "index": 407,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-8.jpg",
    "jawaban": "DARIPADA SENDIRI",
    "deskripsi": "Gambar jari, panda, kendi, dan huruf RI."
  },
  {
    "index": 408,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-9.jpg",
    "jawaban": "KATAKAN SAYANG",
    "deskripsi": "Gambar katak, huruf AN, dan sarang."
  },
  {
    "index": 409,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-10.jpg",
    "jawaban": "NAIK PELAMINAN LEBIH BAIK KETIMBANG PACARAN",
    "deskripsi": "Gambar naik tangga, plat kendaraan, mi, dan tanda &.Gambar lebah, dan batik.Gambar peti mati, kumbang, orang membaca, dan koran."
  },
  {
    "index": 410,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-11.jpg",
    "jawaban": "KORBAN PHP",
    "deskripsi": "Gambar ekor, ban, dan handphone (dengan huruf P)."
  },
  {
    "index": 411,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-12.jpg",
    "jawaban": "PASANGAN KOMPAK",
    "deskripsi": "Gambar gitar bass, tangan, dan kompas."
  },
  {
    "index": 412,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-13.jpg",
    "jawaban": "SETIA MENUNGGUMU",
    "deskripsi": "Gambar setir, menu makanan, huruf NG, dan guru."
  },
  {
    "index": 413,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-14.jpg",
    "jawaban": "TUKANG MODUS",
    "deskripsi": "Gambar tulang, madu, dan huruf S."
  },
  {
    "index": 414,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-15.jpg",
    "jawaban": "KUCINTAI SENYUMMU",
    "deskripsi": "Gambar kucing, tai, icon senyum, dan huruf MU."
  },
  {
    "index": 415,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-16.jpg",
    "jawaban": "PAHAMI CINTAKU",
    "deskripsi": "Gambar daging paha, mie, dan lambang hati (dengan huruf KU)."
  },
  {
    "index": 416,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-17.jpg",
    "jawaban": "MATANYA MEMIKAT",
    "deskripsi": "Gambar huruf MA, tanda tanya, huruf ME, dan sikat."
  },
  {
    "index": 417,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-18.jpg",
    "jawaban": "PACARKU VOKALIS",
    "deskripsi": "Gambar pagar, ufo, dan huruf XS."
  },
  {
    "index": 418,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-19.jpg",
    "jawaban": "SELALU KANDAS",
    "deskripsi": "Gambar selang, tangan terluka, huruf N, dan dasi."
  },
  {
    "index": 419,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-21-nomor-20.jpg",
    "jawaban": "SEPARUH JIWAKU MELAYANG SETIAP PANDANGI SENYUMMU",
    "deskripsi": "Gambar huruf SE, paruh burung, jin, dan jam.Gambar huruf ME, layang-layang, setir, dan api.Gambar kandang, huruf I, icon senyum, dan huruf MU."
  },
  {
    "index": 420,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-1.jpg",
    "jawaban": "BUTA HURUF",
    "deskripsi": "Gambar orang buta dan huruf ABCDEF."
  },
  {
    "index": 421,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-2.jpg",
    "jawaban": "CUACA PANAS",
    "deskripsi": "Gambar awan-matahari-hujan, dan dua anak panah."
  },
  {
    "index": 422,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-3.jpg",
    "jawaban": "KEJUJURAN HATI",
    "deskripsi": "Gambar keju dan jurang (dengan tanda hati)."
  },
  {
    "index": 423,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-4.jpg",
    "jawaban": "KETIK LAPORAN",
    "deskripsi": "Gambar tangn mengetik, lap, dan koran."
  },
  {
    "index": 424,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-5.jpg",
    "jawaban": "SARANA OLAHRAGA",
    "deskripsi": "Gambar sarjana dan orang berolahraga."
  },
  {
    "index": 425,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-6.jpg",
    "jawaban": "BANGUN PONDASI",
    "deskripsi": "Gambar bangun tidur, pot, dan dasi."
  },
  {
    "index": 426,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-7.jpg",
    "jawaban": "ANGKAT JEMURAN",
    "deskripsi": "Gambar angka 97835, huruf T, dan jemuran."
  },
  {
    "index": 427,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-8.jpg",
    "jawaban": "BADAI ASMARA",
    "deskripsi": "Gambar badak dan kartu AS (dengan emot marah)."
  },
  {
    "index": 428,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-9.jpg",
    "jawaban": "CUCI GUDANG",
    "deskripsi": "Gambar wanita mencuci, huruf G, dan udang."
  },
  {
    "index": 429,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-10.jpg",
    "jawaban": "TANAMAN TOMAT LAYU AKIBAT GAGAL ADAPTASI",
    "deskripsi": "Gambar huruf TA, daftar nama, huruf N, dan tomat.Gambar labu, aki, dan batu.Gambar burung gagak, asap, dan tas (dengan huruf I)."
  },
  {
    "index": 430,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-11.jpg",
    "jawaban": "LUPA USULAN",
    "deskripsi": "Gambar huruf LU, paus dan bulan."
  },
  {
    "index": 431,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-12.jpg",
    "jawaban": "LOMBA BIDUAN",
    "deskripsi": "Gambar bom, babi, dua jari, dan huruf N."
  },
  {
    "index": 432,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-13.jpg",
    "jawaban": "KORBAN TENGGELAM",
    "deskripsi": "Gambar ekor, banteng, gelang, dan huruf M."
  },
  {
    "index": 433,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-14.jpg",
    "jawaban": "TULIS CERITA",
    "deskripsi": "Gambar bunga tulip, buah ceri, dan huruf TA."
  },
  {
    "index": 434,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-15.jpg",
    "jawaban": "KURANG MANIS",
    "deskripsi": "Gambar kunang- kunang, orang mandi, dan huruf S."
  },
  {
    "index": 435,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-16.jpg",
    "jawaban": "BUANG INGUS",
    "deskripsi": "Gambar huruf B, uang, dan infus."
  },
  {
    "index": 436,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-17.jpg",
    "jawaban": "BUSUNG LAPAR",
    "deskripsi": "Gambar busur, huruf NG, dan orang lapar."
  },
  {
    "index": 437,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-18.jpg",
    "jawaban": "SUKA LENGKUAS",
    "deskripsi": "Gambar kaleng (dengan huruf SU) dan kuas."
  },
  {
    "index": 438,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-19.jpg",
    "jawaban": "MENANTI SUAMI",
    "deskripsi": "Gambar orang menang, tisu, dan api."
  },
  {
    "index": 439,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-22-nomor-20.jpg",
    "jawaban": "PAKAR INDUSTRI DAUR ULANG BOTOL MINUMAN",
    "deskripsi": "Gambar huruf P, akar, induk ayam, dan penari.Gambar daun, dan tulang.Gambar botol, orang minum, dan huruf AN."
  },
  {
    "index": 440,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-1.jpg",
    "jawaban": "ES BATU",
    "deskripsi": "Gambar huruf S sedang batuk."
  },
  {
    "index": 441,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-2.jpg",
    "jawaban": "GEJALA MUNTABER",
    "deskripsi": "Gambar huruf GE, jaring/jala, orang muntah, dan per."
  },
  {
    "index": 442,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-3.jpg",
    "jawaban": "VARIETAS LANGKA",
    "deskripsi": "Gambar jari tangan, tas (dengan huruf E), huruf L, dan angka 1234567."
  },
  {
    "index": 443,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-4.jpg",
    "jawaban": "SABUN JERAWAT",
    "deskripsi": "Gambar sabun dan perawat."
  },
  {
    "index": 444,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-5.jpg",
    "jawaban": "SUPER STAR",
    "deskripsi": "Gambar sup, huruf ER dan kue tar (dengan huruf S)."
  },
  {
    "index": 445,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-6.jpg",
    "jawaban": "HUKUMAN GANTUNG",
    "deskripsi": "Gambar huruf HU, kuman dan jantung."
  },
  {
    "index": 446,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-7.jpg",
    "jawaban": "SETENGAH MATI",
    "deskripsi": "Gambar nisan kubur dengan tulisan 1/2."
  },
  {
    "index": 447,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-8.jpg",
    "jawaban": "BIBIKU GALAK",
    "deskripsi": "Gambar bibir, huruf KU, dan salak."
  },
  {
    "index": 448,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-9.jpg",
    "jawaban": "KASIH SAYANG",
    "deskripsi": "Gambar kasir dan wayang."
  },
  {
    "index": 449,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-10.jpg",
    "jawaban": "SAUDARA SEPUPU SEDANG KEKURANGAN AIR BERSIH",
    "deskripsi": "Gambar sapu, darah, huruf SE, dan kupu-kupu.Gambar mobil sedan (dengan huruf G), keju, dan tangan.Gambar air, dan orang bersin."
  },
  {
    "index": 450,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-11.jpg",
    "jawaban": "BENSIN CAMPURAN",
    "deskripsi": "Gambar orang bersin, lampu, dan lambang &."
  },
  {
    "index": 451,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-12.jpg",
    "jawaban": "KERIS MAJIKAN",
    "deskripsi": "Gambar huruf KE, bangun prisma, huruf J, dan ikan."
  },
  {
    "index": 452,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-13.jpg",
    "jawaban": "KOLEGA JAHAT",
    "deskripsi": "Gambar kol, huruf E, gajah, dan cat."
  },
  {
    "index": 453,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-14.jpg",
    "jawaban": "BELAJAR SETIA",
    "deskripsi": "Gambar anak belajar dan setir."
  },
  {
    "index": 454,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-15.jpg",
    "jawaban": "JUBAH EMAS",
    "deskripsi": "Gambar rubah dan emas."
  },
  {
    "index": 455,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-16.jpg",
    "jawaban": "OBAT MANUSIA",
    "deskripsi": "Gambar huruf O, batman dan bendera rusia."
  },
  {
    "index": 456,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-17.jpg",
    "jawaban": "EMPAT JAM",
    "deskripsi": "Gambar 4 buah jam."
  },
  {
    "index": 457,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-18.jpg",
    "jawaban": "LUKA MERADANG",
    "deskripsi": "Gambar huruf LU, kamera dan tang."
  },
  {
    "index": 458,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-19.jpg",
    "jawaban": "MAHA PENCIPTA",
    "deskripsi": "Gambar daging paha, panci, dan pita."
  },
  {
    "index": 459,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-23-nomor-20.jpg",
    "jawaban": "MAMI MERAMU JAMU PELANGSING PERUT BUNCIT",
    "deskripsi": "Gambar mumi, meriam, dan huruf U.Gambar jamu, selang, dan singa.Gambar per, huruf UT, kunci, dan huruf T."
  },
  {
    "index": 460,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-1.jpg",
    "jawaban": "PERANG KOMENTAR",
    "deskripsi": "Gambar perangko dan matahari/mentari."
  },
  {
    "index": 461,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-2.jpg",
    "jawaban": "BEROBAT JALAN",
    "deskripsi": "Gambar obat dan jalan."
  },
  {
    "index": 462,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-3.jpg",
    "jawaban": "PEGANG PIPI",
    "deskripsi": "Gambar pedang dan 2 lambang pi."
  },
  {
    "index": 463,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-4.jpg",
    "jawaban": "PECAH PEPERANGAN",
    "deskripsi": "Gambar botol pecah, huruf PE, per, dan tangan."
  },
  {
    "index": 464,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-5.jpg",
    "jawaban": "KODOK TERBANG",
    "deskripsi": "Gambar dokter dan uang."
  },
  {
    "index": 465,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-6.jpg",
    "jawaban": "BLOK TIMUR",
    "deskripsi": "Gambar bangun balok dan timun."
  },
  {
    "index": 466,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-7.jpg",
    "jawaban": "SATU PIRING",
    "deskripsi": "Gambar huruf SA, tupai dan ring."
  },
  {
    "index": 467,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-8.jpg",
    "jawaban": "KENING LEBAR",
    "deskripsi": "Gambar orang kencing dan lebah."
  },
  {
    "index": 468,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-9.jpg",
    "jawaban": "SENJATA API",
    "deskripsi": "Gambar senja, tas, dan sapi."
  },
  {
    "index": 469,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-10.jpg",
    "jawaban": "JURAGAN MINTA AMPUN PADA NENEK KERIPUT",
    "deskripsi": "Gambar kura-kura, gas elpiji, dan lambang hati/cinta.Gambar lampu, huruf N, dan padi.Gambar nenek, huruf KE, dan siput."
  },
  {
    "index": 470,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-11.jpg",
    "jawaban": "PRAJA MUDA",
    "deskripsi": "Gambar lambang pria dan jamu (dengan huruf DA)."
  },
  {
    "index": 471,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-12.jpg",
    "jawaban": "USAHA KECIL",
    "deskripsi": "Gambar bendera Amerika, huruf HA, peci, dan huruf L."
  },
  {
    "index": 472,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-13.jpg",
    "jawaban": "TOPIK PANAS",
    "deskripsi": "Gambar topi, huruf K, dan termometer."
  },
  {
    "index": 473,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-14.jpg",
    "jawaban": "SANDIWARA CINTA",
    "deskripsi": "Gambar sandi, kumpulan warna, dan lambang cinta."
  },
  {
    "index": 474,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-15.jpg",
    "jawaban": "SEGENAP BANGSA",
    "deskripsi": "Gambar huruf SE, angka 246810, huruf B, dan angsa."
  },
  {
    "index": 475,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-16.jpg",
    "jawaban": "BELUM DIKETAHUI",
    "deskripsi": "Gambar belut, disket, tahu, dan huruf I."
  },
  {
    "index": 476,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-17.jpg",
    "jawaban": "MEDIA GAMBAR",
    "deskripsi": "Gambar huruf ME, diagram dan bir."
  },
  {
    "index": 477,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-18.jpg",
    "jawaban": "IQ JONGKOK",
    "deskripsi": "Gambar huruf IQ, dan orang jongkok."
  },
  {
    "index": 478,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-19.jpg",
    "jawaban": "DISELAMATKAN BUNDA",
    "deskripsi": "Gambar orang menyelam, makam, ikan, dan bunga."
  },
  {
    "index": 479,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-24-nomor-20.jpg",
    "jawaban": "PEGULAT LAKUKAN LATIHAN RINGAN SELAMA SEBULAN",
    "deskripsi": "Gambar huruf PE, gula, huruf T, saku, dan ban.Gambar laut, ikan, dan ring (dengan huruf AN).Gambar orang menyelam, huruf SE, dan bulan."
  },
  {
    "index": 480,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-1.jpg",
    "jawaban": "PERAWATAN RAMBUT",
    "deskripsi": "Gambar perawat, huruf AN, dan rambu-rambu."
  },
  {
    "index": 481,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-2.jpg",
    "jawaban": "PELUMAS KERETA",
    "deskripsi": "Gambar pel, masker, dan peta."
  },
  {
    "index": 482,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-3.jpg",
    "jawaban": "SERIBU TAWARAN",
    "deskripsi": "Gambar skor 1 – 1, huruf BU, icon tertawa, dan koran."
  },
  {
    "index": 483,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-4.jpg",
    "jawaban": "LUMAYAN SAKIT",
    "deskripsi": "Gambar hiu, ban, dan orang sakit."
  },
  {
    "index": 484,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-5.jpg",
    "jawaban": "HUKUMAN DITAMBAH",
    "deskripsi": "Gambar buku, orang mandi, dan lambang tambah (+)."
  },
  {
    "index": 485,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-6.jpg",
    "jawaban": "SEKITAR SURABAYA",
    "deskripsi": "Gambar bermain ski, kue tar, surat, dan bayi."
  },
  {
    "index": 486,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-7.jpg",
    "jawaban": "LUKA PARAH",
    "deskripsi": "Gambar tangan terluka, huruf P, dan petunjuk arah."
  },
  {
    "index": 487,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-8.jpg",
    "jawaban": "CERITA BOHONG",
    "deskripsi": "Gambar buah ceri, huruf TA, bom, dan tong."
  },
  {
    "index": 488,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-9.jpg",
    "jawaban": "KECANDUAN KOPI",
    "deskripsi": "Gambar kecap, dua jari, huruf N, dan kopi."
  },
  {
    "index": 489,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-10.jpg",
    "jawaban": "LAWAN PENJAJAH DEMI TANAH AIR BERDAULAT",
    "deskripsi": "Gambar huruf L, awan, pena, dan gajah.Gambar huruf DE, mie, anak panah, dan air.Gambar per, daun, dan orang mengelas."
  },
  {
    "index": 490,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-11.jpg",
    "jawaban": "RELA DIKUCILKAN",
    "deskripsi": "Gambar rel kereta (membentuk huruf A), huruf DI, kunci, huruf L, dan ikan."
  },
  {
    "index": 491,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-12.jpg",
    "jawaban": "KELILIPAN SERANGGA",
    "deskripsi": "Gambar lambang perkalian (X), lipan, kerang, dan huruf GA."
  },
  {
    "index": 492,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-13.jpg",
    "jawaban": "KEPALANG TANGGUNG",
    "deskripsi": "Gambar kepala, huruf NG, tang, dan gong."
  },
  {
    "index": 493,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-14.jpg",
    "jawaban": "UNJUK RASA",
    "deskripsi": "Gambar orang menunjuk dan rusa."
  },
  {
    "index": 494,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-15.jpg",
    "jawaban": "PERWIRA DINAS",
    "deskripsi": "Gambar per, huruf WI, radio, dan kartu remi N dan AS."
  },
  {
    "index": 495,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-16.jpg",
    "jawaban": "JENIS TANAH",
    "deskripsi": "Gambar jin, istana, dan huruf H."
  },
  {
    "index": 496,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-17.jpg",
    "jawaban": "IMBAS KETAMAKAN",
    "deskripsi": "Gambar huruf IM, basket, dan orang makan."
  },
  {
    "index": 497,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-18.jpg",
    "jawaban": "POLISI GADUNGAN",
    "deskripsi": "Gambar oli, huruf SI, gedung, dan huruf AN."
  },
  {
    "index": 498,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-19.jpg",
    "jawaban": "RUMAH APUNG",
    "deskripsi": "Gambar rumah dan capung."
  },
  {
    "index": 499,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-25-nomor-20.jpg",
    "jawaban": "PANITIA HAKIM AGUNG MENJALIN HUBUNGAN RAHASIA",
    "deskripsi": "Gambar panci, tiga jari, dan hakim.Gambar jagung, senja, dan pin bowling.Gambar huruf BU, bunga, huruf N, daging paha, dan bersila."
  },
  {
    "index": 500,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-1.jpg",
    "jawaban": "TERIMA BUKTI",
    "deskripsi": "Gambar buah ceri, orang mabuk, dan huruf TI."
  },
  {
    "index": 501,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-2.jpg",
    "jawaban": "KEMEJA BATIK",
    "deskripsi": "Gambar kue, meja, dan orang batuk."
  },
  {
    "index": 502,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-3.jpg",
    "jawaban": "DISAMBAR PETIR",
    "deskripsi": "Gambar huruf DI, sambal dan peti (dengan huruf R)."
  },
  {
    "index": 503,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-4.jpg",
    "jawaban": "AKSI DEMO",
    "deskripsi": "Gambar taksi dan bemo."
  },
  {
    "index": 504,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-5.jpg",
    "jawaban": "BAN BOCOR",
    "deskripsi": "Gambar ban dan timba bocor."
  },
  {
    "index": 505,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-6.jpg",
    "jawaban": "KONTRAK DAGANG",
    "deskripsi": "Gambar koin, truk, huruf DA, dan gong."
  },
  {
    "index": 506,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-7.jpg",
    "jawaban": "INDIKASI DIARE",
    "deskripsi": "Gambar orang India, nasi, dua jari, dan huruf RE."
  },
  {
    "index": 507,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-8.jpg",
    "jawaban": "KELUAR GARIS",
    "deskripsi": "Gambar keluarga dan bis."
  },
  {
    "index": 508,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-9.jpg",
    "jawaban": "KENDALI LINTASAN",
    "deskripsi": "Gambar kendi, lilin, dan tas (dengan huruf AN)."
  },
  {
    "index": 509,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-10.jpg",
    "jawaban": "WANITA SUKA PADA LELAKI YANG SOPAN",
    "deskripsi": "Gambar huruf WA, pita, dan tangan terluka.Gambar panda, pel, dan aki.Gambar tang, sofa, dan huruf N."
  },
  {
    "index": 510,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-11.jpg",
    "jawaban": "CAHAYA SURGA",
    "deskripsi": "Gambar daging paha, kasur, dan gas elpiji."
  },
  {
    "index": 511,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-12.jpg",
    "jawaban": "KASUS PIDANA",
    "deskripsi": "Gambar huruf K, kartu AS, sushi, lambang phi, lambang &, dan huruf A."
  },
  {
    "index": 512,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-13.jpg",
    "jawaban": "SALING SAPA",
    "deskripsi": "Gambar baling-baling dan sapu."
  },
  {
    "index": 513,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-14.jpg",
    "jawaban": "LUAS BANDARA",
    "deskripsi": "Gambar huruf LU, asbak dan burung dara."
  },
  {
    "index": 514,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-15.jpg",
    "jawaban": "MEMBABI BUTA",
    "deskripsi": "Gambar huruf MEM, babi dan orang buta."
  },
  {
    "index": 515,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-16.jpg",
    "jawaban": "PREMAN ROMANTIS",
    "deskripsi": "Gambar huruf P, sepeda mengerem, huruf AN, bom, orang mandi, dan huruf S."
  },
  {
    "index": 516,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-17.jpg",
    "jawaban": "BERANDA RUMAH",
    "deskripsi": "Gambar bendera Belanda dan rumah."
  },
  {
    "index": 517,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-18.jpg",
    "jawaban": "SAYA GILA",
    "deskripsi": "Gambar orang kaya dan gula"
  },
  {
    "index": 518,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-19.jpg",
    "jawaban": "KAWIN SILANG",
    "deskripsi": "Gambar sawi, huruf N, bersila, dan huruf NG."
  },
  {
    "index": 519,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-26-nomor-20.jpg",
    "jawaban": "ANGGOTA DEWAN BUANG HAJAT SEBELUM SIDANG",
    "deskripsi": "Gambar tang, dot, dan huruf A.Gambar dewa, huruf B, uang, raja, dan huruf T.Gambar huruf SE, belut, huruf SI, daun, dan huruf G."
  },
  {
    "index": 520,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-1.jpg",
    "jawaban": "KOMPONEN CADANGAN",
    "deskripsi": "Gambar kompor, net, cat, dan tangan."
  },
  {
    "index": 521,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-2.jpg",
    "jawaban": "DANA GABUNGAN",
    "deskripsi": "Gambar lambang &, naga, dan bunga (dengan huruf N)."
  },
  {
    "index": 522,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-3.jpg",
    "jawaban": "MATAHARI TERBENAM",
    "deskripsi": "Gambar mata, jari, per, huruf B dan angka 6."
  },
  {
    "index": 523,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-4.jpg",
    "jawaban": "SERING KETIDURAN",
    "deskripsi": "Gambar nilai seri, huruf NG, peti, dan durian."
  },
  {
    "index": 524,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-5.jpg",
    "jawaban": "ACARA DARURAT",
    "deskripsi": "Gambar kaca, radar, dan surat."
  },
  {
    "index": 525,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-6.jpg",
    "jawaban": "BADANKU PANUAN",
    "deskripsi": "Gambar badak, kue, palu, dan huruf AN."
  },
  {
    "index": 526,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-7.jpg",
    "jawaban": "PERKEDEL MANTAP",
    "deskripsi": "Gambar per, huruf KE, delman, dan tas."
  },
  {
    "index": 527,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-8.jpg",
    "jawaban": "KELENGKAPAN DOKUMEN",
    "deskripsi": "Gambar kaleng, kapal, dot, dan kuman."
  },
  {
    "index": 528,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-9.jpg",
    "jawaban": "KEPALA BATU",
    "deskripsi": "Gambar kepala dan batu."
  },
  {
    "index": 529,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-10.jpg",
    "jawaban": "UDARA LEMBAB AKIBAT TURUN HUJAN SEMALAM",
    "deskripsi": "Gambar huruf U, darah, lem, dan babi.Gambar api, baut, dan turun tangga.Gambar hujan, huruf SE, dan malam hari."
  },
  {
    "index": 530,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-11.jpg",
    "jawaban": "PANTAT BISULAN",
    "deskripsi": "Gambar pantai, bis, dan bulan."
  },
  {
    "index": 531,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-12.jpg",
    "jawaban": "NAIK DARAH",
    "deskripsi": "Gambar naik tangga dan darah."
  },
  {
    "index": 532,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-13.jpg",
    "jawaban": "SEKOLAH ASTRONOT",
    "deskripsi": "Gambar teko, las, kartu AS, huruf T, rok, dan not lagu."
  },
  {
    "index": 533,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-14.jpg",
    "jawaban": "RUANG GARASI",
    "deskripsi": "Gambar huruf RU, anggar dan nasi."
  },
  {
    "index": 534,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-15.jpg",
    "jawaban": "JALANI RUTINITAS",
    "deskripsi": "Gambar jalan, huruf I, roti, huruf NI, dan tas."
  },
  {
    "index": 535,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-16.jpg",
    "jawaban": "TOTALITAS PERJUANGAN",
    "deskripsi": "Gambar huruf TO, tali, tas, per, huruf J, uang, dan huruf AN."
  },
  {
    "index": 536,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-17.jpg",
    "jawaban": "PENEGAK HUKUM",
    "deskripsi": "Gambar pete, gas, buku, dan huruf M."
  },
  {
    "index": 537,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-18.jpg",
    "jawaban": "PENCURI BUKU",
    "deskripsi": "Gambar penyu, huruf R, ibu, dan huruf KU."
  },
  {
    "index": 538,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-19.jpg",
    "jawaban": "PATUHI PERATURAN",
    "deskripsi": "Gambar sepatu, hiu, kera, kura kura, dan huruf N."
  },
  {
    "index": 539,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-27-nomor-20.jpg",
    "jawaban": "CACI MAKI HANYA OMONG KOSONG BELAKA",
    "deskripsi": "Gambar wanita mencuci, dan makam.Gambar tanda tanya, bom, dan tong.Gambar kaos, tong, bel, dan laba-laba."
  },
  {
    "index": 540,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-1.jpg",
    "jawaban": "PERCAYA DIRI",
    "deskripsi": "Gambar peri, huruf C, ayam, dan duri."
  },
  {
    "index": 541,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-2.jpg",
    "jawaban": "NENEK SIHIR",
    "deskripsi": "Gambar nenek, kartu sim, dan buah pir."
  },
  {
    "index": 542,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-3.jpg",
    "jawaban": "KACANG KULIT",
    "deskripsi": "Gambar tangan terluka, cangkul, dan huruf IT."
  },
  {
    "index": 543,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-4.jpg",
    "jawaban": "ADU JOTOS",
    "deskripsi": "Gambar mengaduk, huruf JO, dan tos."
  },
  {
    "index": 544,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-5.jpg",
    "jawaban": "MEJA MURID",
    "deskripsi": "Gambar jamur, dan huruf ID."
  },
  {
    "index": 545,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-6.jpg",
    "jawaban": "KETAWA CERIA",
    "deskripsi": "Gambar peta, huruf WA, buah ceri, dan huruf A."
  },
  {
    "index": 546,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-7.jpg",
    "jawaban": "TURUN TANGAN",
    "deskripsi": "Gambar turun tangga dan tangan."
  },
  {
    "index": 547,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-8.jpg",
    "jawaban": "SIFAT MANUSIA",
    "deskripsi": "Gambar sikat gigi, menu makanan, dan posisi duduk sila."
  },
  {
    "index": 548,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-9.jpg",
    "jawaban": "MASALAH PRIBADI",
    "deskripsi": "Gambar majalah, ikan pari, dan bayi."
  },
  {
    "index": 549,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-10.jpg",
    "jawaban": "DELAPAN PENDAKI GUNUNG DIGIGIT SERANGGA BERACUN",
    "deskripsi": "Gambar huruf DE, lipan, tenda, dan huruf KI.Gambar gunung, huruf DI, gigi, dan huruf T.Gambar huruf SE, mangga, per, dan racun."
  },
  {
    "index": 550,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-11.jpg",
    "jawaban": "SUARA KETAKUTAN",
    "deskripsi": "Gambar wanita menyuapi, raket, paku, dan tang."
  },
  {
    "index": 551,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-12.jpg",
    "jawaban": "TEMPAT PERISTIRAHATAN",
    "deskripsi": "Gambar huruf T, empat jari, keris, angka 3 dan hutan."
  },
  {
    "index": 552,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-13.jpg",
    "jawaban": "KEPALA BATU",
    "deskripsi": "Gambar kera, laba-laba, dan orang tua."
  },
  {
    "index": 553,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-14.jpg",
    "jawaban": "NONTON KARTUN",
    "deskripsi": "Gambar huruf O, tong dan kartu remi (dengan huruf N)."
  },
  {
    "index": 554,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-15.jpg",
    "jawaban": "PERUT BUNCIT",
    "deskripsi": "Gambar per, huruf UT, kunci, dan huruf T."
  },
  {
    "index": 555,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-16.jpg",
    "jawaban": "TENDANGAN MELAMBUNG",
    "deskripsi": "Gambar tenda, huruf N, gas, huruf ME, dan lambung."
  },
  {
    "index": 556,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-17.jpg",
    "jawaban": "KORBAN KECOPETAN",
    "deskripsi": "Gambar ekor, ban, kecoak, dan setan."
  },
  {
    "index": 557,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-18.jpg",
    "jawaban": "HATIKU SAKIT",
    "deskripsi": "Gambar tikus dan rakit."
  },
  {
    "index": 558,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-19.jpg",
    "jawaban": "UANG PANAS",
    "deskripsi": "Gambar uang dan termometer."
  },
  {
    "index": 559,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-28-nomor-20.jpg",
    "jawaban": "KOKI TUANGKAN BUMBU PENYEDAP PADA MASAKAN",
    "deskripsi": "Gambar kaki, huruf T, uang, dan ikan.Gambar bambu, penyu, dan lap.Gambar panda, emas, dan makan."
  },
  {
    "index": 560,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-1.jpg",
    "jawaban": "TES KEJIWAAN",
    "deskripsi": "Gambar tos, keju, huruf W, dan awan."
  },
  {
    "index": 561,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-2.jpg",
    "jawaban": "SEPANJANG HIDUPKU",
    "deskripsi": "Gambar setan, tang, hidung, huruf P, dan kue."
  },
  {
    "index": 562,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-3.jpg",
    "jawaban": "KAYU MANIS",
    "deskripsi": "Gambar kayu dengan banyak semut."
  },
  {
    "index": 563,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-4.jpg",
    "jawaban": "KUNCI INGGRIS",
    "deskripsi": "Gambar kunci dan bendera Inggris."
  },
  {
    "index": 564,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-5.jpg",
    "jawaban": "PINTU LANGIT",
    "deskripsi": "Gambar pin bowling, tulang, dan huruf IT."
  },
  {
    "index": 565,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-6.jpg",
    "jawaban": "LAMA DURASI",
    "deskripsi": "Gambar madu, dan nasi."
  },
  {
    "index": 566,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-7.jpg",
    "jawaban": "PIKIRAN KOTOR",
    "deskripsi": "Gambar pil, koran, dot, dan bor."
  },
  {
    "index": 567,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-8.jpg",
    "jawaban": "CANGKOK TANAMAN",
    "deskripsi": "Gambar mangkok, tas, daftar nama, dan huruf N."
  },
  {
    "index": 568,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-9.jpg",
    "jawaban": "IGUANA GANAS",
    "deskripsi": "Gambar huruf I, gua, naga, huruf N, dan kartu AS."
  },
  {
    "index": 569,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-10.jpg",
    "jawaban": "JANGAN BUANG WAKTU UNTUK HAL NEGATIF",
    "deskripsi": "Gambar huruf J, angin, huruf B, dan uang.Gambar jam, unta, dan huruf K.Gambar hak sepatu, net, lambang hati, dan huruf F."
  },
  {
    "index": 570,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-11.jpg",
    "jawaban": "RUANG RADIOLOGI",
    "deskripsi": "Gambar huruf R, uang, radio, huruf L, dan oli."
  },
  {
    "index": 571,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-12.jpg",
    "jawaban": "MALAIKAT MAUT",
    "deskripsi": "Gambar mata, ikan, dan baut."
  },
  {
    "index": 572,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-13.jpg",
    "jawaban": "MENEMBUS BATAS",
    "deskripsi": "Gambar huruf M, angka 6, bus dan bata (dengan huruf S)."
  },
  {
    "index": 573,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-14.jpg",
    "jawaban": "KURAS JAMBAN",
    "deskripsi": "Gambar kura-kura, huruf S, jam, dan ban."
  },
  {
    "index": 574,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-15.jpg",
    "jawaban": "PECAHAN KACA",
    "deskripsi": "Gambar bilangan pecahan 2/3 4/7 1/8, dan kacang."
  },
  {
    "index": 575,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-16.jpg",
    "jawaban": "PETUALANG SEJATI",
    "deskripsi": "Gambar peta, wayang, senja, dan tai."
  },
  {
    "index": 576,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-17.jpg",
    "jawaban": "GAGASAN DALANG",
    "deskripsi": "Gambar 2 gas elpiji, sandal dan uang."
  },
  {
    "index": 577,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-18.jpg",
    "jawaban": "BABAK BELUR",
    "deskripsi": "Gambar huruf B, asbak dan telur."
  },
  {
    "index": 578,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-19.jpg",
    "jawaban": "PENOPANG KURSI",
    "deskripsi": "Gambar pena, ibu memangku anak, huruf R, dan kartu sim."
  },
  {
    "index": 579,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-29-nomor-20.jpg",
    "jawaban": "KEDATANGAN JUARA OLIMPIADE DISAMBUT TANGIS BAHAGIA",
    "deskripsi": "Gambar kuda, tangan, huruf JU, dan petunjuk arah.Gambar oli, pita, huruf DE, huruf DI, rambu-rambu, dan huruf T.Gambar tang, huruf IS, daging paha, dan orang gila."
  },
  {
    "index": 580,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-1.jpg",
    "jawaban": "BANGKU KOSONG",
    "deskripsi": "Gambar bangku dan angka 0."
  },
  {
    "index": 581,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-2.jpg",
    "jawaban": "GANTUNGAN KUNCI",
    "deskripsi": "Gambar jantung, huruf AN, dan kuncir."
  },
  {
    "index": 582,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-3.jpg",
    "jawaban": "PENYEBAB DIABETES",
    "deskripsi": "Gambar penyu, babi, orang berdoa, pete, dan huruf S."
  },
  {
    "index": 583,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-4.jpg",
    "jawaban": "NAIK HELIKOPTER",
    "deskripsi": "Gambar naik tangga, helm, huruf I, kopi, dan per."
  },
  {
    "index": 584,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-5.jpg",
    "jawaban": "KOTA LAMPUNG",
    "deskripsi": "Gambar tanda koma, lampu, dan huruf NG."
  },
  {
    "index": 585,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-6.jpg",
    "jawaban": "TARIK TUNAI",
    "deskripsi": "Gambar orang menarik tupai."
  },
  {
    "index": 586,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-7.jpg",
    "jawaban": "BUKU TUGAS",
    "deskripsi": "Gambar ibu, kutu, huruf G, dan kartu AS."
  },
  {
    "index": 587,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-8.jpg",
    "jawaban": "KESET RUMAH",
    "deskripsi": "Gambar orang kesetrum."
  },
  {
    "index": 588,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-9.jpg",
    "jawaban": "KECILKAN PERUT",
    "deskripsi": "Gambar peci, huruf L, ikan, dan perut."
  },
  {
    "index": 589,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-10.jpg",
    "jawaban": "BURUNG PELATUK TERBANG SAMPAI UJUNG DUNIA",
    "deskripsi": "Gambar burung, pel, dan truk.Gambar per, bank, dan tempat sampah.Gambar huruf UJ, uang, dan dunia."
  },
  {
    "index": 590,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-11.jpg",
    "jawaban": "KEPALA KELUARGA",
    "deskripsi": "Gambar kepala dan keluarga."
  },
  {
    "index": 591,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-12.jpg",
    "jawaban": "ORGANISASI DUNIA",
    "deskripsi": "Gambar organ tubuh, huruf I, sapi, dan dunia."
  },
  {
    "index": 592,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-13.jpg",
    "jawaban": "JURAGAN TENAR",
    "deskripsi": "Gambar jurang, antena, dan huruf R."
  },
  {
    "index": 593,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-14.jpg",
    "jawaban": "ARTIS DADAKAN",
    "deskripsi": "Gambar air, tisu, dada, dan ikan."
  },
  {
    "index": 594,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-15.jpg",
    "jawaban": "LAPISAN KEDUA",
    "deskripsi": "Gambar lap, pisang, huruf KE, dan dua jari."
  },
  {
    "index": 595,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-16.jpg",
    "jawaban": "POSISI BAWAH",
    "deskripsi": "Gambar pot, sushi, bawang, dan huruf H."
  },
  {
    "index": 596,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-17.jpg",
    "jawaban": "HATI SUCI",
    "deskripsi": "Gambar hak sepatu, tisu, dan huruf CI."
  },
  {
    "index": 597,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-18.jpg",
    "jawaban": "CALON PENDAMPING",
    "deskripsi": "Gambar balon, tenda (dengan huruf M), dan ring."
  },
  {
    "index": 598,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-19.jpg",
    "jawaban": "HAMPA HATIKU",
    "deskripsi": "Gambar jam, pahat, dan bangun siku."
  },
  {
    "index": 599,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-30-nomor-20.jpg",
    "jawaban": "DISKUSI TENTANG SATWA LANGKA BATAL DIGELAR",
    "deskripsi": "Gambar bis, kursi, dan tanda centang.Gambar satu jari, huruf WA, huruf L, dan angka 23456.Gambar bantal, huruf DI, dan gelas."
  },
  {
    "index": 600,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-1.jpg",
    "jawaban": "LUKA DALAM",
    "deskripsi": "Gambar huruf LU, kadal dan jam."
  },
  {
    "index": 601,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-2.jpg",
    "jawaban": "KEMBANG API",
    "deskripsi": "Gambar anak kembar, huruf NG, dan api."
  },
  {
    "index": 602,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-3.jpg",
    "jawaban": "TINJAUAN ULANG",
    "deskripsi": "Gambar tinju, uang, dan tulang."
  },
  {
    "index": 603,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-4.jpg",
    "jawaban": "KEMAMPUAN ANALISIS",
    "deskripsi": "Gambar demam, angka 2, huruf N, huruf AN, alis, dan huruf IS."
  },
  {
    "index": 604,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-5.jpg",
    "jawaban": "BUNGA TIDUR",
    "deskripsi": "Gambar bunga dan orang tidur."
  },
  {
    "index": 605,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-6.jpg",
    "jawaban": "PENDUDUK AUSTRALIA",
    "deskripsi": "Gambar pena, orang duduk, haus, huruf T, tali, dan huruf A."
  },
  {
    "index": 606,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-7.jpg",
    "jawaban": "SOK KECAKEPAN",
    "deskripsi": "Gambar rok, kecap, kera, dan huruf N."
  },
  {
    "index": 607,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-8.jpg",
    "jawaban": "POLISI LATAH",
    "deskripsi": "Gambar voli dan silat."
  },
  {
    "index": 608,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-9.jpg",
    "jawaban": "SERIBU LUKISAN",
    "deskripsi": "Gambar skor seri, bulu, menara pisa, dan huruf N."
  },
  {
    "index": 609,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-10.jpg",
    "jawaban": "PEDAGANG BAWA SEKARUNG GARAM ASLI MADURA",
    "deskripsi": "Gambar pedang, gong, dan bawang.Gambar huruf SE, sarung, dan garam.Gambar kartu AS, huruf LI, dan madu (dengan huruf RA)."
  },
  {
    "index": 610,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-11.jpg",
    "jawaban": "IBU ANGKAT",
    "deskripsi": "Gambar ibu diangkat."
  },
  {
    "index": 611,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-12.jpg",
    "jawaban": "KEBELET KAWIN",
    "deskripsi": "Gambar huruf KE, belut, sawi, dan huruf N."
  },
  {
    "index": 612,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-13.jpg",
    "jawaban": "PERSIAPAN DANA",
    "deskripsi": "Gambar peri, sila, dan panda."
  },
  {
    "index": 613,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-14.jpg",
    "jawaban": "TATA USAHA",
    "deskripsi": "Gambar tato, bendera Amerika, dan huruf HA."
  },
  {
    "index": 614,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-15.jpg",
    "jawaban": "AMBIL KESEMPATAN",
    "deskripsi": "Gambar huruf A, mobil, keset, huruf M, dan kayu patah."
  },
  {
    "index": 615,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-16.jpg",
    "jawaban": "MENANGGAPI LAPORAN",
    "deskripsi": "Gambar benang, api (dengan huruf G), las, dan koran."
  },
  {
    "index": 616,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-17.jpg",
    "jawaban": "BUKA DOKUMEN",
    "deskripsi": "Gambar huruf BU, kado dan kuman."
  },
  {
    "index": 617,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-18.jpg",
    "jawaban": "ITIKAD BURUK",
    "deskripsi": "Gambar itik, huruf AD, burung, dan huruf K."
  },
  {
    "index": 618,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-19.jpg",
    "jawaban": "SAMPAIKAN SALAM",
    "deskripsi": "Gambar shampo, ikan, dan salak."
  },
  {
    "index": 619,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-31-nomor-20.jpg",
    "jawaban": "WARGA KAMPUNG BERANGKAT MENUJU TEMPAT WISATA",
    "deskripsi": "Gambar harga, lampu, dan huruf NG.Gambar beruang, cat, menu makanan, dan huruf JU.Gambar T4, huruf WI, dan sate."
  },
  {
    "index": 620,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-1.jpg",
    "jawaban": "KAMBING HITAM",
    "deskripsi": "Gambar kambing hitam."
  },
  {
    "index": 621,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-2.jpg",
    "jawaban": "GONGGONGAN ANJING",
    "deskripsi": "Gambar 2 gong, huruf AN, dan anjing."
  },
  {
    "index": 622,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-3.jpg",
    "jawaban": "PULAU KAPUK",
    "deskripsi": "Gambar pulau, huruf K, dan mengaduk."
  },
  {
    "index": 623,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-4.jpg",
    "jawaban": "SUKAR DIPERCAYA",
    "deskripsi": "Gambar huruf S, ular, kiper, dan orang kaya."
  },
  {
    "index": 624,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-5.jpg",
    "jawaban": "TEROMPET EMAS",
    "deskripsi": "Gambar terong, huruf M, peta, dan emas."
  },
  {
    "index": 625,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-6.jpg",
    "jawaban": "SERIBU MIMPI",
    "deskripsi": "Gambar buah ceri, bumi, huruf M, dan pil."
  },
  {
    "index": 626,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-7.jpg",
    "jawaban": "PENGUSAHA PROPERTI",
    "deskripsi": "Gambar penyu, daging paha, huruf P, koper, dan tai."
  },
  {
    "index": 627,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-8.jpg",
    "jawaban": "GIGIT JARI",
    "deskripsi": "Gambar gigi dan ikan pari."
  },
  {
    "index": 628,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-9.jpg",
    "jawaban": "PELANGGAN SETIA",
    "deskripsi": "Gambar pelangi, ban, dan setir."
  },
  {
    "index": 629,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-10.jpg",
    "jawaban": "PENJAGA WARUNG TEGA CAMPUR SUSU KADALUARSA",
    "deskripsi": "Gambar pena, naga, paru-paru, dan huruf NG.Gambar tiga jari, lampu, dan huruf R,Gambar susu, kadal, ular, dan huruf SA."
  },
  {
    "index": 630,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-11.jpg",
    "jawaban": "FENOMENA KEMARAU",
    "deskripsi": "Gambar huruf FE, angka 1 s/d 9, huruf NA, pohon cemara, dan huruf U."
  },
  {
    "index": 631,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-12.jpg",
    "jawaban": "WARGA LIBURAN",
    "deskripsi": "Gambar huruf W, air, orang menggali, dan bulan."
  },
  {
    "index": 632,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-13.jpg",
    "jawaban": "SUSU MURNI",
    "deskripsi": "Gambar sup dan sumur (dengan huruf NI)."
  },
  {
    "index": 633,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-14.jpg",
    "jawaban": "FILOSOFI PANCASILA",
    "deskripsi": "Gambar roll film, huruf O, sofa, panci, dan lambang silang."
  },
  {
    "index": 634,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-15.jpg",
    "jawaban": "KEMAS KERIPIK",
    "deskripsi": "Gambar huruf KE, masker dan itik."
  },
  {
    "index": 635,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-16.jpg",
    "jawaban": "TANAH SUBUR",
    "deskripsi": "Gambar panah dan ubur-ubur (dengan huruf S)."
  },
  {
    "index": 636,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-17.jpg",
    "jawaban": "TIGA TON",
    "deskripsi": "Gambar 3 tulisan TON."
  },
  {
    "index": 637,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-18.jpg",
    "jawaban": "HUJAN METEOR",
    "deskripsi": "Gambar hujan, pete, dan bor."
  },
  {
    "index": 638,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-19.jpg",
    "jawaban": "KOTA NYAMAN",
    "deskripsi": "Gambar kol, tanda tanya, dan ban."
  },
  {
    "index": 639,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-32-nomor-20.jpg",
    "jawaban": "DELAPAN PETUGAS SELAMAT DARI BANGUNAN ROBOH",
    "deskripsi": "Gambar huruf DE, lapar, peti, dan gas elpiji.Gambar menyelam, huruf AT, dan dasi.Gambar bangun tidur, huruf AN, dan robot."
  },
  {
    "index": 640,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-1.jpg",
    "jawaban": "PEMANDU LATIHAN",
    "deskripsi": "Gambar pesan, huruf D, ulat, dan ikan."
  },
  {
    "index": 641,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-2.jpg",
    "jawaban": "KOKI RESTORAN",
    "deskripsi": "Gambar kok, huruf I, sepeda mengerem, dan koran."
  },
  {
    "index": 642,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-3.jpg",
    "jawaban": "PEMIMPIN AROGAN",
    "deskripsi": "Gambar huruf PE, mimpi, huruf N, huruf A, rok, dan gas elpiji."
  },
  {
    "index": 643,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-4.jpg",
    "jawaban": "ANTI MUNDUR",
    "deskripsi": "Gambar lambang &, timun, dan duri."
  },
  {
    "index": 644,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-5.jpg",
    "jawaban": "WAKTU LUANG",
    "deskripsi": "Gambar jam, huruf L, dan uang."
  },
  {
    "index": 645,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-6.jpg",
    "jawaban": "INVESTASI RUMAH",
    "deskripsi": "Gambar huruf IN, vas, tas (dengan huruf I), dan rumah."
  },
  {
    "index": 646,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-7.jpg",
    "jawaban": "REGULASI KESEHATAN",
    "deskripsi": "Gambar huruf RE, gula, huruf SI, keset, bata, dan huruf N."
  },
  {
    "index": 647,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-8.jpg",
    "jawaban": "BEBERAPA TAHUN",
    "deskripsi": "Gambar bebek, raja, tahu, dan huruf N."
  },
  {
    "index": 648,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-9.jpg",
    "jawaban": "KELOPAK PISANG",
    "deskripsi": "Gambar huruf KE, lobak dan pisang."
  },
  {
    "index": 649,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-10.jpg",
    "jawaban": "KETAMPANAN WAJAH OTOMATIS NAIK KETIKA BERIBADAH",
    "deskripsi": "Gambar kera, huruf M, anak panah, dan wajan.Gambar huruf O, tomat, huruf IS, dan naik tangga.Gambar mengetik, huruf A, peri, dan badak."
  },
  {
    "index": 650,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-11.jpg",
    "jawaban": "MENURUTI PERINTAH",
    "deskripsi": "Gambar menu makanan, roti, per, unta, dan huruf H."
  },
  {
    "index": 651,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-12.jpg",
    "jawaban": "CAIRAN SELAPUT",
    "deskripsi": "Gambar huruf C, air, tas ransel, lampu, dan huruf T."
  },
  {
    "index": 652,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-13.jpg",
    "jawaban": "HUTANG NYAWA",
    "deskripsi": "Gambar hutan, huruf G, huruf NY, dan awan."
  },
  {
    "index": 653,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-14.jpg",
    "jawaban": "BERMAIN TANAH",
    "deskripsi": "Gambar per, huruf MA, intan, dan huruf AH."
  },
  {
    "index": 654,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-15.jpg",
    "jawaban": "SETENGAH MATANG",
    "deskripsi": "Gambar setengah (1/2), mata, dan huruf NG."
  },
  {
    "index": 655,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-16.jpg",
    "jawaban": "LEMBAGA AGAMA",
    "deskripsi": "Gambar lem, 2 naga, dan huruf MA."
  },
  {
    "index": 656,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-17.jpg",
    "jawaban": "PASANGANKU EGOIS",
    "deskripsi": "Gambar paus, tangan, kue, gol, dan huruf IS."
  },
  {
    "index": 657,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-18.jpg",
    "jawaban": "NAIK DAUN",
    "deskripsi": "Gambar naik tangga dan daun."
  },
  {
    "index": 658,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-19.jpg",
    "jawaban": "GENGSI SELANGIT",
    "deskripsi": "Gambar gong, huruf SI, selang, dan huruf IT."
  },
  {
    "index": 659,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-33-nomor-20.jpg",
    "jawaban": "KRISIS AIR BERSIH MELANDA NEGARA TETANGGA",
    "deskripsi": "Gambar keris bis, dan air.Gambar orang bersin, dan bendera Belanda.Gambar net, gula, huruf TE, dan tangga."
  },
  {
    "index": 660,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-1.jpg",
    "jawaban": "TUTUP USIA",
    "deskripsi": "Gambar kutu, huruf P, dan bendera Rusia."
  },
  {
    "index": 661,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-2.jpg",
    "jawaban": "SAKIT MATA",
    "deskripsi": "Gambar orang sakit dan mata."
  },
  {
    "index": 662,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-3.jpg",
    "jawaban": "SUARA JANTUNG",
    "deskripsi": "Gambar orang tua, raja, huruf N, dan tong."
  },
  {
    "index": 663,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-4.jpg",
    "jawaban": "TEMPERATUR UDARA",
    "deskripsi": "Gambar tempe, ratu, huruf R, huruf U, dan burung dara."
  },
  {
    "index": 664,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-5.jpg",
    "jawaban": "KALKULATOR RUSAK",
    "deskripsi": "Gambar kalkun, huruf LA, bor, rusa, dan huruf K."
  },
  {
    "index": 665,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-6.jpg",
    "jawaban": "KERANJANG KARDUS",
    "deskripsi": "Gambar keran, jangkar, dan bus."
  },
  {
    "index": 666,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-7.jpg",
    "jawaban": "GARIS KELUARGA",
    "deskripsi": "Gambar garis dan keluarga."
  },
  {
    "index": 667,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-8.jpg",
    "jawaban": "TATA BOGA",
    "deskripsi": "Gambar 2 pengeras suara (toa) dan bola."
  },
  {
    "index": 668,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-9.jpg",
    "jawaban": "MENABUNG PAHALA",
    "deskripsi": "Gambar meja, bunga, daging paha, dan orang mengelas."
  },
  {
    "index": 669,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-10.jpg",
    "jawaban": "PULUHAN PETANI PETIK DAUN TEH HIJAU",
    "deskripsi": "Gambar pulau, lambang &, dan petani.Gambar peti (dengan huruf K), dan daun.Gambar teh, hiu, dan jamu."
  },
  {
    "index": 670,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-11.jpg",
    "jawaban": "GEJALA RABUN",
    "deskripsi": "Gambar meja, huruf L, orang Arab, huruf UN."
  },
  {
    "index": 671,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-12.jpg",
    "jawaban": "CARI JODOH",
    "deskripsi": "Gambar jari, jok, dan dot."
  },
  {
    "index": 672,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-13.jpg",
    "jawaban": "BUBUR SUMSUM",
    "deskripsi": "Gambar huruf B, ubur-ubur dan dua orang sumo."
  },
  {
    "index": 673,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-14.jpg",
    "jawaban": "BURUNG KUTILANG",
    "deskripsi": "Gambar burung, kue, dan tilang."
  },
  {
    "index": 674,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-15.jpg",
    "jawaban": "RESPON BALIK",
    "deskripsi": "Gambar rel, spon, orang bali, dan huruf K."
  },
  {
    "index": 675,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-16.jpg",
    "jawaban": "NENEKMU MIMISAN",
    "deskripsi": "Gambar nenek, mumi, mie, dan ban."
  },
  {
    "index": 676,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-17.jpg",
    "jawaban": "HIDUPKU SUSAH",
    "deskripsi": "Gambar hidung, huruf PK, usus, dan huruf AH."
  },
  {
    "index": 677,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-18.jpg",
    "jawaban": "KURIKULUM PENDIDIKAN",
    "deskripsi": "Gambar kura-kura, bulu, huruf M, kendi, huruf D, dan ikan."
  },
  {
    "index": 678,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-19.jpg",
    "jawaban": "NAMAMU DISANJUNG",
    "deskripsi": "Gambar madu (dengan huruf NA), bis, dan anjing."
  },
  {
    "index": 679,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-34-nomor-20.jpg",
    "jawaban": "GELANDANGAN BERJUANG BEBAS DARI MASALAH EKONOMI",
    "deskripsi": "Gambar gelas, tangan, per, dan uang.Gambar huruf BE, gitar bass, dan orang berlari.Gambar majalah, teko, huruf NO, dan mie."
  },
  {
    "index": 680,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-1.jpg",
    "jawaban": "PETUGAS KEAMANAN",
    "deskripsi": "Gambar peta, gas, kera, dan orang makan."
  },
  {
    "index": 681,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-2.jpg",
    "jawaban": "CERITA LIBURAN",
    "deskripsi": "Gambar ceri, tali, orang buta, dan huruf N."
  },
  {
    "index": 682,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-3.jpg",
    "jawaban": "PASAR INDUK",
    "deskripsi": "Gambar pagar dan induk ayam."
  },
  {
    "index": 683,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-4.jpg",
    "jawaban": "POKOK PIKIRAN",
    "deskripsi": "Gambar pot, kok, dan orang berpikir."
  },
  {
    "index": 684,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-5.jpg",
    "jawaban": "PECAHKAN REKOR",
    "deskripsi": "Gambar botol pecah, ikan, huruf R, dan ekor."
  },
  {
    "index": 685,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-6.jpg",
    "jawaban": "ADA DUA",
    "deskripsi": "Gambar huruf A, dua dadu, dan huruf A."
  },
  {
    "index": 686,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-7.jpg",
    "jawaban": "ATUR KOORDINASI",
    "deskripsi": "Gambar catur, huruf K, obor, huruf DI, dan nasi."
  },
  {
    "index": 687,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-8.jpg",
    "jawaban": "MAKAN WAKTU",
    "deskripsi": "Gambar orang memakan jam."
  },
  {
    "index": 688,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-9.jpg",
    "jawaban": "MELAPISI KUE",
    "deskripsi": "Gambar melati, segitiga siku-siku, dan huruf E."
  },
  {
    "index": 689,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-10.jpg",
    "jawaban": "KURANG MAKAN SAYUR SEBABKAN KULIT KERIPUT",
    "deskripsi": "Gambar huruf K, udang, dan orang makan.Gambar sapu, huruf R, huruf SE, babi, dan ikan.Gambar huruf K, ulat, huruf KE, dan siput."
  },
  {
    "index": 690,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-11.jpg",
    "jawaban": "BARU SAMPAI",
    "deskripsi": "Gambar ban, rusa, huruf M, dan padi."
  },
  {
    "index": 691,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-12.jpg",
    "jawaban": "SALAM TEMPEL",
    "deskripsi": "Gambar tangan bersalaman, tempe, dan huruf L."
  },
  {
    "index": 692,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-13.jpg",
    "jawaban": "DESA WIRAUSAHA",
    "deskripsi": "Gambar huruf DE, sawi, orang haus, dan daging paha."
  },
  {
    "index": 693,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-14.jpg",
    "jawaban": "OMONG KOSONG",
    "deskripsi": "Gambar orang berbicara, kaos, dan tong."
  },
  {
    "index": 694,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-15.jpg",
    "jawaban": "KEPAKAN SAYAP",
    "deskripsi": "Gambar kepala, huruf N, dan sayap."
  },
  {
    "index": 695,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-16.jpg",
    "jawaban": "TES URINE",
    "deskripsi": "Gambar tos, duri, dan net."
  },
  {
    "index": 696,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-17.jpg",
    "jawaban": "GALANG DONASI",
    "deskripsi": "Gambar rumah gadang, donat, dan kartu sim."
  },
  {
    "index": 697,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-18.jpg",
    "jawaban": "KOLESTEROL NAIK",
    "deskripsi": "Gambar kol, huruf ES, terong, huruf L, dan naik tangga."
  },
  {
    "index": 698,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-19.jpg",
    "jawaban": "MEMINJAM PIRING",
    "deskripsi": "Gambar mumi, huruf N, jam, dan piring."
  },
  {
    "index": 699,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-35-nomor-20.jpg",
    "jawaban": "RAKYAT SETUJU HUKUMAN GANTUNG KEPADA KORUPTOR",
    "deskripsi": "Gambar rok, cat, huruf SE, dan angka 7.Gambar huruf HU, kuman, dan jantung.Gambar kue, panda, ekor, huruf UP, dan bor."
  },
  {
    "index": 700,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-1.jpg",
    "jawaban": "PIDATO BELASUNGKAWA",
    "deskripsi": "Gambar jidat, huruf O, gelas, uang, dan orang Jawa."
  },
  {
    "index": 701,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-2.jpg",
    "jawaban": "TURUT ANDIL",
    "deskripsi": "Gambar orang turun tangga, sandi, dan huruf L."
  },
  {
    "index": 702,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-3.jpg",
    "jawaban": "TENAGA SERABUTAN",
    "deskripsi": "Gambar naga, seribu, dan tang."
  },
  {
    "index": 703,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-4.jpg",
    "jawaban": "SEKEJAP SAJA",
    "deskripsi": "Gambar huruf SE, kecap dan raja."
  },
  {
    "index": 704,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-5.jpg",
    "jawaban": "PIJAT URAT",
    "deskripsi": "Gambar lambang phi, jas, dan surat."
  },
  {
    "index": 705,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-6.jpg",
    "jawaban": "JENDELA PANJANG",
    "deskripsi": "Gambar jin, angka 8, dan tang."
  },
  {
    "index": 706,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-7.jpg",
    "jawaban": "ROTI SISIR",
    "deskripsi": "Gambar roti dan sisir."
  },
  {
    "index": 707,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-8.jpg",
    "jawaban": "DAUN TALAS",
    "deskripsi": "Gambar tanda &, unta dan tukang las."
  },
  {
    "index": 708,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-9.jpg",
    "jawaban": "AKSI PANGGUNG",
    "deskripsi": "Gambar taksi, anak punk, dan gong."
  },
  {
    "index": 709,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-10.jpg",
    "jawaban": "STADION DISULAP KONTRAKTOR JADI JALAN TOL",
    "deskripsi": "Gambar huruf S, tas, pion, tisu, dan lap.Gambar koin, truk, bor, dan padi.Gambar jalan, dan gol."
  },
  {
    "index": 710,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-11.jpg",
    "jawaban": "MATA RANTAI",
    "deskripsi": "Gambar mata dan rantai."
  },
  {
    "index": 711,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-12.jpg",
    "jawaban": "PENDIRI PESANTREN",
    "deskripsi": "Gambar kendi, huruf RI, pesan, huruf T, dan sepeda mengerem."
  },
  {
    "index": 712,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-13.jpg",
    "jawaban": "BUKU FILSAFAT",
    "deskripsi": "Gambar buku, roll film, sofa, dan huruf T."
  },
  {
    "index": 713,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-14.jpg",
    "jawaban": "CIPTAKAN SEJARAH",
    "deskripsi": "Gambar lambang cinta, ikan, sel penjara, dan darah."
  },
  {
    "index": 714,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-15.jpg",
    "jawaban": "TERAPI SAUNA",
    "deskripsi": "Gambar kera, pisau, dan huruf NA."
  },
  {
    "index": 715,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-16.jpg",
    "jawaban": "DURASI LAMA",
    "deskripsi": "Gambar kura-kura, posisi duduk bersila, dan huruf MA."
  },
  {
    "index": 716,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-17.jpg",
    "jawaban": "TENDA BIRU",
    "deskripsi": "Gambar teh, dasi warna biru, dan huruf RU."
  },
  {
    "index": 717,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-18.jpg",
    "jawaban": "PESAWAT ANTARIKSA",
    "deskripsi": "Gambar pesawat, huruf AN, orang menarik, dan huruf SA."
  },
  {
    "index": 718,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-19.jpg",
    "jawaban": "MENOLAK KESEPAKATAN",
    "deskripsi": "Gambar huruf ME, angka 0, las, keset, akar, dan huruf AN."
  },
  {
    "index": 719,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-36-nomor-20.jpg",
    "jawaban": "PENJAGA GAWANG TERBAIK DUNIA ALAMI KESELEO",
    "deskripsi": "Gambar senja, goa, dan bawang.Gambar per, kain batik, dan dunia.Gambar huruf A, orang berlari, keset dan lem."
  },
  {
    "index": 720,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-1.jpg",
    "jawaban": "UTAMAKAN KELUARGA",
    "deskripsi": "Gambar orang buta, makan, dan keluarga."
  },
  {
    "index": 721,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-2.jpg",
    "jawaban": "TIANG LISTRIK",
    "deskripsi": "Gambar orang tertilang dan lambang listrik."
  },
  {
    "index": 722,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-3.jpg",
    "jawaban": "TANDA OSTEOPOROSIS",
    "deskripsi": "Gambar panda, bos, teh, obor, huruf O, dan bis."
  },
  {
    "index": 723,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-4.jpg",
    "jawaban": "SALURAN SELOKAN",
    "deskripsi": "Gambar saku, tas ransel, dan ikan."
  },
  {
    "index": 724,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-5.jpg",
    "jawaban": "PULANG MERANTAU",
    "deskripsi": "Gambar tulang, merak, dan tahu."
  },
  {
    "index": 725,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-6.jpg",
    "jawaban": "MERUSAK MORAL",
    "deskripsi": "Gambar tanda seru, saku, bor, dan rel."
  },
  {
    "index": 726,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-7.jpg",
    "jawaban": "MENANGGAPI PERTANYAAN",
    "deskripsi": "Gambar menang, api (dengan huruf G), per, tanda tanya, dan huruf AN."
  },
  {
    "index": 727,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-8.jpg",
    "jawaban": "DEBU LANTAI",
    "deskripsi": "Gambar huruf DE, bulan dan tai."
  },
  {
    "index": 728,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-9.jpg",
    "jawaban": "KAOS KAKI",
    "deskripsi": "Gambar kaos bergambar kaki."
  },
  {
    "index": 729,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-10.jpg",
    "jawaban": "MINUM SUSU SETIAP MALAM AGAR SEHAT",
    "deskripsi": "Gambar orang minum, dan susu.Gambar setir, api, dan bulan/malam.Gambar pagar, sel, dan cat."
  },
  {
    "index": 730,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-11.jpg",
    "jawaban": "INTI BUMI",
    "deskripsi": "Gambar mengintip dan bumi."
  },
  {
    "index": 731,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-12.jpg",
    "jawaban": "MATAHARI TENGGELAM",
    "deskripsi": "Gambar mata, ikan pari, tank, dan gelas."
  },
  {
    "index": 732,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-13.jpg",
    "jawaban": "SIRAM BUNGA",
    "deskripsi": "Gambar kartu sim, rambu-rambu, huruf N, dan gas."
  },
  {
    "index": 733,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-14.jpg",
    "jawaban": "PENGUASA WILAYAH",
    "deskripsi": "Gambar penyu, huruf A, sawi, huruf L, dan ayam."
  },
  {
    "index": 734,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-15.jpg",
    "jawaban": "PEPATAH JAWA",
    "deskripsi": "Gambar huruf PE yang patah, dan orang Jawa."
  },
  {
    "index": 735,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-16.jpg",
    "jawaban": "TUKAR TUNAI",
    "deskripsi": "Gambar orang tua, kartu remi, dan naik tangga."
  },
  {
    "index": 736,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-17.jpg",
    "jawaban": "BABAK TAMBAHAN",
    "deskripsi": "Gambar bebek, lambang +, dan huruf AN."
  },
  {
    "index": 737,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-18.jpg",
    "jawaban": "DITELANTARKAN SAUDARA",
    "deskripsi": "Gambar huruf DI, orang menelan, penari, ikan, satu jari, dan burung merpati/dara."
  },
  {
    "index": 738,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-19.jpg",
    "jawaban": "PANTI JOMPO",
    "deskripsi": "Gambar panci, jok, dan pot."
  },
  {
    "index": 739,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-37-nomor-20.jpg",
    "jawaban": "KACAMATA KEPALA SEKOLAH JATUH KETIKA MELOMPAT",
    "deskripsi": "Gambar kaca, mata, dan kepala.Gambar teko, las, dan orang jatuh.Gamar mengetik, huruf A, buah melon, dan cat."
  },
  {
    "index": 740,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-1.jpg",
    "jawaban": "GAJAH MENGAMUK",
    "deskripsi": "Gambar gajah, huruf ME, dan nyamuk."
  },
  {
    "index": 741,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-2.jpg",
    "jawaban": "KOPI PANAS",
    "deskripsi": "Gambar kol, pipa, huruf N, dan kartu AS."
  },
  {
    "index": 742,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-3.jpg",
    "jawaban": "SEBUAH BOTOL",
    "deskripsi": "Gambar botol dengan huruf SE dan gambar buah-buahan."
  },
  {
    "index": 743,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-4.jpg",
    "jawaban": "HURUF JEPANG",
    "deskripsi": "Gambar huruf A s/d Z, dan bendera Jepang."
  },
  {
    "index": 744,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-5.jpg",
    "jawaban": "KURANG SERIUS",
    "deskripsi": "Gambar kura-kura (dengan huruf NG), skor seri, dan bendera Amerika."
  },
  {
    "index": 745,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-6.jpg",
    "jawaban": "PETIK TOMAT",
    "deskripsi": "Gambar peti (dengan huruf K), dan tomat."
  },
  {
    "index": 746,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-7.jpg",
    "jawaban": "PUNGUT SAMPAH",
    "deskripsi": "Gambar huruf P, kotak ungu, huruf T, dan sampah."
  },
  {
    "index": 747,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-8.jpg",
    "jawaban": "PELATARAN PARKIR",
    "deskripsi": "Gambar plat kendaraan, orang Arab, dan tiang parkir."
  },
  {
    "index": 748,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-9.jpg",
    "jawaban": "PEMICU CINTA",
    "deskripsi": "Gambar peri, wanita mencuci (dengan huruf N), dan tas."
  },
  {
    "index": 749,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-10.jpg",
    "jawaban": "POSISI DUDUK BERSANDAR PADA BAGIAN SAMPING",
    "deskripsi": "Gambar huruf PO, sisir, dan duduk.Gambar per, sandal, dan panda.Gambar lambang pembagian ÷, huruf AN, jam, dan ring."
  },
  {
    "index": 750,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-11.jpg",
    "jawaban": "KOREK KUPING",
    "deskripsi": "Gambar korek api dan telinga."
  },
  {
    "index": 751,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-12.jpg",
    "jawaban": "DAGING LEMBU",
    "deskripsi": "Gambar daging dan kerja lembur."
  },
  {
    "index": 752,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-13.jpg",
    "jawaban": "JALAN PANTURA",
    "deskripsi": "Gambar jalan dan pintu (dengan huruf RA)."
  },
  {
    "index": 753,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-14.jpg",
    "jawaban": "WAJAH RUPAWAN",
    "deskripsi": "Gambar wajan, sup, dan awan."
  },
  {
    "index": 754,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-15.jpg",
    "jawaban": "KOMAT KAMIT",
    "deskripsi": "Gambar tanda koma, huruf T, mie (dengan huruf KA), dan huruf T."
  },
  {
    "index": 755,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-16.jpg",
    "jawaban": "TISU MURAH",
    "deskripsi": "Gambar bis dan sumur (dengan huruf AH)."
  },
  {
    "index": 756,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-17.jpg",
    "jawaban": "UJI NYALI",
    "deskripsi": "Gambar huruf U, jin, huruf N, dan menggali."
  },
  {
    "index": 757,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-18.jpg",
    "jawaban": "BEBAS KETAWA",
    "deskripsi": "Gambar bel, basket, dan orang Jawa."
  },
  {
    "index": 758,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-19.jpg",
    "jawaban": "SOTO BENGKULU",
    "deskripsi": "Gambar pot, obeng, dan bulu."
  },
  {
    "index": 759,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-38-nomor-20.jpg",
    "jawaban": "ANAK PEDAGANG KAKI LIMA LULUS SARJANA",
    "deskripsi": "Gambar anak, pedang, dan gong.Gambar 5 kaki.Gambar bulu, huruf S, dan sarjana."
  },
  {
    "index": 760,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-1.jpg",
    "jawaban": "MENJAGA KELANGSINGAN",
    "deskripsi": "Gambar senja, gua, huruf K, elang, singa, dan huruf N."
  },
  {
    "index": 761,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-2.jpg",
    "jawaban": "KONDISI LAPANGAN",
    "deskripsi": "Gambar konde, duduk sila, dan tangan."
  },
  {
    "index": 762,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-3.jpg",
    "jawaban": "APARATUR NEGARA",
    "deskripsi": "Gambar lapar, catur, net, dan garam."
  },
  {
    "index": 763,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-4.jpg",
    "jawaban": "ANAK EMAS",
    "deskripsi": "Gambar anak dan emas."
  },
  {
    "index": 764,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-5.jpg",
    "jawaban": "MOTOR CURIAN",
    "deskripsi": "Gambar huruf M, obor dan durian."
  },
  {
    "index": 765,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-6.jpg",
    "jawaban": "IKUTAN KUIS",
    "deskripsi": "Gambar segitiga siku-siku, tang, dan kumis."
  },
  {
    "index": 766,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-7.jpg",
    "jawaban": "DODOL NANAS",
    "deskripsi": "Gambar dua orang berdo’a, huruf L, dan nanas."
  },
  {
    "index": 767,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-8.jpg",
    "jawaban": "SIMPAN CINCIN",
    "deskripsi": "Gambar kartu sim, panci (dengan huruf N), dan bendera Cina."
  },
  {
    "index": 768,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-9.jpg",
    "jawaban": "DUA HELAI",
    "deskripsi": "Gambar dua jari, helm, dan aki."
  },
  {
    "index": 769,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-10.jpg",
    "jawaban": "CALON DOKTER BELI DAGING RENDANG PEDAS",
    "deskripsi": "Gambar balon, dan dokter.Gambar orang Bali, dan daging.Gambar menendang bola, pedang, dan huruf S."
  },
  {
    "index": 770,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-11.jpg",
    "jawaban": "CACAR AIR",
    "deskripsi": "Gambar cuaca (cerah-hujan-petir), huruf R, dan air."
  },
  {
    "index": 771,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-12.jpg",
    "jawaban": "SANGKUT PAUT",
    "deskripsi": "Gambar bangku, huruf T, dan baut."
  },
  {
    "index": 772,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-13.jpg",
    "jawaban": "PANJANG GURITA",
    "deskripsi": "Gambar ban, huruf J, anggur, dan pita."
  },
  {
    "index": 773,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-14.jpg",
    "jawaban": "TELUSURI PANTAI",
    "deskripsi": "Gambar telur, duri, dan pantai."
  },
  {
    "index": 774,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-15.jpg",
    "jawaban": "KENCING BATU",
    "deskripsi": "Gambar orang kencing, dan batu."
  },
  {
    "index": 775,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-16.jpg",
    "jawaban": "AYAM BERKOKOK",
    "deskripsi": "Gambar ayam, per, dan dua kok."
  },
  {
    "index": 776,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-17.jpg",
    "jawaban": "TOKO PIRING",
    "deskripsi": "Gambar tos, kopi, dan ring."
  },
  {
    "index": 777,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-18.jpg",
    "jawaban": "JANGKAUAN SINYAL",
    "deskripsi": "Gambar jangkar, uang, dan sinyal."
  },
  {
    "index": 778,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-19.jpg",
    "jawaban": "NENEKKU PINGSAN",
    "deskripsi": "Gambar nenek, kuping, dan lambang &."
  },
  {
    "index": 779,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-39-nomor-20.jpg",
    "jawaban": "SEORANG GURU KESULITAN BACA TULISAN SISWANYA",
    "deskripsi": "Gambar huruf SE, koran, huruf G, dan guru.Gambar keju, pita, huruf N, dan bata.Gambar huruf TU, lipan, bus, dan tanda tanya."
  },
  {
    "index": 780,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-1.jpg",
    "jawaban": "KERISAUAN JIWA",
    "deskripsi": "Gambar keris, huruf A, uang, jin, dan huruf WA."
  },
  {
    "index": 781,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-2.jpg",
    "jawaban": "BUAH NAGA",
    "deskripsi": "Gambar buah dan naga."
  },
  {
    "index": 782,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-3.jpg",
    "jawaban": "SERTIFIKAT PALSU",
    "deskripsi": "Gambar tanda seru, huruf TI, sikat gigi, palu, dan sup."
  },
  {
    "index": 783,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-4.jpg",
    "jawaban": "RUANG KACA",
    "deskripsi": "Gambar angka dan huruf RU, CA."
  },
  {
    "index": 784,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-5.jpg",
    "jawaban": "TEGANYA DIRIMU",
    "deskripsi": "Gambar teh, tanda tanya, duri, dan huruf MU."
  },
  {
    "index": 785,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-6.jpg",
    "jawaban": "PENYEBAB FRUSTASI",
    "deskripsi": "Gambar penyu, babi, huruf F, rusa, dan tali."
  },
  {
    "index": 786,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-7.jpg",
    "jawaban": "PANGKALAN UDARA",
    "deskripsi": "Gambar punk, jalan, kuda, dan huruf RA."
  },
  {
    "index": 787,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-8.jpg",
    "jawaban": "DANA NASIONAL",
    "deskripsi": "Gambar lambang &, nanas, pion catur, dan huruf AL."
  },
  {
    "index": 788,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-9.jpg",
    "jawaban": "SELAI ROTI",
    "deskripsi": "Gambar sel, tai, dan roti."
  },
  {
    "index": 789,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-10.jpg",
    "jawaban": "PETI BERISI EMAS JADI REBUTAN PRAJURIT",
    "deskripsi": "Gambar peti, buah ceri, dan kartu sim.Gambar emas, padi, sepeda mengerem, orang buta, dan huruf N.Gambar lambang pria, duri, dan huruf T."
  },
  {
    "index": 790,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-11.jpg",
    "jawaban": "MONSTER RAKSASA",
    "deskripsi": "Gambar tugu monas, per, rok, jas, dan huruf A."
  },
  {
    "index": 791,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-12.jpg",
    "jawaban": "KUTU BUKU",
    "deskripsi": "Gambar kutu dan buku."
  },
  {
    "index": 792,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-13.jpg",
    "jawaban": "KERJA RINGAN",
    "deskripsi": "Gambar kera, jari tangan, huruf N, dan gas elpiji."
  },
  {
    "index": 793,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-14.jpg",
    "jawaban": "KURANG GIGIH",
    "deskripsi": "Gambar jurang dan gigi yang membentuk huruf H."
  },
  {
    "index": 794,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-15.jpg",
    "jawaban": "PELUKIS AMATIR",
    "deskripsi": "Gambar berpelukan, huruf IS, huruf A, makam, dan huruf R."
  },
  {
    "index": 795,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-16.jpg",
    "jawaban": "SELURUH MASYARAKAT",
    "deskripsi": "Gambar peluru, huruf H, huruf MA, syal, huruf R, dan akar."
  },
  {
    "index": 796,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-17.jpg",
    "jawaban": "KUDA UNGGULAN",
    "deskripsi": "Gambar huruf KU, daun (dengan huruf G) dan gula (dengan huruf N)."
  },
  {
    "index": 797,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-18.jpg",
    "jawaban": "MERASA TEGAR",
    "deskripsi": "Gambar merak, sate, dan garpu."
  },
  {
    "index": 798,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-19.jpg",
    "jawaban": "MENGAIS SAMPAH",
    "deskripsi": "Gambar huruf MEN, garis dan sampah."
  },
  {
    "index": 799,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-40-nomor-20.jpg",
    "jawaban": "PELAUT TANGGUH BERANGKAT MENUJU ARAH TENGGARA",
    "deskripsi": "Gambar pel, laut, huruf T, dan anggur.Gambar beruang, cat, menu makanan, dan huruf JU.Gambar arah, tank, dan garam."
  },
  {
    "index": 800,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-1.jpg",
    "jawaban": "MAKANAN EROPA",
    "deskripsi": "Gambar makan, huruf ANE, dan roda."
  },
  {
    "index": 801,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-2.jpg",
    "jawaban": "JARUM PUTIH",
    "deskripsi": "Gambar jas, rumput, dan huruf IH."
  },
  {
    "index": 802,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-3.jpg",
    "jawaban": "HURUF BALOK",
    "deskripsi": "Gambar huruf ABCDE dan bangun balok."
  },
  {
    "index": 803,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-4.jpg",
    "jawaban": "FOTO PIKNIK",
    "deskripsi": "Gambar huruf FO, topi (dengan huruf K) dan naik tangga."
  },
  {
    "index": 804,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-5.jpg",
    "jawaban": "TIPE SANDAL",
    "deskripsi": "Gambar hati, pesan, dan lambang &."
  },
  {
    "index": 805,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-6.jpg",
    "jawaban": "ANATOMI TUBUH",
    "deskripsi": "Gambar anak, bom, dan mie.Gambar huruf T, dan ubur-ubur."
  },
  {
    "index": 806,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-7.jpg",
    "jawaban": "HAKIKAT MANUSIA",
    "deskripsi": "Gambar hakim, sikat, madu, dan duduk sila."
  },
  {
    "index": 807,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-8.jpg",
    "jawaban": "BATU GINJAL",
    "deskripsi": "Gambar batu dan ginjal."
  },
  {
    "index": 808,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-9.jpg",
    "jawaban": "ASAS DEMOKRASI",
    "deskripsi": "Gambar dua kartu AS, bemo, huruf K, dan dasi."
  },
  {
    "index": 809,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-10.jpg",
    "jawaban": "BUPATI BELAJAR BAHASA JEPANG DARI KAMUS",
    "deskripsi": "Gambar ibu, ikan pari, dan belajar.Gambar batu bata, huruf SA, dan bendera Jepang.Gambar tari, jamu, dan huruf S."
  },
  {
    "index": 810,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-11.jpg",
    "jawaban": "UMUR PANJANG",
    "deskripsi": "Gambar sumur, orang memanjat, dan huruf NG."
  },
  {
    "index": 811,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-12.jpg",
    "jawaban": "PENABUH GENDANG",
    "deskripsi": "Gambar pena, buah-buahan, dan gendang."
  },
  {
    "index": 812,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-13.jpg",
    "jawaban": "PUING BANGUNAN",
    "deskripsi": "Gambar pusing, dan bangun tidur (dengan huruf AN)."
  },
  {
    "index": 813,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-14.jpg",
    "jawaban": "TERMOMETER DIGITAL",
    "deskripsi": "Gambar termos, pete, huruf R, huruf DI, dan gitar."
  },
  {
    "index": 814,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-15.jpg",
    "jawaban": "PASANG KARPET",
    "deskripsi": "Gambar paus, sangkar, dan pel."
  },
  {
    "index": 815,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-16.jpg",
    "jawaban": "BUKA YAYASAN",
    "deskripsi": "Gambar ibu, orang kaya, huruf Y, dan asap."
  },
  {
    "index": 816,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-17.jpg",
    "jawaban": "JAHITAN OPERASI",
    "deskripsi": "Gambar jam, hutan, huruf O, peras, dan huruf I."
  },
  {
    "index": 817,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-18.jpg",
    "jawaban": "KUALITAS SABLON",
    "deskripsi": "Gambar orang kuat, pita (dengan huruf S), huruf SA dan balon."
  },
  {
    "index": 818,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-19.jpg",
    "jawaban": "TETAP BUGAR",
    "deskripsi": "Gambar peta (dengan huruf P), bunga, dan huruf R."
  },
  {
    "index": 819,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-41-nomor-20.jpg",
    "jawaban": "LIMA ANGGOTA PELATIHAN OTOMOTIF SEDANG ISTIRAHAT",
    "deskripsi": "Gambar dua jari + tiga jari, tang, dot, dan huruf A.Gambar bunga melati, hantu, pot, huruf O, roti, dan huruf R.Gambar mobil sedan (dengan huruf G), huruf IS, tiga jari, dan hati."
  },
  {
    "index": 820,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-1.jpg",
    "jawaban": "PAWANG HUJAN",
    "deskripsi": "Gambar bawang dan awan hujan."
  },
  {
    "index": 821,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-2.jpg",
    "jawaban": "MEJA RIAS",
    "deskripsi": "Gambar huruf ME, jari, dan gitar bass."
  },
  {
    "index": 822,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-3.jpg",
    "jawaban": "ETALASE MINIMARKET",
    "deskripsi": "Gambar peta, tukang las, huruf E, mie, angka 5, dan raket."
  },
  {
    "index": 823,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-4.jpg",
    "jawaban": "SUARA TUPAI",
    "deskripsi": "Gambar suap, ratu, dan padi."
  },
  {
    "index": 824,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-5.jpg",
    "jawaban": "GOLONGAN DARAH",
    "deskripsi": "Gambar gol, tong, huruf AN, burung dara, dan huruf H."
  },
  {
    "index": 825,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-6.jpg",
    "jawaban": "RESPON POSITIF",
    "deskripsi": "Gambar rel, spon, dan lambang +."
  },
  {
    "index": 826,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-7.jpg",
    "jawaban": "LAMPU MERAH",
    "deskripsi": "Gambar lampu merah."
  },
  {
    "index": 827,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-8.jpg",
    "jawaban": "BAYANGAN SEMU",
    "deskripsi": "Gambar layang-layang, ban, dan semut."
  },
  {
    "index": 828,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-9.jpg",
    "jawaban": "ACARA KITA",
    "deskripsi": "Gambar membaca, rakit, dan huruf A."
  },
  {
    "index": 829,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-10.jpg",
    "jawaban": "GENERASI MUDA HARUS PANTANG PUTUS ASA",
    "deskripsi": "Gambar huruf GE, per, nasi, dan kuda.Gambar paru-paru, huruf S, dan rantang.Gambar kutu, hurus S, kartu AS dan kartu A."
  },
  {
    "index": 830,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-11.jpg",
    "jawaban": "WEWENANG PENYIDIK",
    "deskripsi": "Gambar huruf WE, berenang, penyu, dan bebek/itik."
  },
  {
    "index": 831,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-12.jpg",
    "jawaban": "DALANG KERUSUHAN",
    "deskripsi": "Gambar dalang, keris, huruf U, dan hantu."
  },
  {
    "index": 832,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-13.jpg",
    "jawaban": "INDIKATOR KEMAMPUAN",
    "deskripsi": "Gambar orang India, kado, huruf R, demam, angka 2, dan huruf N."
  },
  {
    "index": 833,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-14.jpg",
    "jawaban": "PRAKARYA ORIGAMI",
    "deskripsi": "Gambar buah per, akar, huruf YA, huruf O, tiga jari, dan mie."
  },
  {
    "index": 834,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-15.jpg",
    "jawaban": "LANTAI SEMBILAN",
    "deskripsi": "Gambar rantai dan lambang IX."
  },
  {
    "index": 835,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-16.jpg",
    "jawaban": "PERIHAL TEKNIS",
    "deskripsi": "Gambar peri, halte, huruf K, dan bis."
  },
  {
    "index": 836,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-17.jpg",
    "jawaban": "MENUTUPI KELEMAHAN",
    "deskripsi": "Gambar menu makanan, topi, kol, huruf E, dan makan."
  },
  {
    "index": 837,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-18.jpg",
    "jawaban": "TOKO PERHIASAN",
    "deskripsi": "Gambar koper (dengan huruf TO), hiu, dan asap."
  },
  {
    "index": 838,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-19.jpg",
    "jawaban": "TABUNG OKSIGEN",
    "deskripsi": "Gambar tas, bunga, dan lambang O2."
  },
  {
    "index": 839,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-42-nomor-20.jpg",
    "jawaban": "WARNA KULIT BERUBAH SETELAH BERJEMUR SEHARIAN",
    "deskripsi": "Gambar kumpulan warna, huruf K, dan ulat.Gambar huruf BE, rubah, sate, dan las.Gambar per, jamur, huruf SE, jari, dan huruf AN."
  },
  {
    "index": 840,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-1.jpg",
    "jawaban": "CAIRAN EMPEDU",
    "deskripsi": "Gambar huruf C, air, huruf AN, tempe, dan dua jari."
  },
  {
    "index": 841,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-2.jpg",
    "jawaban": "PENDEKAR PEDANG",
    "deskripsi": "Gambar anak pendek (dengan huruf AR) dan pedang."
  },
  {
    "index": 842,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-3.jpg",
    "jawaban": "JAM KERJA",
    "deskripsi": "Gambar jam pergi bekerja."
  },
  {
    "index": 843,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-4.jpg",
    "jawaban": "SELAT MALAKA",
    "deskripsi": "Gambar selang, huruf T, salak, dan huruf A."
  },
  {
    "index": 844,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-5.jpg",
    "jawaban": "DEPAN DAPUR",
    "deskripsi": "Gambar huruf DE, panda dan pura."
  },
  {
    "index": 845,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-6.jpg",
    "jawaban": "SELAMA LAMANYA",
    "deskripsi": "Gambar menyelam, malam, dan tanda tanya."
  },
  {
    "index": 846,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-7.jpg",
    "jawaban": "PERILAKU INTIMIDASI",
    "deskripsi": "Gambar peri, saku, mengintip, mie, dan dasi."
  },
  {
    "index": 847,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-8.jpg",
    "jawaban": "KONEKSI INTERNET",
    "deskripsi": "Gambar korek api, huruf SI, huruf IN, per, dan net."
  },
  {
    "index": 848,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-9.jpg",
    "jawaban": "ANTI PELURU",
    "deskripsi": "Gambar ban, tai, dan peluru."
  },
  {
    "index": 849,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-10.jpg",
    "jawaban": "INFORMASI PELAYANAN RUMAH SAKIT KURANG JELAS",
    "deskripsi": "Gambar jin, bor, dan nasi.Gambar pil, ayam, huruf AN, dan rumah.Gambar sakit, jurang, dan gelas."
  },
  {
    "index": 850,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-11.jpg",
    "jawaban": "UBI OLAHAN",
    "deskripsi": "Gambar huruf U, biola dan hak sepatu."
  },
  {
    "index": 851,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-12.jpg",
    "jawaban": "KAIDAH LAPORAN",
    "deskripsi": "Gambar huruf KA, lidah, lap, dan koran."
  },
  {
    "index": 852,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-13.jpg",
    "jawaban": "BELI LINGGIS",
    "deskripsi": "Gambar bel, lilin dan gas elpiji."
  },
  {
    "index": 853,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-14.jpg",
    "jawaban": "SANGGAR TEATER",
    "deskripsi": "Gambar huruf S, anggar, teh, sate, dan huruf R."
  },
  {
    "index": 854,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-15.jpg",
    "jawaban": "MERAMPAS HARTA",
    "deskripsi": "Gambar meriam, paus, dan harga."
  },
  {
    "index": 855,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-16.jpg",
    "jawaban": "BAYAR LISTRIK",
    "deskripsi": "Gambar layar dan tanda listrik."
  },
  {
    "index": 856,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-17.jpg",
    "jawaban": "TUMPANGAN GRATIS",
    "deskripsi": "Gambar orang tua, tangan, huruf G, roti, dan huruf S."
  },
  {
    "index": 857,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-18.jpg",
    "jawaban": "KOKI PEREMPUAN",
    "deskripsi": "Gambar kol, kiper, lem, huruf P, dan uang."
  },
  {
    "index": 858,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-19.jpg",
    "jawaban": "NASI KOTAK",
    "deskripsi": "Gambar nasi dan kotak."
  },
  {
    "index": 859,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-43-nomor-20.jpg",
    "jawaban": "CARA ATASI MASALAH BUKAN MELALUI KEKERASAN",
    "deskripsi": "Gambar burung dara, huruf A, dan tas (dengan huruf I).Gambar majalah, bulan, huruf ME, palu, dan huruf I.Gambar huruf KE, peras, dan huruf AN."
  },
  {
    "index": 860,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-1.jpg",
    "jawaban": "ATRAKSI SIRKUS",
    "deskripsi": "Gambar huruf A, truk, sisir, dan tikus."
  },
  {
    "index": 861,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-2.jpg",
    "jawaban": "TERAPI PANAS",
    "deskripsi": "Gambar kera, pipa, dan jas."
  },
  {
    "index": 862,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-3.jpg",
    "jawaban": "CUCI OTAK",
    "deskripsi": "Gambar mencuci dan otak."
  },
  {
    "index": 863,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-4.jpg",
    "jawaban": "TIGA BULAN",
    "deskripsi": "Gambar 3 bulan."
  },
  {
    "index": 864,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-5.jpg",
    "jawaban": "ABAD KEJAYAAN",
    "deskripsi": "Gambar abjad ABCDEFGH, keju, ayam, dan huruf AN."
  },
  {
    "index": 865,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-6.jpg",
    "jawaban": "BASKOM PASIR",
    "deskripsi": "Gambar gitar bass, kompas, dan air."
  },
  {
    "index": 866,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-7.jpg",
    "jawaban": "KELANGKAAN AIR",
    "deskripsi": "Gambar huruf K, burung elang, huruf K, awan, dan air."
  },
  {
    "index": 867,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-8.jpg",
    "jawaban": "HUTAN PINUS",
    "deskripsi": "Gambar hutan, huruf P, dan infus."
  },
  {
    "index": 868,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-9.jpg",
    "jawaban": "BENGKEL SEPEDA",
    "deskripsi": "Gambar obeng, pel, dan sepeda."
  },
  {
    "index": 869,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-10.jpg",
    "jawaban": "TEMBOK BELAKANG GEDUNG OLAHRAGA HAMPIR AMBRUK",
    "deskripsi": "Gambar kunci gembok, orang berak, dan uang.Gambar gedung, bola, huruf H, dan naga.Gambar jam, buah pir, huruf AM, dan truk."
  },
  {
    "index": 870,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-11.jpg",
    "jawaban": "BUMBU LUMPIA",
    "deskripsi": "Gambar bom, bulu, huruf M, dan lambang pria."
  },
  {
    "index": 871,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-12.jpg",
    "jawaban": "GUBUK DERITA",
    "deskripsi": "Gambar ubur-ubur (dengan huruf G), buah ceri, dan tas."
  },
  {
    "index": 872,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-13.jpg",
    "jawaban": "PIRING KOTOR",
    "deskripsi": "Gambar buah pir, ring, huruf K, dan obor."
  },
  {
    "index": 873,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-14.jpg",
    "jawaban": "TENAGA LISTRIK",
    "deskripsi": "Gambar tenda, menggali (dengan huruf S), dan menarik."
  },
  {
    "index": 874,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-15.jpg",
    "jawaban": "KACANG PANJANG",
    "deskripsi": "Gambar kacang, huruf P, dan anjing."
  },
  {
    "index": 875,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-16.jpg",
    "jawaban": "KEASLIAN PRODUK",
    "deskripsi": "Gambar kuas, lipan, per, dan mengaduk."
  },
  {
    "index": 876,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-17.jpg",
    "jawaban": "SUSUN MAKALAH",
    "deskripsi": "Gambar susu (dengan huruf N), huruf MA, koala, dan huruf H."
  },
  {
    "index": 877,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-18.jpg",
    "jawaban": "MINUMAN SODA",
    "deskripsi": "Gambar mie, kuman, dan sofa."
  },
  {
    "index": 878,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-19.jpg",
    "jawaban": "IMUNISASI POLIO",
    "deskripsi": "Gambar timun, huruf I, sushi, huruf P, oli, dan huruf O."
  },
  {
    "index": 879,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-44-nomor-20.jpg",
    "jawaban": "PRAMUGARI DANDAN MENOR KETIKA NAIK PESAWAT",
    "deskripsi": "Gambar pura, huruf M, ular, huruf I, dan dua lambang &.Gambar huruf M, ekor, mengetik, dan huruf A.Gambar naik tangga, dan pesawat."
  },
  {
    "index": 880,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-1.jpg",
    "jawaban": "RODA EMPAT",
    "deskripsi": "Gambar 4 roda."
  },
  {
    "index": 881,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-2.jpg",
    "jawaban": "KULI PANGGUL",
    "deskripsi": "Gambar huruf K, oli, dan sanggul."
  },
  {
    "index": 882,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-3.jpg",
    "jawaban": "TANTANG JAGOAN",
    "deskripsi": "Gambar rantang, jas, goa, dan huruf N."
  },
  {
    "index": 883,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-4.jpg",
    "jawaban": "ANJING PELACAK",
    "deskripsi": "Gambar anting, apel, laba-laba, dan huruf K."
  },
  {
    "index": 884,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-5.jpg",
    "jawaban": "BEBERAPA EKOR",
    "deskripsi": "Gambar bebek, raja, dan ekor."
  },
  {
    "index": 885,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-6.jpg",
    "jawaban": "KEMARIN MALAM",
    "deskripsi": "Gambar anak kembar, jin, dan malam."
  },
  {
    "index": 886,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-7.jpg",
    "jawaban": "DUNIA FANA",
    "deskripsi": "Gambar bumi dan fauna."
  },
  {
    "index": 887,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-8.jpg",
    "jawaban": "MAKANAN PALEMBANG",
    "deskripsi": "Gambar huruf MA, tangan kanan, palet, huruf M, dan buang sampah."
  },
  {
    "index": 888,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-9.jpg",
    "jawaban": "IKAN TONGKOL",
    "deskripsi": "Gambar kantong/saku (dengan huruf I) dan bunga kol."
  },
  {
    "index": 889,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-10.jpg",
    "jawaban": "PUTRI TUKANG SAMPAH DIPINANG JURAGAN SINGKONG",
    "deskripsi": "Gambar pot, huruf RI, dan tulang.Gambar sampah, huruf DI, dan pisang.Gambar jurang, ban, singa, dan tong."
  },
  {
    "index": 890,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-11.jpg",
    "jawaban": "REKENING LISTRIK",
    "deskripsi": "Gambar sepeda mengerem, orang kencing, dan tanda listrik."
  },
  {
    "index": 891,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-12.jpg",
    "jawaban": "MENANGKAP SULTAN",
    "deskripsi": "Gambar orang berenang, kapsul, dan tang."
  },
  {
    "index": 892,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-13.jpg",
    "jawaban": "UANG TUNAI",
    "deskripsi": "Gambar udang, ikan tuna, dan huruf I."
  },
  {
    "index": 893,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-14.jpg",
    "jawaban": "BIBIKU PUSING",
    "deskripsi": "Gambar bibir, kupu-kupu, dan singa."
  },
  {
    "index": 894,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-15.jpg",
    "jawaban": "TAWANAN PERANG",
    "deskripsi": "Gambar tawon, ban, dan pedang."
  },
  {
    "index": 895,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-16.jpg",
    "jawaban": "DILEMA RINDU",
    "deskripsi": "Gambar huruf DI, lemari, huruf N, dan dua jari."
  },
  {
    "index": 896,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-17.jpg",
    "jawaban": "SENDA GURAU",
    "deskripsi": "Gambar mata uang yen, dagu, dan ratu."
  },
  {
    "index": 897,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-18.jpg",
    "jawaban": "DARAH BIRU",
    "deskripsi": "Gambar darah dan warna biru."
  },
  {
    "index": 898,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-19.jpg",
    "jawaban": "BOBOT BAYI",
    "deskripsi": "Gambar 2 burung beo, huruf T, dan bayi."
  },
  {
    "index": 899,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-45-nomor-20.jpg",
    "jawaban": "ARAHAN KEPALA ORGANISASI UNTUK MENJAGA KEAMANAN",
    "deskripsi": "Gambar penunjuk arah, huruf AN, dan kepala.Gambar organ tubuh, huruf I, dasi, unta, dan huruf K.Gambar senja, gas elpiji, kera, dan orang makan."
  },
  {
    "index": 900,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-1.jpg",
    "jawaban": "CAP JEMPOL",
    "deskripsi": "Gambar huruf C, api dan jari jempol."
  },
  {
    "index": 901,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-2.jpg",
    "jawaban": "LIMA RIBU",
    "deskripsi": "Gambar lemari dan ibu."
  },
  {
    "index": 902,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-3.jpg",
    "jawaban": "MALAM PURNAMA",
    "deskripsi": "Gambar huruf MA, lampu, huruf R, dan daftar nama."
  },
  {
    "index": 903,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-4.jpg",
    "jawaban": "PERTUNJUKAN BALET",
    "deskripsi": "Gambar per, jari menunjuk, huruf AN, dan burung walet."
  },
  {
    "index": 904,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-5.jpg",
    "jawaban": "KALIAN SEMUA",
    "deskripsi": "Gambar lambang perkalian, huruf AN, dan semut."
  },
  {
    "index": 905,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-6.jpg",
    "jawaban": "PERANGKO MAHAL",
    "deskripsi": "Gambar kerang, tanda koma, dan halte."
  },
  {
    "index": 906,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-7.jpg",
    "jawaban": "SUARA BISIKAN",
    "deskripsi": "Gambar juara, bis, dan ikan."
  },
  {
    "index": 907,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-8.jpg",
    "jawaban": "SUMUR BOR",
    "deskripsi": "Gambar sumo, huruf R, dan bor."
  },
  {
    "index": 908,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-9.jpg",
    "jawaban": "BATAS WAKTU",
    "deskripsi": "Gambar bata dan jam."
  },
  {
    "index": 909,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-10.jpg",
    "jawaban": "KADANG KITA PERLU BELAJAR DARI KESALAHAN",
    "deskripsi": "Gambar kacang, dan pita.Gambar per, huruf LU, dan anak belajar.Gambar jari, kera, laba-laba, dan huruf N."
  },
  {
    "index": 910,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-11.jpg",
    "jawaban": "ANGKAT KAKI",
    "deskripsi": "Gambar mengangkat kaki."
  },
  {
    "index": 911,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-12.jpg",
    "jawaban": "JURU MASAK",
    "deskripsi": "Gambar jus, rumah, dan saku."
  },
  {
    "index": 912,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-13.jpg",
    "jawaban": "BATALKAN DUKUNGAN",
    "deskripsi": "Gambar bantal, handuk, dan bunga (dengan huruf N)."
  },
  {
    "index": 913,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-14.jpg",
    "jawaban": "MEROBOHKAN BENTENG",
    "deskripsi": "Gambar huruf ME, robot, ikan, dan banteng."
  },
  {
    "index": 914,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-15.jpg",
    "jawaban": "DESAIN MINIMALIS",
    "deskripsi": "Gambar dewa, jin, orang minum, dan alis."
  },
  {
    "index": 915,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-16.jpg",
    "jawaban": "KURSUS PIANO",
    "deskripsi": "Gambar kursi, huruf S, lambang pria, dan angka nol."
  },
  {
    "index": 916,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-17.jpg",
    "jawaban": "SASARAN TEMBAK",
    "deskripsi": "Gambar saos, orang Arab, dan tembok."
  },
  {
    "index": 917,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-18.jpg",
    "jawaban": "JUMPA PERS",
    "deskripsi": "Gambar huruf J, umpan dan per yang membentuk huruf S."
  },
  {
    "index": 918,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-19.jpg",
    "jawaban": "HUTAN GUNDUL",
    "deskripsi": "Gambar hutan dan kepala gundul."
  },
  {
    "index": 919,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-46-nomor-20.jpg",
    "jawaban": "KONDISI RUMAH KORBAN BADAI RUSAK PARAH",
    "deskripsi": "Gambar konde, huruf SI, dan rumah.Gambar ekor, ban, dan badak.Gambar rusa, huruf K, dan kayu patah."
  },
  {
    "index": 920,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-1.jpg",
    "jawaban": "GETARAN GELOMBANG",
    "deskripsi": "Gambar gitar, huruf AN, pel, ombak, dan huruf NG."
  },
  {
    "index": 921,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-2.jpg",
    "jawaban": "JALAN JALAN",
    "deskripsi": "Gambar 2 jalan."
  },
  {
    "index": 922,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-3.jpg",
    "jawaban": "JAMU GENDONG",
    "deskripsi": "Gambar jambu dan ayah menggendong putrinya."
  },
  {
    "index": 923,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-4.jpg",
    "jawaban": "KEJAR SETORAN",
    "deskripsi": "Gambar keju, huruf R, huruf SE, dan koran."
  },
  {
    "index": 924,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-5.jpg",
    "jawaban": "DRAMA TARI",
    "deskripsi": "Gambar drum, mata, dan huruf RI."
  },
  {
    "index": 925,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-6.jpg",
    "jawaban": "GEJALA CACINGAN",
    "deskripsi": "Gambar meja, lap, cacing, dan huruf AN."
  },
  {
    "index": 926,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-7.jpg",
    "jawaban": "BERMENTAL BAJA",
    "deskripsi": "Gambar permen, tali, dan kemeja/baju."
  },
  {
    "index": 927,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-8.jpg",
    "jawaban": "POKOK PERBINCANGAN",
    "deskripsi": "Gambar rokok, per, bintang, dan huruf AN."
  },
  {
    "index": 928,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-9.jpg",
    "jawaban": "JUARA DUNIA",
    "deskripsi": "Gambar bumi juara."
  },
  {
    "index": 929,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-10.jpg",
    "jawaban": "JERIH PAYAH NELAYAN MENANTANG OMBAK BESAR",
    "deskripsi": "Gambar buah ceri, huruf H, orang kaya, dan huruf H.Gambar nelayan, huruf ME, dan rantang.Gambar ombak, dan tanda centang/benar."
  },
  {
    "index": 930,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-11.jpg",
    "jawaban": "AKAR TUMBUHAN",
    "deskripsi": "Gambar huruf A, kartu remi, huruf M, dan bulan."
  },
  {
    "index": 931,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-12.jpg",
    "jawaban": "SELAMAT PETANG",
    "deskripsi": "Gambar orang menyelam, cat, dan petani."
  },
  {
    "index": 932,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-13.jpg",
    "jawaban": "DANAU DANGKAL",
    "deskripsi": "Gambar uang/dana, udang, dan bunga kol."
  },
  {
    "index": 933,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-14.jpg",
    "jawaban": "PEMILIHAN ULANG",
    "deskripsi": "Gambar peri, huruf LI, hantu, dan selang."
  },
  {
    "index": 934,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-15.jpg",
    "jawaban": "TAKUT CELAKA",
    "deskripsi": "Gambar tas, orang kuat, dan celana."
  },
  {
    "index": 935,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-16.jpg",
    "jawaban": "PAKET MISTERIUS",
    "deskripsi": "Gambar jaket, penggaris/mistar, ikan hiu, dan huruf S."
  },
  {
    "index": 936,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-17.jpg",
    "jawaban": "SUMPAH JABATAN",
    "deskripsi": "Gambar minuman tumpah, orang Jawa, dan tang."
  },
  {
    "index": 937,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-18.jpg",
    "jawaban": "BIDADARI SURGA",
    "deskripsi": "Gambar huruf BI, dada, huruf RI, dan matahari/surya."
  },
  {
    "index": 938,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-19.jpg",
    "jawaban": "KEPALA LABORATORIUM",
    "deskripsi": "Gambar bendera Nepal, lalat, bola, topi, dan huruf UM."
  },
  {
    "index": 939,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-47-nomor-20.jpg",
    "jawaban": "JAJAN TRADISIONAL JARANG DISUKAI GENERASI MUDA",
    "deskripsi": "Gambar wajan, huruf T, padi, spion, dan huruf AL.Gambar sarang, tisu, dan tai.Gambar huruf GE, memeras, huruf I, dan kuda."
  },
  {
    "index": 940,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-1.jpg",
    "jawaban": "DORONGAN TENAGA",
    "deskripsi": "Gambar orang mendorong, antena, dan huruf GA."
  },
  {
    "index": 941,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-2.jpg",
    "jawaban": "BAWANG GORENG",
    "deskripsi": "Gambar ban, bau wangi, huruf G, dan obeng."
  },
  {
    "index": 942,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-3.jpg",
    "jawaban": "SUKA BELAJAR",
    "deskripsi": "Gambar huruf SU, kabel dan akar."
  },
  {
    "index": 943,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-4.jpg",
    "jawaban": "MALU RASANYA",
    "deskripsi": "Gambar huruf MA, tangan terluka, dan tanda tanya."
  },
  {
    "index": 944,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-5.jpg",
    "jawaban": "BUKU ESTETIKA",
    "deskripsi": "Gambar ibu, kue, sate, dan romawi 3."
  },
  {
    "index": 945,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-6.jpg",
    "jawaban": "MEMBERIKAN IKAN",
    "deskripsi": "Gambar ember (dengan huruf M), dan dua ikan."
  },
  {
    "index": 946,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-7.jpg",
    "jawaban": "JAJAR GENJANG",
    "deskripsi": "Gambar dua jam dan gendang."
  },
  {
    "index": 947,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-8.jpg",
    "jawaban": "ULAR TANGGA",
    "deskripsi": "Gambar ular dan tangga."
  },
  {
    "index": 948,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-9.jpg",
    "jawaban": "KETIK SURAT",
    "deskripsi": "Gambar ketiak dan surat."
  },
  {
    "index": 949,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-10.jpg",
    "jawaban": "TIM PENCARI KHUSUS NAIK PESAWAT TEMPUR",
    "deskripsi": "Gambar kartu sim, dan pencuri.Gambar huruf KH, usus, dan naik tangga.Gambar pesawat, teh, dan pura."
  },
  {
    "index": 950,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-11.jpg",
    "jawaban": "DIJAMIN TANGGUH",
    "deskripsi": "Gambar huruf DI, jam, intan berlian, huruf G, dan goa."
  },
  {
    "index": 951,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-12.jpg",
    "jawaban": "VOKALIS WANITA",
    "deskripsi": "Gambar huruf vokal AIUEO, huruf IS, dan lambang wanita."
  },
  {
    "index": 952,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-13.jpg",
    "jawaban": "MISKIN KEJUJURAN",
    "deskripsi": "Gambar mie, ski, huruf N, keju, dan jurang."
  },
  {
    "index": 953,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-14.jpg",
    "jawaban": "DILARANG BERISIK",
    "deskripsi": "Gambar orang gila, tang, orang berbaris, dan huruf IK."
  },
  {
    "index": 954,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-15.jpg",
    "jawaban": "CEMBURU BUTA",
    "deskripsi": "Gambar orang cemburu dan orang buta."
  },
  {
    "index": 955,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-16.jpg",
    "jawaban": "KEBIJAKAN POLITIK",
    "deskripsi": "Gambar huruf KE, bir, orang makan, gol, dan itik."
  },
  {
    "index": 956,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-17.jpg",
    "jawaban": "PEREDA NYERI",
    "deskripsi": "Gambar per, roda, huruf N, dan peri."
  },
  {
    "index": 957,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-18.jpg",
    "jawaban": "AKTIVIS ANAK",
    "deskripsi": "Gambar aki, televisi (dengan huruf S), dan anak."
  },
  {
    "index": 958,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-19.jpg",
    "jawaban": "KANDANG KERBAU",
    "deskripsi": "Gambar panda, huruf NG, kera, dan bau."
  },
  {
    "index": 959,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-48-nomor-20.jpg",
    "jawaban": "BINTANG FILM LAKUKAN AKSI MELOMPATI GEDUNG",
    "deskripsi": "Gambar bintang, dan roll film.Gambar tukang las, kuman, dan taksi.Gambar buah melon, peti, dan gedung."
  },
  {
    "index": 960,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-1.jpg",
    "jawaban": "ANGKATAN BERSENJATA",
    "deskripsi": "Gambar angka 1234567890, tas, bor, senja, dan tai."
  },
  {
    "index": 961,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-2.jpg",
    "jawaban": "KORBAN CINTA",
    "deskripsi": "Gambar koran, ban, dan cinta."
  },
  {
    "index": 962,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-3.jpg",
    "jawaban": "PANAH ASMARA",
    "deskripsi": "Gambar panah, kartu AS, dan amarah."
  },
  {
    "index": 963,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-4.jpg",
    "jawaban": "HAKIM AGUNG",
    "deskripsi": "Gambar hak sepatu, huruf IM, dan jagung."
  },
  {
    "index": 964,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-5.jpg",
    "jawaban": "SERING MIMISAN",
    "deskripsi": "Gambar skor seri, huruf NG, mimpi, dan lambang &."
  },
  {
    "index": 965,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-6.jpg",
    "jawaban": "SYARAF OTAK",
    "deskripsi": "Gambar syal, rak, dan otak."
  },
  {
    "index": 966,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-7.jpg",
    "jawaban": "PENYUKA MUSIK",
    "deskripsi": "Gambar penyu, kamus, dan huruf IK."
  },
  {
    "index": 967,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-8.jpg",
    "jawaban": "SUNTIK INSULIN",
    "deskripsi": "Gambar suntik, jin, dan suling."
  },
  {
    "index": 968,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-9.jpg",
    "jawaban": "BERAT HATI",
    "deskripsi": "Gambar orang mengangkat batu dan bentuk hati."
  },
  {
    "index": 969,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-10.jpg",
    "jawaban": "SUPIR HARUS MENAATI ATURAN LALU LINTAS",
    "deskripsi": "Gambar sup, dan buah pir.Gambar bau harum, meja, dan makam.Gambar catur, huruf AN, labu, lambang cinta, dan huruf S."
  },
  {
    "index": 970,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-11.jpg",
    "jawaban": "FOTO KONSTRUKSI",
    "deskripsi": "Gambar ufo, toko, huruf NS, dan truk (dengan huruf SI)."
  },
  {
    "index": 971,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-12.jpg",
    "jawaban": "USAHA TEKSTIL",
    "deskripsi": "Gambar rusa, halte, huruf KS, dan pil."
  },
  {
    "index": 972,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-13.jpg",
    "jawaban": "BAYAR ASURANSI",
    "deskripsi": "Gambar kapal layar, kartu AS, dan surat (dengan huruf SI)."
  },
  {
    "index": 973,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-14.jpg",
    "jawaban": "BERMAIN CURANG",
    "deskripsi": "Gambar per, map, lipstik/gincu, dan uang."
  },
  {
    "index": 974,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-15.jpg",
    "jawaban": "GEROBAK RUSAK",
    "deskripsi": "Gambar per, lobak, huruf R, bendera Amerika, dan huruf K."
  },
  {
    "index": 975,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-16.jpg",
    "jawaban": "AJAKAN DISKUSI",
    "deskripsi": "Gambar raja, kendi, huruf S, dan kursi."
  },
  {
    "index": 976,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-17.jpg",
    "jawaban": "GITARIS MUDA",
    "deskripsi": "Gambar huruf GI, orang menarik dan kuda."
  },
  {
    "index": 977,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-18.jpg",
    "jawaban": "PEMBANGUNAN TERMINAL",
    "deskripsi": "Gambar lem, bangun tidur, huruf AN, cermin, dan huruf AL."
  },
  {
    "index": 978,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-19.jpg",
    "jawaban": "HIDUNG BELANG",
    "deskripsi": "Gambar hidung dan warna belang."
  },
  {
    "index": 979,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-49-nomor-20.jpg",
    "jawaban": "PENJAGA MAKAM LARI KENCANG SETELAH MELIHAT HANTU",
    "deskripsi": "Gambar pena, naga, dan malam.Gambar lari, kencing, pete, dan tukang las.Gambar huruf ME, 2+3, huruf T, dan hantu."
  },
  {
    "index": 980,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-1.jpg",
    "jawaban": "PENDANGKALAN LAUT",
    "deskripsi": "Gambar menendang bola, kalah, dan baut."
  },
  {
    "index": 981,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-2.jpg",
    "jawaban": "KELUARGA JAUH",
    "deskripsi": "Gambar kol, ular, gajah, dan huruf UH."
  },
  {
    "index": 982,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-3.jpg",
    "jawaban": "PENDUDUK SETEMPAT",
    "deskripsi": "Gambar pena, duduk, pete, dan 3+1."
  },
  {
    "index": 983,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-4.jpg",
    "jawaban": "KAPASITAS MAKSIMUM",
    "deskripsi": "Gambar kapal, pita, huruf S, taksi, dan mumi."
  },
  {
    "index": 984,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-5.jpg",
    "jawaban": "RASA PAHIT",
    "deskripsi": "Gambar alat rias, sampah, dan huruf IT."
  },
  {
    "index": 985,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-6.jpg",
    "jawaban": "MATA MATA",
    "deskripsi": "Gambar 2 mata."
  },
  {
    "index": 986,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-7.jpg",
    "jawaban": "BEDA SEJARAH",
    "deskripsi": "Gambar bel, dasi, huruf J, dan penunjuk arah."
  },
  {
    "index": 987,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-8.jpg",
    "jawaban": "BAU SUSU",
    "deskripsi": "Gambar batu, usus, dan huruf U."
  },
  {
    "index": 988,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-9.jpg",
    "jawaban": "PELANGGARAN ATURAN",
    "deskripsi": "Gambar pelangi, garam, angka satu, dan lari (dalam bahasa Inggris)."
  },
  {
    "index": 989,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-10.jpg",
    "jawaban": "DAUN JATI BERGUNA MENURUNKAN BERAT BADAN",
    "deskripsi": "Gambar daun, hati, per, dan gula.Gambar menu, huruf R, unta, dan huruf N.Gambar berak, nada, dan huruf N."
  },
  {
    "index": 990,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-11.jpg",
    "jawaban": "JAM TERBANG",
    "deskripsi": "Gambar jam bersayap."
  },
  {
    "index": 991,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-12.jpg",
    "jawaban": "BUMI PERTIWI",
    "deskripsi": "Gambar bumi, peri, dan buah kiwi."
  },
  {
    "index": 992,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-13.jpg",
    "jawaban": "NASI SISA",
    "deskripsi": "Gambar naik tangga, sisir, dan sapu."
  },
  {
    "index": 993,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-14.jpg",
    "jawaban": "KOMPLOTAN MALING",
    "deskripsi": "Gambar bom, polisi, huruf AN, dan baling-baling."
  },
  {
    "index": 994,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-15.jpg",
    "jawaban": "JURUS ANDALAN",
    "deskripsi": "Gambar kurus, ban, dan dalang."
  },
  {
    "index": 995,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-16.jpg",
    "jawaban": "TEBANG POHON",
    "deskripsi": "Gambar teh, bank, dan pohon."
  },
  {
    "index": 996,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-17.jpg",
    "jawaban": "KOPI TORAJA",
    "deskripsi": "Gambar kopi, tos, dan raja."
  },
  {
    "index": 997,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-18.jpg",
    "jawaban": "GONCANGAN HEBAT",
    "deskripsi": "Gambar gol, tangan, huruf H, dan obat."
  },
  {
    "index": 998,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-19.jpg",
    "jawaban": "TITIK PUNCAK",
    "deskripsi": "Gambar huruf T, itik, dan puncak gunung."
  },
  {
    "index": 999,
    "img": "https://www.cademedia.com/wp-content/uploads/2020/12/tebak-gambar-level-50-nomor-20.jpg",
    "jawaban": "OLAHRAGA SELANCAR BERAKSI MELAWAN GULUNGAN OMBAK",
    "deskripsi": "Gambar bola, huruf H, raja, setan, dan mobil (dalam bahasa Inggris).Gambar becak, huruf SI, pel, dan awan.Gambar guling, huruf AN, dan ombak."
  }
];

const soalMotivasi = [
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Lebih baik gagal dalam orisinalitas daripada berhasil meniru",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Keberanian adalah penolakan terhadap rasa takut, penguasaan rasa takut, bukan ketiadaan rasa takut",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan",
  "Keberanian adalah penolakan terhadap rasa takut, penguasaan rasa takut, bukan ketiadaan rasa takut",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Sukses adalah tempat persiapan dan kesempatan bertemu",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya",
  "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
  "Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
  "Jangan biarkan kemarin menyita terlalu banyak hari ini",
  "Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Jika saya punya waktu enam jam untuk menebang pohon, saya akan menghabiskan empat jam pertama mengasah kapak",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu",
  "Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
  "Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan",
  "Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat",
  "Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain",
  "Tidak ada kata terlambat untuk menjadi dirimu yang seharusnya",
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya",
  "Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan",
  "Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu",
  "Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya",
  "Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20",
  "Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu",
  "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Lakukan lebih banyak untuk dunia daripada untuk dirimu"

]

const soalQuotes = [
    {
      "author": "A. France",
      "quotes": "Lebih baik mengerti sedikit daripada salah mengerti."
    },
    {
      "author": "Abraham Lincoln",
      "quotes": "Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan."
    },
    {
      "author": "Aeschylus",
      "quotes": "Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya."
    },
    {
      "author": "Aesop",
      "quotes": "Penderitaan adalah pelajaran."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Ilmu pengetahuan tanpa agama adalah pincang."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?."
    },
    {
      "author": "Albert Enstein",
      "quotes": "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri."
    },
    {
      "author": "Alex Osborn",
      "quotes": "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri."
    },
    {
      "author": "Alexander A. Bogomoletz",
      "quotes": "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama."
    },
    {
      "author": "Alexander Solzhenitsyn",
      "quotes": "Manusia akan bahagia selama ia memilih untuk bahagia."
    },
    {
      "author": "Ali Javan",
      "quotes": "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Apabila sempurna akal seseorang, maka sedikit perkataannya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang."
    },
    {
      "author": "Anne M. Lindbergh",
      "quotes": "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus."
    },
    {
      "author": "Anonim",
      "quotes": "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup."
    },
    {
      "author": "Anonim",
      "quotes": "Penundaan adalah kuburan dimana peluang dikuburkan."
    },
    {
      "author": "Antonie De Saint",
      "quotes": "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama."
    },
    {
      "author": "Aristoteles",
      "quotes": "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan."
    },
    {
      "author": "Arnold Glasow",
      "quotes": "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja."
    },
    {
      "author": "Art Buchwald",
      "quotes": "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan."
    },
    {
      "author": "Artemus Ward",
      "quotes": "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi."
    },
    {
      "author": "Ashleigh Brilliant",
      "quotes": "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan."
    },
    {
      "author": "Augustine",
      "quotes": "Kesabaran adalah teman dari kebijaksanaan."
    },
    {
      "author": "Ayn Rand",
      "quotes": "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain."
    },
    {
      "author": "B. J. Habibie",
      "quotes": "Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan."
    },
    {
      "author": "Balzac",
      "quotes": "Kebencian seperti halnya cinta, berkobar karena hal-hal kecil."
    },
    {
      "author": "Barbara Sher",
      "quotes": "Anda tidak perlu harus berhasil pada kali pertama."
    },
    {
      "author": "Beecher",
      "quotes": "Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung."
    },
    {
      "author": "Benjamin Disraeli",
      "quotes": "Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri."
    },
    {
      "author": "Bill Clinton",
      "quotes": "Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan."
    },
    {
      "author": "Bill Cosby",
      "quotes": "Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang."
    },
    {
      "author": "Bill Gates",
      "quotes": "Konsumen yang paling tidak puas adalah sumber berharga untuk belajar."
    },
    {
      "author": "Bill Mccartney",
      "quotes": "Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi."
    },
    {
      "author": "Brian Koslow",
      "quotes": "Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki."
    },
    {
      "author": "Browning",
      "quotes": "Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan."
    },
    {
      "author": "Bruce Lee",
      "quotes": "Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin."
    },
    {
      "author": "Budha Gautama",
      "quotes": "Jangan menangis karena kegagalan cinta, sebab manusia akan meninggalkan semua yang dicintainya."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika Anda mengadili orang lain, Anda tak punya waktu untuk mencintai mereka."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika tidak ada perdamaian, hal itu disebabkan kita telah lupa bahwa kita saling membutuhkan."
    },
    {
      "author": "Bung Hatta",
      "quotes": "Kurang cerdas dapat diperbaiki dengan belajar, kurang cekatan dapat diperbaiki dengan pengalaman, kurang jujur sulit memperbaikinya."
    },
    {
      "author": "Burn",
      "quotes": "Banyak orang sukses berkat banyaknya kesulitan dan kesukaran yang mesti dihadapi."
    },
    {
      "author": "Carol Burnet",
      "quotes": "Hanya aku yang bisa merubah hidupku, tak ada seorang pun yang dapat melakukannya untukku."
    },
    {
      "author": "Charles Darwin",
      "quotes": "Yang bisa bertahan hidup bukan spesies yang paling kuat. Bukan juga spesies yang paling cerdas. Tapi spesies yang paling responsif terhadap perubahan."
    },
    {
      "author": "Charles R. Swindoll",
      "quotes": "Hidup adalah 10 persen yang terjadi kepada Anda, 90 persen bagaimana cara Anda menyikapinya."
    },
    {
      "author": "Ching Hai",
      "quotes": "Memperbaiki diri kita adalah memperbaiki dunia."
    },
    {
      "author": "Ching Hai",
      "quotes": "Jangan membeda-bedakan pekerjaan mana yang baik dan mana yang buruk. Masalah muncul jika kita membeda-bedakan dan memihak sesuatu."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita bekerja harus tanpa pamrih. Itu berlaku untuk segala pekerjaan. Pengabdian tanpa syarat adalah yang terbaik."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita harus menemukan kekuatan cinta dalam diri kita terlebih dahulu, barulah kita dapat benar-benar mencintai orang lain."
    },
    {
      "author": "Ching Hai",
      "quotes": "Carilah uang secukupnya saja untuk membiayai kehidupan, agar dapat menyisihkan waktu dan tenaga untuk melatih spiritual."
    },
    {
      "author": "Christopher Colombus",
      "quotes": "Harta benda tak membuat seseorang menjadi kaya raya, mereka hanya membuatnya lebih sibuk."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan induk dari segala kebajikan yang lain."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan juga induk dari segala kebajikan yang lain."
    },
    {
      "author": "Clarence Darrow",
      "quotes": "Kebebasan itu berasal dari manusia, tidak dari undang-undang atau institusi."
    },
    {
      "author": "Confucius",
      "quotes": "Hidup ini benar-benar sederhana, tapi kita malah bersikeras membuatnya menjadi rumit."
    },
    {
      "author": "Confucius",
      "quotes": "Kemana pun Anda pergi, pergilah dengan sepenuh hati."
    },
    {
      "author": "Confucius",
      "quotes": "Orang yang melakukan kesalahan dan tidak memperbaiki kesalahannya, melalakukan kesalahan yang lainnya."
    },
    {
      "author": "Confucius",
      "quotes": "Kebanggaan kita yang terbesar bukan karena tidak pernah gagal, tetapi bangkit kembali setiap kita jatuh."
    },
    {
      "author": "Cowper",
      "quotes": "Bunga yang tidak akan pernah layu dibumi adalah kebajikan."
    },
    {
      "author": "Cynthia Ozick",
      "quotes": "Untuk membayangkan hal yang tak dapat dibayangkan, dibutuhkan imajinasi yang luar biasa."
    },
    {
      "author": "D. J. Schwartz",
      "quotes": "Kesulitan apapun tidak tahan terhadap keuletan dan ketekunan. Tanpa keuletan, orang yang paling pintar dan paling berbakat sering gagal dalam hidupnya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Satu-satunya cara agar kita memperoleh kasih sayang, adalah jangan menuntut agar kita dicintai, tetapi mulailah memberi kasih sayang kepada orang lain tanpa mengharapkan balasan."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Bila orang yang kuatir akan kekurangannya mau mensyukuri kekayaan yang mereka miliki, mereka akan berhenti kuatir."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Usahakan membentuk suatu hubungan \"kawat\" antara otak dan hati Anda."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Senyuman akan membuat kaya jiwa seseorang yang menerimanya, tanpa membuat miskin seseorang yang memberikannya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Orang jarang sukses kecuali jika mereka senang dengan apa yang dikerjakannya."
    },
    {
      "author": "David Livingston",
      "quotes": "Saya akan pergi kemanapun selama itu arahnya ke depan."
    },
    {
      "author": "David V. Ambrose",
      "quotes": "Jika Anda punya kemauan untuk menang, Anda sudah mencapai separuh sukses. Jika Anda tidak punya kemauan untuk menang, Anda sudah mencapai separuh kegagalan."
    },
    {
      "author": "David Weinbaum",
      "quotes": "Rahasia menuju hidup kaya adalah mempunyai lebih banyak awal ketimbang akhir."
    },
    {
      "author": "Desbarolles",
      "quotes": "Kebenaran yang tidak dimengerti akan menjadi kesalahan."
    },
    {
      "author": "Descrates",
      "quotes": "Saya berpikir, karena itu saya ada."
    },
    {
      "author": "Djamaludin Abassy",
      "quotes": "Mental yang lemah lebih parah dari fisik yang lemah."
    },
    {
      "author": "Donald Kendall",
      "quotes": "Satu-satunya sukses yang diraih sebelum bekerja hanyalah ada di kamus saja."
    },
    {
      "author": "Dr. Frank Crane",
      "quotes": "Sahabat terbaik dan musuh terburuk kita adalah pikiran-pikiran kita. Pikiran dapat lebih baik dari seorang dokter atau seorang bankir atau seorang teman kepercayaan. Juga dapat lebih berbahaya dadi penjahat."
    },
    {
      "author": "Dr. Ronald Niednagel",
      "quotes": "Pergilah sejauh Anda bisa memandang, dan ketika Anda tiba disana, Anda akan memandang lebih jauh."
    },
    {
      "author": "Dr.\u00a0Johnnetta Cole",
      "quotes": "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama."
    },
    {
      "author": "Dwigt D. Esenhower",
      "quotes": "Seorang intelektual tidak akan pernah mengatakan lebih daripada apa yang diketahuinya."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang Anda bayar untuk kemajuan."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang harus Anda bayar untuk kemajuan."
    },
    {
      "author": "Edgar Alnsel",
      "quotes": "Hidup manusia penuh dengan bahaya, tetapi disitulah letak daya tariknya."
    },
    {
      "author": "Edmund Burke",
      "quotes": "Anda tidak dapat merencanakan masa yang akan datang berdasarkan masa lalu."
    },
    {
      "author": "Edward L. Curtis",
      "quotes": "Optimisme yang tidak disertai dengan usaha hanya merupakan pemikiran semata yang tidak menghasilkan buah."
    },
    {
      "author": "Edward de Bono",
      "quotes": "Jika Anda termasuk orang yang senang menunggu datangnya peluang, Anda adalah bagian dari manusia pada umumnya."
    },
    {
      "author": "Edy Murphy",
      "quotes": "Aku menghabiskan usia 30-an untuk memperbaiki segala kesalahanku di usia 20-an."
    },
    {
      "author": "Einstein",
      "quotes": "Berusaha untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna."
    },
    {
      "author": "Eisenhower",
      "quotes": "Mulai sekarang kita tidak usah membuang-buang waktu barang semenit pun untuk memikirkan orang-orang yang tidak kita sukai."
    },
    {
      "author": "Elanor Roosevelt",
      "quotes": "Ketika kita berhenti membuat kontribusi, kita mulai mati."
    },
    {
      "author": "Elbert Hubbad",
      "quotes": "Kesalahan terbesar yang dibuat manusia dalam kehidupannya adalah terus-menerus merasa takut bahwa mereka akan melakukan kesalahan."
    },
    {
      "author": "Elizabeth Browning",
      "quotes": "Janganlah menyebut orang tidak bahagia sebelum dia mati. Jangan menilai pekerjaan seseorang sebelum pekerjaannya berakhir."
    },
    {
      "author": "Emerson",
      "quotes": "Percaya pada diri sendiri adalah rahasia utama mencapai sukses."
    },
    {
      "author": "Engelbert Huperdinck",
      "quotes": "Anda harus waspada dengan kesenangan. Pastikan bahwa Anda menikmatinya dan bukan dikendalikannya."
    },
    {
      "author": "Erich Watson",
      "quotes": "Kehilangan kekayaan masih dapat dicari kembali, kehilangan kepercayaan sulit didapatkan kembali."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Bila tidak mampu menemukan kedamaian dalam diri sendiri, tak ada gunanya mencari di tempat lain."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Kita terbiasa menyembunyikan diri dari orang lain, sampai akhirnya kita sendiri tersembunyi dari diri kita."
    },
    {
      "author": "Francois Roche",
      "quotes": "Kita lebih sibuk menyakinkan orang lain bahwa kita bahagia ketimbang benar-benar merasakan bahagia itu sendiri."
    },
    {
      "author": "Frank Crane",
      "quotes": "Anda mungkin ditipu jika terlalu mempercayai, tetapi hidup Anda akan tersiksa jika tidak cukup mempercayai."
    },
    {
      "author": "Frank Giblin",
      "quotes": "Jadilah diri Anda sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri Anda sendiri?."
    },
    {
      "author": "Franklin",
      "quotes": "Bila Anda ingin dicintai, cintailah dan bersikaplah sebagai orang yang patut dicintai."
    },
    {
      "author": "Fuller",
      "quotes": "Contoh yang baik adalah nasihat terbaik."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Rumput yang paling kuat tumbuhnya terdapat di atas tanah yang paling keras."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Kamu tidak dapat mengajari seseorang apa pun, kamu hanya bisa membantunyanya menemukan apa yang ada dalam dirinya sendiri."
    },
    {
      "author": "Gandhi",
      "quotes": "Mereka yang berjiwa lemah tak akan mampu memberi seuntai maaf tulus. Pemaaf sejati hanya melekat bagi mereka yang berjiwa tangguh."
    },
    {
      "author": "Gandhi",
      "quotes": "Kebahagiaan tergantung pada apa yang dapat Anda berikan, bukan pada apa yang Anda peroleh."
    },
    {
      "author": "Gen Collin Powel",
      "quotes": "Tak ada rahasia untuk menggapai sukses. Sukses itu dapat terjadi karena persiapan, kerja keras dan mau belajar dari kegagalan."
    },
    {
      "author": "George B. Shaw",
      "quotes": "Hidup bukanlah tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri."
    },
    {
      "author": "George III",
      "quotes": "Saya lebih baik kehilangan mahkota daripada melakukan tindakan yang menurut saya memalukan."
    },
    {
      "author": "George Santayana",
      "quotes": "Tidak ada obat untuk kelahiran dan kematian, kecuali menikmati yang ada di antara keduanya."
    },
    {
      "author": "George W.",
      "quotes": "Harapan tak pernah meninggalkan kita, kita yang meninggalkan harapan."
    },
    {
      "author": "Gilbert Chesterton",
      "quotes": "Agar bisa menjadi cukup cerdas untuk meraih semua uang yang diinginkan, kita harus cukup bodoh untuk menginginkannya."
    },
    {
      "author": "Gothe",
      "quotes": "Semua pengetahuan yang kumiliki bisa orang lain peroleh, tapi hatiku hanyalah untuk diriku sendiri."
    },
    {
      "author": "H. N. Spieghel",
      "quotes": "Betapapun tingginya burung terbang, toh dia harus mencari dan mendapatkan makanannya di bumi juga."
    },
    {
      "author": "H.L Hunt",
      "quotes": "Tetapkan apa yang Anda inginkan. Putuskan Anda ingin menukarnya dengan apa. Tentukan prioritas dan laksanakan."
    },
    {
      "author": "Hal Borland",
      "quotes": "Melihat pohon, saya jadi mengerti tentang kesabaran. Memandang rumput, saya jadi menghargai ketekunan."
    },
    {
      "author": "Hamka",
      "quotes": "Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang, bukan terletak pada wajah dan pakaiannya."
    },
    {
      "author": "Hamka",
      "quotes": "Kita harus yakin bahwa apa yang ditentukan oleh Tuhan untuk kita, itulah yang terbaik."
    },
    {
      "author": "Hamka",
      "quotes": "Berani menegakkan keadilan, walaupun mengenai diri sendiri, adalah puncak segala keberanian."
    },
    {
      "author": "Hamka",
      "quotes": "Hawa nafsu membawa kesesatan dan tidak berpedoman. Sementara akal menjadi pedoman menuju keutamaan. Hawa nafsu menyuruhmu berangan-angan, tetapi akal menyuruhmu menimbang."
    },
    {
      "author": "Harriet Braiker",
      "quotes": "Berusaha berhasil untuk memotivasi dirimu, tapi berusaha untuk selalu sempurna akan membuat tertekan."
    },
    {
      "author": "Helen Keller",
      "quotes": "Kita tidak akan belajar berani dan sabar jika di dunia ini hanya ada kegembiraan."
    },
    {
      "author": "Henri Ford",
      "quotes": "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih pandai."
    },
    {
      "author": "Henry David Thoreau",
      "quotes": "Kebaikan adalah satu-satunya investasi yang tidak akan merugikan."
    },
    {
      "author": "Henry Ford",
      "quotes": "Idealis adalah orang yang membantu orang lain untuk makmur."
    },
    {
      "author": "Henry Ford",
      "quotes": "Berpikir itu adalah pekerjaan yang berat di antara segala jenis pekerjaan. Itulah sebabnya sedikit sekali orang yang senang melakukannya."
    },
    {
      "author": "Henry Ford",
      "quotes": "Persaingan yang tujuannya hanya untuk bersaing, untuk mengalahkan orang lain, tak pernah mendatangkan banyak manfaat."
    },
    {
      "author": "Henry Longfellow",
      "quotes": "Kehidupan orang-orang besar mengingatkan kita bahwa kita bisa membuat kehidupan kita luhur."
    },
    {
      "author": "Henry Thoreau",
      "quotes": "Hidupku menjadi hiburanku dan tak hentinya memberikan kejutan. Hidupku bagaikan drama dengan begitu banyak babak tanpa adegan penutup."
    },
    {
      "author": "Hubert Humprey",
      "quotes": "Apa yang Anda lihat adalah apa yang Anda capai."
    },
    {
      "author": "Imam Al-Ghazali",
      "quotes": "Kebahagiaan terletak pada kemenangan memerangi hawa nafsu dan menahan keinginan yang berlebih-lebihan."
    },
    {
      "author": "Imam Ghazali",
      "quotes": "Caci maki dari seorang penjahat merupakan kehormatan bagi seorang yang jujur."
    },
    {
      "author": "J.C.F von Schiller",
      "quotes": "Orang yang terlalu banyak merenung akan meraih sedikit."
    },
    {
      "author": "Jack Hyles",
      "quotes": "Jangan gunakan orang-orang untuk membangun pekerjaan besar, gunakan pekerjaan Anda untuk membangun orang-orang besar."
    },
    {
      "author": "Jackson Brown",
      "quotes": "Kesalahaan terbesar yang mungkin Anda buat adalah mempercayai bahwa Anda bekerja untuk orang lain."
    },
    {
      "author": "Jacques Audiberti",
      "quotes": "Kepengecutan yang paling besar adalah ketika kita membuktikan kekuatan kita kepada kelemanan orang lain."
    },
    {
      "author": "James Thurber",
      "quotes": "Jangan lihat masa lalu dengan penyesalan, jangan pula lihat masa depan dengan ketakutan, tapi lihatlah sekitar Anda dengan penuh kesadaran."
    },
    {
      "author": "Janet Erskine",
      "quotes": "Jangan menunggu keadaan yang ideal. Jangan juga menunggu peluang-peluang terbaik. Keduanya tak akan pernah datang."
    },
    {
      "author": "Jeff Goins",
      "quotes": "Kebanyakan orang sukses yang saya kenal bukan orang yang sibuk, mereka orang yang focus."
    },
    {
      "author": "Jerry West",
      "quotes": "Anda tidak dapat melakukan banyak hal di hidup Anda, jika Anda hanya bekerja di hari-hari yang Anda rasakan baik."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Tembok yang kita bangun untuk menghambat kesedihan, juga membuat kita tertutup dari kebahagiaan."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Jika Anda tidak merancang hidup Anda sendiri, kemungkinan Anda akan menjalani rencana orang lain. Apa yang mereka rencanakan untuk Anda? Tidak banyak."
    },
    {
      "author": "Jim Ryan",
      "quotes": "Motivasi adalah sesuatu yang membuat Anda memulai. Kebiasaan adalah sesuatu yang membuat Anda melanjutkan."
    },
    {
      "author": "Jimi Hendrix",
      "quotes": "Ketika kekuatan akan cinta melebihi kecintaan akan kekuasaan, maka dunia pun menemukan kedamaian."
    },
    {
      "author": "Jimmy Dean",
      "quotes": "Aku tak bisa merubah arah angin, tapi aku bisa menyesuaikan layarku untuk tetap bisa mencapai tujuanku."
    },
    {
      "author": "Joan Baez",
      "quotes": "Kita tak bisa memilih bagaimana kita meninggal atau kapan. Kita hanya bisa memutuskan bagaimana kita hidup. Sekarang."
    },
    {
      "author": "John B. Gough",
      "quotes": "Jika Anda ingin sukses, Anda harus menciptakan peluang untuk diri sendiri."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakan hasilnya nanti; bermalas-malasan sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Untuk menangani diri Anda sendiri, gunakan kepala Anda. Untuk menangani orang lain, gunakan hati Anda."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakannya nanti. Bermalas-malas sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John Craig",
      "quotes": "Tidak peduli seberapa banyak yang dapat Anda lakukan, tidak peduli seberapa menarik hati kepribadian Anda, Anda tidak dapat melangkah jauh jika Anda tidak dapat bekerja bersama orang lain."
    },
    {
      "author": "John D. Rockefeller",
      "quotes": "Orang termiskin adalah orang yang tidak mempunyai apa-apa kecuali uang."
    },
    {
      "author": "John Gardne",
      "quotes": "Jika kita melayani, maka hidup akan lebih berarti."
    },
    {
      "author": "John Gray",
      "quotes": "Sebenarnya semua kesulitan merupakan kesempatan bagi jiwa yang tumbuh."
    },
    {
      "author": "John Manson",
      "quotes": "Anda dilahirkan orisinal, jadi tidak perlu setengah mati meniru orang lain."
    },
    {
      "author": "John Maxwell",
      "quotes": "Seberapa jauh Anda gagal, tidak masalah, tetapi yang penting seberapa sering Anda bangkit kembali."
    },
    {
      "author": "John Q. Adams",
      "quotes": "Jika tindakan-tindakan Anda mengilhami orang lain untuk bermimpi lebih, belajar lebih, bekerja lebih, dan menjadi lebih baik, Anda adalah seorang pemimpin."
    },
    {
      "author": "John Ruskin",
      "quotes": "Saya yakin, ujian pertama bagi orang besar ialah kerendahan hati."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tetapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Wolfgang",
      "quotes": "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan."
    },
    {
      "author": "Joseph Addison",
      "quotes": "Rahmat sering datang kepada kita dalam bentuk kesakitan, kehilangan dan kekecewaan; tetapi kalau kita sabar, kita segera akan melihat bentuk aslinya."
    },
    {
      "author": "Julia Roberts",
      "quotes": "Cinta sejati tidak datang kepadamu, tetapi harus datang dari dalam dirimu."
    },
    {
      "author": "Junius",
      "quotes": "Integritas seseorang diukur dengan tingkah lakunya bukan profesinya."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Kita berdoa kalau kesusahan dan membutuhkan sesuatu, mestinya kita juga berdoa dalam kegembiraan besar dan saat rezeki melimpah."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Untuk memahami hati dan pikiran seseorang, jangan lihat apa yang sudah dia capai, tapi lihat apa yang dia cita-citakan."
    },
    {
      "author": "Keri Russel",
      "quotes": "Kadang kala, justru keputusan kecil yang akan mampu merubah hidup kita selamanya."
    },
    {
      "author": "Knute Rockne",
      "quotes": "Apabila perjalanan menjadi sulit, orang ulet akan berjalan terus."
    },
    {
      "author": "Kong Hu Cu",
      "quotes": "Orang yang berbudi tinggi selalu berpedoman pada keadilan dan selalu berusaha menjalankan kewajiban."
    },
    {
      "author": "Konrad Adenauer",
      "quotes": "Kita semua hidup di bawah langit yang sama, tetapi tidak semua orang punya cakrawala yang sama."
    },
    {
      "author": "Kung Fu-Tze",
      "quotes": "Ia yang bijak akan merasa malu, jika kata-katanya lebih baik daripada tindakannya."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikku."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikmu."
    },
    {
      "author": "Les Brown",
      "quotes": "Terima tanggung jawab untuk diri Anda sendiri. Sadari bahwa hanya Anda sendiri, bukan orang lain, yang bisa membuat Anda pergi ke tempat yang Anda inginkan."
    },
    {
      "author": "Louis Gittner",
      "quotes": "Meski yang kita hadapi adalah jalan buntu, namun cinta akan membangun jalan layang di atasnya."
    },
    {
      "author": "Louis Pasteur",
      "quotes": "Tahukah Anda rahasia sukses saya dalam mencapai tujuan? Cuma keuletan, tak lebih dan tak kurang."
    },
    {
      "author": "Mahatma Gandhi",
      "quotes": "Kepuasan terletak pada usaha, bukan pada hasil. Berusaha dengan keras adalah kemenangan yang hakiki."
    },
    {
      "author": "Marcel Ayme",
      "quotes": "Kerendahan hati merupakan ruang tunggu bagi kesempurnaan."
    },
    {
      "author": "Maria Sharapova",
      "quotes": "Saya belajar banyak dari kekalahan. Dan kekalahan-kekalahan itu, membuat saya semakin tabah."
    },
    {
      "author": "Mark Cuban",
      "quotes": "Buatlah usaha Anda berhasil dengan satu-satunya cara: kerja keras!."
    },
    {
      "author": "Mark Twain",
      "quotes": "Kebaikan adalah bahasa yang dapat didengar si tuli dan bisa dilihat si buta."
    },
    {
      "author": "Marsha Sinetar",
      "quotes": "Lakukan apa yang Anda senangi, uang akan mengikuti."
    },
    {
      "author": "Martin Luther King",
      "quotes": "Tak ada waktu yang tidak tepat untuk melakukan sesuatu yang benar."
    },
    {
      "author": "Mary McCarthy",
      "quotes": "Kendatipun Anda berada di jalur yang tepat, Anda akan tetap terkejar jika hanya duduk-duduk saja disana."
    },
    {
      "author": "Maxim Gorky",
      "quotes": "Kebahagiaan selalu tampak kecil saat berada dalam genggaman. Tapi coba lepaskan dan Anda akan langsung tahu, betapa besar dan berhargannya kebahagiaan."
    },
    {
      "author": "Mery Hemingway",
      "quotes": "Latih diri Anda untuk tidak khawatir. Kekhawatiran tak pernah memperbaiki apa-apa."
    },
    {
      "author": "Michael Drury",
      "quotes": "Kematangan bukanlah suatu keadaan yang dicapai dengan usia. Dia merupakan perkembangan dari cinta, belajar, membaca dan berpikir hingga menghasilkan kemampuan."
    },
    {
      "author": "Michael Pritchard",
      "quotes": "Anda berhenti tertawa bukan karena bertambah tua. Sebaliknya Anda bertambah tua justru karena berhenti tertawa."
    },
    {
      "author": "Miguel de Cervantes",
      "quotes": "Pepatah adalah kalimat singkat berdasarkan pengalaman panjang."
    },
    {
      "author": "Miguel de Unamuno",
      "quotes": "Tidak dicintai orang lain memang menyedihkan, tapi lebih menyedihkan lagi kalau tidak bisa mencintai orang lain."
    },
    {
      "author": "N. H. Casson",
      "quotes": "Kemiskinan jiwa lebih mengerikan daripada kemiskinan jasmani atau materi."
    },
    {
      "author": "Natalie Portman",
      "quotes": "Anda belum bisa dibilang kaya sampai Anda memiliki sesuatu yang tidak dapat dibeli uang."
    },
    {
      "author": "Nelson Mandela",
      "quotes": "Pendidikan adalah senjata paling ampuh dimana kau dapat menggunakannya untuk merubah dunia."
    },
    {
      "author": "Norman Peale",
      "quotes": "Campakanlah jauh-jauh pikiran murung dan kesal itu, lalu bangkitkanlah."
    },
    {
      "author": "Nunse",
      "quotes": "Bukanlah yang kuat, tetapi yang uletlah yang menjadikan mereka manusia yang besar."
    },
    {
      "author": "O. S. Marden",
      "quotes": "Kemajuan adalah hasil dari memusatkan seluruh kekuatan jiwa dan pikiran pada cita-cita yang dituju."
    },
    {
      "author": "Oliver W. Holmes",
      "quotes": "Semakin lama kita hidup, semakin kita menemukan bahwa kita mirip dengan orang lain."
    },
    {
      "author": "Oprah Winfrey",
      "quotes": "Melakukan yang terbaik pada saat ini akan menempatkan Anda ke tempat terbaik pada saat berikutnya."
    },
    {
      "author": "Oscar Wilde",
      "quotes": "Jika seseorang menyatakan kebenaran, dia yakin; cepat atau lambat; akan mendapatkannya."
    },
    {
      "author": "Pablo Picasso",
      "quotes": "Bila semangat Anda menurun, lakukanlah sesuatu. Kalau Anda telah melakukan sesuatu keadaan tidak berubah, lakukanlah sesuatu yang berbeda."
    },
    {
      "author": "Paul Galvin",
      "quotes": "Jangan takut dengan kesalahan. Kebijaksanaan biasanya lahir dari kesalahan."
    },
    {
      "author": "Paul Harvey",
      "quotes": "Saya tidak pernah melihat suatu monumen didirikan bagi orang pesimis."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Beranilah menyadari kesalahan dan mulai lagi."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Benar jadi berani."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang bertanya, bodoh dalam 5 menit. Dan orang yang tidak bertanya akan tetap bodoh untuk selamanya."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Bila saya mendengar, saya akan lupa. Setelah melihat saya bisa mengerti. Dan setelah mengerjakan, barulah saya bisa memahami."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang tersenyum selalu lebih kuat dari orang yang marah."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang memindahkan gunung memulai dengan memindahkan batu-batu kecil."
    },
    {
      "author": "Pepatah Inggris",
      "quotes": "Orang yang mencari masalah akan selalu mendapatkannya."
    },
    {
      "author": "Pepatah Inggriss",
      "quotes": "Keterampilan dan keyakinan merupakan pasukan bersenjata yang tidak dapat dikalahkan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Sebatang anak panah mudah dipatahkan, tetapi tidak demikian dengan sepuluh anak panah yang disatukan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Visi tanpa aksi adalah mimpi di siang bolong. Aksi tanpa visi adalah mimpi buruk."
    },
    {
      "author": "Pepatah Jerman",
      "quotes": "Orang yang tak pernah mencicipi pahit tak akan tahu apa itu manis."
    },
    {
      "author": "Pepatah Latin",
      "quotes": "Dengan belajar Anda bisa mengajar. Dengan mengajar, Anda belajar."
    },
    {
      "author": "Pepatah Persia",
      "quotes": "Saya menangis karena tak punya sepatu, sampai saya melihat orang tak punya kaki."
    },
    {
      "author": "Pepatah Roma",
      "quotes": "Kesengsaraan menghasilkan ketekunan. Ketekunan menghasilkan watak, dan watak menghasilkan harapan."
    },
    {
      "author": "Pepatah Skotlandia",
      "quotes": "Bila kemauan siap, kaki menjadi ringan."
    },
    {
      "author": "Pepatah Spanyol",
      "quotes": "Mengenal diri sendiri adalah awal dari perbaikan diri."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Jangan meremehkan raja yang picik, seperti halnya jangan meremehkan sungai yang kecil."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Apabila seseorang mengajarkan sesuatu, dia sendiri harus melaksanakan ajaran itu."
    },
    {
      "author": "Peter Sinclair",
      "quotes": "Kehidupan yang hebat adalah kulminasi dari pemikiran-pemikiran hebat disertai dengan tindakan-tindakan hebat."
    },
    {
      "author": "Phyllis Bottome",
      "quotes": "Ada dua cara mengatasi kesulitan, Anda mengubah kesulitan-kesulitan atau Anda mengubah diri sendiri untuk mengatasinya."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena mereka mempunyai sesuatu untuk dikatakan, orang bodoh berbicara karena mereka ingin mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena ia memiliki sesuatu untuk dikatakan. Orang bodoh berbicara karena ia atau dia harus mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Berbuat tidak adil lebih memalukan daripada menderita ketidakadilan."
    },
    {
      "author": "Plato",
      "quotes": "Siapa yang tidak bisa memimpin dirinya sendiri, tidak akan bisa memimpin orang."
    },
    {
      "author": "Plautus",
      "quotes": "Kesabaran adalah obat terbaik untuk semua masalah."
    },
    {
      "author": "Plautus",
      "quotes": "Jauh lebih mudah memulai secara baik daripada mengakhiri secara baik."
    },
    {
      "author": "Pliny The Elder",
      "quotes": "Harapan adalah tiang yang menyangga dunia."
    },
    {
      "author": "R. A. Kartini",
      "quotes": "Kemenangan gemilang tidak diperoleh dari medan pertempuran saja, tetapi sering diperoleh dari hati."
    },
    {
      "author": "R. Browning",
      "quotes": "kita jatuh untuk bangun, berhenti untuk berjalan, dan tidur untuk bangun."
    },
    {
      "author": "R. W. Shephred",
      "quotes": "Kamu harus menghadapi depresi, sama seperti kamu menghadapi seekor harimau."
    },
    {
      "author": "R.H. Grant",
      "quotes": "Jika Anda mempekerjakan orang-orang yang lebih pintar dari Anda, Anda membuktikan Anda lebih pintar dari mereka."
    },
    {
      "author": "Rabbi Schachtel",
      "quotes": "Kebahagiaan bukanlah memiliki apa yang kita inginkan, melainkan menginginkan apa yang kita miliki."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Satu ons aksi jauh lebih berharga daripada satu ton teori."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Seseorang itu sukses besar jika dia sadar, kegagalan-kegagalannya adalah persiapan untuk kemenangan-kemenangannya."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Kedamaian tidak terdapat di dunia luar, melainkan terdapat dalam jiwa manusia itu sendiri."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Percayalah kepada orang lain, dan mereka akan tulus kepada Anda. Perlakukan mereka seperti orang besar dan mereka akan memperlihatkan dirinya sebagai orang besar."
    },
    {
      "author": "Rene Descartes",
      "quotes": "Tidak cukup hanya punya otak yang baik. Yang penting adalah menggunakannya secara baik."
    },
    {
      "author": "Richard Bach",
      "quotes": "Tanyakan pada diri sendiri rahasia sukses. Dengarkan jawaban Anda, dan lakukan."
    },
    {
      "author": "Richard C. Miller",
      "quotes": "Jika rumput tetangga lebih hijau, bersyukurlah Anda masih bisa berpijak di tanah untuk melihatnya."
    },
    {
      "author": "Robert Collier",
      "quotes": "Kesempatan Anda untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan Anda pada diri sendiri."
    },
    {
      "author": "Robert F. Kennedy",
      "quotes": "Kemajuan merupakan kata-kata merdu, tetapi perubahanlah penggerakknya dan perubahan mempunyai banyak musuh."
    },
    {
      "author": "Robert Frost",
      "quotes": "Dua jalan dipisahkan pohon, dan saya mengambil jalan yang jarang ditempuh orang. Dan itulah yang membuat perubahan."
    },
    {
      "author": "Robert Frost",
      "quotes": "Alasan mengapa kecemasan membunuh lebih banyak orang dibanding kerja adalah, lebih banyak orang cemas dibanding bekerja."
    },
    {
      "author": "Robert G. Ingersoll",
      "quotes": "Sedikit orang kaya yang memiliki harta. Kebanyakan harta yang memiliki mereka."
    },
    {
      "author": "Robert Half",
      "quotes": "Ketekunan bisa membuat yang tidak mungkin jadi mungkin, membuat kemungkinan jadi kemungkinan besar, dan kemungkinan besar menjadi pasti."
    },
    {
      "author": "Robert S. Lynd",
      "quotes": "Hanya ikan yang bodoh yang bisa dua kali kena pancing dengan umpan yang sama."
    },
    {
      "author": "Robert Von Hartman",
      "quotes": "Ambisi seperti air laut, semakin banyak orang meminumnya semakin orang menjadi haus."
    },
    {
      "author": "Robinsori",
      "quotes": "Cemas dan ketakutan adalah akibat kebodohan dan keraguan."
    },
    {
      "author": "Romand Rolland",
      "quotes": "Pahlawan adalah seseorang yang melakukan apa yang mampu dia lakukan."
    },
    {
      "author": "Roosevelt",
      "quotes": "Jika Anda ingin menjadi orang besar, janganlah suka beromong besar, kerjakanlah hal-hal yang kecil dahulu."
    },
    {
      "author": "Ross Cooper",
      "quotes": "Satu-satunya cara untuk mengubah hidup kita adalah dengan mengubah pikiran kita."
    },
    {
      "author": "Ruth P. Freedman",
      "quotes": "Perubahan terjadi ketika seseorang menjadi dirinya sendiri, bukan ketika ia mencoba menjadi orang lain."
    },
    {
      "author": "Salanter Lipkin",
      "quotes": "Perbaiki diri Anda, tetapi jangan jatuhkan orang lain."
    },
    {
      "author": "Samuel Smiles",
      "quotes": "Cara tercepat untuk menuntaskan banyak hal adalah dengan menyelesaikannya satu demi satu."
    },
    {
      "author": "Satya Sai Baba",
      "quotes": "Dua hal yang harus dilupakan, kebaikan yang telah kita lakukan kepada orang lain dan kesalahan orang lain kepada kita."
    },
    {
      "author": "Scott Fitzgerald",
      "quotes": "Ingatlah, jika Anda menutup mulut sebenarnya Anda telah melakukan pilihan."
    },
    {
      "author": "Seneca",
      "quotes": "Hati manusia tidak akan pernah tenteram sebelum berdamai dengan diri sendiri."
    },
    {
      "author": "Seneca",
      "quotes": "Hidup berarti berjuang. Hidup nikmat tanpa badai topan adalah laksana laut yang mati."
    },
    {
      "author": "Shackespeare",
      "quotes": "Kesedihan hanya bisa ditanggulangi oleh orang yang mengalaminya sendiri."
    },
    {
      "author": "Shirley Briggs",
      "quotes": "Beranikan diri untuk menjadi dirimu sendiri, karena kita bisa melakukan hal itu lebih baik daripada orang lain."
    },
    {
      "author": "Soe Hok Gie",
      "quotes": "Lebih baik diasingkan daripada menyerah kepada kemunafikan."
    },
    {
      "author": "Soemantri Metodipuro",
      "quotes": "Langkah pertama untuk memilih keyakinan pada diri sendiri adalah mengenal diri kita sendiri."
    },
    {
      "author": "Sophocles",
      "quotes": "Bila seseorang kehilangan segala sumber kebahagiaan, dia tidak lagi hidup, tapi mayat yang bernafas."
    },
    {
      "author": "St. Jerome",
      "quotes": "Baik, lebih baik, terbaik. Jangan pernah berhenti sampai baik menjadi lebih baik, dan lebih baik menjadi terbaik."
    },
    {
      "author": "Stephen R. Covey",
      "quotes": "Motivasi adalah api dari dalam. Jika orang lain mencoba menyalakannya untuk Anda, kemungkinan apinya hanya menyala sebentar."
    },
    {
      "author": "Steve Jobs",
      "quotes": "Saya bangga, baik pada hal yang tidak kami lakukan maupun pada hal yang kami lakukan."
    },
    {
      "author": "Sujiwo Tejo",
      "quotes": "Cinta tak perlu pengorbanan. Pada saat kau merasa berkorban, pada saat itu cintamu mulai pudar."
    },
    {
      "author": "Sydney Harris",
      "quotes": "Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer."
    },
    {
      "author": "Theodore Rosevelt",
      "quotes": "Lakukan apa yang dapat Anda lakukan dengan apa yang Anda miliki dan tempat Anda berada."
    },
    {
      "author": "Thomas Alva Edison",
      "quotes": "Banyak kegagalan dalam ini dikarenakan orang-orang tidak menyadari betapa dekatnya mereka dengan keberhasilan saat mereka menyerah."
    },
    {
      "author": "Thomas Carlyle",
      "quotes": "Pergilah sejauh mungkin yang bisa Anda lihat dan Anda akan bisa melihat lebih jauh."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Orang yang tidak bisa memaafkan orang lain sama saja dengan orang yang memutuskan jembatan yang harus dilaluinya, karena semua orang perlu dimaafkan."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Menyaksikan adalah mempercayai, tapi merasakan adalah kebenaran."
    },
    {
      "author": "Thomas Jefferson",
      "quotes": "Dalam hal prinsip, usahakan kukuh seperti batu karang. Dalam hal selera, coba berenang mengikuti arus."
    },
    {
      "author": "Tung Desem Waringin",
      "quotes": "Setiap badai pasti berlalu dan saya akan tumbuh semakin kuat."
    },
    {
      "author": "Tyler Durden",
      "quotes": "Setelah kehilangan segalanya, barulah kita bebas melakukan apa saja."
    },
    {
      "author": "Umar bin Khattab",
      "quotes": "Raihlah ilmu dan untuk meraih ilmu belajarlah untuk tenang dan sabar."
    },
    {
      "author": "Vicosta Efran",
      "quotes": "Hiduplah seperti lilin yang menerangi orang lain. Jangan hidup seperti duri yang mencucuk diri dan menyakiti orang lain."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kesedihan adalah buah. Tuhan tak pernah membiarkannya tumbuh dicabang yang terlalu lemah untuk menanggungnya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kebahagian tertinggi dalam kehidupan adalah kepastian bahwa Anda dicintai apa adanya, atau lebih tepatnya dicintai walaupun Anda seperti diri Anda adanya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Masalahnya bukan kurangnya tenaga, tetapi kurangnya daya kemauan."
    },
    {
      "author": "Vince Lambardi",
      "quotes": "Kemenangan bukanlah segala-galanya, tetapi perjuangan untuk menang adalah segala-galanya."
    },
    {
      "author": "Virginia Wolf",
      "quotes": "Jika Anda tak bisa mengatakan hal yang benar dari diri Anda, maka Anda pun tak bisa mengatakan hal yang benar dari orang lain."
    },
    {
      "author": "W. Camden",
      "quotes": "Burung yang terbang pagi akan memperoleh cacing paling banyak."
    },
    {
      "author": "Walt Disney",
      "quotes": "Cara untuk memulai adalah berhenti berbicara dan mulai lakukan sesuatu."
    },
    {
      "author": "Walter Cronkite",
      "quotes": "Sukses akan lebih permanen jika Anda meraihnya tanpa menghancurkan prinsip-prinsip Anda."
    },
    {
      "author": "Warren Buffett",
      "quotes": "Dari dulu saya selalu yakin saya akan kaya. Saya kira saya tak pernah meragukannya, satu menit pun."
    },
    {
      "author": "Whitney Young",
      "quotes": "Lebih baik menyiapkan diri untuk sebuah peluang dan tidak mendapatkannya daripada punya peluang dan tidak menyiapkan diri."
    },
    {
      "author": "William A. W.",
      "quotes": "Satu-satunya yang bisa menghalangi kita adalah keyakinan yang salah dan sikap yang negatif."
    },
    {
      "author": "William Allen White",
      "quotes": "Saya tidak takut pada hari esok karena saya sudah melihat hari kemarin dan saya mencintai hari ini."
    },
    {
      "author": "William Arthur",
      "quotes": "Guru yang biasa-biasa, berbicara. Guru yang bagus, menerangkan. Guru yang hebat, mendemonstrasikan. Guru yang agung, memberi inspirasi."
    },
    {
      "author": "William F. Halsey",
      "quotes": "Semua masalah menjadi lebih kecil jika Anda tidak mengelaknya, tapi menghadapinya."
    },
    {
      "author": "William J. Johnston",
      "quotes": "Perubahan yang paling bermakna dalam hidup adalah perubahan sikap. Sikap yang benar akan menghasilkan tindakan yang benar."
    },
    {
      "author": "William James",
      "quotes": "Jika Anda harus membuat pilihan dan Anda tidak melakukannya, itu saja sudah pilihan."
    },
    {
      "author": "William James",
      "quotes": "Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga."
    },
    {
      "author": "William Ralph Inge",
      "quotes": "Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa."
    },
    {
      "author": "Winston Churchill",
      "quotes": "Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan."
    },
    {
      "author": "Wolfgang von Gothe",
      "quotes": "Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya."
    },
    {
      "author": "Zachary Scott",
      "quotes": "Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat."
    }
  ]

  const soalBucin = [   
  "Orang bilang jadi penyair itu susah Nggak Mereka belum jatuh cinta aja",
  "Kalau misal aku lahir seribu tahun yang lalu, aku pasti akan tetap menunggumu",
  "Kamu tau gak, kenapa kalo belajar menghafal aku selalu melihat ke atas? Soalnya kalo merem langsung kebayang wajah kamu",
  "Aneh rasanya bagaimana dengan hanya mendengar namamu saja, hatiku bisa tersayat teriris ngilu seperti luka basah yang tersiram cuka?",
  "Kalau jadi ksatria itu gampang Yang susah itu jadi pahlawan hati kamu",
  "Kalau pahlawan punya baju besi, aku nggak Soalnya aku rela tertusuk cinta kamu",
  "Ketika kamu telah membuatnya bahagia dan dia masih memilih orang lain, yakinlah Mungkin kamu belum kaya!",
  "Kamu seperti pensil warna deh, bisa mewarnai hari-hariku",
  "Kalo kamu bidadari, akan kupatahkan semua sayapmu karena aku gak rela kamu kembali ke surga",
  "Pahlawan itu kan mereka yang berjuang buat negara, berarti aku juga pahlawan dong, soalnya merjuangin masa depan kita",
  "Kamu itu kayak pahlawan ya, hebat meruntuhkan pertahanan hatiku",
  "Kalau pahlawan dikenang, kamu nggak bakalan jadi kenangan",
  "Makan apa pun aku suka asal sama kamu, termasuk makan ati",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitaris Aku nggak mau ada risiko mutusin kamu",
  "Aku itu kayak kipas angin Meski tengok kanan tengok kiri, tetap ada di tempat yang sama Tetep sama kamu, tetep mencintai kamu",
  "Kalau aku jadi wakil rakyat, pasti aku gagal Soalnya aku selalu mikirin kamu, bukan rakyat",
  "Kalau aku jadi gubernur, aku pasti langsung dimarahi rakyat Soalnya, aku nggak bisa ngomong lancar kalau kamu nggak di sampingku",
  "Aku adalah murid teladan karena setiap hari aku selalu belajar, belajar mencintaimu sepenuh hati",
  "Lihat kebunku, penuh dengan bunga Lihat matamu, hatiku berbunga-bunga",
  "Beda operator nggak apa-apa deh, asal nanti nama kamu sama aku di Kartu Keluarga yang sama",
  "Aku rela menunggu, meski kamu tak memberiku kabar, bahkan aku sadar jika ingin kamu tinggalkan",
  "Aku tidak bisa berjanji untuk menjadi yang baik, tapi aku berjanji akan selalu mendampingi kamu",
  "Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapapun",
  "Jika aku bisa menjadi segalanya, aku ingin menjadi air mata kamu Lalu aku bisa lahir di matamu, hidup di pipimu, dan mati di bibirmu",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu",
  "Entah mengapa tiap melihat kamu, aku keingat akan ujian Susah sih, tetapi tetap saja harus diperjuangkan demi mendapatkanmu",
  "Semua orang bisa bilang cinta, akan tetapi tak semua orang bisa setia",
  "Aku mencintaimu lebih dari arti kata-kata, mengungkapkan perasaan, dan memikirkan pikiran",
  "Cinta aku tuh kaya kamera, kalau udah fokus ke satu orang yang lain pasti ngeblur",
  "Aku lebih suka apel daripada anggur, soalnya aku lebih suka ngapelin kamu daripada nganggurin kamu",
  "Hidup tidak selalu mudah, tapi jauh lebih mudah dengan kamu di sisiku",
  "Hanya dengan hitungan jam kita akan bertemu lagi, tapi rasanya sangat lama bagaikan satu dekade Tak terbayang seberapa girangnya hati ini berada dalam pelukanmu",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang",
  "Aku ingin menjadi satu-satunya, bukan salah satunya",
  "Lihat kebunku, penuh dengan bunga Lihat matamu, hatiku berbunga-bunga",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal",
  "Mungkin kebahagiaan bersamamu hanya seperti mimpi, tapi biarlah mimpi itu terus menemani di setiap tidurku",
  "Semakin aku tahu bagaimana sikapmu, semakin aku lelah untuk mempertahankan hubungan ini",
  "Rindu tidak hanya muncul karena jarak yang terpisah, tapi juga karena keinginan yang tidak terwujud",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu, tapi aku yakin kalau nanti kita pasti bisa bersatu",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, tapi tetap saja di hatiku kita selalu dekat",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama Dan bahkan setelah hujan reda, rinduku masih terasa",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter, deh",
  "Makan apapun aku suka asal sama kamu, termasuk makan hati",
  "Cinta itu kaya hukuman mati Kalau nggak ditembak, ya digantung",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakau",
  "Gue paling suka ngemil karena ngemil itu enak Apalagi ngemilikin kamu sepenuhnya",
  "Dunia ini cuma milik kita berdua Yang lainnya cuma ngontrak",
  "Bagi aku, semua hari itu adalah hari Selasa Selasa di Surga bila dekat denganmu",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku",
  "Kamu itu seperti kopi yang aku seruput pagi ini Pahit, tapi bikin nagih",
  "Aku sering cemburu sama lipstikmu Dia bisa nyium kamu tiap hari, dari pagi sampai malam",
  "Di jiwa yang santuy terdapat jiwa kebucinan yang mendarah daging Kwkwk",
  "Bingung pengen marah-marah Tapi bingung pengen marah ke siapa? Terkadang diam memang jalan terbaik buat masyarakat santuy",
  "Awalnya sih diperlakukan dengan istimewa Tapi akhir-akhirnya meninggalkan rasa kecewa sadd bngst 🙁",
  "Gak butuh orang yang sayangnya cuma sementara",
  "Pengen punya temen yang bisa di tabokin",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh",
  "Aku tau teman wanitamu bukan hanya satu dan menyukaimu pun bukan hanya aku",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal",
  "Terkadang aku iri sama layangan Talinya putus saja masih dikejar kejar dan gak rela direbut orang lain",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu Namun, saat itu juga aku tahu rasanya patah hati",
  "Mengejar itu capek, tapi lebih capek lagi menunggu Menunggu kamu menyadari keberadaanku",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu",
  "Kamu sudah menjadi bagian dari rencana masa depanku, kamu pergi, aku takut masa depanku tak lagi sempurna tanpamu",
  "Ketika Tuhan memberikan satu kebahagiaan untukku, maka aku memilih memberikan kebahagiaan itu untukmu",
  "Cinta tapi tak dianggap itu seperti sakit tapi tak berdarah",
  "Aku tidak tahu apakah tempatku benar-benar di sini Aku tidak punya seorangpun untuk diajak bicara",
  "Kamu benar-benar mencintai seseorang ketika kamu tidak bisa membencinya meskipun ia telah menyakitimu",
  "Tidak peduli seberapa ingin kamu kembali ke masa lalu, di sana tetap tidak akan ada hal baru yang bisa kamu lihat",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya? Kalau aku tidak kecewa, tapi aku menunggu ucapannya",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku",
  "Rinduku seperti ranting yang tetap berdiriMeski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama",
  "Buatlah aku bisa membencimu walau hanya beberapa menit agar tidak terlalu berat untuk melupakanmu",
  "Aku terkadang iri dengan sebuah benda Tidak memiliki rasa namun selalu dibutuhkan Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan",
  "Demi cinta kita menipu diri sendiri Berusaha kuat nyatanya jatuh secara tak terhormat",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku",
  "Kamu adalah yang utama dan pertama dalam hidupku, tapi aku adalah yang kedua bagimu",
  "Jangan berhenti mencinta hanya karena pernah terluka Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan",
  "Aku punya sejuta alasan untuk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu",
  "Sebagian diriku merasa sakit, mengingat dirinya yang sangat dekat, tapi tak tersentuh",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendoakannya",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang Menetaplah bila kamu mau dan pergilah jika kamu bosan",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali",
  "Jika mencintaimu itu seperti bersekolah, tanggal merah pun aku akan hadir Karena mencintaimu tak ada kata libur bagiku",
  "Balon kalau diisi angin semakin lama semakin ringan Hatiku kalau diisi kamu semakin lama semakin ingin ke pelaminan",
  "Menahan lapar aku bisa, menahan rindu padamu aku tak mampu",
  "Cintaku ke kamu tuh kayak utang, awalnya kecil, didiemin, tau-tau gede sendiri",
  "Kamu punya spidol item ga? Buat apa? Mau warnain kalender, biar ga ada kata libur dalam mencintaimu",
  "Kalau aku jadi wakil rakyat aku pasti gagal deh Gimana mau mikirin rakyat, kalau yang selalu ada di pikiranku hanyalah kamu",
  "Aku sukanya sih apel dibandingkan anggur, makanya aku suka ngapelin kamu ketimbang nganggurin kamu",
  "Saat di sampingmu, aku seperti mentega di atas wajan panas Langsung meleleh",
  "Daripada aku daftar jadi boyband, mending aku daftar jadi boyfriend kamu aja dech",
  "Untung rinduku padamu itu tidak bayar Kalau bayar, aku sudah jadi gembel",
  "Kamu duduk di sampingku dan kurasa aku lupa bagaimana bernafas",
  "Sungguh menakjubkan bagaimana satu percakapan kecil dapat mengubah segalanya selamanya",
  "Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan",
  "Aku membutuhkanmu karena kamu membuatku tersenyum bahkan ketika kamu tidak di sisiku",
  "Aku mengagumi pikiranmu Aku jatuh cinta pada kepribadianmu Penampilanmu hanya bonus",
  "Mencintaimu dan dicintai olehmu adalah hadiah paling berharga yang pernah aku terima",
  "Aku tidak ingin menjadi favoritmu atau yang terbaik untukmu Aku ingin menjadi satu-satunya dalam hatimu dan melupakan sisanya",
  "Sulit bagiku untuk berpura-pura bahwa aku tidak menyukaimu padahal pada kenyataannya aku tergila-gila padamu",
  "Ketika aku memikirkanmu, aku akhirnya memiliki seringai bodoh di wajahku",
  "Biarkan aku membuatmu bahagia selamanya Kamu hanya perlu melakukan satu hal: jatuh cinta denganku",
  "Kolak pisang tahu Sumedang, walau jarak membentang cintaku takkan hilang",
  "Bagiku, semua hari itu Selasa Selasa indah bila di dekatmu",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw",
  "Sayang, kita putus saja, ya? Kita sudah nggak cocok buat pacaran, kita cocoknya itu menikah",
  "Kamu sebaiknya selalu pakai wifi agar hati kita selalu terkoneksi",
  "Ngemil apa yang paling enak? Ngemilikin kamu sepenuhnya",
  "Kamu adalah alasanku tetap bertahan di tanggal tua",
  "Aku rela dibilang bucin, yang penting kamu nggak ngilang",
  "Saat bertemu denganmu, jantung hatiku terasa berhenti berdetak Tapi, kenapa nggak mati-mati, ya?",
  "Aku nggak rela kalau kamu demam, tapi aku rela kalau aku demam rindu sama kamu",
  "Nggak apa-apa kok kamu gendutan, hatiku masih muat tuh buat kamu",
  "Beda operator nggak apa-apa deh, asal nanti nama kamu sama aku di Kartu Keluarga yang sama",
  "Laut kan kusebrangi, gunung pun akan kudaki hanya untukmu",
  "Tatapanmu memanglah sederhana, namun dapat mengalihkan dunia",
  "Aku nggak suka kalau kehujanan, tapi aku selalu suka kalau kehujanan cinta kamu",
  "Kamu tahu nggak, aku seperti mentega, kamu seperti wajan panas Soalnya aku meleleh tiap lihat kamu",
  "Kalau aku jadi wakil rakyat, pasti aku gagal Soalnya aku selalu mikirin kamu, bukan rakyat",
  "Aku divonis menjadi terdakwa karena telah mengambil hatimu Dan hukumannya mencintaimu seumur hidupku",
  "Lampu itu pasti cemburu sama kamu, soalnya mata kamu terang banget buat menerangi masa depanku",
  "Kalau pahlawan punya baju besi, aku nggak Soalnya aku rela tertusuk cinta kamu",
  "Lihat kebunku, penuh dengan bunga Lihat matamu, hatiku berbunga-bunga",
  "Jika rindu ibarat uang, mungkin aku sudah menjadi orang terkaya di dunia karena telah menanggung rindu padamu",
  "Kamu itu kayak pahlawan ya, hebat meruntuhkan pertahanan hatiku",
  "Kalau aku jadi gubernur, aku pasti langsung dimarahi rakyat Soalnya, aku nggak bisa ngomong lancar kalau kamu nggak di sampingku",
  "Tiap kali kamu senyum, seluruh dunia juga sedang tersenyum",
  "Tatapanmu memanglah sederhana, namun dapat mengalihkan dunia",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya",
  "Aku nggak percaya sama pandangan pertama Aku percayanya sama takdir kalau kamu bakalan jadi jodohku",
  "Aku nggak rela kalau harus jadi penikmat senja, aku maunya jadi penikmat senyummu",
  "Kamu tahu kalau sungai Danube itu terpanjang di Eropa? Sepanjang itulah cintaku sama kamu",
  "Mata kamu itu sama persis energinya sama matahari kalau digabungin sama bulan Nggak tertandingi",
  "Jika kamu adalah bunga, maka aku adalah sang lebah yang senantiasa membuatmu indah",
  "Di bumi, gerak jatuh namanya gravitasi, di hati namanya cinta selalu bersemi",
  "Aku mencintaimu seperti anak kecil yang suka es krim",
  "Cinta laksana pembodohan Hanya karena namamu saja sudah membuatku gila",
  "Aku memang pendiam, diam-diam jatuh cinta sama kamu",
  "Aku selalu mendung tiap kali kamu pergi jauh",
  "Aku tak butuh hartamu, yang aku butuhkan hanyalah senyum bahagia dan canda tawamu saja",
  "Ketemu sama kamu itu kayak mau melihat meteor Susah, tapi indah",
  "Aku bersedia menjadi badutmu setiap hari dengan bertingkah lucu untuk membuatmu selalu tertawa dan melupakan air mata",
  "Kamu itu kayak kopi Bukan pahit, tapi candu",
  "Kamu itu kayak pelangi, ya Ada sehabis mendung di hatiku",
  "Cintaku seperti jam pasir Semakin hati kian terpenuhi, maka otak akan kian tak terisi",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitaris Aku nggak mau ada risiko mutusin kamu",
  "Jangan rindu, berat, kamu nggak akan kuat Biar aku saja yang merindukanmu",
  "Kalau sabar adalah barang yang diperjualbelikan, maka penantianku akan kehadiran dirimu ini sudah membuatku menjadi gelandangan",
  "Hujan pergi ninggalin pelangi, kalau kamu pergi ninggalin air mataku",
  "Tuku lilin, entuk bonus fanta Meskipun kowe nyebelin, nanging aku tetap cinta(Beli lilin, dapat bonus fanta Msekipun kamu nyebelin, aku tetap cinta)",
  "Ora penting mikir malam mingguan, seng penting malam lamaran(Nggak penting mikir malam minggu, yang penting malam lamaran)",
  "Kacang iku gurih, tapi nek dikacangin iku perih(Kacang itu gurih, tapi kalau dikacangin itu perih)",
  "Saat dewe podo–podo adoh, siji sing kudu koe ngerti, bakal tak jogo tresno iki sampe matek(Saat jarak memisahkan kita, satu hal yang harus kamu tahu, aku akan menjaga cinta ini sampai mati)",
  "Sing wis lunga lalekno, sing durung teko entenono, sing wis ono syukurono(Yang sudah pergi lupakanlah, yang belum datang tunggulah, dan yang sudah ada syukurilah)",
  "Koe kuwi koyo bintang, sing indah didelok tapi susah untuk digapai”(Kamu itu seperti bintang, yang indah dilihat tapi susah untuk digapai)",
  "Wajahmu jan koyo wong susah Iyo, susah dilalekne(Wajahmu seperti orang susah Iya, susah untuk dilupakan)",
  "Akeh manungsa ngrasakaken tresna, tapi lalai lan ora kenal opo kui hakekate atresna(Banyak manusia merasakan cinta, namun mereka lupa tidak mengenal hakikat cinta sebenarnya)",
  "Mergo seng gaene ngekek’i cokelat bakal kalah karo seng ngewehi seperangkat alat sholat karo nyanyi lagu akad(Karena yang sering memberi cokelat akan kalah dengan yang memberi seperangkat alat solat dan nyanyi lagu akad)",
  "Rasa nyaman sing sempurna yo iku lek kowe gelem meluk aku(Rasa nyaman yang sempurna ya itu kalau kamu mau meluk aku)",
  "Iso ae aku ngelalikne koe tapi kenangane kui seng susah dilaleke(Bisa saja aku melupakan kamu tapi kenangannya itu yang susah dilupakan)",
  "Uwong duwe pacar iku kudu sabar ambek pasangane Opo meneh sing gak duwe(Orang yang punya pacar itu haruslah bersabar dengan pasangan yang dimilikinya Apalagi yang gak punya)",
  "Aku ra njaluk luweh, aku nggur njalok ojo lungo nek ati(Aku nggak minta banyak, aku hanya minta jangan pergi dari hati)",
  "Jelas aku butuh atimu, butuh awakmu, butuh perhatianmu, ora butuh duwitmu(Jelas aku butuh hatimu, butuh kamu, butuh perhatianmu, tidak butuh uangmu)",
  "Aku ora butuh GPS, nek karo kowe aku wis yakin kudu ning ngendi(Aku tidak butuh GPS, kalau sama kamu, aku sudah yakin mau ke mana)",
  "Kawula mung saderma, mobah-mosik kersaning hyang sukmo(Lakukan yang kita bisa, setelahnya serahkan kepada Tuhan)",
  "Dalan lurus akeh jeglongan, menggok sithik nemu tikungan Yen wis cinta kudu bertahan, ben gak ngrasakke kelangan(Jalan lurus banyak berlubang, belok sedikit ada tikungan Kalau sudah cinta harus bertahan, agar tak merasakan kehilangan)",
  "Konco dadi cinta Sampek kegowo turu, ngimpi ngusap pipimu Tansah nyoto keroso konco dadi tresno(Teman jadi cinta sampai terbawa tidur, mimpi mengusap pipimu Seperti kenyataan terasa seperti teman jadi cinta)",
  "Gusti iku cedhak tanpa senggolan, adoh tanpa wangenan(Tuhan itu dekat meski tubuh kita tidak dapat menyentuhnya, jauh tiada batasan)",
  "Aku pancen lelah, tapi aku janji ora bakal nyerah nggo nyanding sliramu(Aku memang lelah, tapi aku janji tidak akan menyerah untuk bersanding denganmu)",
  "Move on kuwi dudu berusaha nglalekke ya, tapi ngikhlaske lan berusaha ngentukke sing luwih apik luwih seko sing mbiyen-mbiyen(Move on itu bukan berusaha melupakan ya, tapi mengikhlaskan dan berusaha mendapatkan yang lebih baik dari sebelum-sebelumnya)",
  "Natas, nitis, netes(Dari Tuhan kita ada, bersama Tuhan kita hidup, dan bersatu dengan Tuhan kita kembali)",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane ngeblur(Cintaku padamu seperti kamera, fokus pada dirimu, yang lain ngeblur)",
  "Aku duduk cah romantis sing iso berkata kata manis, nanging aku mung bocah humoris sing iso berkata manis(Aku bukan anak romantis yang bisa berkata manis, tapi aku anak humoris yang bisa berkata manis)",
  "Kowe gelem ngajari aku ora? Ngajari ben pantes nggo kowe(Kamu mau tidak mengajari aku? Ajari aku agar pantas untukmu)",
  "Witing tresno jalaran seko sering dijak dolan rono-rono(Cinta tumbuh dari sering diajak jalan ke sana kemari)",
  "Ojo lungo, aku jek tresno(Jangan pergi, aku masih cinta)",
  "Nyenderlah neng pundak ku, Sampek koe ngrasak ke nyaman, Mergo wes kudune koyo ngunu aku nggawe nyaman atimu(Bersandarlah di pundakku sampai kau merasakan nyaman, karena sudah seharusnnya aku memang aku membuatmu nyaman)",
  "Rino wengi aku tansah kelingan sliramu(Siang malam aku selalu teringat dirimu)",
  "Seng paling tak wedeni orep neng dunio udu kelangan koe, tapi wedi nek koe kelangan kebahagiaan ne sampean(Yang paling ku takutkan dalam dunia ini bukanlah kehilanganmu, tapi aku takut kamu kehilangan kebahagiaanmu)",
  "Mak deg, mak tratap Makmu makku besanan(Bikin deg-degan, bikin tratapan Ibumu, ibuku jadi besan)",
  "Kerjo tak lakoni, duwet tak tabungi, insyaallah tahun ngarep, sholatmu tak imami(Kerja aku lakukan, uang aku tabung, Insya Allah tahun depan, salatmu aku imami)",
  "Aku tanpamu bagaikan sego kucing ilang karete Ambyar(Aku tanpamu bagai nasi kucing hilang karetnya, hancur)",
  "Gusti yen arek iku jodohku tulung dicidakaken, yen mboten joduhku tulung dijodohaken(Tuhan jika dia adalah jodohku tolong didekatkan, dan jika bukan tolong dijodohkan)",
  "Kaosku suwek kecantol lawang Gayane cuek, asline sayang(Kaosku robek tergores pintu Bergaya cuek, aslinya sayang)",
  "Rino wengi aku tansah kelingan, pengenku kowe tak sayang(Siang malam aku selalu teringat, inginku kau kucintai)",
  "Prinsipku saiki mung maju tak gentar, mundur tak ganjel, sisane serahke Gusti Allah(Prinsipku sekarang maju tak gentar, mundur diganjel, sisanya pasrahkan ke Allah)",
  "Kowe wis tak wanti wanti ojo nganti ninggal janji, ojo nganti medot taline asmoro, welasno aku sing nunggu awakmu nganti awak ku tinggal balung karo kulit(Kamu sudah aku ingatkan jangan melupakan janji, jangan sampai memutuskan ikatan cinta ini, ingatlah diriku yang menunggu dirimu sampai badanku hanya tersisa tulang dan kulit)",
  "Gusti Allah paring pitedah bisa lewat bungah, bisa lewat susah(Allah memberikan petunjuk bisa melalui bahagia, bisa melalui derita)",
  "Tresno iku kadang koyo criping telo Iso ajur nek ora ngati-ati le nggowo(Cinta terkadang seperti keripik singkong, bisa hancur jika tidak hati-hati dibawa)",
  "Mergo nyawang fotomu, dadi nyungsep neng lendutan(Gara-gara melihat fotomu, jadi nyungsep di lumpur)",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu(Aku tidak pernah tahu cinta itu apa, kecuali setelah bertemu denganmu)",
  "Cinta dudu perkoro sepiro kerepe kowe ngucapke, tapi sepiro akehe seng mbok buktike(Cinta bukan perkara seberapa sering kamu mengucapkannya, tapi seberapa banyak kamu membuktikannya)",
  "Suket teles kudanan sore, atiku ngenes mikirna kowe(Rumput basah kehujanan di sore hari, hatiku sakit karena memikirkan kamu terus)",
  "Pengenku, aku iso muter wektu Supoyo aku iso nemokne kowe lewih gasik Ben lewih dowo wektuku kanggo urip bareng sliramu(Aku berharap, aku bisa memutar waktu kembali Di mana aku bisa lebih awal menemukan dan mencintaimu lebih lama)",
  "Mbangun kromo ingkang satuhu, boten cekap bilih ngagem sepisan roso katresnan Hananging butuh pirang pirang katresnan lumeber ning pasangan uripmu siji kui(Pernikahan yang sukses tidak membutuhkan sekali jatuh cinta, tetapi berkali kali jatuh cinta pada orang yang sama)",
  "Kowe ngeluh etuk wong seng salah terus, coba kowe luwih peka sitik pas dicedakke karo uwong seng bener yo(Kamu terus mengeluh dapat orang yang salah terus, coba kamu lebih peka sedikit ketika bersama orang yang benar)",
  "Witing tresno jalaran soko kulino Witing mulyo jalaran wani rekoso(Bahwa cinta itu tumbuh lantaran ada kebiasaan, kemakmuran itu timbul karena berani bersusah dahulu)",
  "Sek penting kowe bahagia, tapi mung karo aku Ora karo wong liya(Yang penting kamu bahagia, tapi cuma sama aku Bukan sama orang lain)",
  "Kadang mripat iso salah ndelok, kuping iso salah krungu, lambe iso salah ngomong, tapi ati ora bakal iso diapusi(Terkadang mata bisa salah melihat, telinga bisa salah mendengar, mulut bisa salah mengucap, tapi hati tak bisa dibohongi dan membohongi)",
  "Semoga jodohku adalah orang yang selalu aku sebut dalam doaku tiap hari",
  "Cinta memang aneh, bahkan kau tak bisa memilih dengan siapa kau akan jatuh cinta",
  "Aku tetap mencintai kamu, meski mungkin jiwa ini tak akan pernah saling memiliki",
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya",
  "Jomblo Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku",
  "Pacar orang adalah jodoh kita yang tertunda",
  "Jomlo pasti berlalu Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal Bersabarlah",
  "Romeo rela mati untuk Juliet, Jack mati karena menyelamatkan Rose Intinya, kalau tetap mau hidup, jadilah single",
  "Aku mencari orang bukan dari kelebihannya, tapi aku mencari orang dari ketulusan hatinya",
  "Jodoh bukan sendal jepit, yang kerap tertukar Jadi teruslah berada dalam perjuangan yang semestinya",
  "Jika kamu penikmat kopi dan senja, maka izinkan aku mencintaimu tanpa henti dan jeda",
  "Tuhan baik banget ya, aku minta bahagia, dikasihnya kamu",
  "Kalau mawar itu warna merah, kalau hadirmu itu warna-warni dalam hidupku",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya Karena aku nggak mau mutusin kamu",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya",
  "Sayang tugas aku hanya mencintaimu, bukan melawan takdir",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang",
  "Aku ingin menjadi satu-satunya, bukan salah satunya",
  "Aku tidak bisa berjanji untuk menjadi yang baik, tapi aku berjanji akan selalu mendampingi kamu",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu",
  "Lihat kebunku, penuh dengan bunga Lihat matamu, hatiku berbunga-bunga",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya",
  "Kangen kamu itu sudah jadi hobi aku",
  "Kamu salah satu alasanku untuk beli paket internet, kangen terus soalnya",
  "Rindu tak akan pernah jemu, membuat candu, membuat malam semakin biru, kamu",
  "Rindu tidak hanya muncul karena jarak yang terpisah, tapi juga karena keinginan yang tidak terwujud",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu, tapi aku yakin kalau nanti kita pasti bisa bersatu",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, tapi tetap saja di hatiku kita selalu dekat",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama Dan bahkan setelah hujan reda, rinduku masih terasa",
  "Mau tanggal merah sekalipun, aku nggak akan libur untuk mikirin kamu",
  "Teringat kisah cinta di masa SMA yang begitu indah dan menyenangkan bersamamu",
  "Bolehkah aku belajar mencintaimu mengalahkan Matematika dan Fisika?",
  "Tahu gak perbedaan pensil sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta",
  "Aku gak sedih kok kalo besok hari Senin, aku sedihnya kalau gak ketemu kamu",
  "Momen cintaku tegak lurus dengan momen cintamu Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finish-nya",
  "PR-ku adalah merindukanmu Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw",
  "Kamu nggak capek? Tiap kali aku memejamkan mata muncul kamu terus",
  "Kamu tahu nggak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter, deh",
  "Makan apapun aku suka asal sama kamu, termasuk makan hati",
  "Cinta itu kaya hukuman mati Kalau nggak ditembak, ya digantung",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakau",
  "Gue paling suka ngemil karena ngemil itu enak Apalagi ngemilikin kamu sepenuhnya",
  "Dunia ini cuma milik kita berdua Yang lainnya cuma ngontrak",
  "Bagi aku, semua hari itu adalah hari Selasa Selasa di Surga bila dekat denganmu",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku",
  "Kamu itu seperti kopi yang aku seruput pagi ini Pahit, tapi bikin nagih",
  "Aku sering cemburu sama lipstikmu Dia bisa nyium kamu tiap hari, dari pagi sampai malam",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh",
  "Aku tau teman wanitamu bukan hanya satu dan menyukaimu pun bukan hanya aku",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu",
  "Terkadang aku iri sama layangan Talinya putus saja masih dikejar kejar dan gak rela direbut orang lain",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu Namun, saat itu juga aku tahu rasanya patah hati",
  "Mengejar itu capek, tapi lebih capek lagi menunggu Menunggu kamu menyadari keberadaanku",
  "Jangan berhenti mencinta hanya karena pernah terluka Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan",
  "Aku punya sejuta alasan untuk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu",
  "Sebagian diriku merasa sakit, mengingat dirinya yang sangat dekat, tapi tak tersentuh",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendoakannya",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu",
  "Demi cinta kita menipu diri sendiri Berusaha kuat nyatanya jatuh secara tak terhormat",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang Menetaplah bila kamu mau dan pergilah jika kamu bosan",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya? Kalau aku tidak kecewa, tapi aku menunggu ucapannya",
  "Rinduku seperti ranting yang tetap berdiri Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama",
  "Buatlah aku bisa membencimu walau hanya beberapa menit agar tidak terlalu berat untuk melupakanmu",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku",
  "Kamu adalah yang utama dan pertama dalam hidupku, tapi aku adalah yang kedua bagimu",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku",
  "Aku terkadang iri dengan sebuah benda Tidak memiliki rasa namun selalu dibutuhkan Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan",
  "To the person I stayed up with until 3 am I should've slept",
  "Love is being stupid together",
  "I love you more today than yesterday, and I will continue to fall in love with you, over and over again, until the day I die",
  "I want someone who will look at me the same way I look at chocolate cake",
  "I love you with every beat of my heart",
  "You taught me how to love, but not how to stop",
  "Loving you was my favorite mistake",
  "You broke my heart But I still love you with all the pieces",
  "In past, you are like an oxygen for me and I always need you to stay alive But now, you are like a carbon dioxide, go out from me",
  "My life used to be in dull grey Thank you, now it is in brighter colors",
  "Roses are red Violets are blue I know that it's often said But I really love you",
  "If dreaming is the only way to be with you, then i'il never open my eyes",
  "My favorite place is inside your hug, even you leave me",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh Belajar jadi yang terbaik buat kamu",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum Dan dia merasa bahagia akan hal itu",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi",
  "Keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari",
  "Aku mau banget ngasih dunia ke kamu Namun, karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U', tapi aku ngertine mek 'Aku tresno awakmu'",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur",
  "Saben dino kegowo ngimpi tapi ora biso nduweni",
  "Ora ketemu koe 30 dino rasane koyo sewulan",
  "Aku tanpamu bagaikan sego kucing ilang karete Ambyar",
  "Pengenku, Aku iso muter wektu Supoyo aku iso nemokne kowe lewih gasik Ben Lewih dowo wektuku kanggo urip bareng sliramu",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu",
  "Cinta Aa ka Neng moal leungit-leungit sanajan aa geus kawin deui",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya seepna",
  "Kanyaah akang moal luntur najan make Bayclean",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil)",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun",
  "Cukup jaringan aja yang hilang, kamu jangan",
  "Sering sih dibikin makan hati, tapi menyadari kamu masih di sini bikin bahagia lagi",
  "Musuhku adalah mereka yang ingin memilikimu juga",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu",
  "Cukup China aja yang jauh, cinta kita jangan",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting",
  "Cuma satu keinginanku, dicintai olehmu",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw",
  "Cukup antartika aja yang jauh Antarkita jangan"
]
  


const bankSoalTeracak = new Map();
function ambilSoalAcak(namaFitur, daftarSoal) {
    if (!bankSoalTeracak.has(namaFitur) || bankSoalTeracak.get(namaFitur).index >= bankSoalTeracak.get(namaFitur).data.length) {
        // Jika belum pernah disetel atau sudah habis, acak ulang
        const soalTeracak = [...daftarSoal];
        for (let i = soalTeracak.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [soalTeracak[i], soalTeracak[j]] = [soalTeracak[j], soalTeracak[i]];
        }
        bankSoalTeracak.set(namaFitur, { data: soalTeracak, index: 0 });
    }

    const soalState = bankSoalTeracak.get(namaFitur);
    const soal = soalState.data[soalState.index];
    soalState.index += 1;
    return soal;
}


module.exports = {
  soalKuis,
  soalKuisSusah,
  ambilSoalAcak,
  truthList,
  dareList,
  soalTebakan,
  soalSusunKata,
  soalFamily100,
  soalBendera,
  tebakgambar,
  soalMotivasi,
  soalQuotes,
  soalBucin
};