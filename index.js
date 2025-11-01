const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  downloadMediaMessage
} = require('@whiskeysockets/baileys');

const pino = require('pino');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const QRCode = require('qrcode'); 
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { exec } = require('child_process');
const ytdl = require("@distube/ytdl-core");
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require("form-data");
const moment = require('moment-timezone');
const sharp = require('sharp');
const cheerio = require("cheerio")
const fetch = require('node-fetch')
const AdmZip = require('adm-zip');
const gtts = require('google-tts-api');
const mime = require('mime-types');
const { PDFDocument } = require('pdf-lib');
const { Document, Packer, Paragraph, TextRun } = require('docx');
const pdfSessions = new Map(); 
const antiLinkGroups = new Map();
const antiStickerGroups = new Map();
const antiFotoGroups = new Map();
const sesiPolling = new Map();
const sesiCepat = new Map();
const sesiTicTacToe = new Map();
const sesiFamily100 = new Map();
const sesiJudi = new Map(); // key: sender, value: { msgId }
const sesiTebakBendera = new Map();
const sesiPilihGrup = new Map();
const sesiUmumkan = new Map();

let historySiapa = {};
let anonQueue = [];
let anonSessions = new Map(); 


const pdfLimit = new Map(); 
const MAX_PDF = 1;
const PDF_COOLDOWN = 10 * 60 * 60 * 1000; 
const pdfAksesSementara = new Map(); 

const bratLimit = new Map(); 
const MAX_BRAT = 3;
const BRAT_COOLDOWN = 10*  60 * 60 * 1000; 
const bratAksesSementara = new Map(); 

const waifuLimit = new Map();
const MAX_WAIFU = 1; // max 3 kali
const WAIFU_COOLDOWN = 10 * 60 * 60 * 1000; // 10 jam
const waifuAksesSementara = new Map();

// Atur limit & cooldown
const soundLimit = new Map(); // user -> { count, time }
const MAX_SOUND = 1; // maksimal 3x
const SOUND_COOLDOWN = 10 * 60 * 60 * 1000; // 1 jam
const soundAksesSementara = new Map(); // user -> expireTime

const hitamkanLimit = new Map();
const MAX_HITAMKAN = 1;
const HITAMKAN_COOLDOWN = 10 * 60 * 60 * 1000; // 1 jam
const hitamkanAksesSementara = new Map();

const spotifyLimit = new Map();
const MAX_SPOTIFY = 2;
const SPOTIFY_COOLDOWN = 10 * 60 * 60 * 1000; // 1 jam
const spotifyAksesSementara = new Map();

// ===== Limit & Akses IGStalk =====
const igstalkLimit = new Map(); 
const MAX_IGSTALK = 1 // Max untuk pengguna biasa
const IGSTALK_COOLDOWN = 10 * 60 * 60 * 1000; // 1 jam
const igstalkAksesSementara = new Map(); // Beli akses sementara

  const OWNER_NUMBER = '6283836348226@s.whatsapp.net'
  const PROXY_NUMBER = '6291100802986027@s.whatsapp.net'; 
  const BOT_NUMBER = '62882007141574@s.whatsapp.net';

  const ALIAS_OWNER = {
  '6291100802986027@s.whatsapp.net': OWNER_NUMBER,
  '91100802986027@s.whatsapp.net': OWNER_NUMBER,
  '91100802986027@lid': OWNER_NUMBER,      
  '6291100802986027@c.us': OWNER_NUMBER
};

// Alias bot (masukkan semua kemungkinan JID bot, termasuk acak di grup)
const ALIAS_BOT = {
  [BOT_NUMBER]: BOT_NUMBER,
  '6281227298109@c.us': BOT_NUMBER,
  '6281227298109@lid': BOT_NUMBER,
  '73530494451954@lid': BOT_NUMBER,  // tambahkan JID bot acak di grup
};

function normalizeJid(jid) {
    if (!jid || typeof jid !== 'string') return '';

    if (ALIAS_OWNER[jid]) return ALIAS_OWNER[jid];

    if (jid.endsWith('@s.whatsapp.net') || jid.endsWith('@g.us')) return jid;

    const noDomain = jid.split('@')[0];
    const reconstructed = noDomain + '@s.whatsapp.net';
    if (ALIAS_OWNER[reconstructed]) return ALIAS_OWNER[reconstructed];

    const numMatch = jid.match(/^\d{7,}$/);
    if (!numMatch) return jid;

    let number = numMatch[0];
    if (!number.startsWith('62')) number = '62' + number.replace(/^0+/, '');

    return number + '@s.whatsapp.net';
}

const vipPath = './vip.json';
let vipList = {};
try {
    vipList = JSON.parse(fs.readFileSync(vipPath));
} catch {
    vipList = {};
}

function isVIP(jid, groupId) {
    const realJid = normalizeJid(jid);
    if (realJid === OWNER_NUMBER) return true;

    // ✅ Cek VIP di grup (lokal)
    if (vipList[groupId] && vipList[groupId].includes(realJid)) {
        return true;
    }

    // ✅ Cek VIP global (khusus Owner buat lewat .setvip di chat pribadi)
    if (vipList["vip-pribadi"] && vipList["vip-pribadi"].includes(realJid)) {
        return true;
    }

    return false;
}




function isOwner(jid) {
    const normalized = normalizeJid(jid);
    return normalized === OWNER_NUMBER || normalized === PROXY_NUMBER;
}


function addVIP(jid, groupId) {
    const realJid = normalizeJid(jid);
    if (!vipList[groupId]) vipList[groupId] = [];
    if (!vipList[groupId].includes(realJid)) {
        vipList[groupId].push(realJid);
        saveVIP();
    }
}

function saveVIP() {
    fs.writeFile(vipPath, JSON.stringify(vipList, null, 2), err => {
        if (err) console.error("❌ Gagal simpan VIP:", err);
    });
}


const fiturSementaraPath = './fiturSementara.json';
let fiturSementara = {};


try {
    fiturSementara = JSON.parse(fs.readFileSync(fiturSementaraPath));
} catch (e) {
    fiturSementara = {};
}


function saveFiturSementara() {
    fs.writeFile(fiturSementaraPath, JSON.stringify(fiturSementara, null, 2), err => {
        if (err) console.error("❌ Gagal simpan fitur sementara:", err);
    });
}

function addTemporaryFeature(jid, fitur, groupId) {
    const expire = Date.now() + 1 * 60 * 1000;
    if (!fiturSementara[jid]) fiturSementara[jid] = {};
    fiturSementara[jid][fitur] = {
        expired: expire,
        groupId: groupId
    };
    saveFiturSementara();
}

function hasTemporaryFeature(jid, fitur) {
    cekKadaluarsa();
    return fiturSementara[jid] &&
           fiturSementara[jid][fitur] &&
           fiturSementara[jid][fitur].expired > Date.now();
}

function cekKadaluarsa(sock) {
  const now = Date.now();
  let changed = false;

  for (const jid in fiturSementara) {
    for (const fitur in fiturSementara[jid]) {
      const data = fiturSementara[jid][fitur];
      if (data.expired < now) {
        if (sock && typeof sock.sendMessage === 'function' && data.groupId?.endsWith('@g.us')) {
          const nomor = jid.split('@')[0];
          const teks = `⛔ *WAKTU HABIS!*\n` +
            `@${nomor}, akses ke fitur *.${fitur}* kamu telah *berakhir*.\n\n` +
            `🕒 Silakan beli ulang jika ingin menggunakannya kembali.\n` +
            `📌 Ketik *.shop* untuk melihat daftar fitur.`;

          sock.sendMessage(data.groupId, {
          text: teks,
          mentions: [jid]
          }).catch(err => {
            console.error('❌ Gagal kirim pesan kadaluarsa:', err);
          });
        }

        delete fiturSementara[jid][fitur];
        changed = true;
      }
    }

    if (Object.keys(fiturSementara[jid]).length === 0) {
      delete fiturSementara[jid];
      changed = true;
    }
  }

  if (changed) {
    saveFiturSementara();
    console.log('✅ Data fitur sementara diperbarui (expired dibersihkan)');
  }
}


let mutedUsers = {};
try {
    const data = fs.readFileSync('./muted.json');
    mutedUsers = JSON.parse(data);
} catch (e) {
    console.log('Gagal membaca file muted.json:', e);
}

function simpanMuted() {
    fs.writeFile('./muted.json', JSON.stringify(mutedUsers, null, 2), err => {
        if (err) console.error("❌ Gagal simpan muted:", err);
    });
}

function isMuted(userId, groupId) {
    return mutedUsers[groupId]?.includes(userId);
}

function muteUser(userId, groupId) {
    if (!mutedUsers[groupId]) mutedUsers[groupId] = [];
    if (!mutedUsers[groupId].includes(userId)) mutedUsers[groupId].push(userId);
    simpanMuted();
}

function unmuteUser(userId, groupId) {
    if (mutedUsers[groupId]) {
        mutedUsers[groupId] = mutedUsers[groupId].filter(id => id !== userId);
        simpanMuted();
    }
}



const grupPath = './grupAktif.json';

function simpanGrupAktif() {
    fs.writeFile(grupPath, JSON.stringify(Object.fromEntries(grupAktif), null, 2), err => {
        if (err) console.error("❌ Gagal simpan grup:", err);
    });
}

let grupAktif = new Map();
try {
    const data = JSON.parse(fs.readFileSync(grupPath));
    grupAktif = new Map(Object.entries(data));
} catch (e) {
    console.log('📁 grupAktif.json belum ada, dibuat otomatis saat .on atau .off');
}

const skorPath = './skor.json';
let skorUser = {}; 

function simpanSkorKeFile() {
    fs.writeFile(skorPath, JSON.stringify(skorUser, null, 2), err => {
        if (err) console.error("❌ Gagal simpan skor:", err);
    });
}


try {
    skorUser = JSON.parse(fs.readFileSync(skorPath));
} catch {
    console.log('📁 skor.json belum ada, akan dibuat otomatis.');
    skorUser = {};
}

function getGroupSkor(jid, roomId) {
    const realJid = normalizeJid(jid);
    if (!skorUser[roomId]) return 0;
    return skorUser[roomId][realJid] || 0;
}


function addGroupSkor(jid, roomId, poin) {
    const realJid = normalizeJid(jid);
    if (!skorUser[roomId]) skorUser[roomId] = {};
    if (!skorUser[roomId][realJid]) skorUser[roomId][realJid] = 0;
    skorUser[roomId][realJid] += poin;
    simpanSkorKeFile();
}
const rankFile = path.join(__dirname, 'rank.json');
let rankUser = {};

// === Load rank.json ===
if (fs.existsSync(rankFile)) {
    try {
        rankUser = JSON.parse(fs.readFileSync(rankFile));
    } catch {
        rankUser = {};
    }
}

function saveRank() {
    fs.writeFileSync(rankFile, JSON.stringify(rankUser, null, 2));
}

// === Cooldown anti spam XP ===
let rankCooldown = {};

// === Tambah XP di grup atau chat pribadi ===
function tambahXP(sock, user, room) {
    if (!user) return;
    if (!rankUser[room]) rankUser[room] = {};
    if (!rankUser[room][user]) rankUser[room][user] = { xp: 0, level: 1 };

    const now = Date.now();
    if (rankCooldown[user] && now - rankCooldown[user] < 60000) return; // cooldown 1 menit
    rankCooldown[user] = now;

    // Random XP
    const xpTambah = Math.floor(Math.random() * 5) + 3;
    rankUser[room][user].xp += xpTambah;

    // Cek level up
    const levelSekarang = rankUser[room][user].level;
    const xpSekarang = rankUser[room][user].xp;
    const xpButuh = levelSekarang * 100;

    if (xpSekarang >= xpButuh) {
        rankUser[room][user].level++;
        sock.sendMessage(room, {
            text: `✨ Selamat @${user.split('@')[0]}! Kamu naik ke *Level ${rankUser[room][user].level}* 🎉`,
            mentions: [user]
        });
    }

    saveRank();
}

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

async function spamCode(sock, from, msg, text, isOwner) {
  if (!isOwner(msg.key.participant || msg.key.remoteJid)) {
    return sock.sendMessage(from, { text: '❌ Khusus Owner!' }, { quoted: msg });
  }

  const q = text.split(' ').slice(1).join(' ');
  if (!q) {
    return sock.sendMessage(from, {
      text: '⚠️ Format salah!\n\nGunakan format:\n.spamcode 62xxxxxxxxxxx|jumlah',
    }, { quoted: msg });
  }

  let [target, jumlah = '5'] = q.split('|');
  jumlah = parseInt(jumlah);
  if (isNaN(jumlah) || jumlah <= 0) jumlah = 10;

  await sock.sendMessage(from, { text: 'Memulai spam pairing code...' }, { quoted: msg });

  let nomor = target.replace(/[^0-9]/g, '').trim();

  // Import Baileys hanya sekali di awal program, jangan di sini kalau bisa
  const { state } = await useMultiFileAuthState('Spam Code');
  const { version } = await fetchLatestBaileysVersion();

  const sockSpam = await makeWASocket({
    auth: state,
    version,
    logger: pino({ level: 'silent' }),
  });

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 0; i < jumlah; i++) {
    await delay(7000);
    let result = await sockSpam.requestPairingCode(nomor);
    console.log(`Spam Code ke ${nomor}: ${result}`);
  }

  await sock.sendMessage(from, { text: `✅ spam selesai ${jumlah} kali ke ${nomor}` }, { quoted: msg });

  // Jangan lupa disconnect socket spam setelah selesai
  sockSpam.end();
}


const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const userHistory = new Set();

async function getAIReply(text) {
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: 'user', content: text }]
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://openrouter.ai',
                    'X-Title': 'whatsapp-bot-fajar'
                }
            }
        );
        return response.data.choices[0].message.content.trim();
    } catch (e) {
        console.error('❌ Error AI:', e.response?.data || e.message);
        return 'Maaf, saya tidak bisa menjawab sekarang.';
    }
}

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

const sesiTebakan = new Map(); // key: pengirim, value: { jawaban: string, timeout: TimeoutObject }

const soalKuis = [
  { soal: "Ibu kota Indonesia adalah?", pilihan: ["A. Jakarta", "B. Bandung", "C. Surabaya", "D. Medan"], jawaban: "A" },
  { soal: "Berapa 7 x 6?", pilihan: ["A. 42", "B. 36", "C. 48", "D. 56"], jawaban: "A" },
  { soal: "Siapa yang menemukan telepon?", pilihan: ["A. Alexander Graham Bell", "B. Thomas Edison", "C. Nikola Tesla", "D. Albert Einstein"], jawaban: "A" },
  { soal: "Benua terbesar di dunia?", pilihan: ["A. Afrika", "B. Asia", "C. Eropa", "D. Amerika"], jawaban: "B" },
  { soal: "Apa warna hasil campuran merah dan putih?", pilihan: ["A. Pink", "B. Ungu", "C. Merah muda", "D. Jingga"], jawaban: "A" },
  { soal: "Planet tempat kita tinggal?", pilihan: ["A. Mars", "B. Bumi", "C. Venus", "D. Jupiter"], jawaban: "B" },
  { soal: "Lambang kimia air?", pilihan: ["A. CO2", "B. O2", "C. H2O", "D. NaCl"], jawaban: "C" },
  { soal: "Siapa presiden pertama Indonesia?", pilihan: ["A. Soekarno", "B. Soeharto", "C. Joko Widodo", "D. Habibie"], jawaban: "A" },
  { soal: "Apa bahasa resmi Brasil?", pilihan: ["A. Spanyol", "B. Portugis", "C. Inggris", "D. Prancis"], jawaban: "B" },
  { soal: "Apa nama alat untuk mengukur suhu?", pilihan: ["A. Termometer", "B. Barometer", "C. Kompas", "D. Altimeter"], jawaban: "A" },
  { soal: "Siapa penulis 'Harry Potter'?", pilihan: ["A. J.K. Rowling", "B. Tolkien", "C. Suzanne Collins", "D. Stephen King"], jawaban: "A" },
  { soal: "Berapa jumlah sisi segitiga?", pilihan: ["A. 2", "B. 3", "C. 4", "D. 5"], jawaban: "B" },
  { soal: "Apa warna bendera Indonesia?", pilihan: ["A. Merah Putih", "B. Merah Biru", "C. Hijau Kuning", "D. Hitam Putih"], jawaban: "A" },
  { soal: "Hewan yang bisa terbang?", pilihan: ["A. Kucing", "B. Ikan", "C. Burung", "D. Kuda"], jawaban: "C" },
  { soal: "Siapa yang menemukan listrik?", pilihan: ["A. Benjamin Franklin", "B. Thomas Edison", "C. Nikola Tesla", "D. Semua benar"], jawaban: "D" },
  { soal: "Apa nama ibu kota Jepang?", pilihan: ["A. Seoul", "B. Tokyo", "C. Beijing", "D. Bangkok"], jawaban: "B" },
  { soal: "Berapa 12 + 15?", pilihan: ["A. 27", "B. 25", "C. 28", "D. 30"], jawaban: "A" },
  { soal: "Gunung tertinggi di dunia?", pilihan: ["A. Kilimanjaro", "B. Everest", "C. Fuji", "D. Andes"], jawaban: "B" },
  { soal: "Apa fungsi jantung?", pilihan: ["A. Menghasilkan energi", "B. Memompa darah", "C. Mengatur suhu tubuh", "D. Menyaring darah"], jawaban: "B" },
  { soal: "Negara dengan piramida terkenal?", pilihan: ["A. Mesir", "B. Italia", "C. Yunani", "D. Meksiko"], jawaban: "A" },
  { soal: "Apa nama senyawa garam dapur?", pilihan: ["A. NaCl", "B. KCl", "C. CO2", "D. H2O"], jawaban: "A" },
  { soal: "Berapa warna dasar pada bendera Indonesia?", pilihan: ["A. 1", "B. 2", "C. 3", "D. 4"], jawaban: "B" },
  { soal: "Apa nama mata uang Jepang?", pilihan: ["A. Won", "B. Yuan", "C. Yen", "D. Dollar"], jawaban: "C" },
  { soal: "Siapa ilmuwan yang terkenal dengan teori relativitas?", pilihan: ["A. Isaac Newton", "B. Albert Einstein", "C. Galileo", "D. Nikola Tesla"], jawaban: "B" },
  { soal: "Apa nama hewan terbesar di dunia?", pilihan: ["A. Gajah", "B. Paus Biru", "C. Hiu", "D. Beruang"], jawaban: "B" },
  { soal: "Berapa sisi segi enam?", pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"], jawaban: "B" },
  { soal: "Siapa tokoh utama dalam cerita 'Malin Kundang'?", pilihan: ["A. Malin", "B. Nurbaya", "C. Zainuddin", "D. Sangkuriang"], jawaban: "A" },
  { soal: "Apa nama benua tempat Mesir berada?", pilihan: ["A. Asia", "B. Afrika", "C. Eropa", "D. Amerika"], jawaban: "B" },
  { soal: "Berapa jumlah warna pelangi?", pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"], jawaban: "C" },
  { soal: "Siapa penemu bola lampu pijar?", pilihan: ["A. Alexander Graham Bell", "B. Thomas Edison", "C. Nikola Tesla", "D. Albert Einstein"], jawaban: "B" },
  { soal: "Apa nama alat musik tiup yang terbuat dari kayu?", pilihan: ["A. Gitar", "B. Drum", "C. Seruling", "D. Piano"], jawaban: "C" },
  { soal: "Apa lambang kimia emas?", pilihan: ["A. Au", "B. Ag", "C. Fe", "D. Pb"], jawaban: "A" },
  { soal: "Apa nama ibu kota Prancis?", pilihan: ["A. Berlin", "B. Madrid", "C. Paris", "D. Roma"], jawaban: "C" },
  { soal: "Berapa kecepatan cahaya dalam vakum (km/s)?", pilihan: ["A. 300.000", "B. 150.000", "C. 299.792", "D. 1.000.000"], jawaban: "C" },
  { soal: "Siapa penulis novel 'Laskar Pelangi'?", pilihan: ["A. Andrea Hirata", "B. Tere Liye", "C. Dee Lestari", "D. Habiburrahman El Shirazy"], jawaban: "A" },
  { soal: "Apa fungsi paru-paru?", pilihan: ["A. Memompa darah", "B. Menyaring darah", "C. Bernapas", "D. Menghasilkan sel darah"], jawaban: "C" },
  { soal: "Berapa jumlah provinsi di Indonesia (2025)?", pilihan: ["A. 34", "B. 36", "C. 38", "D. 40"], jawaban: "C" },
  { soal: "Apa nama alat untuk mengukur tekanan udara?", pilihan: ["A. Termometer", "B. Barometer", "C. Kompas", "D. Altimeter"], jawaban: "B" },
  { soal: "Siapa pahlawan wanita dari Aceh?", pilihan: ["A. Cut Nyak Dien", "B. RA Kartini", "C. Dewi Sartika", "D. Martha Christina"], jawaban: "A" },
  { soal: "Apa warna dasar bendera Italia?", pilihan: ["A. Merah, Putih, Hijau", "B. Merah, Kuning, Biru", "C. Putih, Biru, Merah", "D. Kuning, Hijau, Hitam"], jawaban: "A" },
  { soal: "Apa nama gunung berapi tertinggi di Indonesia?", pilihan: ["A. Merapi", "B. Rinjani", "C. Semeru", "D. Krakatau"], jawaban: "C" },
  { soal: "Berapa jumlah pemain sepak bola dalam satu tim?", pilihan: ["A. 9", "B. 10", "C. 11", "D. 12"], jawaban: "C" },
  { soal: "Apa fungsi hati dalam tubuh?", pilihan: ["A. Menyaring darah", "B. Menghasilkan empedu", "C. Memompa darah", "D. Mengatur suhu tubuh"], jawaban: "B" },
  { soal: "Planet apa yang dikenal sebagai planet merah?", pilihan: ["A. Mars", "B. Jupiter", "C. Venus", "D. Saturnus"], jawaban: "A" },
  { soal: "Apa nama alat musik tradisional Jawa?", pilihan: ["A. Sasando", "B. Angklung", "C. Gamelan", "D. Saluang"], jawaban: "C" },
  { soal: "Berapa sisi segi empat?", pilihan: ["A. 3", "B. 4", "C. 5", "D. 6"], jawaban: "B" },
  { soal: "Apa warna primer?", pilihan: ["A. Merah, Hijau, Biru", "B. Merah, Kuning, Biru", "C. Merah, Kuning, Hijau", "D. Biru, Kuning, Ungu"], jawaban: "B" },
  { soal: "Apa bahasa resmi negara Kanada?", pilihan: ["A. Inggris dan Prancis", "B. Inggris dan Spanyol", "C. Inggris dan Jerman", "D. Inggris dan Italia"], jawaban: "A" },
  { soal: "Siapa yang menciptakan lagu 'Indonesia Raya'?", pilihan: ["A. WR Supratman", "B. Ismail Marzuki", "C. Chairil Anwar", "D. Soekarno"], jawaban: "A" },
  { soal: "Berapa huruf vokal dalam kata 'Indonesia'?", pilihan: ["A. 3", "B. 4", "C. 5", "D. 6"], jawaban: "C" },
  { soal: "Apa kepanjangan dari CPU?", pilihan: ["A. Central Print Unit", "B. Core Processing Unit", "C. Central Processing Unit", "D. Control Power Unit"], jawaban: "C" },
  { soal: "Apa warna bendera Prancis?", pilihan: ["A. Merah, Putih, Biru", "B. Merah, Kuning, Biru", "C. Putih, Hijau, Merah", "D. Biru, Kuning, Merah"], jawaban: "A" },
  { soal: "Berapa planet di tata surya kita?", pilihan: ["A. 7", "B. 8", "C. 9", "D. 10"], jawaban: "B" },
  { soal: "Siapa penemu pesawat terbang?", pilihan: ["A. Wright Bersaudara", "B. Alexander Graham Bell", "C. Thomas Edison", "D. Nikola Tesla"], jawaban: "A" },
  { soal: "Apa nama mata uang Amerika Serikat?", pilihan: ["A. Euro", "B. Dollar", "C. Yen", "D. Peso"], jawaban: "B" },
  { soal: "Apa fungsi ginjal?", pilihan: ["A. Menyaring darah", "B. Memompa darah", "C. Menghasilkan hormon", "D. Mengatur suhu tubuh"], jawaban: "A" },
  { soal: "Siapa tokoh perjuangan kemerdekaan Indonesia yang juga proklamator?", pilihan: ["A. Soekarno", "B. Mohammad Hatta", "C. Sutan Sjahrir", "D. Ahmad Subardjo"], jawaban: "B" },
  { soal: "Apa simbol kimia besi?", pilihan: ["A. Fe", "B. Ag", "C. Au", "D. Pb"], jawaban: "A" },
  { soal: "Apa nama alat musik petik?", pilihan: ["A. Drum", "B. Gitar", "C. Terompet", "D. Biola"], jawaban: "B" },
  { soal: "Apa hasil dari 15 ÷ 3?", pilihan: ["A. 5", "B. 6", "C. 3", "D. 4"], jawaban: "A" },
  { soal: "Siapa penulis novel 'Bumi'?", pilihan: ["A. Tere Liye", "B. Andrea Hirata", "C. Dee Lestari", "D. Habiburrahman El Shirazy"], jawaban: "A" },
  { soal: "Apa jenis hewan katak?", pilihan: ["A. Reptil", "B. Mamalia", "C. Amfibi", "D. Burung"], jawaban: "C" },
  { soal: "Apa nama alat pengukur kecepatan angin?", pilihan: ["A. Termometer", "B. Anemometer", "C. Barometer", "D. Altimeter"], jawaban: "B" },
  { soal: "Berapa jumlah kaki laba-laba?", pilihan: ["A. 6", "B. 8", "C. 10", "D. 12"], jawaban: "B" },
  { soal: "Apa ibu kota Thailand?", pilihan: ["A. Kuala Lumpur", "B. Bangkok", "C. Hanoi", "D. Manila"], jawaban: "B" },
  { soal: "Siapa ilmuwan yang menemukan hukum gravitasi?", pilihan: ["A. Albert Einstein", "B. Galileo Galilei", "C. Isaac Newton", "D. Nikola Tesla"], jawaban: "C" },
  { soal: "Apa nama alat untuk melihat benda jauh?", pilihan: ["A. Mikroskop", "B. Teleskop", "C. Kamera", "D. Kacamata"], jawaban: "B" },
  { soal: "Berapa sisi segi lima?", pilihan: ["A. 4", "B. 5", "C. 6", "D. 7"], jawaban: "B" },
  { soal: "Apa nama planet terdekat dengan matahari?", pilihan: ["A. Venus", "B. Merkurius", "C. Mars", "D. Bumi"], jawaban: "B" },
  { soal: "Siapa tokoh pahlawan nasional yang berasal dari Jawa Tengah?", pilihan: ["A. Diponegoro", "B. Cut Nyak Dien", "C. RA Kartini", "D. Sultan Hasanuddin"], jawaban: "A" },
  { soal: "Apa nama kapal pertama yang berhasil mengelilingi dunia?", pilihan: ["A. Titanic", "B. Santa Maria", "C. Endeavour", "D. Magellan"], jawaban: "D" },
  { soal: "Apa bahasa resmi di negara Inggris?", pilihan: ["A. Inggris", "B. Prancis", "C. Jerman", "D. Spanyol"], jawaban: "A" },
  { soal: "Berapa warna dasar bendera Jerman?", pilihan: ["A. Merah, Kuning, Hitam", "B. Merah, Putih, Biru", "C. Hijau, Kuning, Hitam", "D. Merah, Hijau, Putih"], jawaban: "A" },
  { soal: "Apa nama unsur dengan simbol 'O'?", pilihan: ["A. Oksigen", "B. Emas", "C. Perak", "D. Hidrogen"], jawaban: "A" },
  { soal: "Apa nama bagian terkecil dari makhluk hidup?", pilihan: ["A. Organ", "B. Sel", "C. Jaringan", "D. Sistem"], jawaban: "B" },
  { soal: "Siapa tokoh sejarah yang dijuluki 'Bapak Teknologi Indonesia'?", pilihan: ["A. BJ Habibie", "B. Soekarno", "C. Hatta", "D. Gus Dur"], jawaban: "A" },
  { soal: "Apa nama sungai terpanjang di dunia?", pilihan: ["A. Amazon", "B. Nil", "C. Mississippi", "D. Yangtze"], jawaban: "B" },
  { soal: "Apa lambang kimia karbon?", pilihan: ["A. Ca", "B. C", "C. K", "D. Co"], jawaban: "B" },
  { soal: "Apa jenis olahraga yang menggunakan bola kecil dan tongkat?", pilihan: ["A. Sepak bola", "B. Golf", "C. Basket", "D. Tenis"], jawaban: "B" },
  { soal: "Berapa angka Romawi untuk 50?", pilihan: ["A. X", "B. L", "C. C", "D. V"], jawaban: "B" },
  { soal: "Apa nama hewan yang dikenal sebagai raja hutan?", pilihan: ["A. Singa", "B. Harimau", "C. Macan", "D. Serigala"], jawaban: "A" },
  { soal: "Siapa penulis puisi 'Aku'?", pilihan: ["A. Chairil Anwar", "B. WS Rendra", "C. Taufiq Ismail", "D. Sapardi Djoko Damono"], jawaban: "A" },
  { soal: "Apa nama alat untuk mengukur berat?", pilihan: ["A. Penggaris", "B. Timbangan", "C. Termometer", "D. Barometer"], jawaban: "B" },
  { soal: "Apa nama pulau terbesar di Indonesia?", pilihan: ["A. Sumatra", "B. Kalimantan", "C. Sulawesi", "D. Papua"], jawaban: "D" },
  { soal: "Berapa sisi segi delapan?", pilihan: ["A. 6", "B. 7", "C. 8", "D. 9"], jawaban: "C" },
  { soal: "Apa nama tokoh fiksi yang memakai topi penyihir dan sihir?", pilihan: ["A. Harry Potter", "B. Frodo", "C. Gandalf", "D. Merlin"], jawaban: "A" },
  { soal: "Siapa presiden Indonesia sekarang (2025)?", pilihan: ["A. Joko Widodo", "B. Megawati", "C. Susilo Bambang Yudhoyono", "D. Prabowo"], jawaban: "A" },
  { soal: "Apa warna campuran biru dan kuning?", pilihan: ["A. Hijau", "B. Ungu", "C. Orange", "D. Coklat"], jawaban: "A" },
  { soal: "Apa nama alat untuk mengukur tekanan darah?", pilihan: ["A. Termometer", "B. Tensimeter", "C. Barometer", "D. Stetoskop"], jawaban: "B" },
  { soal: "Siapa yang dikenal sebagai Bapak Pendidikan Indonesia?", pilihan: ["A. Ki Hajar Dewantara", "B. Soekarno", "C. Mohammad Hatta", "D. R.A. Kartini"], jawaban: "A" },
  { soal: "Apa lambang kimia natrium?", pilihan: ["A. Na", "B. N", "C. Nm", "D. Nt"], jawaban: "A" },
  { soal: "Apa bahasa resmi negara Australia?", pilihan: ["A. Inggris", "B. Prancis", "C. Spanyol", "D. Jerman"], jawaban: "A" }
];

const sesiKuis = new Map(); 
const sesiKuisSusah = new Map();
const ongoingHacksSistem = {};

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

const sesiSusunKata = new Map(); // key: pengirim, value: { jawaban, timeout }

const soalFamily100 = [
  {
    pertanyaan: "Sesuatu yang ada di kamar mandi?",
    jawaban: ["sabun", "handuk", "gayung", "sikat gigi", "pasta gigi"]
  },
  {
    pertanyaan: "Hewan yang bisa terbang?",
    jawaban: ["burung", "kelelawar", "nyamuk", "lebah", "lalat"]
  },
  {
    pertanyaan: "Sesuatu yang ada di dapur?",
    jawaban: ["kompor", "panci", "sendok", "pisau", "gas"]
  },
  {
    pertanyaan: "Minuman yang disukai banyak orang?",
    jawaban: ["kopi", "teh", "susu", "jus", "air putih"]
  },
  {
    pertanyaan: "Sesuatu yang berwarna merah?",
    jawaban: ["apel", "cabai", "darah", "mobil", "merah"]
  },
  {
    pertanyaan: "Hewan yang hidup di air?",
    jawaban: ["ikan", "hiu", "lumba-lumba", "ubur-ubur", "paus"]
  },
  {
    pertanyaan: "Profesi di rumah sakit?",
    jawaban: ["dokter", "perawat", "resepsionis", "satpam", "bidan"]
  },
  {
    pertanyaan: "Sesuatu yang digunakan saat hujan?",
    jawaban: ["payung", "jas hujan", "sepatu boots", "jaket", "mantel"]
  },
  {
    pertanyaan: "Makanan yang digoreng?",
    jawaban: ["tempe", "tahu", "ayam", "ikan", "telur"]
  },
  {
    pertanyaan: "Alat yang ada di sekolah?",
    jawaban: ["papan tulis", "penghapus", "meja", "kursi", "spidol"]
  },
  {
    pertanyaan: "Buah yang berwarna kuning?",
    jawaban: ["pisang", "nanas", "mangga", "jeruk", "pepaya"]
  },
  {
    pertanyaan: "Hewan yang berkaki empat?",
    jawaban: ["kucing", "anjing", "sapi", "kambing", "kuda"]
  },
  {
    pertanyaan: "Sesuatu yang ada di meja makan?",
    jawaban: ["piring", "sendok", "garpu", "makanan", "gelas"]
  },
  {
    pertanyaan: "Sesuatu yang sering dicari saat hilang?",
    jawaban: ["hp", "kunci", "dompet", "remote", "kacamata"]
  },
  {
    pertanyaan: "Warna yang sering dipakai untuk baju sekolah?",
    jawaban: ["putih", "merah", "biru", "abu-abu", "coklat"]
  },
  {
    pertanyaan: "Sesuatu yang dilakukan saat bosan?",
    jawaban: ["main hp", "tidur", "makan", "nonton", "scroll tiktok"]
  },
  {
    pertanyaan: "Barang yang dibawa ke sekolah?",
    jawaban: ["buku", "pulpen", "tas", "kotak pensil", "botol minum"]
  },
  {
    pertanyaan: "Sesuatu yang panas?",
    jawaban: ["matahari", "api", "air panas", "kompor", "mie rebus"]
  },
  {
    pertanyaan: "Hewan yang hidup di darat?",
    jawaban: ["kucing", "anjing", "sapi", "kambing", "gajah"]
  },
  {
    pertanyaan: "Sesuatu yang dipakai di kepala?",
    jawaban: ["topi", "helm", "bando", "kerudung", "kacamata"]
  },
  {
    pertanyaan: "Minuman yang disajikan dingin?",
    jawaban: ["es teh", "jus", "es kopi", "air", "soda"]
  },
  {
    pertanyaan: "Buah yang berwarna hijau?",
    jawaban: ["melon", "apel", "anggur", "alpukat", "pir"]
  },
  {
    pertanyaan: "Sesuatu yang dilakukan saat bangun tidur?",
    jawaban: ["ngucek mata", "minum", "mandi", "doa", "ngecek hp"]
  },
  {
    pertanyaan: "Sesuatu yang ada di tas sekolah?",
    jawaban: ["buku", "pulpen", "penghapus", "bekal", "pensil"]
  },
  {
    pertanyaan: "Sesuatu yang ada di langit?",
    jawaban: ["matahari", "bulan", "bintang", "awan", "pesawat"]
  },
  {
    pertanyaan: "Sesuatu yang biasa dipakai saat olahraga?",
    jawaban: ["sepatu", "kaos", "celana", "headband", "raket"]
  },
  {
    pertanyaan: "Benda yang bisa mengeluarkan suara?",
    jawaban: ["radio", "hp", "tv", "speaker", "alarm"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dikunci?",
    jawaban: ["pintu", "lemari", "motor", "mobil", "hp"]
  },
  {
    pertanyaan: "Hewan yang hidup di kebun binatang?",
    jawaban: ["singa", "harimau", "gajah", "zebra", "unta"]
  },
  {
    pertanyaan: "Alat yang digunakan untuk membersihkan?",
    jawaban: ["sapu", "pel", "lap", "vacuum", "kain"]
  },
  {
    pertanyaan: "Sesuatu yang sering dipegang saat nonton TV?",
    jawaban: ["remote", "bantal", "snack", "minuman", "selimut"]
  },
  {
    pertanyaan: "Sesuatu yang dipakai di kaki?",
    jawaban: ["sepatu", "sandal", "kaos kaki", "sepatu roda", "sepatu bola"]
  },
  {
    pertanyaan: "Sesuatu yang sering ditemukan di meja belajar?",
    jawaban: ["lampu", "buku", "pulpen", "penghapus", "catatan"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dipotong?",
    jawaban: ["kertas", "rambut", "baju", "kue", "sayur"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dibuka dan ditutup?",
    jawaban: ["pintu", "jendela", "botol", "tas", "hp"]
  },
  {
    pertanyaan: "Sesuatu yang dipakai saat tidur?",
    jawaban: ["bantal", "selimut", "sprei", "piyama", "guling"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dikupas?",
    jawaban: ["pisang", "jeruk", "mangga", "kentang", "bawang"]
  },
  {
    pertanyaan: "Sesuatu yang bisa ditulis?",
    jawaban: ["buku", "kertas", "papan", "note", "catatan"]
  },
  {
    pertanyaan: "Tempat yang ramai saat liburan?",
    jawaban: ["pantai", "mall", "kebun binatang", "bioskop", "taman"]
  },
  {
    pertanyaan: "Sesuatu yang bergerak cepat?",
    jawaban: ["mobil", "motor", "pesawat", "kucing", "peluru"]
  },
  {
    pertanyaan: "Sesuatu yang memiliki roda?",
    jawaban: ["motor", "mobil", "sepeda", "gerobak", "skateboard"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dipeluk?",
    jawaban: ["bantal", "boneka", "orang", "guling", "hewan"]
  },
  {
    pertanyaan: "Sesuatu yang biasa diwarnai?",
    jawaban: ["gambar", "tembok", "kertas", "baju", "kuku"]
  },
  {
    pertanyaan: "Alat yang digunakan untuk makan?",
    jawaban: ["sendok", "garpu", "tangan", "sumpit", "piring"]
  },
  {
    pertanyaan: "Sesuatu yang bisa naik turun?",
    jawaban: ["lift", "tangga", "berat badan", "kurs", "panas"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dimakan mentah?",
    jawaban: ["salad", "buah", "timun", "wortel", "sushi"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dicium baunya?",
    jawaban: ["bunga", "parfum", "makanan", "bensin", "kotoran"]
  },
  {
    pertanyaan: "Sesuatu yang digunakan untuk menutup?",
    jawaban: ["pintu", "tutup", "penutup", "masker", "selimut"]
  },
  {
    pertanyaan: "Hewan yang bisa dijadikan peliharaan?",
    jawaban: ["kucing", "anjing", "kelinci", "burung", "hamster"]
  },
  {
    pertanyaan: "Transportasi di udara?",
    jawaban: ["pesawat", "helikopter", "paralayang", "balon udara", "jet"]
  },
  {
    pertanyaan: "Alat untuk menulis?",
    jawaban: ["pulpen", "pensil", "spidol", "kapur", "pena"]
  },
  {
    pertanyaan: "Sesuatu yang dilakukan saat libur?",
    jawaban: ["jalan-jalan", "tidur", "nonton", "main game", "masak"]
  },
  {
    pertanyaan: "Sesuatu yang ada di lemari es?",
    jawaban: ["susu", "air", "sayur", "telur", "buah"]
  },
  {
    pertanyaan: "Sesuatu yang bisa dibaca?",
    jawaban: ["buku", "koran", "novel", "majalah", "artikel"]
  },
  {
    pertanyaan: "Sesuatu yang bisa meledak?",
    jawaban: ["bom", "kembang api", "balon", "ban", "tabung gas"]
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


const userCooldownMap = new Map(); // Map<JID, timestamp>
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');
  const { version, isLatest } = await fetchLatestBaileysVersion();

  console.log(`🌀 Menggunakan versi WhatsApp Web: ${version.join('.')}${isLatest ? ' (terbaru)' : ''}`);

  const sock = makeWASocket({
    auth: state,
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    defaultQueryTimeoutMs: undefined
  });

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('📱 Scan QR berikut untuk login:');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'open') {
      console.log('✅ Bot berhasil terhubung ke WhatsApp!');
    }

    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode || 0;
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = code !== DisconnectReason.loggedOut;

      console.log(`⚠️ Koneksi terputus (${reason || code}).`);

      if (shouldReconnect) {
        console.log('🔄 Mencoba koneksi ulang dalam 5 detik...');
        setTimeout(startBot, 5000);
      } else {
        console.log('❌ Bot logout. Hapus folder "auth_info_baileys" lalu jalankan ulang untuk scan baru.');
      }
    }
  });

  sock.ev.on('creds.update', saveCreds);

  // Jalankan fungsi cek fitur kadaluarsa setiap 10 detik
  setInterval(() => {
    cekKadaluarsa(sock);
  }, 10 * 1000);



    // Anti spam cooldown
const cooldownSuit = new Set();

// Helper aman kirim pesan
async function safeSend(jid, content, options = {}) {
    try {
        await sock.sendMessage(jid, content, options);
    } catch (err) {
        console.error(`❌ Gagal kirim ke ${jid}:`, err.message);
    }
}






sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;
    if (msg.key.fromMe) return;

    const from = msg.key.remoteJid; // ID room: grup atau pribadi
    const isGroup = from.endsWith('@g.us');

    // Cari ID pengirim sebenarnya
    let rawSender = null;
    
    

    if (isGroup) {
        rawSender = msg.key.participant || msg.participant;
    } else {
        rawSender = msg.key.remoteJid; // chat pribadi
    }

    // Kalau masih null (jarang), ambil dari contextInfo
    if (!rawSender && msg.message?.extendedTextMessage?.contextInfo?.participant) {
        rawSender = msg.message.extendedTextMessage.contextInfo.participant;
    }

    const sender = normalizeJid(rawSender); // ID pengirim sebenarnya
    const isRealOwner = sender === OWNER_NUMBER;


        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            msg.message?.imageMessage?.caption || '';

        const imageContent = (
            msg.message?.imageMessage ||
            msg.message?.documentMessage?.mimetype?.includes("image") && msg.message.documentMessage ||
            msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
        );

        if (!msg.key.fromMe) {
    tambahXP(sock, sender, from);

}




        const msgType = Object.keys(msg.message)[0];
        const body = text.toLowerCase(); // ⬅ WAJIB ADA!
        console.log(`📩 Pesan dari ${from}: ${text}`);

        if (isGroup && !grupAktif.has(from)) {
            grupAktif.set(from, false); // Otomatis aktif saat grup baru
            simpanGrupAktif();
        }

        if (isGroup && !grupAktif.get(from) && text.trim() !== '.on') {
            return; // Masih bisa .off manual
        }

if (msg.message?.imageMessage) {
    const imageSenderKey = isGroup ? `${from}:${sender}` : sender;
    const session = pdfSessions.get(imageSenderKey);

    if (session) {
        try {
            const buffer = await downloadMediaMessage(msg, 'buffer', {}, {
                reuploadRequest: sock.updateMediaMessage
            });

            session.buffers.push(buffer);
        } catch (e) {
            console.log('❌ Gagal unduh gambar:', e);
        }
    }
}


function tambahSkor(jid, groupId, poin) {
  const realJid = normalizeJid(jid);
 
  if (!skorUser[groupId]) skorUser[groupId] = {};
  if (!skorUser[groupId][realJid]) skorUser[groupId][realJid] = 0;
  skorUser[groupId][realJid] += poin;
  simpanSkorKeFile();
}


//mute
if (isMuted(sender, from)) {
    try {
        await sock.sendMessage(from, { delete: msg.key }); // hapus pesannya
    } catch (e) {
        console.log('Gagal hapus pesan dari user yang dimute.');
    }
    return;
}
// 🔧 fungsi hapus pesan universal
async function hapusPesan(from, msg) {
    try {
        const isFromMe = msg.key.fromMe === true;

        await sock.sendMessage(from, {
            delete: {
                remoteJid: from,
                id: msg.key.id,
                fromMe: isFromMe,
                participant: isFromMe ? sock.user.id : msg.key.participant || sender
            }
        });

        console.log(
            `🗑️ Pesan (${isFromMe ? "BOT" : "USER"}) ${msg.key.id} dihapus di ${from}`
        );
    } catch (e) {
        console.error("❌ Gagal hapus pesan:", e);
    }
}
// 🔗 Antilink
if (from.endsWith('@g.us') && antiLinkGroups.get(from)) {
    if (text && (text.includes('http://') || text.includes('https://'))) {
        await hapusPesan(from, msg);
        return;
    }
}

const mtype = Object.keys(msg.message || {})[0];

// 🎭 Antistiker
if (mtype === 'stickerMessage' && from.endsWith('@g.us') && antiStickerGroups.get(from)) {
    await hapusPesan(from, msg);
    return;
}

// 🖼️ Antifoto
if (mtype === 'imageMessage' && from.endsWith('@g.us') && antiFotoGroups.get(from)) {
    await hapusPesan(from, msg);
    return;
}


//fakereply
function ensureJid(j) {
  if (!j) return '0@s.whatsapp.net';
  if (j.includes('@')) return j;
  const raw = j.replace(/\D/g, ''); // ambil angka aja
  const noPrefix = raw.startsWith('62') ? raw : raw.replace(/^0+/, '') || raw;
  const with62 = noPrefix.startsWith('62') ? noPrefix : '62' + noPrefix;
  return with62 + '@s.whatsapp.net';
}

const sessionKey = isGroup ? `${from}:${sender}` : sender;
const currentPdfSession = pdfSessions.get(sessionKey);

//pdf
if (currentPdfSession) {
    // Kalau pengguna mengirim nama file PDF
    if (
        text.trim().length > 0 &&
        !['.pdfgo','.pdf'].includes(body.trim()) &&
        !msg.message?.imageMessage
    ) {
        currentPdfSession.fileName = text.trim();
        await sock.sendMessage(from, {
            text: `📁 Nama file disimpan sebagai: *${text.trim()}.pdf*\n🛠️ Ketik *.pdfgo* untuk menyelesaikannya.`,
            quoted: msg
        });
        return;
    }

    // Kalau kirim teks lain selain itu
    if (
        !msg.message?.imageMessage &&
        !['.pdfgo','.pdf'].includes(body.trim())
    ) {
        return;
    }
}




if (text === '.shop') {
    const menu = `🎯 *FITUR SHOP* 🎯
╭────────────────────────╮
│ 🛒 *AKSES FITUR SEMENTARA*
│ 
│ ⏳ *Durasi: 1 Menit*
│ 💰 Harga: *1.500 poin*
│ 
│ • .belikick  ➜ Akses *.kick*
│ • .belimute   ➜ Akses *.mute*
│ • .beliunmute  ➜ Akses *.unmute*
│ • .belilistvip  ➜ Akses *.listvip*
│ • .belilistskor  ➜ Akses *.listskor*
│ 
│ ⏳ *Durasi: 5 Menit*
│ 💰 Harga: *2.500 poin*
│ 
│ • .belipdf  ➜ Akses *.pdf*
│ • .belibrat ➜ Akses *.brat*
│ • .beliwaifu  ➜ Akses *.waifu*
│ • .belisound  ➜ Akses *.sound*
│ • .belihitamkan  ➜ Akses *.hitamkan*
│
│ 👑 *FITUR VIP PERMANEN*
│ 💰 Harga: *10.000 poin*
│ 
│ • .belivip ➜ Daftar jadi VIP
╰────────────────────────╯
📌 *Tips:* Main terus, kumpulkan skor, dan buka semua fitur seru!`;

    await sock.sendMessage(from, { text: menu });
}


if (text.trim() === '.belivip') {
    const skor = getGroupSkor(sender, from);
    const hargaVIP = 10000;

    if (isVIP(sender, from)) {
        await sock.sendMessage(from, {
            text: '✅ Kamu sudah menjadi *VIP*!'
        });
        return;
    }

    if (skor < hargaVIP) {
        await sock.sendMessage(from, {
            text: `❌ *Gagal Membeli VIP!*\n\n📊 Skor kamu saat ini: *${skor} poin*\n💰 Harga VIP: *${hargaVIP} poin*\n\n🚫 Kamu belum cukup poin untuk membeli akses *VIP*.\n\n🎮 Coba main game lebih banyak untuk kumpulkan poin dan beli VIP lebih cepat!\n\n✨ Semangat terus ya!`
        });
        return;
    }

    addGroupSkor(sender, from, -hargaVIP);
    simpanSkorKeFile();
    addVIP(sender, from); // ✅ pakai from
    saveVIP();

    await sock.sendMessage(from, {
        text: `🎉 *Pembelian Berhasil!*\n\n👑 *Selamat*, kamu telah menjadi *VIP Member*!\n\n💰 Harga: *${hargaVIP} poin*\n🔓 Fitur VIP kini aktif dan bisa kamu gunakan.\n\nTerima kasih telah mendukung bot ini! 🚀`
    });
    return;
}

if (text === '.belipdf') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; // 5 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender, from)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke fitur *.pdf*.'
        });
    }

    const now = Date.now();
    const expired = pdfAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, {
            text: `✅ Kamu masih punya akses sementara ke *.pdf* selama *${sisaMenit} menit* lagi.`
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.pdf*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    pdfAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.pdf* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}

if (text === '.beliwaifu') {
    const harga = 2500; 
    const durasiMs = 5 * 60 * 1000; // 30 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke fitur *.waifu*.'
        });
    }

    const now = Date.now();
    const expired = waifuAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, {
            text: `✅ Kamu masih punya akses sementara ke *.waifu* selama *${sisaMenit} menit* lagi.`
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.waifu*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    // kurangi skor & simpan
    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    waifuAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.waifu* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}

if (text === '.belibrat') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; 
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke fitur *.brat*.'
        });
    }

    const now = Date.now();
    const expired = bratAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, {
            text: `✅ Kamu masih punya akses sementara ke *.brat* selama *${sisaMenit} menit* lagi.`
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.brat*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    bratAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.brat* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}


// ===== FITUR BELI AKSES SEMENTARA .BELIIGSTALK =====
if (text === '.beliigstalk') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; // 30 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, { text: '✅ Kamu sudah punya akses permanen ke *.igstalk*.' });
    }

    const now = Date.now();
    const expired = igstalkAksesSementara.get(sender);
    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, { text: `✅ Kamu masih punya akses sementara ke *.igstalk* selama *${sisaMenit} menit* lagi.` });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.igstalk*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();
    igstalkAksesSementara.set(sender, now + durasiMs);
    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');

    await sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.igstalk* aktif selama *30 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}

if (text === '.belisound') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; // 5 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender, from)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke fitur *.sound*.'
        });
    }

    const now = Date.now();
    const expired = soundAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, {
            text: `✅ Kamu masih punya akses sementara ke *.sound* selama *${sisaMenit} menit* lagi.`
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.sound*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor lebih banyak!`
        });
    }

    // potong skor
    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    soundAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.sound* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\n🎵 Nikmati fitur *sound* tanpa limit! 🚀`
    });
}

// ===== BELI AKSES HITAMKAN SEMENTARA =====
if (text === '.belihitamkan') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; // 5 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender, from)) {
        return sock.sendMessage(from, { text: '✅ Kamu sudah punya akses permanen ke fitur *.hitamkan*.' });
    }

    const now = Date.now();
    const expired = hitamkanAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, { text: `✅ Kamu masih punya akses sementara ke *.hitamkan* selama *${sisaMenit} menit* lagi.` });
    }

    if (skor < harga) {
        return sock.sendMessage(from, { text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.hitamkan*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!` });
    }

    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    hitamkanAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.hitamkan* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}

// ===== BELI AKSES SPOTIFY =====
if (text === '.belispotify') {
    const harga = 2500;
    const durasiMs = 5 * 60 * 1000; // 5 menit
    const skor = getGroupSkor(sender, from);

    if (isOwner(sender) || isVIP(sender, from)) {
        return sock.sendMessage(from, { text: '✅ Kamu sudah punya akses permanen ke fitur *.spotify*.' });
    }

    const now = Date.now();
    const expired = spotifyAksesSementara.get(sender);

    if (expired && now < expired) {
        const sisaMenit = Math.ceil((expired - now) / 60000);
        return sock.sendMessage(from, { text: `✅ Kamu masih punya akses sementara ke *.spotify* selama *${sisaMenit} menit* lagi.` });
    }

    if (skor < harga) {
        return sock.sendMessage(from, { text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli akses *.spotify*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!` });
    }

    addGroupSkor(sender, from, -harga);
    simpanSkorKeFile();

    const waktuBerakhir = moment(now + durasiMs).tz('Asia/Jakarta').format('HH:mm:ss');
    spotifyAksesSementara.set(sender, now + durasiMs);

    return sock.sendMessage(from, {
        text: `✅ *Akses Sementara Berhasil Dibeli!*\n\n📌 Akses *.spotify* aktif selama *5 menit*\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan selama waktu berlaku! 🚀`
    });
}

if (text === '.belikick') {
    if (!isGroup) return sock.sendMessage(from, {
        text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    });

   const skor = getGroupSkor(sender, from);
    const harga = 1500;

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen, tidak perlu membeli.'
        });
    }

    if (hasTemporaryFeature(sender, 'kick')) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses *.kick* sementara.'
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli *.kick*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    if (!skorUser[from]) skorUser[from] = {};
skorUser[from][sender] = skor - harga;

    simpanSkorKeFile();

    const expired = Date.now() + 60_000;
    const waktuBerakhir = moment(expired).tz('Asia/Jakarta').format('HH:mm:ss');
    addTemporaryFeature(sender, 'kick', from);

    return sock.sendMessage(from, {
        text: `✅ *Akses .kick Berhasil Dibeli!*\n\n🦶 Kamu telah membeli akses *fitur .kick* selama *1 menit*.\n\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan dengan bijak! 🚀`
    });
}

if (text === '.belimute') {
    if (!isGroup) return sock.sendMessage(from, {
        text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    });

    const skor = getGroupSkor(sender, from);

    const harga = 1500;

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen, tidak perlu membeli.'
        });
    }

    if (hasTemporaryFeature(sender, 'mute')) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses *.mute* sementara.'
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli *.mute*\n🎯 Skor kamu: *${skor} poin\n\n🔥 Main dan kumpulkan skor!*`
        });
    }

    if (!skorUser[from]) skorUser[from] = {};
skorUser[from][sender] = skor - harga;

    simpanSkorKeFile();

    const expired = Date.now() + 60_000;
    const waktuBerakhir = moment(expired).tz('Asia/Jakarta').format('HH:mm:ss');
    addTemporaryFeature(sender, 'mute', from);

    return sock.sendMessage(from, {
        text: `✅ *Akses .mute Berhasil Dibeli!*\n\n🔇 Kamu telah membeli akses *fitur .mute* selama *1 menit*.\n\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan dengan bijak untuk menjaga ketertiban grup. 🤖`
    });
}

if (text === '.beliunmute') {
    if (!isGroup) return sock.sendMessage(from, {
        text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    });

   const skor = getGroupSkor(sender, from);

    const harga = 1500;

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen, tidak perlu membeli.'
        });
    }

    if (hasTemporaryFeature(sender, 'unmute')) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses *.unmute* sementara.'
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli *.unmute*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    if (!skorUser[from]) skorUser[from] = {};
skorUser[from][sender] = skor - harga;

    simpanSkorKeFile();

    const expired = Date.now() + 60_000;
    const waktuBerakhir = moment(expired).tz('Asia/Jakarta').format('HH:mm:ss');
    addTemporaryFeature(sender, 'unmute', from);

    return sock.sendMessage(from, {
        text: `✅ *Akses .unmute Berhasil Dibeli!*\n\n🔊 Kamu telah membeli akses *fitur .unmute* selama *1 menit*.\n\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan dengan bijak agar diskusi tetap sehat. 🤖`
    });
}


if (text === '.belilistvip') {
    if (!isGroup) return sock.sendMessage(from, {
        text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    });

    const skor = getGroupSkor(sender, from);

    const harga = 1500;

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke .listvip.'
        });
    }

    if (hasTemporaryFeature(sender, 'listvip')) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses *.listvip* sementara.'
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli *.listvip*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    if (!skorUser[from]) skorUser[from] = {};
skorUser[from][sender] = skor - harga;

    simpanSkorKeFile();

    const expired = Date.now() + 60_000;
    const waktuBerakhir = moment(expired).tz('Asia/Jakarta').format('HH:mm:ss');
    addTemporaryFeature(sender, 'listvip', from);

    return sock.sendMessage(from, {
        text: `✅ *Akses .listvip Berhasil Dibeli!*\n\n👥 Kamu telah membeli akses ke *fitur .listvip* selama *1 menit*.\n\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan sekarang untuk lihat daftar VIP aktif.`
    });
}

if (text === '.belilistskor') {
    if (!isGroup) return sock.sendMessage(from, {
        text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    });

    const skor = getGroupSkor(sender, from);

    const harga = 1500;

    if (isOwner(sender) || isVIP(sender)) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses permanen ke *.listskor*.'
        });
    }

    if (hasTemporaryFeature(sender, 'listskor')) {
        return sock.sendMessage(from, {
            text: '✅ Kamu sudah punya akses *.listskor* sementara.'
        });
    }

    if (skor < harga) {
        return sock.sendMessage(from, {
            text: `❌ *Skor Tidak Cukup!*\n\n📛 Butuh *${harga} poin* untuk beli *.listskor*\n🎯 Skor kamu: *${skor} poin*\n\n🔥 Main dan kumpulkan skor!`
        });
    }

    if (!skorUser[from]) skorUser[from] = {};
skorUser[from][sender] = skor - harga;

    simpanSkorKeFile();

    const expired = Date.now() + 60_000; // 1 menit
    const waktuBerakhir = moment(expired).tz('Asia/Jakarta').format('HH:mm:ss');
    addTemporaryFeature(sender, 'listskor', from);

    return sock.sendMessage(from, {
        text: `✅ *Akses .listskor Berhasil Dibeli!*\n\n📊 Kamu telah membeli akses ke *fitur .listskor* selama *1 menit*.\n\n💰 Harga: *${harga} poin*\n🕒 Berlaku sampai: *${waktuBerakhir} WIB*\n\nGunakan sekarang sebelum waktunya habis.`
    });
}


// === Command .skor (gabungan + status VIP) ===
if (text.trim() === '.skor') {
    const roomKey = from;
    const realJid = normalizeJid(sender);

    // Ambil skor (poin)
    const poin = skorUser[roomKey]?.[realJid] || 0;

    // Ambil data rank (XP & level)
    if (!rankUser[roomKey]) rankUser[roomKey] = {};
    if (!rankUser[roomKey][realJid]) rankUser[roomKey][realJid] = { xp: 0, level: 1 };

    const { xp, level } = rankUser[roomKey][realJid];
    const nextXP = (level + 1) * 100;

    // Tentukan status VIP
    let status;
    if (isOwner(sender)) {
        status = "👑 Owner";
    } else if (isVIP(sender, roomKey) || isVIP(sender, 'vip-pribadi')) {
        status = "💎 VIP";
    } else {
        status = "👤 Non-VIP";
    }

    // Kirim hasilnya
    await sock.sendMessage(from, {
        text: `📊 *STATUS KAMU*\n────────────────\n📱 Nomor : @${realJid.split('@')[0]}\n🏆 Skor  : *${poin} poin*\n⭐ Level : *${level}*\n⚡ XP    : *${xp} / ${nextXP}*\n🎖️ Status : *${status}*`,
        mentions: [sender]
    });

    return;
}




if (text.startsWith('.allskor')) {
  if (!isGroup) {
    await sock.sendMessage(from, { text: '❌ Perintah ini hanya untuk grup.' }, { quoted: msg });
    return;
  }

  if (!isOwner(sender) && !isVIP(sender, from)) {
    await sock.sendMessage(from, { text: '🔐 Perintah ini hanya untuk Owner atau VIP.' }, { quoted: msg });
    return;
  }

  const args = text.trim().split(/\s+/);
  const jumlah = parseInt(args[1]);

  if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
    await sock.sendMessage(from, {
      text: '❗ Gunakan format: *.allskor <jumlah>*'
    }, { quoted: msg });
    return;
  }

  const metadata = await sock.groupMetadata(from);
  const groupMembers = metadata.participants.map(p => p.id);
  const pengirim = sender;

  if (!skorUser[from]) skorUser[from] = {};

  const diberikanKe = [];

  for (const id of groupMembers) {
    if (id === BOT_NUMBER) continue; // lewati bot
    if (!skorUser[from][id]) skorUser[from][id] = 0;
    skorUser[from][id] += jumlah;
    diberikanKe.push(id);
  }

  simpanSkorKeFile();

  // Kirim hasil
  let teks = `🎁 *SKOR TELAH DIKIRIM KE SEMUA MEMBER*\n━━━━━━━━━━━━━━━━━━\n`;
  teks += `📤 Pengirim: @${pengirim.split('@')[0]}\n📦 Jumlah: *+${jumlah}* ke setiap member\n👥 Total Penerima: *${diberikanKe.length} orang*\n\n📋 *Daftar:*\n`;

  const preview = diberikanKe.slice(0, 10);
  preview.forEach((id, i) => {
    teks += `• ${i + 1}. @${id.split('@')[0]}\n`;
  });

  if (diberikanKe.length > 10) {
    teks += `\n...dan ${diberikanKe.length - 10} lainnya`;
  }

  await sock.sendMessage(from, {
    text: teks,
    mentions: [pengirim, ...diberikanKe]
  }, { quoted: msg });
}


if (body.startsWith('.listskor')) {
  if (!isVIP(sender, from) && !hasTemporaryFeature(sender, 'listskor')) {
    await sock.sendMessage(from, {
      text: '❌ Perintah hanya bisa digunakan *Owner* dan *VIP*.'
    }, { quoted: msg });
    return;
  }

  if (!isGroup) {
    await sock.sendMessage(from, {
      text: '❌ Perintah ini hanya bisa digunakan di dalam grup.'
    }, { quoted: msg });
    return;
  }

  const groupMetadata = await sock.groupMetadata(from);
  const groupMembers = groupMetadata.participants.map(p => normalizeJid(p.id));

  const skorGrup = skorUser[from] || {};
  const rankGrup = rankUser[from] || {};

  const skorKeys = groupMembers.filter(jid => skorGrup[jid] !== undefined || rankGrup[jid] !== undefined);

  if (skorKeys.length === 0) {
    await sock.sendMessage(from, {
      text: '📊 Belum ada data skor/rank.'
    }, { quoted: msg });
    return;
  }

  // Urutkan: Level dulu → Skor
  const sorted = skorKeys.sort((a, b) => {
    const lvlA = rankGrup[a]?.level || 1;
    const lvlB = rankGrup[b]?.level || 1;
    if (lvlB !== lvlA) return lvlB - lvlA;
    return (skorGrup[b] || 0) - (skorGrup[a] || 0);
  });

  let teks = `╔══ 📊 *DAFTAR SKOR & LEVEL* 📊 ══╗\n`;

  const normOwner = normalizeJid(OWNER_NUMBER);
  if (groupMembers.includes(normOwner)) {
    const skorOwner = skorGrup[normOwner] || 0;
    const lvlOwner = rankGrup[normOwner]?.level || 1;
    teks += `║ 👑 Owner : @${normOwner.split('@')[0]} → *${skorOwner} poin* | Lv.${lvlOwner}\n`;
  }

  let count = 1;
  for (const jid of sorted) {
    if (jid === normOwner) continue;
    const skor = skorGrup[jid] || 0;
    const lvl = rankGrup[jid]?.level || 1;
    teks += `║ ${count++}. @${jid.split('@')[0]} → *${skor} poin* | Lv.${lvl}\n`;
  }

  teks += `╚═════════════════════════╝`;

  await sock.sendMessage(from, {
    text: teks,
    mentions: [normOwner, ...sorted.filter(jid => jid !== normOwner)]
  }, { quoted: msg });
}

if (body.startsWith('.listvip')) {
  if (!isVIP(sender, from) && !hasTemporaryFeature(sender, 'listvip')) {
    await sock.sendMessage(from, {
      text: '❌ Perintah hanya bisa digunakan *Owner* dan *VIP*.'
    }, { quoted: msg });
    return;
  }

  if (!isGroup) {
    await sock.sendMessage(from, {
      text: '❌ Perintah hanya bisa digunakan di grup.' 
    }, { quoted: msg });
    return;
  }

  const metadata = await sock.groupMetadata(from);
  const groupMembers = metadata.participants.map(p => normalizeJid(p.id));

  const normOwner = normalizeJid(OWNER_NUMBER);

  const allVIP = (vipList[from] || []).filter(jid => groupMembers.includes(jid));
  const vipLain = allVIP.filter(jid => jid !== normOwner);

  let teks = `╔══ 🎖️ *DAFTAR VIP* 🎖️ ══╗\n`;

  if (groupMembers.includes(normOwner)) {
    teks += `║ 👑 Owner : @${normOwner.split('@')[0]}\n`;
  }

  if (vipLain.length === 0) {
    teks += `║\n║ Belum ada VIP di grup ini.\n`;
  } else {
    vipLain.forEach((jid, i) => {
      teks += `║ ${i + 1}. @${jid.split('@')[0]}\n`;
    });
  }

  teks += `╚═══════════════════╝`;

  const mentions = [...vipLain];
  if (!mentions.includes(normOwner) && groupMembers.includes(normOwner)) {
    mentions.push(normOwner);
  }

  await sock.sendMessage(from, {
    text: teks,
    mentions
  }, { quoted: msg });
}

// .setvip
if (body.startsWith('.setvip')) {
  const args = body.trim().split(/\s+/);

  // ✅ Mode Owner khusus: ".setvip 62xxx"
  if (isOwner(sender) && args[1] && !isGroup) {
    const nomor = args[1].replace(/[^0-9]/g, '');
    if (!nomor) {
      await sock.sendMessage(from, {
        text: '❌ Format salah!\nGunakan: *.setvip 62xxx*'
      }, { quoted: msg });
      return;
    }

    const target = normalizeJid(nomor + '@s.whatsapp.net');
    const groupId = "vip-pribadi";

    if (!vipList[groupId]) vipList[groupId] = [];
    if (vipList[groupId].includes(target)) {
      await sock.sendMessage(from, {
        text: `⚠️ @${target.split('@')[0]} sudah VIP.`,
        mentions: [target]
      }, { quoted: msg });
      return;
    }

    vipList[groupId].push(target);
    saveVIP();

    // 🔥 Tambahan: kirim chat pribadi ke VIP
    await sock.sendMessage(target, {
      text: `🎉 Halo! Kamu sekarang adalah VIP pribadi.`
    });

    await sock.sendMessage(from, {
      text: `✅ @${target.split('@')[0]} sekarang adalah *VIP* dan chat pribadi sudah dibuat.`,
      mentions: [target]
    }, { quoted: msg });
    return;
  }

  // ✅ Mode Grup biasa (tidak diubah sama sekali)
  if (!isGroup) {
    await sock.sendMessage(from, {
      text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    }, { quoted: msg });
    return;
  }

  if (!isVIP(sender, from)) {
    await sock.sendMessage(from, {
      text: '❌ Hanya VIP atau Owner yang bisa menambahkan VIP.'
    }, { quoted: msg });
    return;
  }

  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
  if (!mentioned || mentioned.length === 0) {
    await sock.sendMessage(from, {
      text: '❌ Tag orang yang mau dijadikan VIP.\nContoh: *.setvip @user*'
    }, { quoted: msg });
    return;
  }

  const target = normalizeJid(mentioned[0]);

  if ((vipList[from] || []).includes(target)) {
    await sock.sendMessage(from, {
      text: `⚠️ @${target.split('@')[0]} sudah VIP.`,
      mentions: [target]
    }, { quoted: msg });
    return;
  }

  if (!vipList[from]) vipList[from] = [];
  vipList[from].push(target);
  saveVIP();

  await sock.sendMessage(from, {
    text: `✅ @${target.split('@')[0]} sekarang adalah *VIP*!`,
    mentions: [target]
  }, { quoted: msg });
}



// .allvip
if (body.startsWith('.allvip') && isGroup) {
  if (!isOwner(sender)) {
    return sock.sendMessage(from, {
      text: '❌ Perintah ini hanya bisa digunakan oleh *Owner Bot*!'
    }, { quoted: msg });
  }

  try {
    const metadata = await sock.groupMetadata(from);
    const groupMembers = metadata.participants.map(p => p.id);

    if (!vipList[from]) vipList[from] = [];

    const ditambahkan = [];
    for (const id of groupMembers) {
      if (id === BOT_NUMBER) continue; // skip bot
      if (!vipList[from].includes(id)) {
        vipList[from].push(id);
        ditambahkan.push(id);
      }
    }

    saveVIP();

    // bikin teks laporan
    let teks = `👑 *SEMUA ANGGOTA GRUP JADI VIP!*\n━━━━━━━━━━━━━━━━━━\n`;
    teks += `📌 Grup: *${metadata.subject}*\n👥 Total Member: *${groupMembers.length}*\n✅ Ditambahkan: *${ditambahkan.length} user*\n\n📋 *Daftar VIP Baru:*\n`;

    const preview = ditambahkan.slice(0, 10);
    preview.forEach((id, i) => {
      teks += `• ${i + 1}. @${id.split('@')[0]}\n`;
    });

    if (ditambahkan.length > 10) {
      teks += `\n...dan ${ditambahkan.length - 10} lainnya`;
    }

    await sock.sendMessage(from, {
      text: teks,
      mentions: ditambahkan
    }, { quoted: msg });

  } catch (err) {
    console.error('Error .allvip:', err);
    await sock.sendMessage(from, {
      text: '❌ Gagal menjadikan semua anggota VIP.'
    }, { quoted: msg });
  }
}

// .unsetvip (versi grup & owner global)
if (body.startsWith('.unsetvip')) {
  const args = body.trim().split(/\s+/);

  // ✅ MODE KHUSUS OWNER — hapus VIP global lewat private
  if (isOwner(sender) && args[1] && !isGroup) {
    const nomor = args[1].replace(/[^0-9]/g, '');
    if (!nomor) {
      await sock.sendMessage(from, {
        text: '❌ Format salah!\nGunakan: *.unsetvip 62xxx*'
      }, { quoted: msg });
      return;
    }

    const target = normalizeJid(nomor + '@s.whatsapp.net');
    const groupId = "vip-pribadi";

    if (!vipList[groupId] || !vipList[groupId].includes(target)) {
      await sock.sendMessage(from, {
        text: `⚠️ @${target.split('@')[0]} tidak ada di daftar *VIP Global*.`,
        mentions: [target]
      }, { quoted: msg });
      return;
    }

    vipList[groupId] = vipList[groupId].filter(jid => jid !== target);
    saveVIP();

    await sock.sendMessage(from, {
      text: `🗑️ @${target.split('@')[0]} berhasil dihapus dari *VIP Global*!`,
      mentions: [target]
    }, { quoted: msg });
    return;
  }

  // ✅ MODE GRUP (punya kamu sebelumnya)
  if (!isGroup) {
    await sock.sendMessage(from, {
      text: '❌ Fitur ini hanya bisa digunakan di dalam grup.'
    }, { quoted: msg });
    return;
  }

  if (!isVIP(sender, from)) {
    return sock.sendMessage(from, {
      text: '❌ Hanya VIP atau Owner yang bisa menghapus VIP.'
    }, { quoted: msg });
  }

  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
  if (!mentioned || mentioned.length === 0) {
    return sock.sendMessage(from, {
      text: '❌ Tag orang yang mau dihapus dari VIP.\nContoh: *.unsetvip @user*'
    }, { quoted: msg });
  }

  const target = normalizeJid(mentioned[0]);

  if (target === OWNER_NUMBER) {
    return sock.sendMessage(from, {
      text: `🚫 Owner tidak bisa dihapus dari VIP!`
    }, { quoted: msg });
  }

  if (!vipList[from] || !vipList[from].includes(target)) {
    return sock.sendMessage(from, {
      text: `⚠️ @${target.split('@')[0]} bukan VIP.`,
      mentions: [target]
    }, { quoted: msg });
  }

  vipList[from] = vipList[from].filter(jid => jid !== target);
  saveVIP();

  return sock.sendMessage(from, {
    text: `🗑️ @${target.split('@')[0]} berhasil dihapus dari *VIP Grup*!`,
    mentions: [target]
  }, { quoted: msg });
}

// .clearvip
if (body.startsWith('.clearvip') && isGroup) {
  if (!isOwner(sender)) {
    return sock.sendMessage(from, {
      text: '❌ Perintah ini hanya bisa digunakan oleh *Owner Bot*!'
    }, { quoted: msg });
  }

  if (!vipList[from] || vipList[from].length === 0) {
    return sock.sendMessage(from, {
      text: '⚠️ Tidak ada VIP di grup ini.'
    }, { quoted: msg });
  }

  const total = vipList[from].length;
  vipList[from] = []; // hapus semua VIP
  saveVIP();

  const metadata = await sock.groupMetadata(from);

  let teks = `🗑️ *CLEAR VIP*\n`;
  teks += `━━━━━━━━━━━━━━━━━━\n`;
  teks += `👥 Grup   : *${metadata.subject}*\n`;
  teks += `📦 Status : Semua VIP berhasil dihapus\n`;
  teks += `❌ Jumlah : ${total} anggota\n`;
  teks += `━━━━━━━━━━━━━━━━━━\n`;
  teks += `✨ Sekarang tidak ada anggota VIP di grup ini.`

  await sock.sendMessage(from, { text: teks }, { quoted: msg });
}


// 🔒 KICK – Hanya untuk VIP
if (text.startsWith('.kick')) {

     const sender = normalizeJid(msg.key.participant || msg.key.remoteJid);


    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from) && !hasTemporaryFeature(sender, 'kick')) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh VIP atau beli.' });
        return;
    }



    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quotedMsg?.mentionedJid;

    if (!mentionedJid || mentionedJid.length === 0) {
        await sock.sendMessage(from, {
            text: '❗ Tag orang yang ingin dikeluarkan.\nContoh: *.kick @users*',
            mentions: []
        });
        return;
    }

    for (const target of mentionedJid) {
        if (ALIAS_BOT[target]) {
        await sock.sendMessage(from, {
            text: '🤖 Bot tidak bisa mengeluarkan dirinya sendiri.',
            mentions: [target]
        });
        continue;
    }

    if (ALIAS_OWNER[target]) {
        await sock.sendMessage(from, {
            text: '👑 Tidak bisa mengeluarkan Owner!',
            mentions: [target]
        });
        continue;
    }


        try {
            await sock.groupParticipantsUpdate(from, [target], 'remove');
            await sock.sendMessage(from, {
                text: `✅ Berhasil mengeluarkan @${target.split('@')[0]}`,
                mentions: [target]
            });
        } catch (err) {
            console.error('❌ Gagal mengeluarkan:', err);
            await sock.sendMessage(from, {
                text: `❌ Gagal mengeluarkan @${target.split('@')[0]}.\nPastikan bot adalah admin dan user masih di grup.`,
                mentions: [target]
            });
        }
    }
}

if (text.startsWith('.setskor')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

        if (!isVIP(sender, from) && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Perintah ini hanya untuk pengguna *VIP*.'
        });
        return;
    }

    const args = text.trim().split(/\s+/);
    const angka = parseInt(args[2] || args[1]); // Bisa .setskor @user 100 atau .setskor 100

    const quoted = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quoted?.mentionedJid?.[0];
    const target = mentionedJid || quoted?.participant || (args[1]?.startsWith('@') ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);

    const targetJid = target || sender;

    if (targetJid === OWNER_NUMBER && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Tidak bisa mengubah skor *Owner*!'
        });
        return;
    }

    if (isNaN(angka)) {
        await sock.sendMessage(from, {
            text: `❗ Format salah!\nGunakan: *.setskor 100* atau *.setskor @user 100*`
        });
        return;
    }

    const groupId = msg.key.remoteJid; // atau `from` kalau sudah kamu buat
if (!skorUser[groupId]) skorUser[groupId] = {};
skorUser[groupId][targetJid] = angka;
simpanSkorKeFile();

    simpanSkorKeFile();

    await sock.sendMessage(from, {
        text: `✅ *Skor berhasil diatur!*\n\n👤 Pengguna: @${targetJid.split('@')[0]}\n🎯 Skor: *${angka} poin*\n🛡️ Oleh: @${sender.split('@')[0]}`,
        mentions: [targetJid, sender],
    });
}

if (text.startsWith('.setexp')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from) && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Perintah ini hanya untuk pengguna *VIP* atau Owner*.'
        });
        return;
    }

    const args = text.trim().split(/\s+/);
    const angka = parseInt(args[2] || args[1]); // Bisa .setexp @user 200 atau .setexp 200

    const quoted = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quoted?.mentionedJid?.[0];
    const target = mentionedJid || quoted?.participant || (args[1]?.startsWith('@') ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);

    const targetJid = target || sender;

    if (targetJid === OWNER_NUMBER && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Tidak bisa mengubah EXP *Owner*!'
        });
        return;
    }

    if (isNaN(angka)) {
        await sock.sendMessage(from, {
            text: `❗ Format salah!\nGunakan: *.setexp 200* atau *.setexp @user 200*`
        });
        return;
    }

    if (!rankUser[from]) rankUser[from] = {};
    if (!rankUser[from][targetJid]) rankUser[from][targetJid] = { xp: 0, level: 1 };

    // 🔥 Set XP baru
    rankUser[from][targetJid].xp = angka;

    // 🔥 Cek level berdasarkan XP
    let currentLevel = rankUser[from][targetJid].level;
    let currentXP = rankUser[from][targetJid].xp;
    let neededXP = currentLevel * 100;

    while (currentXP >= neededXP) {
        currentLevel++;
        neededXP = currentLevel * 100;
    }

    rankUser[from][targetJid].level = currentLevel;

    saveRank();

    await sock.sendMessage(from, {
        text: `✅ *EXP berhasil diatur!*\n\n👤 Pengguna: @${targetJid.split('@')[0]}\n⚡ XP: *${angka}*\n⭐ Level: *${currentLevel}*\n🛡️ Oleh: @${sender.split('@')[0]}`,
        mentions: [targetJid, sender],
    });
}


if (text.startsWith('.setlevel')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from) && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Perintah ini hanya untuk pengguna *VIP* atau *Owner*.'
        });
        return;
    }

    const args = text.trim().split(/\s+/);
    const angka = parseInt(args[2] || args[1]); // Bisa .setlevel @user 5 atau .setlevel 5

    const quoted = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quoted?.mentionedJid?.[0];
    const target = mentionedJid || quoted?.participant || (args[1]?.startsWith('@') ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);

    const targetJid = target || sender;

    if (targetJid === OWNER_NUMBER && sender !== OWNER_NUMBER) {
        await sock.sendMessage(from, {
            text: '🚫 Tidak bisa mengubah Level *Owner*!'
        });
        return;
    }

    if (isNaN(angka)) {
        await sock.sendMessage(from, {
            text: `❗ Format salah!\nGunakan: *.setlevel 5* atau *.setlevel @user 5*`
        });
        return;
    }

    if (!rankUser[from]) rankUser[from] = {};
    if (!rankUser[from][targetJid]) rankUser[from][targetJid] = { xp: 0, level: 1 };

    rankUser[from][targetJid].level = angka;
    saveRank();

    await sock.sendMessage(from, {
        text: `✅ *Level berhasil diatur!*\n\n👤 Pengguna: @${targetJid.split('@')[0]}\n⭐ Level: *${angka}*\n🛡️ Oleh: @${sender.split('@')[0]}`,
        mentions: [targetJid, sender],
    });
}


if (text.startsWith('.mute')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from) && !hasTemporaryFeature(sender, 'mute')) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh VIP atau beli.' });
        return;
    }

    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quotedMsg?.mentionedJid?.[0] || quotedMsg?.participant;

    if (!mentionedJid) {
        await sock.sendMessage(from, {
            text: '❌ Tag atau reply pengguna yang ingin dimute.\nContoh: *.mute @user*',
        });
        return;
    }

   if (ALIAS_OWNER[mentionedJid] || ALIAS_BOT[mentionedJid]) {
    await sock.sendMessage(from, {
        text: '❌ Tidak bisa mute Owner atau Bot.'
    });
    return;
}

    // ✅ Panggil fungsi yang kamu buat
    muteUser(mentionedJid, from);

    await sock.sendMessage(from, {
        text: `🔇 @${mentionedJid.split('@')[0]} telah dimute.`,
        mentions: [mentionedJid]
    });

    console.log('📁 File muted.json sekarang:', JSON.stringify(mutedUsers, null, 2));
}

if (text.startsWith('.unmute')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from) && !hasTemporaryFeature(sender, 'unmute')) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh VIP atau beli.' });
        return;
    }

    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo;
    const mentionedJid = quotedMsg?.mentionedJid?.[0] || quotedMsg?.participant;

    if (!mentionedJid) {
        await sock.sendMessage(from, {
            text: '❌ Tag atau reply pengguna yang ingin di-unmute.\nContoh: *.unmute @user*',
        });
        return;
    }

    if (isMuted(mentionedJid, from)) {
        unmuteUser(mentionedJid, from);
        await sock.sendMessage(from, {
            text: `✅ @${mentionedJid.split('@')[0]} telah di-unmute dari grup ini.`,
            mentions: [mentionedJid]
        });
    } else {
        await sock.sendMessage(from, { text: '⚠️ User ini tidak sedang dimute di grup ini.' });
    }
}

                // ✅ FITUR TEBAK-AKU
    const textMessage = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';

    if (textMessage.toLowerCase() === '.tebak-aku') {
    const soal = ambilSoalAcak('tebakaku', soalTebakan);

    const sent = await sock.sendMessage(from, {
        text: `🎮 *TEBAK-TEBAKAN DIMULAI!*\n\n🧠 *Soal:* _${soal.soal}_\n\n⏱️ Jawab dalam 30 detik!\n\n_Reply pesan ini untuk menjawab._`
    });

    const timeout = setTimeout(() => {
        sesiTebakan.delete(sent.key.id);
        sock.sendMessage(from, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${soal.jawaban}*`
        });
    }, 30000);

    sesiTebakan.set(sent.key.id, { jawaban: soal.jawaban.toLowerCase(), timeout });
    return;
}

// 🧠 Cek jawaban berdasarkan reply
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const replyId = msg.message.extendedTextMessage.contextInfo.stanzaId;
    const sesi = sesiTebakan.get(replyId);

    if (sesi) {
        clearTimeout(sesi.timeout);
        sesiTebakan.delete(replyId);

        const userAnswer = textMessage.trim().toLowerCase();
        if (userAnswer === sesi.jawaban) {
            tambahSkor(sender, from, 25);
            await sock.sendMessage(from, {
                text: `✅ *Benar!* Jawabanmu adalah *${userAnswer}* 🎉\n🏆 Kamu mendapatkan *25 poin!*\n\nMau lagi? Ketik *.tebak-aku*`
        });

        } else {
            await sock.sendMessage(from, {
                text: `❌ *Salah!* Jawabanmu: *${userAnswer}*\n✅ Jawaban benar: *${sesi.jawaban}*\n\nCoba lagi? Ketik *.tebak-aku*`
            });
        }
        return;
    }
}


// Command tebak-bendera
if (textMessage.toLowerCase() === '.tebakbendera') {
    const soal = ambilSoalAcak('tebakbendera', soalBendera);

    const sent = await sock.sendMessage(from, {
        text: `🎌 *TEBAK BENDERA DIMULAI!*\n\n🏳️ *Bendera:* ${soal.soal}\n\n⏱️ Jawab dalam 30 detik!\n\n_Reply pesan ini untuk menjawab._`
    });

    const timeout = setTimeout(() => {
        sesiTebakBendera.delete(sent.key.id);
        sock.sendMessage(from, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${soal.jawaban}*`
        });
    }, 30000);

    sesiTebakBendera.set(sent.key.id, { jawaban: soal.jawaban.toLowerCase(), timeout });
    return;
}

// 🧠 Cek jawaban tebak-bendera
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const replyId = msg.message.extendedTextMessage.contextInfo.stanzaId;
    const sesi = sesiTebakBendera.get(replyId);

    if (sesi) {
        clearTimeout(sesi.timeout);
        sesiTebakBendera.delete(replyId);

        const userAnswer = textMessage.trim().toLowerCase();
        if (userAnswer === sesi.jawaban) {
            tambahSkor(sender, from, 30);
            await sock.sendMessage(from, {
                text: `✅ *Benar!* Itu adalah bendera *${userAnswer}* 🎉\n🏆 Kamu dapat *30 poin!*\n\n mau lagi? Ketik *.tebakbendera*`
            });
        } else {
            await sock.sendMessage(from, {
                text: `❌ *Salah!* Jawabanmu: *${userAnswer}*\n✅ Jawaban benar: *${sesi.jawaban}*\n\nCoba lagi? Ketik *.tebakbendera*`
            });
        }
        return;
    }
}

        if (text.trim() === '.kuis') {
    const soal = ambilSoalAcak('kuis', soalKuis);
    const teksSoal = `🎓 *KUIS DIMULAI!*\n\n📌 *Soal:* ${soal.soal}\n\n${soal.pilihan.join('\n')}\n\n✍️ Jawab dengan huruf A/B/C/D dengan mereply pesan ini\n⏱️ Waktu 30 detik!`;

    const sent = await sock.sendMessage(from, { text: teksSoal });

    const timeout = setTimeout(() => {
        sesiKuis.delete(sent.key.id);
        sock.sendMessage(from, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${soal.jawaban}*`
        });
    }, 30000);

    sesiKuis.set(sent.key.id, { jawaban: soal.jawaban.toUpperCase(), timeout });
    return;
}

if (text.trim() === '.kuissusah') {
    const soal = ambilSoalAcak('kuissusah', soalKuisSusah);
    const teksSoal = `🎓 *KUIS SUSAH DIMULAI!*\n\n📌 *Soal:* ${soal.soal}\n\n${soal.pilihan.join('\n')}\n\n✍️ Jawab dengan huruf A/B/C/D/E/F dengan mereply pesan ini\n⏱️ Waktu 10 detik!`;

    const sent = await sock.sendMessage(from, { text: teksSoal });
    const timeout = setTimeout(() => {
    sesiKuisSusah.delete(sent.key.id);

    // Kurangi skor jika waktu habis
    const idUser = normalizeJid(sender);
    if (!skorUser[from]) skorUser[from] = {};
    const skorSekarang = skorUser[from][idUser] || 0;
    const skorBaru = skorSekarang - 60;
    skorUser[from][idUser] = skorBaru;
    simpanSkorKeFile();
    
        sock.sendMessage(from, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${soal.jawaban}*\n❌ Skor kamu dikurangi -60`
        });
    }, 10000);

    sesiKuisSusah.set(sent.key.id, { jawaban: soal.jawaban.toUpperCase(), timeout, idUser: sender });
    return;
}

// 🔍 CEK SEMUA JAWABAN KUIS (biasa & susah)
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const replyId = msg.message.extendedTextMessage.contextInfo.stanzaId;

    // 🔸 Cek dulu kuis biasa
    if (sesiKuis.has(replyId)) {
        const sesi = sesiKuis.get(replyId);
        clearTimeout(sesi.timeout);
        sesiKuis.delete(replyId);

        const userAnswer = text.trim().toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(userAnswer)) {
            if (userAnswer === sesi.jawaban) {
                tambahSkor(sender, from, 20);
                await sock.sendMessage(from, {
                    text: `✅ *Benar!* Jawabanmu adalah *${userAnswer}* 🎉\n🏆 Kamu mendapatkan *+20 poin!*\n\nMau lagi? Ketik *.kuis*`
                });
            } else {
                await sock.sendMessage(from, {
                    text: `❌ *Salah!* Jawabanmu: *${userAnswer}*\n✅ Jawaban benar: *${sesi.jawaban}*\nKetik *.kuis* untuk mencoba lagi.`
                });
            }
        }
        return;
    }

    // 🔸 Cek kuis SUSAH
    if (sesiKuisSusah.has(replyId)) {
        const sesi = sesiKuisSusah.get(replyId);
        clearTimeout(sesi.timeout);
        sesiKuisSusah.delete(replyId);

        const userAnswer = text.trim().toUpperCase();
        if (['A', 'B', 'C', 'D', 'E', 'F'].includes(userAnswer)) {
            if (userAnswer === sesi.jawaban) {
                tambahSkor(sender, from, 50);
                await sock.sendMessage(from, {
                    text: `✅ *Benar!* Jawabanmu adalah *${userAnswer}* 🎉\n🏆 Kamu mendapatkan *+50 poin!*\n\nMau coba lagi? Ketik *.kuissusah*`
                });
            } else {
                tambahSkor(sender, from, -50); // kurangi 50
                await sock.sendMessage(from, {
                    text: `❌ *Salah!* Jawabanmu: *${userAnswer}*\n✅ Jawaban benar: *${sesi.jawaban}*\n💥 *-50 poin!* Karena jawabanmu salah\n\n Ketik *.kuissusah* untuk mencoba lagi.`
                });
            }
        }
        return;
    }
}

if (text.trim() === '.susunkata') {
    const kata = ambilSoalAcak('susunkata', soalSusunKata);
    const acak = kata.split('').sort(() => Math.random() - 0.5).join('');

    const sent = await sock.sendMessage(from, {
        text: `🎮 *SUSUN KATA DIMULAI!*\n\n🔤 Huruf Acak: _${acak}_\n\n⏱️ Susun huruf menjadi kata yang benar dalam 30 detik!\n_Reply pesan ini untuk menjawab._`
    });

    const timeout = setTimeout(() => {
        sesiSusunKata.delete(sent.key.id);
        sock.sendMessage(from, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${kata}*`
        });
    }, 30000);

    sesiSusunKata.set(sent.key.id, { jawaban: kata.toLowerCase(), timeout });
    return;
}

// ✅ CEK JAWABAN SUSUN KATA (Reply)
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const replyId = msg.message.extendedTextMessage.contextInfo.stanzaId;
    const sesi = sesiSusunKata.get(replyId);

    if (sesi) {
        clearTimeout(sesi.timeout);
        sesiSusunKata.delete(replyId);

        const jawabanUser = text.trim().toLowerCase();
        if (jawabanUser === sesi.jawaban) {
             tambahSkor(sender, from, 20);
            await sock.sendMessage(from, {
                text: `✅ *Benar!* Jawabanmu adalah *${jawabanUser}* 🎉\n🏆 Kamu mendapatkan *20 poin!*\n\nMau lagi? Ketik *.susunkata*`
            });
        } else {
            await sock.sendMessage(from, {
                text: `❌ *Salah!* Jawabanmu: *${jawabanUser}*\n✅ Jawaban benar: *${sesi.jawaban}*\n\nCoba lagi? Ketik *.susunkata*`
            });
        }
        return;
    }
}
if (text === '.family100') {
    if (sesiFamily100.has(from)) {
        await sock.sendMessage(from, {
            text: `⚠️ *Permainan Sedang Berlangsung!*\n━━━━━━━━━\nMohon selesaikan permainan sebelumnya terlebih dahulu.\nBalas (reply) pertanyaan yang muncul untuk menjawab.`
        });
        return;
    }

    const soal = ambilSoalAcak('family100', soalFamily100);
    const kosong = soal.jawaban.map((_, i) => `*${i + 1}.*`).join("\n");

    const pesanPertanyaan = `🎮 *Family 100 Dimulai!*\n━━━━━━━━━\n🧠 *Pertanyaan:*\n${soal.pertanyaan}\n\n📋 *Jawaban:*\n${kosong}\n\n⏳ *Waktu:* 60 detik\n↩️ *Balas pesan ini untuk menjawab.*`;

    const sent = await sock.sendMessage(from, { text: pesanPertanyaan });

    const timeout = setTimeout(async () => {
        const sesi = sesiFamily100.get(from);
        if (!sesi) return;

        const jawabanBenar = soalFamily100.find(s => s.pertanyaan === sesi.pertanyaan).jawaban;

        const jawabanAkhir = jawabanBenar.map((j, i) => {
            const user = sesi.jawabanLolos[i];
            if (user) {
                return `*${i + 1}.* ✅ ${j} (@${user.split('@')[0]})`;
            } else {
                return `*${i + 1}.* ❌ ${j}`;
            }
        }).join("\n");

        await sock.sendMessage(from, {
            text: `⏱️ *Waktu Habis!*\n🎉 *Family 100 Selesai!*\n━━━━━━━━━\n🧠 *Pertanyaan:*\n${sesi.pertanyaan}\n\n📋 *Jawaban Lengkap:*\n${jawabanAkhir}\n\n🎊 Terima kasih telah bermain!`,
            mentions: sesi.jawabanLolos.filter(Boolean)
        });

        sesiFamily100.delete(from);
    }, 60000);

    sesiFamily100.set(from, {
        pesanId: sent.key.id,
        pertanyaan: soal.pertanyaan,
        jawaban: Array(soal.jawaban.length).fill(null),
        jawabanLolos: Array(soal.jawaban.length).fill(null),
        timeout
    });

    return;
}

// 🔹 Tangani jawaban
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const sesi = sesiFamily100.get(from);
    if (sesi && msg.message.extendedTextMessage.contextInfo.stanzaId === sesi.pesanId) {
        const userJawab = text.trim().toLowerCase();
        const sender = msg.key.participant || msg.key.remoteJid;

        const index = soalFamily100.find(s => s.pertanyaan === sesi.pertanyaan)
            .jawaban.findIndex(j => j.toLowerCase() === userJawab);

        if (index !== -1 && !sesi.jawaban[index]) {
            sesi.jawaban[index] = soalFamily100.find(s => s.pertanyaan === sesi.pertanyaan).jawaban[index];
            sesi.jawabanLolos[index] = sender; // simpan full JID

            tambahSkor(sender, from, 20);

            const isi = sesi.jawaban.map((j, i) => {
                if (j) {
                    return `*${i + 1}.* ✅ ${j} (@${sesi.jawabanLolos[i].split('@')[0]})`;
                } else {
                    return `*${i + 1}.*`;
                }
            }).join("\n");

            await sock.sendMessage(from, {
                text: `🎮 *Jawaban Diterima!*\n━━━━━━━━━\n🧠 *Pertanyaan:* ${sesi.pertanyaan}\n\n📋 *Jawaban Saat Ini:*\n${isi}\n\n✅ *Jawaban "${userJawab}" benar!*\n🎁 +20 poin untuk @${sender.split('@')[0]}\n↩️ Balas pesan ini untuk menjawab.`,
                mentions: [sender]
            });

            if (sesi.jawaban.every(j => j !== null)) {
                clearTimeout(sesi.timeout);
                sesiFamily100.delete(from);
                await sock.sendMessage(from, {
                    text: `🎉 *Family 100 Selesai!*\n📢 *Pertanyaan:* ${sesi.pertanyaan}\n\n📋 *Jawaban Akhir:*\n${isi}\n\n🎊 Terima kasih sudah bermain!`
                });
            }
        } else {
            const isi = sesi.jawaban.map((j, i) => {
            if (j) {
                const user = sesi.jawabanLolos[i];
                return user
                    ? `*${i + 1}.* ✅ ${j} (@${user.split('@')[0]})`
                    : `*${i + 1}.* ✅ ${j}`;
            } else {
                return `*${i + 1}.*`;
            }
        }).join("\n");

            await sock.sendMessage(from, {
                text: `🚫 *Jawaban Salah!*\n━━━━━━━━━\n🧠 *Pertanyaan:* ${sesi.pertanyaan}\n\n📋 *Jawaban Saat Ini:*\n${isi}\n\n❌ *"${userJawab}" tidak ada dalam daftar jawaban.*\n↩️ Balas pesan ini untuk menjawab.`,
                mentions: [sender]
            });
        }
        return;
    }
}


if (text.startsWith('.judi')) {
    const args = text.trim().split(/\s+/);
    const taruhan = parseInt(args[1]);
    const roomKey = from;
    const realJid = normalizeJid(sender);
    const skor = skorUser[roomKey]?.[realJid] || 0;

    // 📛 Validasi input
    if (isNaN(taruhan) || taruhan <= 0) {
        await sock.sendMessage(from, {
            text: `🎰 *FORMAT SALAH*\n━━━━━━━━━━━━━━━\nGunakan format:\n> *.judi <jumlah>*\n\n💡 Contoh: *.judi 50*`
        });
        return;
    }

    if (skor < taruhan) {
        await sock.sendMessage(from, {
            text: `🚫 *Skor kamu tidak cukup!*\n━━━━━━━━━━━━━━━\n📉 Skor saat ini: *${skor} poin*\n💰 Taruhan: *${taruhan} poin*\n\n💡 Kumpulkan skor dulu lewat *tantangan atau game!*`
        });
        return;
    }

    // 🎡 daftar simbol
    const simbol = ['🍒', '🍋', '🍀', '💎', '🍇', '💰', '7️⃣'];

    // fungsi random slot
    const acakSlot = () => [
        simbol[Math.floor(Math.random() * simbol.length)],
        simbol[Math.floor(Math.random() * simbol.length)],
        simbol[Math.floor(Math.random() * simbol.length)]
    ];

    // 🔁 spin animasi
    const pesanAwal = await sock.sendMessage(from, {
        text: `🎰 *MESIN SLOT AKTIF!*  
━━━━━━━━━━━━━━━  
💵 Taruhan: *${taruhan} poin*  
🕹️ Menarik tuas... 🎲  

🎡 [ 🍒 🍋 💎 ]`,
        mentions: [sender]
    });

    // animasi 3x edit
    for (let i = 1; i <= 3; i++) {
        await new Promise(r => setTimeout(r, 1200));
        const spin = acakSlot();
        await sock.sendMessage(from, {
            edit: pesanAwal.key,
            text: `🎰 *MESIN SLOT BERPUTAR...*  
━━━━━━━━━━━━━━━  
💵 Taruhan: *${taruhan} poin*  
🌀 Putaran ke ${i}...  

🎡 [ ${spin.join(' ')} ]`
        });
        if (i === 3) var spinAkhir = spin; // hasil terakhir
    }

    await new Promise(r => setTimeout(r, 1000));

    // 🎯 hasil akhir (chat baru, bukan edit)
    const [a, b, c] = spinAkhir;
    let hasilText = '';
    let perubahan = 0;

    if (a === b && b === c) {
        // JACKPOT
        if (a === '7️⃣') {
            perubahan = taruhan * 10;
            hasilText = `💎💎💎 *JACKPOT 777!!!* 💎💎💎\n🎉 +${perubahan} poin 💰💰💰\n🔥 Mesin sampe ngebul, gokil banget!`;
        } else {
            perubahan = taruhan * 5;
            hasilText = `🎯 *TIGA SIMBOL SAMA!* 🎯\n✨ +${perubahan} poin!\n🍀 Kamu lagi hoki berat nih!`;
        }
    } else if (a === b || b === c || a === c) {
        // MENANG KECIL
        perubahan = taruhan * 2;
        hasilText = `🍀 *MENANG KECIL!* 🍀\n🎁 +${perubahan} poin`;
    } else {
        // KALAH
        const chance = Math.random() * 100;
        if (chance < 80) {
            perubahan = -taruhan;
            hasilText = `💔 *KALAH TIPIS!* 💔\n📉 -${Math.abs(perubahan)} poin`;
        } else {
            perubahan = -(taruhan * 2);
            hasilText = `☠️ *RUNGKAT PARAH!* ☠️\n📉 -${Math.abs(perubahan)} poin`;
        }
    }

    // update skor
    tambahSkor(realJid, roomKey, perubahan);
    const skorBaru = skorUser[roomKey]?.[realJid] || 0;

    // 💬 kirim hasil baru (biar dramatis)
    await sock.sendMessage(from, {
        text:
`${perubahan >= 0 ? '💰' : '🔥'} *HASIL AKHIR SLOT* ${perubahan >= 0 ? '💰' : '🔥'}  
━━━━━━━━━━━━━━━  
👤 Pemain : @${realJid.split('@')[0]}  
💵 Taruhan : *${taruhan} poin*  
📊 Perubahan : *${perubahan >= 0 ? '+' + perubahan : perubahan} poin*  

${hasilText}  
━━━━━━━━━━━━━━━  
🏆 Skor Sekarang : *${skorBaru} poin*  
🎲 Main lagi: *.judi <jumlah>*`,
        mentions: [sender]
    });
}


if (text.startsWith('.ttmp3')) {
    const tiktokUrl = text.split(' ')[1];
    const userTag = `@${sender.split('@')[0]}`;

    if (!tiktokUrl || !tiktokUrl.includes("tiktok.com")) {
        await sock.sendMessage(from, {
            text: "❌ Link TikTok tidak valid.\nGunakan: *.ttmp3 <link TikTok>*"
        });
        return;
    }

        await sock.sendMessage(from, {
        react: { text: '⏳', key: msg.key }
    });

    try {
        const { data } = await axios.get(`https://tikwm.com/api/`, {
            params: { url: tiktokUrl }
        });

        const audioURL = data?.data?.music;

        if (!audioURL) {
            throw new Error("❌ Gagal ambil audio dari TikTok");
        }

        const audioRes = await axios.get(audioURL, { responseType: 'arraybuffer' });
        const audioBuffer = Buffer.from(audioRes.data, 'binary');

        await sock.sendMessage(from, {
            audio: audioBuffer,
            mimetype: 'audio/mp4', // bisa juga 'audio/mpeg'
            ptt: false
        });

        await sock.sendMessage(from, {
        react: { text: '✅', key: msg.key }
        });

        console.log(`✅ Audio TikTok berhasil dikirim ke ${from}`);
    } catch (err) {
        console.error('❌ ERROR TTMP3:', err.message);
        await sock.sendMessage(from, {
            text: "❌ Gagal mengunduh audio TikTok. Coba link lain atau nanti lagi."
        });
    }

    return;
}



if (text.startsWith('.ytmp3')) {
    const url = text.split(' ')[1];
    if (!url) {
        await sock.sendMessage(from, { text: '❗ Masukkan link YouTube\nContoh: *.ytmp3 https://youtu.be/xxxx*' });
        return;
    }

    // kasih reaction ⏳
    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        // ambil info video
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;

        // download langsung ke buffer (audio only)
        const stream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
        let chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        // kirim audio ke WhatsApp (bisa langsung diputar)
        await sock.sendMessage(from, {
            audio: buffer,
            mimetype: 'audio/mpeg',
            ptt: false // true = jadi VN (voice note style), false = audio biasa
        }, { quoted: msg });

        // ganti reaction jadi ✅
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('Error .ytmp3:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        await sock.sendMessage(from, { text: '❌ Gagal download audio.' }, { quoted: msg });
    }
}
if (text.startsWith('.ytmp4')) {
    const url = text.split(' ')[1];
    if (!url) {
        await sock.sendMessage(from, { text: '❗ Masukkan link YouTube\nContoh: *.ytmp4 https://youtu.be/xxxx*' });
        return;
    }

    // kasih reaction ⏳
    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        // ambil info video
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;

        // download video (video+audio, kualitas sedang biar ga lama)
        const stream = ytdl(url, { quality: '18' }); // 18 = mp4 360p (cukup cepat)
        let chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        // kirim ke WhatsApp sebagai video
        await sock.sendMessage(from, {
            video: buffer,
            mimetype: 'video/mp4',
            caption: `🎬 ${title}`
        }, { quoted: msg });

        // ganti reaction jadi ✅
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('Error .ytmp4:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        await sock.sendMessage(from, { text: '❌ Gagal download video.' }, { quoted: msg });
    }
}


if (text.startsWith('.wm')) {
    const tiktokUrl = text.split(' ')[1];
    const userTag = `@${sender.split('@')[0]}`;

    if (!tiktokUrl || !tiktokUrl.includes("tiktok.com")) {
        await sock.sendMessage(from, {
            text: "❌ Link TikTok tidak valid.\nGunakan: *.wm <link TikTok>*"
        });
        return;
    }

    await sock.sendMessage(from, {
        react: { text: '⏳', key: msg.key }
    });


    try {
        const { data } = await axios.get(`https://tikwm.com/api/`, {
            params: { url: tiktokUrl }
        });

        if (!data || !data.data || !data.data.play) {
            throw new Error("❌ Gagal parsing data dari API");
        }

        const videoURL = data.data.play;

        const videoRes = await axios.get(videoURL, { responseType: 'arraybuffer' });
        const videoBuffer = Buffer.from(videoRes.data, 'binary');

        await sock.sendMessage(from, {
            video: videoBuffer,
            mimetype: 'video/mp4',
            caption: `🎬 Video untuk ${userTag}`,
            mentions: [sender]
        });

          await sock.sendMessage(from, {
        react: { text: '✅', key: msg.key }
        });


        console.log(`✅ Video berhasil dikirim ke ${from}`);
    } catch (err) {
        console.error('❌ ERROR TikTok API:', err.message);
        await sock.sendMessage(from, {
            text: "❌ Gagal mengunduh video TikTok.\nSilakan coba dengan link lain atau nanti."
        });
    }

    return;
}
if (text.trim().toLowerCase() === '.stiker' || text.trim().toLowerCase() === '.sticker') {
    console.log(`📥 Permintaan stiker dari ${from}...`);

    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const imageDirect = msg.message?.imageMessage;
    const imageQuoted = quoted?.imageMessage;

    let messageForMedia = null;
    if (imageDirect) {
        messageForMedia = msg;
    } else if (imageQuoted) {
        messageForMedia = { ...msg, message: { imageMessage: imageQuoted } };
    }

    if (!messageForMedia) {
        await sock.sendMessage(from, { text: "❌ Balas/kirim gambar dengan caption .stiker" }, { quoted: msg });
        return;
    }

    try {
        await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

        console.log("📥 Mengunduh media...");
        const mediaBuffer = await downloadMediaMessage(messageForMedia, "buffer", {}, { logger: console });

        const sharp = require("sharp");
        const { Sticker } = require("wa-sticker-formatter");

        let finalBuffer = mediaBuffer;
        if (mediaBuffer.length > 1024 * 1024) {
            console.log("⚠️ File > 1MB, kompresi...");
            finalBuffer = await sharp(mediaBuffer)
                .resize({ width: 512, height: 512, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 80 })
                .toBuffer();
        }

        const { width, height } = await sharp(finalBuffer).metadata();
        const size = Math.max(width, height);

        const resizedBuffer = await sharp(finalBuffer)
            .resize({
                width: size,
                height: size,
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .webp({ lossless: true })
            .toBuffer();

        const sticker = new Sticker(resizedBuffer, {
            type: 'FULL',
            pack: 'stikerbot',
            author: 'Jarr',
            quality: 100
        });

        // ✅ kirim stiker
        const sent = await sock.sendMessage(from, await sticker.toMessage(), { quoted: msg });

        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
        console.log(`✅ Stiker berhasil dikirim ke ${from}`);

        // 🚫 kalau antistiker aktif → hapus lagi
        if (from.endsWith('@g.us') && antiStickerGroups.get(from)) {
            try {
                await sock.sendMessage(from, { delete: sent.key });
                console.log("🗑️ Stiker bot ikut dihapus (antistiker aktif).");
            } catch (e) {
                console.error("❌ Gagal hapus stiker bot:", e);
            }
        }

    } catch (err) {
        console.error("❌ Gagal membuat stiker:", err);
        await sock.sendMessage(from, { text: "❌ Gagal membuat stiker. Pastikan file valid (gambar saja)." }, { quoted: msg });
    }

    return;
}

// 🖼️ KONVERSI STIKER JADI GAMBAR (PAKAI REACTION)
if (text.trim().toLowerCase() === '.toimg') {
    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const stickerDirect = msg.message?.stickerMessage;
    const stickerQuoted = quoted?.stickerMessage;

    // Tentukan sumber media
    const messageForMedia = stickerDirect
        ? msg // user langsung kirim sticker + ketik .toimg di caption
        : stickerQuoted
            ? {
                ...msg,
                message: { stickerMessage: stickerQuoted }
            }
            : null;

    if (!messageForMedia) {
        await sock.sendMessage(from, { text: "❌ Balas sticker atau kirim sticker dengan perintah *.toimg*" });
        return;
    }

    try {
        // Reaction jam pasir
        await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

        // Download sticker
        const mediaBuffer = await downloadMediaMessage(
            messageForMedia,
            "buffer",
            {},
            { logger: console }
        );

        // Convert webp ke png
        const sharp = require('sharp');
        const imgBuffer = await sharp(mediaBuffer).png().toBuffer();

        // Kirim gambar hasil konversi
        const sentMsg = await sock.sendMessage(from, {
            image: imgBuffer,
            caption: "✅ Sticker berhasil diubah jadi gambar"
        }, { quoted: msg });

        // Reaction sukses
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
        console.log(`✅ Sticker di ${from} berhasil diubah jadi gambar`);

        // 🔒 Cek antifoto → hapus hasil kiriman bot juga
        if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
            await sock.sendMessage(from, { delete: sentMsg.key });
            console.log(`🗑️ Gambar hasil .toimg dihapus (karena antifoto aktif) di grup ${from}`);
        }

    } catch (err) {
        console.error("❌ Gagal mengubah sticker:", err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Gagal mengubah sticker jadi gambar" });
    }

    return;
}

if (text.toLowerCase().startsWith('.teks')) {
    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const stickerQuoted = quotedMsg?.stickerMessage;

    if (!stickerQuoted) {
        await sock.sendMessage(from, {
            text: '❌ Fitur ini hanya untuk *reply stiker*.\nContoh: *.teks merah | Halo semua*',
        }, { quoted: msg });
        return;
    }

    // Ambil input pengguna, format: .teks warna | teks
    const argsText = text.split(' ').slice(1).join(' ').split('|');
    if (argsText.length < 2) {
        await sock.sendMessage(from, {
            text: '❌ Format salah.\nContoh: *.teks merah | Halo semua*',
        }, { quoted: msg });
        return;
    }

    let colorName = argsText[0].trim().toLowerCase();
    const userText = argsText[1].trim();

    const colorMap = {
        hitam: '#000000', putih: '#FFFFFF', merah: '#FF0000', biru: '#0000FF',
        hijau: '#00FF00', kuning: '#FFFF00', oranye: '#FFA500', ungu: '#800080',
        pink: '#FFC0CB', coklat: '#8B4513', abu: '#808080', cyan: '#00FFFF',
        magenta: '#FF00FF', emas: '#FFD700', perak: '#C0C0C0', navy: '#000080',
        lime: '#00FF00', teal: '#008080', olive: '#808000', maroon: '#800000'
    };

    if (!colorMap[colorName]) {
        await sock.sendMessage(from, {
            text: `❌ Warna tidak valid. Pilih salah satu: ${Object.keys(colorMap).join(', ')}`,
        }, { quoted: msg });
        return;
    }

    const color = colorMap[colorName];

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        const mediaBuffer = await downloadMediaMessage(
            { message: { stickerMessage: stickerQuoted } },
            'buffer', {}, { logger: console }
        );

        const image = sharp(mediaBuffer);
        const { width, height } = await image.metadata();

        // Hitung teks per baris
        const words = userText.trim().split(/\s+/);
        const totalWords = words.length;
        const idealLineCount = Math.ceil(Math.sqrt(totalWords));
        const wordsPerLine = Math.ceil(totalWords / idealLineCount);
        const lines = [];
        for (let i = 0; i < totalWords; i += wordsPerLine) {
            lines.push(words.slice(i, i + wordsPerLine).join(' '));
        }

        const lineCount = lines.length;
        const fontSize = Math.floor(height / (7 + lineCount));
        const lineSpacing = Math.floor(fontSize * 1.1);
        const verticalOffset = 30;
        const startY = height - (lineSpacing * lineCount) + verticalOffset;

        // SVG dengan stroke hitam/putih, fill sesuai warna user
        let svgText = `<svg width="${width}" height="${height}"><style>
            .teks {
                font-size: ${fontSize}px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                fill: ${color};
                stroke: black;
                stroke-width: 3px;
                paint-order: stroke;
            }
        </style>`;

        lines.forEach((line, index) => {
            const y = startY + index * lineSpacing;
            svgText += `<text x="50%" y="${y}" text-anchor="middle" class="teks">${line}</text>\n`;
        });

        svgText += `</svg>`;

        const bufferWithText = await sharp(mediaBuffer)
            .composite([{ input: Buffer.from(svgText), top: 0, left: 0 }])
            .webp()
            .toBuffer();

        const sticker = new Sticker(bufferWithText, {
            type: 'FULL',
            pack: 'stikerbot',
            author: 'Jarr',
            quality: 100
        });

        await sock.sendMessage(from, await sticker.toMessage(), { quoted: msg });
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('❌ Gagal menambahkan teks ke stiker:', err);
        await sock.sendMessage(from, {
            text: '❌ Gagal memproses stiker. Pastikan stikernya valid dan coba lagi.'
        }, { quoted: msg });
    }
}


// Fitur .brat
if (text.toLowerCase().startsWith('.brat')) {
    const userText = text.replace('.brat', '').trim();
    if (!userText) {
        await sock.sendMessage(from, {
            text: '❌ Contoh: *.brat kamu kemana*'
        }, { quoted: msg });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesBrat = bratAksesSementara.get(sender);
    const isTemporaryActive = aksesBrat && now < aksesBrat;

    // VIP / Owner / Temporary Access bebas limit
    if (!(isBypass || isTemporaryActive)) {
        const record = bratLimit.get(sender);
        if (record) {
            if (now - record.time < BRAT_COOLDOWN) {
                if (record.count >= MAX_BRAT) {
                    const sisa = Math.ceil((BRAT_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.brat* 3x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses *.belibrat* 5 menit.\n\n💡 *Tips:* Beli akses *VIP* agar bisa memakai *.brat* tanpa batas waktu.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else record.count++;
            } else {
                bratLimit.set(sender, { count: 1, time: now });
            }
        } else {
            bratLimit.set(sender, { count: 1, time: now });
        }
    }

    try {
        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(userText)}&delay=1000`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Gagal mengambil data dari API.");

        const buffer = await res.buffer();

        const sticker = new Sticker(buffer, {
            pack: 'brat',
            author: 'Jarr',
            type: StickerTypes.FULL,
            quality: 100
        });

        // kirim stiker
        const sent = await sock.sendMessage(from, await sticker.toMessage(), { quoted: msg });
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

        // ✅ langsung cek: kalau antistiker aktif → hapus stiker bot
        if (from.endsWith('@g.us') && antiStickerGroups.get(from)) {
            await hapusPesan(from, sent);
            console.log("🗑️ Stiker .brat bot ikut dihapus (antistiker aktif).");
        }

    } catch (err) {
        console.error("Error:", err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}

                // 📢 TAG SEMUA ANGGOTA GRUP
        if (text.trim() === '.tagall') {
            if (!msg.key.remoteJid.endsWith('@g.us')) {
                await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa digunakan di dalam grup.' });
                return;
            }

            try {
                const metadata = await sock.groupMetadata(from);
                const participants = metadata.participants;

                const mentions = participants.map(p => p.id);
                const teksMention = participants.map(p => `- @${p.id.split('@')[0]}`).join('\n');

                await sock.sendMessage(from, {
                    text: `📢 *Tag All* (${participants.length} anggota):\n\n${teksMention}`,
                    mentions
                });

                console.log(`📢 Men-tag ${participants.length} anggota grup`);
            } catch (e) {
                console.error('❌ Gagal tagall:', e);
                await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
            }

            return;
        }

if (text.startsWith('.kirimskor')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa dipakai di grup.' });
        return;
    }

    const args = text.trim().split(/\s+/);
    const jumlah = parseInt(args[2] || args[1]); // Bisa .kirimskor @user 100 atau .kirimskor 100 (kalau reply)
    const quoted = msg.message?.extendedTextMessage?.contextInfo;
    const target = quoted?.mentionedJid?.[0] || quoted?.participant;

    if (!target || isNaN(jumlah) || jumlah <= 0) {
        await sock.sendMessage(from, {
            text: `❗ *Format salah!*\n\nContoh:\n.kirimskor @user 100*`
        });
        return;
    }

    const pengirim = sender;
    
    if (!skorUser[from]) skorUser[from] = {};
    if (!skorUser[from][pengirim]) skorUser[from][pengirim] = 0;
    if (!skorUser[from][target]) skorUser[from][target] = 0;

    const realPengirim = normalizeJid(pengirim);

// Kalau bukan Owner, cek skor
if (!isOwner(realPengirim)) {
    if (skorUser[from][pengirim] < jumlah) {
        await sock.sendMessage(from, {
            text: `Skormu tidak cukup!\n💰 Skor kamu: *${skorUser[from][pengirim]}*`
        });
        return;
    }
}


skorUser[from][pengirim] -= jumlah;
skorUser[from][target] += jumlah;
simpanSkorKeFile();


    await sock.sendMessage(from, {
        text: `🎁 *Skor Terkirim!*\n\n👤 Dari: @${pengirim.split('@')[0]}\n🎯 Ke: @${target.split('@')[0]}\n💸 Jumlah: *${jumlah} poin*`,
        mentions: [pengirim, target]
    });
}

if (text === '.dwfoto') {
    const quotedInfo = msg.message?.extendedTextMessage?.contextInfo;
    const quoted = quotedInfo?.quotedMessage;
    const targetSender = quotedInfo?.participant;

    if (!quoted || (!quoted.imageMessage && !quoted.viewOnceMessageV2)) {
        await sock.sendMessage(from, {
            text: '❌ Reply pesan foto sekali lihat dengan perintah ini.\nContoh: reply lalu *.dwfoto*',
            mentions: [sender]
        });
        return;
    }

    await sock.sendMessage(from, {
        react: { text: '⏳', key: msg.key }
    });

    try {
        const mediaBuffer = await downloadMediaMessage(
            {
                message: quoted,
                key: {
                    remoteJid: from,
                    fromMe: false,
                    id: quotedInfo.stanzaId,
                    participant: targetSender
                }
            },
            'buffer',
            {},
            { logger: console, reuploadRequest: sock.reuploadRequest }
        );

        // simpan pesan hasil kirim
        const sentMsg = await sock.sendMessage(from, {
            image: mediaBuffer,
            caption: '📸 Foto sekali lihat berhasil diambil.',
            mentions: [sender]
        });

        await sock.sendMessage(from, {
            react: { text: '✅', key: msg.key }
        });

        // 🔒 Cek antifoto → hapus hasil kiriman bot juga
        if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
            await sock.sendMessage(from, { delete: sentMsg.key });
            console.log(`🗑️ Hasil .dwfoto dihapus (karena antifoto aktif) di grup ${from}`);
        }

    } catch (err) {
        console.error('❌ Gagal mengunduh foto sekali lihat:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }

    return;
}

// 📥 DWVIDEO – Ambil Video Sekali Lihat
if (text === '.dwvideo') {
    const quoted = msg.message?.extendedTextMessage?.contextInfo;
    const targetMsg = quoted?.quotedMessage;
    const targetSender = quoted?.participant;

    if (!targetMsg || !targetMsg.videoMessage || !targetMsg.videoMessage.viewOnce) {
        await sock.sendMessage(from, {
            text: '❌ Balas video sekali lihat dengan perintah *.dwvideo*.',
            mentions: [sender]
        });
        return;
    }

      await sock.sendMessage(from, {
            react: {
                text: '⏳',
                key: msg.key
            }
        });

    try {
        const mediaBuffer = await downloadMediaMessage(
            { message: targetMsg, key: { remoteJid: from, fromMe: false, id: quoted.stanzaId, participant: targetSender } },
            'buffer',
            {},
            { logger: console, reuploadRequest: sock.reuploadRequest }
        );

        await sock.sendMessage(from, {
            video: mediaBuffer,
            caption: '📸 Video sekali lihat berhasil di ambil.',
            mentions: [sender]
        });

         await sock.sendMessage(from, {
        react: { text: '✅', key: msg.key }
        });

    } catch (err) {
        console.error('❌ Gagal mengambil video sekali lihat:', err);
     await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }

    return;
}

if (text.trim() === '.off') {
    const realJid = normalizeJid(sender);
    const isRealOwner = realJid === OWNER_NUMBER || msg.key.fromMe;

    if (!isRealOwner) {
        await sock.sendMessage(from, {
            text: '❌ Lu bukan orang terpilih buat matiin.'
        });
        return;
    }

    // cek status dulu
    if (grupAktif.get(from) === false) {
        await sock.sendMessage(from, {
            text: '⚙️ Bot sudah dalam keadaan *OFF*.'
        });
        return;
    }

    grupAktif.set(from, false);
    simpanGrupAktif();

    const waktu = new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    await sock.sendMessage(from, {
        text: `🔴 *Bot Dimatikan*\n\n📅 Tanggal: ${waktu}\n\n👑 Owner: @${OWNER_NUMBER.split('@')[0]}`,
        mentions: [OWNER_NUMBER]
    });
    return;
}


if (text.trim() === '.on') {
    const isRealOwner = isOwner(sender) || msg.key.fromMe;

    if (!isRealOwner) {
        await sock.sendMessage(from, {
            text: '❌ Hanya orang beriman yang bisa nyalain.'
        });
        return;
    }

    // cek status dulu
    if (grupAktif.get(from) === true) {
        await sock.sendMessage(from, {
            text: '⚙️ Bot sudah dalam keadaan *ON*.'
        });
        return;
    }

    grupAktif.set(from, true);
    simpanGrupAktif();

    const waktu = new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    await sock.sendMessage(from, {
        text: `✅ *Bot Aktif*\n\n🟢 Status: *ON*\n📅 Tanggal: ${waktu}\n\n👑 Owner: @${OWNER_NUMBER.split('@')[0]}`,
        mentions: [OWNER_NUMBER]
    });
    return;
}

// .setoff <angka> <satuan>
if (body.startsWith('.setoff') && isGroup) {
    if (!isOwner(sender)) {
        await sock.sendMessage(from, {
            text: '❌ Hanya *Owner* yang bisa menggunakan perintah ini.'
        }, { quoted: msg });
        return;
    }

    const args = body.trim().split(/\s+/);
    const jumlah = parseInt(args[1]);
    const satuan = (args[2] || '').toLowerCase();

    if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
        await sock.sendMessage(from, {
            text: '⚠️ Format salah.\n\nGunakan: *.setoff <angka> <satuan>*\nContoh:\n• *.setoff 1 jam*\n• *.setoff 5 menit*\n• *.setoff 30 detik*'
        }, { quoted: msg });
        return;
    }

    let ms = 0;
    if (satuan.startsWith('jam')) {
        ms = jumlah * 60 * 60 * 1000;
    } else if (satuan.startsWith('menit')) {
        ms = jumlah * 60 * 1000;
    } else if (satuan.startsWith('detik')) {
        ms = jumlah * 1000;
    } else {
        await sock.sendMessage(from, {
            text: '❌ Satuan waktu tidak dikenal. Gunakan *jam*, *menit*, atau *detik*.'
        }, { quoted: msg });
        return;
    }

    // Hitung kapan bot akan dimatikan
    const now = new Date();
    const waktuOff = new Date(now.getTime() + ms);

    // Format waktu
    const formatWaktu = waktuOff.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Konfirmasi ke grup
    await sock.sendMessage(from, {
        text: `⏳ *Timer Bot OFF*\n\n🕒 Durasi: *${jumlah} ${satuan}*\n📅 Bot akan mati pada:\n👉 ${formatWaktu}\n\n👑 Owner: @${OWNER_NUMBER.split('@')[0]}`,
        mentions: [OWNER_NUMBER]
    }, { quoted: msg });

    // Jalankan timer
    setTimeout(async () => {
        grupAktif.set(from, false);
        simpanGrupAktif();

        await sock.sendMessage(from, {
            text: `🔴 *Bot Dimatikan Otomatis*\n\n📅 Waktu: ${formatWaktu}\n⏰ Durasi: *${jumlah} ${satuan}*\n\n👑 Owner: @${OWNER_NUMBER.split('@')[0]}`,
            mentions: [OWNER_NUMBER]
        });
    }, ms);
}


if (text.startsWith('.gay')) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    const target = mentioned || sender;
    const nama = target.split('@')[0];
    const persen = Math.floor(Math.random() * 101); // 0–100%

    const teks = `╭─🌈 *GAY KAUM PELANGI* 🌈─╮
│
│ 👤 @${nama}
│ 🏳️‍🌈 Tingkat Gay: *${persen}%*
│
│ ${persen < 30 ? '🧍‍♂️ Masih aman lah ya' :
     persen < 60 ? '😏 Udah belok nih' :
     persen < 85 ? '💅 Parah kalau ini mah...' :
     '👑 SELAMAT MANUSIA GAY'}
│
╰──────────────────╯`;

    await sock.sendMessage(from, {
        text: teks,
        mentions: [target]
    });
}

if (text.startsWith('.cantik')) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    const target = mentioned || sender;
    const nama = target.split('@')[0];
    const persen = Math.floor(Math.random() * 100) + 1;

    const teks = `╭─💄 *CANTIK METER 30000* 💄─╮
│
│ 👤 @${nama}
│ 💖 Skor Cantik: *${persen}%*
│
│ ${persen < 30 ? '😢 Cantik itu relatif' :
     persen < 60 ? '😊 Senyum terus yaa' :
     persen < 85 ? '😍 Cantiknya masyaalah' :
     '✨ DEWI TURUN KE BUMI'}
│
╰────────────────────────╯`;

    await sock.sendMessage(from, {
        text: teks,
        mentions: [target]
    });
}

if (text.startsWith('.ganteng')) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    const target = mentioned || sender;
    const nama = target.split('@')[0];
    const persen = Math.floor(Math.random() * 100) + 1;

    const teks = `╭─😎 *GANTENG LEVEL CHECK* 😎─╮
│
│ 👤 @${nama}
│ 🪞 Skor Ganteng: *${persen}%*
│
│ ${persen < 30 ? '😭 Gantengnya ketuker waktu lahir' :
     persen < 60 ? '🙂 Lumayan ga burik amat' :
     persen < 85 ? '😎 Bikin cewek klepek klepek' :
     '🔥 LEVEL MAX! GANTENG PARAH!!'}
│
╰────────────────────────╯`;

    await sock.sendMessage(from, {
        text: teks,
        mentions: [target]
    });
}

if (text.startsWith('.lesbi')) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    const target = mentioned || sender;
    const nama = target.split('@')[0];
    const persen = Math.floor(Math.random() * 100) + 1;

    const teks = `╭─🌈 *LESBIAN DETECTOR* 🌈─╮
│
│ 👤 @${nama}
│ 🎯 Persentase: *${persen}%*
│
│ ${persen < 30 ? '😌 Masih suka cowok kok' :
     persen < 60 ? '😏 Cewekpun di embat' :
     persen < 85 ? '😳 Jauhin aja bahaya ni orang' :
     '💥 100% LESBI POWER AKTIF!'}
│
╰───────────────────────╯`;

    await sock.sendMessage(from, {
        text: teks,
        mentions: [target]
    });
}

if (text.startsWith('.jodoh')) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;

    if (!mentioned || mentioned.length < 2) {
        await sock.sendMessage(from, {
            text: '❗ Format salah!\nGunakan: *.jodoh @user1 @user2*',
        }, { quoted: msg });
        return;
    }

    const [user1, user2] = mentioned;
    const nama1 = user1.split('@')[0];
    const nama2 = user2.split('@')[0];
    const persen = Math.floor(Math.random() * 101); // 0 - 100
    let komentar = '';

    if (persen < 20) {
        komentar = '💔 Seperti langit & bumi...';
    } else if (persen < 40) {
        komentar = '😬 Masih bisa sahabatan aja deh.';
    } else if (persen < 60) {
        komentar = '🙂 Lumayan cocok, tapi butuh usaha!';
    } else if (persen < 80) {
        komentar = '😍 Udah cocok bener ini, lanjut chat ya!';
    } else {
        komentar = '💘 JODOH SEJATI! Langsung akad nih!';
    }

    const hasil = `
╔══💞 *Kecocokan Jodoh* 💞══╗

👩 @${nama1}
👨 @${nama2}

💓 Tingkat kecocokan:
💯 *${persen}%*

📝 Komentar:
${komentar}

╚═══════════════════════╝
    `;

    await sock.sendMessage(from, {
        text: hasil,
        mentions: [user1, user2]
    }, { quoted: msg });
}

if (text.startsWith('.cekkhodam')) {
     const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    const target = mentioned || sender;
    const nama = target.split('@')[0];

    const khodams = [
        { name: "Macan Putih", emoji: "🐅", desc: "Penjaga kuat dan pemberani.", pesan: "Berjalanlah dengan keyakinan." },
        { name: "Naga Emas", emoji: "🐉", desc: "Pembawa keberuntungan dan kebijaksanaan.", pesan: "Kebijaksanaan adalah kunci." },
        { name: "Burung Garuda", emoji: "🦅", desc: "Simbol kebebasan dan kekuatan.", pesan: "Terbanglah tinggi dan bebas." },
        { name: "Harimau Merah", emoji: "🐯", desc: "Penuh semangat dan keberanian.", pesan: "Jadilah pemberani sejati." },
        { name: "Kelinci Putih", emoji: "🐇", desc: "Cerdas dan penuh kelincahan.", pesan: "Kelincahan membawa kemenangan." },
        { name: "Jalak Bali", emoji: "🦜", desc: "Penuh keceriaan dan suara merdu.", pesan: "Bersuara lantang, jadi perhatian." },
        { name: "Kuda Liar", emoji: "🐎", desc: "Semangat bebas dan liar.", pesan: "Jangan terikat, terus maju." },
        { name: "Ular Hijau", emoji: "🐍", desc: "Lincah dan penuh misteri.", pesan: "Jangan takut dengan perubahan." },
        { name: "Singa Laut", emoji: "🦭", desc: "Berani di laut dan badai.", pesan: "Hadapi gelombang hidup." },
        { name: "Rajawali Hitam", emoji: "🦅", desc: "Penguasa langit malam.", pesan: "Tajam dan penuh fokus." },
        { name: "Kodok Emas", emoji: "🐸", desc: "Pembawa keberuntungan dan rejeki.", pesan: "Rejeki datang dari mana saja." },
        { name: "Serigala Malam", emoji: "🐺", desc: "Setia dan penuh insting.", pesan: "Percaya pada naluri." },
        { name: "Elang Gunung", emoji: "🦅", desc: "Penguasa puncak dan awan.", pesan: "Tinggi dan tak terjangkau." },
        { name: "Buaya Rawa", emoji: "🐊", desc: "Tangguh dan penuh kewaspadaan.", pesan: "Waspadai segala bahaya." },
        { name: "Macan Kumbang", emoji: "🐆", desc: "Pemberani dan lihai berburu.", pesan: "Jadilah pemburu yang cerdas." },
        { name: "Tupai Ceria", emoji: "🐿️", desc: "Lincah dan selalu waspada.", pesan: "Jangan lengah sedikit pun." },
        { name: "Jalak Putih", emoji: "🦜", desc: "Simbol kemurnian dan suara indah.", pesan: "Jaga hati dan suara." },
        { name: "Kuda Nil", emoji: "🦛", desc: "Kuat dan tahan banting.", pesan: "Kuatkan mentalmu selalu." },
        { name: "Gajah Raja", emoji: "🐘", desc: "Bijaksana dan kuat.", pesan: "Bijaksanalah dalam keputusan." },
        { name: "Kakatua muda", emoji: "🦜", desc: "Ceria dan penuh warna.", pesan: "Warnai hari-harimu." },
        { name: "Angsa Putih", emoji: "🦢", desc: "Anggun dan penuh kasih.", pesan: "Jadilah pribadi yang lembut." },
        { name: "Lumba-Lumba Pintar", emoji: "🐬", desc: "Cerdas dan bersahabat.", pesan: "Kebersamaan adalah kekuatan." },
        { name: "Rajawali Merah", emoji: "🦅", desc: "Penuh semangat dan fokus.", pesan: "Kejar semua impianmu." },
        { name: "Bebek Emas", emoji: "🦆", desc: "Pembawa keberuntungan kecil.", pesan: "Keberuntungan kecil berharga." },
        { name: "Burung Merak", emoji: "🦚", desc: "Indah dan percaya diri.", pesan: "Percaya pada dirimu sendiri." },
        { name: "Kupu-Kupu Malam", emoji: "🦋", desc: "Misterius dan memesona.", pesan: "Terimalah sisi gelapmu." },
        { name: "Cicak Pemberani", emoji: "🦎", desc: "Kecil tapi pemberani.", pesan: "Ukuran bukan halangan." },
        { name: "Tawon Rajawali", emoji: "🐝", desc: "Kerja keras dan fokus.", pesan: "Kerja keras membuahkan hasil." },
        { name: "Ikan Koi", emoji: "🐟", desc: "Sabar dan beruntung.", pesan: "Kesabaran membawa keberuntungan." },
        { name: "Kalajengking ngising", emoji: "🦂", desc: "Berbahaya tapi setia.", pesan: "Jaga diri dengan baik." },
        { name: "Kucing Hitam", emoji: "🐈‍⬛", desc: "Misterius dan penuh pesona.", pesan: "Jangan takut pada misteri." },
        { name: "Merpati Putih", emoji: "🕊️", desc: "Simbol damai dan cinta.", pesan: "Sebarkan cinta dan damai." },
        { name: "Bebek Angsa", emoji: "🦢", desc: "Elegan dan kuat.", pesan: "Jadilah pribadi elegan." },
        { name: "Ikan Arwana", emoji: "🐠", desc: "Pembawa rejeki dan kemakmuran.", pesan: "Rejeki datang tanpa diduga." },
        { name: "Burung Hantu", emoji: "🦉", desc: "Bijaksana dan waspada.", pesan: "Jadilah bijak dalam keputusan." },
        { name: "Kadal Hijau", emoji: "🦎", desc: "Lincah dan adaptif.", pesan: "Beradaptasilah dengan cepat." },
        { name: "Cicak Emas", emoji: "🦎", desc: "Langka dan membawa keberuntungan.", pesan: "Keberuntungan ada di tanganmu." },
        { name: "Ikan Lele", emoji: "🐟", desc: "Penuh semangat dan tahan banting.", pesan: "Jangan mudah menyerah." },
        { name: "Babi Hutan", emoji: "🐗", desc: "Kuat dan berani.", pesan: "Berani hadapi tantangan." },
        { name: "Tikus kantor", emoji: "🐭", desc: "Selalu cari uang.", pesan: "Korupsi terus!" },
      
    ];

    const khodam = khodams[Math.floor(Math.random() * khodams.length)];

    const teks = `╭─🔮 *CEK KHODAM* 🔮─╮
│
│ 👤 @${nama}
│
│ ${khodam.emoji} *${khodam.name}*
│ ${khodam.desc}
│
│ 💬 _"${khodam.pesan}"_
╰─────────────────╯`;

   await sock.sendMessage(from, {
        text: teks,
        mentions: [target]
    });
}


if (body === '.truth') {
  const truthText = ambilSoalAcak('truth', truthList);
  const imagePath = './truthordare.png';
  await sock.sendMessage(from, {
    image: { url: imagePath },
    caption: `🎯 *Truth Challenge*\n\n${truthText}`
  }, { quoted: msg });
}

if (body === '.dare') {
  const dareText = ambilSoalAcak('dare', dareList);
  const imagePath = './truthordare.png';
  await sock.sendMessage(from, {
    image: { url: imagePath },
    caption: `🔥 *Dare Challenge*\n\n${dareText}`
  }, { quoted: msg });
}



if (text === '.pdf') {
    const sessionKey = isGroup ? `${from}:${sender}` : sender;

    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesSementara = pdfAksesSementara.get(sender);
    const isTemporaryActive = aksesSementara && now < aksesSementara;

    // Kalau bukan VIP/Owner/Sementara -> Cek limit
    if (!isBypass && !isTemporaryActive) {
        const record = pdfLimit.get(sender);
        if (record) {
            if (now - record.time < PDF_COOLDOWN) {
                if (record.count >= MAX_PDF) {
                    const sisa = Math.ceil((PDF_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.pdf* ${MAX_PDF}x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses *.belipdf* 5 menit.\n\n💡 *Tips:* Beli akses *VIP* agar bisa memakai *.pdf* tanpa batas waktu.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else {
                    record.count++;
                }
            } else {
                pdfLimit.set(sender, { count: 1, time: now });
            }
        } else {
            pdfLimit.set(sender, { count: 1, time: now });
        }
    }

    if (pdfSessions.has(sessionKey)) {
        await sock.sendMessage(from, {
            text: '📥 *Mode PDF sedang aktif.',
            quoted: msg
        });
        return;
    }

    pdfSessions.set(sessionKey, {
    buffers: [],
    fileName: null,
    isPrivate: !isGroup
});


    await sock.sendMessage(from, {
        text: '📥 *Mode PDF Aktif!*\n\nSilakan kirim foto yang ingin dijadikan PDF.\n\nSetelah mengirim foto bisa *mengetik nama file PDF* (contoh: `Tugas IPA`).\n\n✅ Jika sudah selesai, ketik *.pdfgo* untuk membuat dan mengunduh PDF nya.',
        quoted: msg
    });
    return;
}

if (text === '.pdfgo') {
    const sessionKey = isGroup ? `${from}:${sender}` : sender;
    const session = pdfSessions.get(sessionKey);

    if (!session) {
        await sock.sendMessage(from, {
            text: '❌ Belum ada sesi aktif. Ketik *.pdf* dulu untuk mulai kumpulkan gambar.',
            quoted: msg
        });
        return;
    }

    if (session.buffers.length === 0) {
        pdfSessions.delete(sessionKey);
        await sock.sendMessage(from, {
            text: '❌ Tidak ada gambar yang dikumpulkan. Mode PDF dibatalkan.',
            quoted: msg
        });
        return;
    }

    try {
        const pdfDoc = await PDFDocument.create();

        for (const buffer of session.buffers) {
            const image = await pdfDoc.embedJpg(buffer).catch(() => pdfDoc.embedPng(buffer));
            const { width, height } = image.scale(1);
            const page = pdfDoc.addPage([width, height]);
            page.drawImage(image, { x: 0, y: 0, width, height });
        }

        const pdfBytes = await pdfDoc.save();
        pdfSessions.delete(sessionKey);

        await sock.sendMessage(from, {
            document: Buffer.from(pdfBytes),
            mimetype: 'application/pdf',
            fileName: (session.fileName || 'file').replace(/[\\/:*?"<>|]/g, '') + '.pdf'
        }, { quoted: msg });

        await sock.sendMessage(from, {
        react: {
            text: '✅',
            key: msg.key
        }
    });


    } catch (err) {
        pdfSessions.delete(sessionKey);
        console.error('❌ Gagal buat PDF:', err);
        await sock.sendMessage(from, {
            text: '❌ Terjadi kesalahan saat membuat PDF.',
            quoted: msg
        });
    }

    return;
}
// ========== FITUR .WAIFU ==========
if (text.toLowerCase() === ".waifu" || text.toLowerCase().startsWith(".waifu ")) {
  try {
    await sock.sendMessage(from, { react: { text: "⏳", key: msg.key } });

    const isBypass = isOwner(sender) || isVIP(sender, from); 
    const now = Date.now();
    const aksesWaifu = waifuAksesSementara.get(sender);
    const isTemporaryActive = aksesWaifu && now < aksesWaifu;

    if (!(isBypass || isTemporaryActive)) {
      const record = waifuLimit.get(sender);
      if (record) {
        if (now - record.time < WAIFU_COOLDOWN) {
          if (record.count >= MAX_WAIFU) {
            const sisa = Math.ceil((WAIFU_COOLDOWN - (now - record.time)) / 60000);
            await sock.sendMessage(from, {
              text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.waifu* 1x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi.\n\n💡 *Tips:* Jadi *VIP* atau beli akses *.beliwaifu* biar unlimited.`
            }, { quoted: msg });
            await sock.sendMessage(from, { react: { text: "❌", key: msg.key } });
            return;
          } else record.count++;
        } else {
          waifuLimit.set(sender, { count: 1, time: now });
        }
      } else {
        waifuLimit.set(sender, { count: 1, time: now });
      }
    }

    const res = await axios.get("https://api.waifu.pics/sfw/waifu");

    const sentMsg = await sock.sendMessage(from, {
      image: { url: res.data.url },
      caption: "💖 Here’s your waifu~"
    }, { quoted: msg });

    await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });

    // 🔒 Antifoto aktif → hapus
    if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
      await sock.sendMessage(from, { delete: sentMsg.key });
      console.log(`🗑️ Foto waifu dihapus (antifoto aktif) di grup ${from}`);
    }

  } catch (err) {
    console.error(err);
    await sock.sendMessage(from, { react: { text: "❌", key: msg.key } });
    await sock.sendMessage(from, { text: "❌ Gagal mengambil waifu, coba lagi." }, { quoted: msg });
  }
}

// ========== FITUR .WAIFUX ==========
if (text.toLowerCase() === ".waifux" || text.toLowerCase().startsWith(".waifux ")) {
  try {
    if (!isVIP(sender, from) && sender !== OWNER_NUMBER) {
      await sock.sendMessage(from, {
        text: '🚫 Perintah *.waifux* hanya untuk pengguna *VIP* / *Owner*!'
      }, { quoted: msg });
      return;
    }

    await sock.sendMessage(from, { react: { text: "⏳", key: msg.key } });

    const res = await axios.get("https://api.waifu.pics/nsfw/waifu");

    const sentMsg = await sock.sendMessage(from, {
      image: { url: res.data.url },
      caption: "🔞 Your *NSFW Waifu*"
    }, { quoted: msg });

    await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });

    // 🔒 Antifoto aktif → hapus
    if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
      await sock.sendMessage(from, { delete: sentMsg.key });
      console.log(`🗑️ Foto waifux dihapus (antifoto aktif) di grup ${from}`);
    }

  } catch (err) {
    console.error(err);
    await sock.sendMessage(from, { react: { text: "❌", key: msg.key } });
    await sock.sendMessage(from, { text: "❌ Gagal mengambil waifux, coba lagi." }, { quoted: msg });
  }
}

// ========== FITUR .QR ==========
if (text.startsWith('.qr')) {
  const query = text.split(' ')[1];
  const userTag = `@${sender.split('@')[0]}`;

  if (!query || (!query.startsWith("http://") && !query.startsWith("https://"))) {
    await sock.sendMessage(from, { text: "❌ Link tidak valid.\nGunakan: *.qr <link http/https>*" });
    return;
  }

  await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

  try {
    const qrBuffer = await QRCode.toBuffer(query, { type: 'png' });

    const sentMsg = await sock.sendMessage(from, {
      image: qrBuffer,
      caption: `✅ QR berhasil dibuat oleh ${userTag}`,
      mentions: [sender]
    }, { quoted: msg });

    await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
    console.log(`✅ QR code berhasil dibuat oleh ${userTag} di ${from}`);

    // 🔒 Antifoto aktif → hapus
    if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
      await sock.sendMessage(from, { delete: sentMsg.key });
      console.log(`🗑️ Foto QR dihapus (antifoto aktif) di grup ${from}`);
    }

  } catch (err) {
    console.error('❌ ERROR QR:', err.message);
    await sock.sendMessage(from, { text: "❌ Gagal membuat QR. Coba lagi nanti." });
  }
  return;
}

if (text.startsWith('.antilink')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    if (!isVIP(sender, from)) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh VIP.' });
        return;
    }

    const arg = text.split(' ')[1];
    if (arg === 'on') {
        antiLinkGroups.set(from, true);
        await sock.sendMessage(from, { text: '✅ Antilink diaktifkan.' });
    } else if (arg === 'off') {
        antiLinkGroups.delete(from);
        await sock.sendMessage(from, { text: '❌ Antilink dimatikan.' });
    } else {
        await sock.sendMessage(from, { text: '⚠️ Gunakan: *.antilink on* atau *.antilink off*' });
    }
    return;
}

if (text.startsWith('.antistiker')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    // cek apakah pengirim VIP atau owner
    if (!isOwner(sender) && !isVIP(sender, from)) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh Owner atau VIP.' });
        return;
    }

    const arg = text.split(' ')[1];
    if (arg === 'on') {
        antiStickerGroups.set(from, true);
        await sock.sendMessage(from, { text: '✅ AntiStiker diaktifkan.' });
    } else if (arg === 'off') {
        antiStickerGroups.delete(from);
        await sock.sendMessage(from, { text: '❌ AntiStiker dimatikan.' });
    } else {
        await sock.sendMessage(from, { text: '⚠️ Gunakan: *.antistiker on* atau *.antistiker off*' });
    }
    return;
}

if (text.startsWith('.antifoto')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    // cek apakah pengirim VIP atau owner
    if (!isOwner(sender) && !isVIP(sender, from)) {
        await sock.sendMessage(from, { text: '🔐 Perintah ini hanya bisa digunakan oleh Owner atau VIP.' });
        return;
    }

    const arg = text.split(' ')[1];
    if (arg === 'on') {
        antiFotoGroups.set(from, true);
        await sock.sendMessage(from, { text: '✅ AntiFoto diaktifkan.' });
    } else if (arg === 'off') {
        antiFotoGroups.delete(from);
        await sock.sendMessage(from, { text: '❌ AntiFoto dimatikan.' });
    } else {
        await sock.sendMessage(from, { text: '⚠️ Gunakan: *.antifoto on* atau *.antifoto off*' });
    }
    return;
}

if (text.startsWith('.siapa')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    const question = text.split(' ').slice(1).join(' ').trim();
    if (!question) {
        await sock.sendMessage(from, { text: '⚠️ Gunakan: *.siapa <pertanyaan>*\nContoh: *.siapa paling ganteng?*' });
        return;
    }

    try {
        // Ambil semua member grup
        const groupMetadata = await sock.groupMetadata(from);
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length === 0) {
            await sock.sendMessage(from, { text: '❌ Tidak ada member di grup ini.' });
            return;
        }

        // Inisialisasi history untuk grup ini
        if (!historySiapa[from]) historySiapa[from] = [];

        // Filter member yang belum pernah kepilih
        let available = participants.filter(p => !historySiapa[from].includes(p));

        // Kalau semua udah pernah, reset history
        if (available.length === 0) {
            historySiapa[from] = [];
            available = [...participants];
        }

        // Pilih random dari available
        const randomUser = available[Math.floor(Math.random() * available.length)];

        // Simpan ke history
        historySiapa[from].push(randomUser);

        const tag = `@${randomUser.split('@')[0]}`;

        await sock.sendMessage(from, {
            text: `🤔 ${question}\n👉 Jawabannya adalah ${tag}`,
            mentions: [randomUser]
        }, { quoted: msg });

        console.log(`🎲 Fitur .siapa → ${tag} dipilih untuk pertanyaan: ${question}`);
    } catch (err) {
        console.error('❌ ERROR .siapa:', err.message);
        await sock.sendMessage(from, { text: '❌ Gagal menjalankan fitur .siapa. Coba lagi nanti.' });
    }
    return;
}


if (text.startsWith('.spamcode')) {
  await spamCode(sock, from, msg, text, isOwner);
}

// 📝 SET NAMA GRUP – Semua member bisa
if (text.startsWith('.setnamagc')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa digunakan di grup.' });
        return;
    }

    const newName = text.replace('.setnamagc', '').trim();
    if (!newName) {
        await sock.sendMessage(from, { text: '❗ Masukkan nama baru grup.\nContoh: *.setnamagc NamaBaru*' });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        await sock.groupUpdateSubject(from, newName);
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
    } catch (err) {
        console.error('❌ Gagal ganti nama grup:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}

// 🔒 SET DESKRIPSI GRUP – Semua member bisa
if (text.startsWith('.setdesgc')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah hanya bisa digunakan di grup.' });
        return;
    }

    const newDesc = text.replace('.setdesgc', '').trim();
    if (!newDesc) {
        await sock.sendMessage(from, { text: '⚠️ Masukkan deskripsi grup baru.\nContoh: *.setdesgc Grup Santuy Only*' });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        await sock.groupUpdateDescription(from, newDesc);
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
    } catch (err) {
        console.error('❌ Gagal ganti deskripsi grup:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}

// 🖼️ SET FOTO PROFIL GRUP – Semua member bisa
if (text.startsWith('.setppgc')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa digunakan di grup.' });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        let imageMessage;

        // 1. Kalau pesan user ada gambar + caption
        if (msg.message?.imageMessage) {
            imageMessage = msg.message.imageMessage;
        } 
        // 2. Kalau user reply ke gambar
        else if (msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
            imageMessage = msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        }

        if (!imageMessage) {
            await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
            await sock.sendMessage(from, { text: '❗ Kirim atau reply gambar dengan caption *.setppgc*' });
            return;
        }

        const buffer = await downloadMediaMessage(
            { message: { imageMessage } },
            "buffer",
            {}
        );

        await sock.updateProfilePicture(from, buffer);

        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('❌ Gagal ganti foto profil grup:', err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}

// 🔒 ADMIN ONLY ON/OFF – Semua bisa akses
if (text.startsWith('.adminonly')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa digunakan di grup.' });
        return;
    }

    const arg = text.replace('.adminonly', '').trim().toLowerCase();

    if (arg === 'on') {
        // kasih reaction ⏳
        await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

        try {
            await sock.groupSettingUpdate(from, 'announcement'); // hanya admin bisa chat
            await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
        } catch (err) {
            console.error('Gagal adminonly on:', err);
            await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        }
    } else if (arg === 'off') {
        // kasih reaction ⏳
        await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

        try {
            await sock.groupSettingUpdate(from, 'not_announcement'); // semua member bisa chat
            await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
        } catch (err) {
            console.error('Gagal adminonly off:', err);
            await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        }
    } else {
        await sock.sendMessage(from, { text: '⚙️ Gunakan: *.adminonly on* atau *.adminonly off*' });
    }
}
// 🌐 LINK GRUP – Semua bisa akses
if (text === '.linkgc') {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Perintah ini hanya bisa digunakan di grup.' });
        return;
    }

    // kasih reaction ⏳ dulu
    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        const code = await sock.groupInviteCode(from);
        const link = `https://chat.whatsapp.com/${code}`;

        // kirim link grup
        const sentMsg = await sock.sendMessage(from, { text: `🔗 *Link Grup:*\n${link}` });

        // ganti reaction jadi ✅
        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

        // 🚫 Kalau antilink aktif → hapus pesan link (termasuk bot sendiri)
        if (from.endsWith('@g.us') && antiLinkGroups.get(from)) {
            await sock.sendMessage(from, { delete: sentMsg.key });
            console.log(`🗑️ Link grup (.linkgc) dihapus (antilink aktif) di grup ${from}`);
        }

    } catch (err) {
        console.error('❌ Gagal ambil link grup:', err);

        // ganti reaction jadi ❌
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}


if (text.toLowerCase().startsWith('.sound')) {
    const teks = text.replace('.sound', '').trim();
    if (!teks) {
        await sock.sendMessage(from, { text: '❌ Contoh: .sound halo apa kabar' });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesSound = soundAksesSementara.get(sender);
    const isTemporaryActive = aksesSound && now < aksesSound;

    // Limit user biasa
    if (!(isBypass || isTemporaryActive)) {
        const record = soundLimit.get(sender);
        if (record) {
            if (now - record.time < SOUND_COOLDOWN) {
                if (record.count >= MAX_SOUND) {
                    const sisa = Math.ceil((SOUND_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Sound Tercapai*\n\nKamu hanya bisa memakai *.sound* 1x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses *.belisound* 5 menit.\n\n💡 *Tips:* Beli VIP agar bisa memakai *.sound* tanpa batas.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else record.count++;
            } else {
                soundLimit.set(sender, { count: 1, time: now });
            }
        } else {
            soundLimit.set(sender, { count: 1, time: now });
        }
    }

    try {
        const url = gtts.getAudioUrl(teks, {
            lang: 'id',
            slow: false,
            host: 'https://translate.google.com',
        });

        await sock.sendMessage(from, {
            audio: { url },
            mimetype: 'audio/mp4',
        });

        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error(err);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        await sock.sendMessage(from, { text: '❌ Gagal membuat suara.' });
    }
}


if (text.startsWith('.fakereply')) {
  const raw = text.replace('.fakereply', '').trim();

  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
  const parts = raw.split('|').map(p => p.trim()).filter(p => p.length > 0);

  let fakeJid;
  if (mentioned.length > 0) {

    fakeJid = (typeof normalizeJid === 'function') ? normalizeJid(mentioned[0]) : ensureJid(mentioned[0]);
  }

  if (fakeJid) {
    if (parts.length < 2) {
      await sock.sendMessage(from, {
        text: '⚠️ Format: .fakereply @user|pesanFake|isiBalasan'
      }, { quoted: msg });
      return;
    }
    const fakeMessage = parts[parts.length - 2];
    const replyText = parts[parts.length - 1];

    const fakeQuoted = {
      key: {
        remoteJid: from,
        fromMe: false,
        id: 'FAKE_' + Date.now(),
        participant: fakeJid
      },
      message: {
        conversation: fakeMessage
      }
    };

    try {
      await sock.sendMessage(from, { text: replyText }, { quoted: fakeQuoted });
    } catch (e) {
      console.error('Error .fakereply (mention):', e);
      await sock.sendMessage(from, { text: '❌ Gagal kirim fake reply.' }, { quoted: msg });
    }
    return;
  } else {
    if (parts.length < 3) {
      await sock.sendMessage(from, {
        text: '⚠️ Format: .fakereply nomor|pesanFake|isiBalasan'
      }, { quoted: msg });
      return;
    }
    const fakeSenderInput = parts[0];
    const fakeMessage = parts[1];
    const replyText = parts.slice(2).join('|'); // kalau isiBalasan mengandung '|' tetap aman

    const fakeSenderJid = (typeof normalizeJid === 'function') ? normalizeJid(fakeSenderInput) : ensureJid(fakeSenderInput);

    const fakeQuoted = {
      key: {
        remoteJid: from,
        fromMe: false,
        id: 'FAKE_' + Date.now(),
        participant: fakeSenderJid
      },
      message: {
        conversation: fakeMessage
      }
    };

    try {
      await sock.sendMessage(from, { text: replyText }, { quoted: fakeQuoted });
    } catch (e) {
      console.error('Error .fakereply (nomor):', e);
      await sock.sendMessage(from, { text: '❌ Gagal kirim fake reply.' }, { quoted: msg });
    }
    return;
  }
}
// ===== HANDLER HITAMKAN =====
if (text.toLowerCase().startsWith('.hitamkan')) {
    console.log(`📥 Permintaan hitamkan dari ${from}...`);

    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const imageDirect = msg.message?.imageMessage;
    const imageQuoted = quoted?.imageMessage;

    // Tentukan pesan yang akan dipakai media
    let messageForMedia = null;
    if (imageDirect) {
        messageForMedia = msg;
    } else if (imageQuoted) {
        messageForMedia = { ...msg, message: { imageMessage: imageQuoted } };
    }

    if (!messageForMedia) {
        await sock.sendMessage(from, { text: '❌ Balas atau kirim gambar dengan perintah *.hitamkan*' }, { quoted: msg });
        return;
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    // ===== CEK LIMIT / VIP / OWNER =====
    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesHitam = hitamkanAksesSementara.get(sender);
    const isTemporaryActive = aksesHitam && now < aksesHitam;

    if (!(isBypass || isTemporaryActive)) {
        const record = hitamkanLimit.get(sender);
        if (record) {
            if (now - record.time < HITAMKAN_COOLDOWN) {
                if (record.count >= MAX_HITAMKAN) {
                    const sisa = Math.ceil((HITAMKAN_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.hitamkan* 1x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses *.belihitamkan* 5 menit.\n\n💡 *Tips:* Beli akses *VIP* agar bisa memakai *.hitamkan* tanpa batas waktu.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else record.count++;
            } else {
                hitamkanLimit.set(sender, { count: 1, time: now });
            }
        } else {
            hitamkanLimit.set(sender, { count: 1, time: now });
        }
    }

    // ===== PROSES HITAMKAN =====
    try {
        const media = await downloadMediaMessage(messageForMedia, 'buffer');

        const payload = { imageData: media.toString("base64"), filter: "hitam" };
        const res = await axios.post("https://negro.consulting/api/process-image", payload);

        if (res.data?.status === "success" && res.data.processedImageUrl) {
            const imgRes = await axios.get(res.data.processedImageUrl, { responseType: "arraybuffer" });
            const buffer = Buffer.from(imgRes.data);

            await sock.sendMessage(from, { image: buffer, caption: "✅ Awokawokwkwk ireng" }, { quoted: msg });
            await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
            console.log(`✅ Gambar berhasil dihitamkan untuk ${from}`);
        } else {
            throw new Error("API tidak mengembalikan gambar.");
        }
    } catch (err) {
        console.error("❌ Gagal memproses gambar:", err);
        await sock.sendMessage(from, { text: '❌ Gagal memproses gambar.' }, { quoted: msg });
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
    }
}

// 📌 FITUR .qc (Quote Sticker)
if (text.toLowerCase().startsWith('.qc')) {
    const args = text.trim().split(/ +/).slice(1);
    let argsText = args.join(" ");
    let textInput;
    let apiColor = '#000000';

    if (args.length >= 1) {
        const input = argsText.split("|");
        if (input.length === 2) {
            const colorName = input[0].trim().toLowerCase();
            textInput = input[1].trim();

            const colorMap = {
                'putih': '#FFFFFF', 'hijau': '#00FF00', 'kuning': '#FFFF00',
                'hitam': '#000000', 'merah': '#FF0000', 'biru': '#0000FF',
                'ungu': '#800080', 'jingga': '#FFA500', 'pink': '#FFC0CB',
                'abu-abu': '#808080', 'coklat': '#A52A2A', 'cyan': '#00FFFF',
                'magenta': '#FF00FF', 'maroon': '#800000', 'navy': '#000080',
                'olive': '#808000', 'orange': '#FFA500', 'purple': '#800080',
                'silver': '#C0C0C0', 'teal': '#008080', 'turquoise': '#40E0D0',
                'violet': '#EE82EE', 'salmon': '#FA8072', 'gold': '#FFD700',
                'indigo': '#4B0082', 'lime': '#00FF00', 'skyblue': '#87CEEB',
                'tan': '#D2B48C', 'orchid': '#DA70D6', 'coral': '#FF7F50'
            };

            apiColor = colorMap[colorName] || apiColor;
        } else {
            await sock.sendMessage(from, {
                text: "❌ Format salah.\n\nContoh: *.qc warna|teks*"
            }, { quoted: msg });
            return;
        }
    } else if (msg.quoted && msg.quoted.text) {
        textInput = msg.quoted.text;
    } else {
        await sock.sendMessage(from, {
            text: "❌ Input teks atau reply teks dengan format: *.qc warna|teks*"
        }, { quoted: msg });
        return;
    }

    if (!textInput) return sock.sendMessage(from, { text: '❌ Masukkan teks!' }, { quoted: msg });
    if (textInput.length > 100) return sock.sendMessage(from, { text: '❌ Maksimal 100 karakter!' }, { quoted: msg });

    let namaPengirim = msg.pushName || sender.split('@')[0];
    let pp = await sock.profilePictureUrl(sender, 'image').catch(() => 'https://telegra.ph/file/320b066dc81928b782c7b.png');

    const obj = {
        type: "quote",
        format: "png",
        backgroundColor: apiColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
            entities: [],
            avatar: true,
            from: {
                id: 1,
                name: namaPengirim,
                photo: { url: pp }
            },
            text: textInput,
            replyMessage: {}
        }]
    };

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    try {
        const json = await axios.post('https://qc.botcahx.eu.org/generate', obj, {
            headers: { 'Content-Type': 'application/json' }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');

        const stiker = new Sticker(buffer, {
            pack: global.stickpack || 'qcbot',
            author: global.stickauth || 'Jarr',
            type: StickerTypes.FULL,
            quality: 100
        });

        const stickerMsg = await sock.sendMessage(from, { sticker: await stiker.toBuffer() }, { quoted: msg });

        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });

        // 🔒 Cek Antistiker (hapus stiker dari bot sendiri juga)
        if (from.endsWith('@g.us') && antiStickerGroups.has(from)) {
            await sock.sendMessage(from, { delete: stickerMsg.key });
            console.log(`🗑️ Stiker QC dihapus (bot sendiri) di grup ${from}`);
        }

    } catch (error) {
        console.error(error);
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        await sock.sendMessage(from, { text: '❌ Terjadi kesalahan saat membuat stiker.' }, { quoted: msg });
    }
}
if (text.toLowerCase().startsWith('.srtdarksistem')) {
    const args = text.split(' ').slice(1)
    const nama = args.join(' ')

    if (!nama) {
        return sock.sendMessage(from, {
            text: `Kirim perintah *.srtdarksistem [teks]*\nContoh: *.srtdarksistem Hilman*`
        }, { quoted: msg })
    }

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } })

    try {
        const url = `https://api.sxtream.xyz/maker/yapping?name=${encodeURIComponent(nama)}`
        const res = await fetch(url)
        if (!res.ok) throw '❌ Gagal mengambil data dari API.'

        const buffer = await res.buffer()

        // 📌 Simpan pesan kiriman bot
        const sentMsg = await sock.sendMessage(from, {
            image: buffer,
            caption: `🗣️ Sertifikat Dark Sistem by *${nama}*`
        }, { quoted: msg })

        await sock.sendMessage(from, { react: { text: '✅', key: msg.key } })

        // 🔒 Antifoto aktif → hapus foto bot juga
        if (from.endsWith('@g.us') && antiFotoGroups.has(from)) {
            await sock.sendMessage(from, { delete: sentMsg.key })
            console.log(`🗑️ Foto .srtdarksistem dihapus (antifoto aktif) di grup ${from}`)
        }

    } catch (e) {
        console.error(e)
        await sock.sendMessage(from, { react: { text: '❌', key: msg.key } })
        await sock.sendMessage(from, {
            text: '❌ Terjadi kesalahan saat mengambil gambar.'
        }, { quoted: msg })
    }
}

//SPOTIFY
async function convert(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

async function down(url) {
    const BASEURL = "https://api.fabdl.com";
    const headers = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
    };

    const { data: info } = await axios.get(`${BASEURL}/spotify/get?url=${url}`, { headers });
    const { gid, id } = info.result;

    const { data: download } = await axios.get(`${BASEURL}/spotify/mp3-convert-task/${gid}/${id}`, { headers });
    if (download.result.download_url) return `${BASEURL}${download.result.download_url}`;
    throw new Error("Gagal mendownload audio dari Spotify");
}

async function spotifyCreds() {
    try {
        const json = await axios.post(
            "https://accounts.spotify.com/api/token",
            "grant_type=client_credentials",
            {
                headers: {
                    Authorization:
                        "Basic " +
                        Buffer.from("4c4fc8c3496243cbba99b39826e2841f:d598f89aba0946e2b85fb8aefa9ae4c8").toString("base64"),
                },
            }
        );
        if (!json.data.access_token) return { status: false, msg: "Tidak bisa generate token!" };
        return { status: true, data: json.data };
    } catch (e) {
        return { status: false, msg: e.message };
    }
}

async function play(query) {
    try {
        const creds = await spotifyCreds();
        if (!creds.status) return creds;

        const json = await axios.get(`https://api.spotify.com/v1/search?query=${encodeURIComponent(query)}&type=track&offset=0&limit=1`, {
            headers: { Authorization: "Bearer " + creds.data.access_token },
        });
        if (!json.data.tracks.items || json.data.tracks.items.length < 1) return { status: false, msg: "Music not found!" };

        let v = json.data.tracks.items[0];
        let url = await down(v.external_urls.spotify);

        const metadata = {
            title: `${v.album.artists[0].name} - ${v.name}`,
            artist: v.album.artists[0].name,
            name: v.name,
            duration: await convert(v.duration_ms),
            popularity: `${v.popularity}%`,
            preview: v.preview_url || "No preview audio available",
            thumbnail: v.album.images[0].url,
            url: v.external_urls.spotify,
        };

        return { status: true, metadata, audio: { url } };
    } catch (e) {
        return { status: false, msg: e.message };
    }
}

// ===== HANDLER SPOTIFY =====
if (text.toLowerCase().startsWith('.spotify') || text.toLowerCase().startsWith('.plays')) {
    const query = text.split(' ').slice(1).join(' ');
    if (!query) return sock.sendMessage(from, { text: '❌ Masukkan nama lagu atau artis!' }, { quoted: msg });

    await sock.sendMessage(from, { react: { text: '⏳', key: msg.key } });

    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesSpotify = spotifyAksesSementara.get(sender);
    const isTemporaryActive = aksesSpotify && now < aksesSpotify;

    if (!(isBypass || isTemporaryActive)) {
        const record = spotifyLimit.get(sender);
        if (record) {
            if (now - record.time < SPOTIFY_COOLDOWN) {
                if (record.count >= MAX_SPOTIFY) {
                    const sisa = Math.ceil((SPOTIFY_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.spotify* 2x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses *.belispotify* 5 menit.\n\n💡 *Tips:* Beli akses *VIP* agar bisa memakai *.spotify* tanpa batas waktu.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else record.count++;
            } else {
                spotifyLimit.set(sender, { count: 1, time: now });
            }
        } else {
            spotifyLimit.set(sender, { count: 1, time: now });
        }
    }

    (async () => {
        try {
            const result = await play(query);
            if (!result.status) {
                await sock.sendMessage(from, { text: `❌ Error: ${result.msg}`, quoted: msg });
                return;
            }

            const { metadata, audio } = result;

            await sock.sendMessage(from, {
                image: { url: metadata.thumbnail },
                caption: `
🎵 *Spotify Track Info* 🎵
────────────────────────
*🎶 Judul:* ${metadata.title}
*👤 Artis:* ${metadata.artist}
*⏱️ Durasi:* ${metadata.duration}
*🔥 Popularitas:* ${metadata.popularity}
*🔊 Preview:* ${metadata.preview}
*🔗 Spotify:* ${metadata.url}
────────────────────────
`,
            }, { quoted: msg });

            if (audio.url) {
                await sock.sendMessage(from, { audio: { url: audio.url }, mimetype: 'audio/mpeg' }, { quoted: msg });
            }

            await sock.sendMessage(from, { react: { text: '✅', key: msg.key } });
        } catch (e) {
            console.error(e);
            await sock.sendMessage(from, { text: '❌ Terjadi kesalahan saat mengambil lagu.', quoted: msg });
            await sock.sendMessage(from, { react: { text: '❌', key: msg.key } });
        }
    })();
}


// ===== FUNGSI IG STALK =====
async function igstalk(user) {
    try {
        const response = await axios.post(
            "https://privatephotoviewer.com/wp-json/instagram-viewer/v1/fetch-profile",
            { find: user },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    "X-Requested-With": "XMLHttpRequest",
                },
            }
        );

        const $ = cheerio.load(response.data.html);

        let profilePicture = $("#profile-insta img").attr("src");
        const nickname = $(".col-md-8 h4").text().trim();
        const username = $(".col-md-8 h5").text().trim();
        const posts = $(".col-md-8 .text-center").eq(0).find("strong").text().trim();
        const followers = $(".col-md-8 .text-center").eq(1).find("strong").text().trim();
        const following = $(".col-md-8 .text-center").eq(2).find("strong").text().trim();
        const bio = $(".col-md-8 p").html()?.replace(/<br\s*\/?>/g, "\n").trim() || "-";

        let statusAkun = "Public";
        if ($("#profile-insta").text().includes("This Account is Private")) {
            statusAkun = "Private";
        }

        return {
            status: true,
            data: {
                nickname,
                username,
                bio,
                posts,
                followers,
                following,
                profile: "https://www.instagram.com/" + username.replace("@", ""),
                profileUrl: profilePicture,
                statusAkun
            },
        };
    } catch (e) {
        console.error("❌ IG Stalk Error:", e);
        return { status: false };
    }
}

// ===== HANDLER .IGSTALK =====
if (text.trim().toLowerCase().startsWith(".igstalk")) {
    const query = text.replace(".igstalk", "").trim();
    if (!query) {
        await sock.sendMessage(from, { text: "❌ Masukkan username Instagram!\n\nContoh: *.igstalk jerofc*" }, { quoted: msg });
        return;
    }

    // ===== Cek Limit & Akses =====
    const isBypass = isOwner(sender) || isVIP(sender, from);
    const now = Date.now();
    const aksesSementara = igstalkAksesSementara.get(sender);
    const isTemporaryActive = aksesSementara && now < aksesSementara;

    if (!(isBypass || isTemporaryActive)) {
        const record = igstalkLimit.get(sender);
        if (record) {
            if (now - record.time < IGSTALK_COOLDOWN) {
                if (record.count >= MAX_IGSTALK) {
                    const sisa = Math.ceil((IGSTALK_COOLDOWN - (now - record.time)) / 60000);
                    await sock.sendMessage(from, {
                        text: `🚫 *Limit Tercapai*\n\nKamu hanya bisa memakai *.igstalk* 1x selama 10 jam.\n⏳ Tunggu *${sisa} menit* lagi atau beli akses sementara *.beliigstalk* 5 menit.\n\n💡 *Tips:* Jadilah VIP atau Owner agar bisa memakai *.igstalk* tanpa batas.`,
                        mentions: [sender]
                    }, { quoted: msg });
                    return;
                } else record.count++;
            } else {
                igstalkLimit.set(sender, { count: 1, time: now });
            }
        } else {
            igstalkLimit.set(sender, { count: 1, time: now });
        }
    }

    try {
        await sock.sendMessage(from, { react: { text: "⏳", key: msg.key } });
        const result = await igstalk(query);

        if (!result.status) {
            await sock.sendMessage(from, { react: { text: "❌", key: msg.key } });
            await sock.sendMessage(from, { text: "❌ Username tidak ditemukan!" }, { quoted: msg });
            return;
        }

        let caption = `*📱 INSTAGRAM STALKER*\n\n` +
            `*👤 Nickname :* ${result.data.nickname}\n` +
            `*🆔 Username :* ${result.data.username}\n` +
            `*🔒 Status :* ${result.data.statusAkun}\n` +
            `*📝 Bio :* ${result.data.bio}\n` +
            `*📸 Posts :* ${result.data.posts}\n` +
            `*👥 Followers :* ${result.data.followers}\n` +
            `*➡️ Following :* ${result.data.following}\n` +
            `*🔗 Profile :* ${result.data.profile}`;

        await sock.sendMessage(from, { image: { url: result.data.profileUrl }, caption }, { quoted: msg });
        await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });

    } catch (err) {
        console.error("❌ IG Stalk Handler Error:", err);
        await sock.sendMessage(from, { react: { text: "❌", key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Terjadi kesalahan saat mengambil data." }, { quoted: msg });
    }
}

// 📌 FITUR POLLING
if (text.startsWith('.polling')) {
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '⚠️ Fitur ini hanya bisa dipakai di *grup*!' });
        return;
    }

    const args = text.replace('.polling', '').trim();
    if (!args.includes('|')) {
        await sock.sendMessage(from, { text: '⚠️ Format salah!\n\nContoh: `.polling Besok belajar jam berapa? | 7 pagi | 8 pagi | 9 pagi`' });
        return;
    }

    const [pertanyaan, ...opsi] = args.split('|').map(a => a.trim());

    if (opsi.length < 2) {
        await sock.sendMessage(from, { text: '⚠️ Minimal harus ada 2 opsi!' });
        return;
    }

    const hasil = Array(opsi.length).fill(0);
    const endTime = Date.now() + 60000; // 60 detik

    const tampilkanPolling = () => {
        const sisa = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        let teks = `🗳️ *Polling Dimulai!*\n──────────────────\n📌 ${pertanyaan}\n\n`;
        opsi.forEach((o, i) => {
            teks += `${i + 1}️⃣ ${o} (${hasil[i]} suara)\n`;
        });
        teks += `\n✅ Balas pesan ini dengan angka pilihanmu\n⏳ Sisa waktu: *${sisa} detik*`;
        return teks;
    };

    const sent = await sock.sendMessage(from, { text: tampilkanPolling() });

    // simpan sesi polling
    sesiPolling.set(from, {
        pesanId: sent.key.id,
        pertanyaan,
        opsi,
        hasil,
        pemilih: new Set(),
        endTime,
        timeout: setTimeout(async () => {
            const sesi = sesiPolling.get(from);
            if (!sesi) return;

            const maxSuara = Math.max(...sesi.hasil);
            const pemenangIndex = sesi.hasil.indexOf(maxSuara);

            let teks = `🏁 *Polling Selesai!*\n──────────────────\n📌 ${sesi.pertanyaan}\n\n`;
            sesi.opsi.forEach((o, i) => {
                teks += `${i + 1}️⃣ ${o} (${sesi.hasil[i]} suara)\n`;
            });
            teks += `\n🥇 *${sesi.opsi[pemenangIndex]}* menang dengan ${maxSuara} suara 🎉`;

            await sock.sendMessage(from, { text: teks });
            sesiPolling.delete(from);
        }, 60000)
    });

    return;
}

// 📌 Tangani jawaban polling
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const sesi = sesiPolling.get(from);
    if (sesi && msg.message.extendedTextMessage.contextInfo.stanzaId === sesi.pesanId) {
        const sender = msg.key.participant || msg.key.remoteJid;
        const pilihan = parseInt(text.trim());

        if (isNaN(pilihan) || pilihan < 1 || pilihan > sesi.opsi.length) {
            await sock.sendMessage(from, { text: `⚠️ Pilih angka antara 1 - ${sesi.opsi.length}` });
            return;
        }

        if (sesi.pemilih.has(sender)) {
            await sock.sendMessage(from, { text: `⚠️ @${sender.split('@')[0]} kamu sudah memilih!`, mentions: [sender] });
            return;
        }

        sesi.hasil[pilihan - 1]++;
        sesi.pemilih.add(sender);

        const sisa = Math.max(0, Math.ceil((sesi.endTime - Date.now()) / 1000));

        let teks = `🗳️ *Update Polling*\n──────────────────\n📌 ${sesi.pertanyaan}\n\n`;
        sesi.opsi.forEach((o, i) => {
            teks += `${i + 1}️⃣ ${o} (${sesi.hasil[i]} suara)\n`;
        });
        teks += `\n⏳ Sisa waktu: *${sisa} detik*`;

        await sock.sendMessage(from, { text: teks });
    }
}


// 📌 FITUR KELUAR GRUP
if (text.toLowerCase() === '.mau keluar sendiri apa ku keluarin?') {
    if (!isOwner(sender)) {
        await sock.sendMessage(from, { text: '⚠️ Fitur ini hanya bisa digunakan oleh *Owner*!' });
        return;
    }

    const sent = await sock.sendMessage(from, { text: 'Keluar sendiri 😎' });

    // simpan sesi khusus untuk trigger reply
    global.sesiKeluar = {
        groupId: from,
        pesanId: sent.key.id
    };

    return;
}

// 📌 Tindak lanjuti reply owner
if (msg.message?.extendedTextMessage?.contextInfo?.stanzaId) {
    const stanzaId = msg.message.extendedTextMessage.contextInfo.stanzaId;

    if (global.sesiKeluar && stanzaId === global.sesiKeluar.pesanId) {
        if (!isOwner(sender)) return; // cuma owner yg bisa trigger keluar

        await sock.sendMessage(from, { text: 'Terimakasih semua 🙏' });
        await sock.groupLeave(from);

        delete global.sesiKeluar; // hapus sesi
        return;
    }
}

function randomString(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

if (text.startsWith('.tantangan')) {
    const args = text.split(' ');
    const poin = parseInt(args[1]) || 10;
    const waktu = parseInt(args[2]) || 15;

    const challenge = randomString(5 + Math.floor(Math.random() * 3));

    if (!isOwner(sender) && !isVIP(sender, from)) {
        await sock.sendMessage(from, { text: "❌ Fitur ini hanya untuk *Owner* atau *VIP*." });
        return;
    }

    // kalau chat pribadi
    if (!from.endsWith('@g.us')) {
        let grupAktif = {};
        try {
            grupAktif = JSON.parse(fs.readFileSync('./grupAktif.json'));
        } catch {
            grupAktif = {};
        }

        const daftar = Object.entries(grupAktif)
            .filter(([id, aktif]) => aktif === true && id.endsWith('@g.us'))
            .map(([id]) => id);

        if (daftar.length === 0) {
            await sock.sendMessage(from, { text: "⚠️ Tidak ada grup aktif." });
            return;
        }

        // ambil nama grup
        let teks = "📋 *Pilih grup untuk mengirim tantangan:*\n\n";
        for (let i = 0; i < daftar.length; i++) {
            const meta = await sock.groupMetadata(daftar[i]).catch(() => null);
            if (!meta) continue;
            teks += `${i + 1}. ${meta.subject}\n`;
        }
        teks += `\nBalas dengan angka (misal: 2)\n`;

        await sock.sendMessage(from, { text: teks });
        sesiPilihGrup.set(sender, { daftar, poin, waktu, challenge });
        return;
    }

    // kalau dari grup langsung
    const sent = await sock.sendMessage(from, {
        text: `🎯 *Tantangan Cepat!*\n──────────────────\nBalas pesan ini dengan kata berikut:\n\n➡️ *${challenge}*\n\n🏆 Hadiah: *${poin} poin*\n⏳ Waktu: ${waktu} detik`
    });

    const timeout = setTimeout(() => {
        if (sesiCepat.has(sent.key.id)) {
            sock.sendMessage(from, { text: `⏰ *Waktu habis!* Tidak ada yang berhasil.` });
            sesiCepat.delete(sent.key.id);
        }
    }, waktu * 1000);

    sesiCepat.set(sent.key.id, { poin, timeout, jawaban: challenge });
    return;
}

// kalau user sedang memilih grup
if (sesiPilihGrup.has(sender)) {
    const pilihan = parseInt(text.trim());
    const data = sesiPilihGrup.get(sender);

    if (isNaN(pilihan) || pilihan < 1 || pilihan > data.daftar.length) {
        await sock.sendMessage(from, { text: "❌ Pilihan tidak valid. Kirim angka yang sesuai." });
        return;
    }

    const groupId = data.daftar[pilihan - 1];
    sesiPilihGrup.delete(sender);

    const sent = await sock.sendMessage(groupId, {
        text: `🎯 *Tantangan Cepat!*\n──────────────────\nBalas pesan ini dengan kata berikut:\n\n➡️ *${data.challenge}*\n\n🏆 Hadiah: *${data.poin} poin*\n⏳ Waktu: ${data.waktu} detik`
    });

    const timeout = setTimeout(() => {
        if (sesiCepat.has(sent.key.id)) {
            sock.sendMessage(groupId, { text: `⏰ *Waktu habis!* Tidak ada yang berhasil.` });
            sesiCepat.delete(sent.key.id);
        }
    }, data.waktu * 1000);

    sesiCepat.set(sent.key.id, { poin: data.poin, timeout, jawaban: data.challenge });

    await sock.sendMessage(from, { text: `✅ Tantangan berhasil dikirim ke grup yang dipilih!` });
    return;
}

if (text.startsWith('.umumkan')) {
    const isi = text.replace('.umumkan', '').trim();

    // ✅ Hanya bisa digunakan di chat pribadi
    if (from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: "❌ Perintah *.umumkan* hanya bisa digunakan di chat pribadi bot." });
        return;
    }

    // ✅ Cek akses: hanya Owner atau VIP
    if (!isOwner(sender) && !isVIP(sender, from)) {
        await sock.sendMessage(from, { text: "❌ Perintah ini hanya bisa digunakan oleh *Owner* atau *VIP*." });
        return;
    }

    // ✅ Validasi isi teks
    if (!isi) {
        await sock.sendMessage(from, { text: "❗ Format salah!\nGunakan: *.umumkan <teks>" });
        return;
    }

    // Baca daftar grup aktif
    let grupAktif = {};
    try {
        grupAktif = JSON.parse(fs.readFileSync('./grupAktif.json'));
    } catch {
        grupAktif = {};
    }

    const daftar = Object.entries(grupAktif)
        .filter(([id, aktif]) => aktif === true && id.endsWith('@g.us'))
        .map(([id]) => id);

    if (daftar.length === 0) {
        await sock.sendMessage(from, { text: "⚠️ Tidak ada grup aktif untuk menerima pengumuman." });
        return;
    }

    // ✅ Buat daftar nama grup
    let teks = `📋 *Pilih grup untuk mengirim pengumuman:*\n\n`;
    for (let i = 0; i < daftar.length; i++) {
        const meta = await sock.groupMetadata(daftar[i]).catch(() => null);
        if (!meta) continue;
        teks += `${i + 1}. ${meta.subject}\n`;
    }
    teks += `\n🗒️ Balas dengan angka (misal: 2)\n`;

    await sock.sendMessage(from, { text: teks });
    sesiUmumkan.set(sender, { daftar, isi });
    return;
}

// === Jika user sedang memilih grup untuk umumkan ===
if (sesiUmumkan.has(sender)) {
    const pilihan = parseInt(text.trim());
    const data = sesiUmumkan.get(sender);

    if (isNaN(pilihan) || pilihan < 1 || pilihan > data.daftar.length) {
        await sock.sendMessage(from, { text: "❌ Pilihan tidak valid.\nBalas dengan nomor grup yang sesuai." });
        return;
    }

    const groupId = data.daftar[pilihan - 1];
    sesiUmumkan.delete(sender);

    await sock.sendMessage(groupId, {
        text: `📢 *PENGUMUMAN* 📢\n──────────────────\n${data.isi}\n\n👤 Dari: @${sender.split('@')[0]}`,
        mentions: [sender]
    });

    await sock.sendMessage(from, { text: `✅ Pengumuman berhasil dikirim ke grup yang dipilih!` });
    return;
}



function renderBoard(board) {
    return `
${board[0]} | ${board[1]} | ${board[2]}
---------
${board[3]} | ${board[4]} | ${board[5]}
---------
${board[6]} | ${board[7]} | ${board[8]}
`.trim();
}

function cekMenang(board, simbol) {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8], // baris
        [0,3,6],[1,4,7],[2,5,8], // kolom
        [0,4,8],[2,4,6]          // diagonal
    ];
    return winPatterns.some(pattern => 
        pattern.every(i => board[i] === simbol)
    );
}

// 📌 Mulai tantangan
if (text.startsWith('.tictactoe')) {
    if (!from.endsWith('@g.us')) {
        await sock.sendMessage(from, { text: '❌ Fitur hanya bisa di grup!' });
        return;
    }
    if (sesiTicTacToe.has(from)) {
        await sock.sendMessage(from, { text: '⚠️ Masih ada game TicTacToe berlangsung di grup ini!' });
        return;
    }

    const lawan = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!lawan) {
        await sock.sendMessage(from, { text: '⚠️ Tag lawanmu!\nContoh: `.tictactoe @user`' });
        return;
    }

    const sent = await sock.sendMessage(from, {
        text: `🎮 *TicTacToe Dimulai!*\n──────────────────\n@${sender.split('@')[0]} menantang @${lawan.split('@')[0]}\n\n⚠️ Menunggu persetujuan lawan...\nReply pesan ini dengan *setuju* untuk mulai! (30 detik)`,
        mentions: [sender, lawan]
    });

    const timeout = setTimeout(async () => {
        const sesi = sesiTicTacToe.get(from);
        if (sesi && sesi.status === 'menunggu') {
            await sock.sendMessage(from, { 
                text: `⏰ Waktu habis! @${sesi.lawan.split('@')[0]} tidak merespon. Game dibatalkan.`,
                mentions: [sesi.penantang, sesi.lawan] 
            });
            sesiTicTacToe.delete(from);
        }
    }, 30000);

    sesiTicTacToe.set(from, {
        penantang: normalizeJid(sender),
        lawan: normalizeJid(lawan),
        status: 'menunggu',
        board: Array(9).fill('⬜'),
        giliran: null,
        simbol: {},
        pesanId: sent.key.id,
        timeout,
        pionPos: { '❌': [], '⭕': [] } // simpan posisi pion urut
    });
    return;
}

// 📌 Lawan setuju
if (sesiTicTacToe.has(from)) {
    const sesi = sesiTicTacToe.get(from);

    if (
        sesi &&
        sesi.status === 'menunggu' &&
        normalizeJid(sender) === sesi.lawan &&
        text.trim().toLowerCase() === 'setuju'
    ) {
        clearTimeout(sesi.timeout);
        sesi.status = 'main';
        sesi.giliran = sesi.penantang;
        sesi.simbol[sesi.penantang] = '❌';
        sesi.simbol[sesi.lawan] = '⭕';

        await sock.sendMessage(from, {
            text: `✅ @${sesi.lawan.split('@')[0]} menerima tantangan!\n\n${renderBoard(sesi.board)}\n\nGiliran: @${sesi.giliran.split('@')[0]} (${sesi.simbol[sesi.giliran]})\n\nKetik angka (1-9) untuk memilih posisi.`,
            mentions: [sesi.penantang, sesi.lawan]
        });
        return;
    }
}

// 📌 Menyerah
if (text === '.menyerah') {
    const sesi = sesiTicTacToe.get(from);
    if (sesi && sesi.status === 'main' && 
        (normalizeJid(sender) === sesi.penantang || normalizeJid(sender) === sesi.lawan)) {
        
        const pecundang = normalizeJid(sender);
        const pemenang = (pecundang === sesi.penantang) ? sesi.lawan : sesi.penantang;

        tambahSkor(pemenang, from, 50);
        tambahSkor(pecundang, from, -50);

        await sock.sendMessage(from, {
            text: `🏳️ @${pecundang.split('@')[0]} menyerah!\n\n🏆 Pemenang: @${pemenang.split('@')[0]} (+50 poin)\n❌ Kalah: @${pecundang.split('@')[0]} (-50 poin)`,
            mentions: [pemenang, pecundang]
        });
        sesiTicTacToe.delete(from);
        return;
    }
}

// 📌 Giliran main (mode 3 pion rotasi)
if (/^[1-9]$/.test(text)) {
    const sesi = sesiTicTacToe.get(from);
    if (sesi && sesi.status === 'main' && normalizeJid(sender) === sesi.giliran) {
        const pos = parseInt(text) - 1;
        const simbol = sesi.simbol[sesi.giliran];
        const pionList = sesi.pionPos[simbol];

        if (sesi.board[pos] !== '⬜') {
            await sock.sendMessage(from, { text: '⚠️ Posisi sudah terisi, pilih angka kosong!' });
            return;
        }

        if (pionList.length < 3) {
            // masih boleh tambah pion
            sesi.board[pos] = simbol;
            pionList.push(pos);
        } else {
            // rotasi → geser pion paling lama
            const oldPos = pionList.shift(); // ambil pion tertua
            sesi.board[oldPos] = '⬜';       // kosongkan
            sesi.board[pos] = simbol;       // taruh pion baru
            pionList.push(pos);             // simpan posisi baru
        }

        // cek menang
        if (cekMenang(sesi.board, simbol)) {
            const pemenang = sesi.giliran;
            const pecundang = (sesi.giliran === sesi.penantang) ? sesi.lawan : sesi.penantang;

            tambahSkor(pemenang, from, 50);
            tambahSkor(pecundang, from, -50);

            await sock.sendMessage(from, {
                text: `🎉 *Permainan Selesai!*\n\n${renderBoard(sesi.board)}\n\n🏆 Pemenang: @${pemenang.split('@')[0]} (+50 poin)\n❌ Kalah: @${pecundang.split('@')[0]} (-50 poin)`,
                mentions: [pemenang, pecundang]
            });
            sesiTicTacToe.delete(from);
            return;
        }

        // lanjut giliran
        sesi.giliran = (sesi.giliran === sesi.penantang) ? sesi.lawan : sesi.penantang;
        await sock.sendMessage(from, {
            text: `${renderBoard(sesi.board)}\n\nGiliran: @${sesi.giliran.split('@')[0]} (${sesi.simbol[sesi.giliran]})`,
            mentions: [sesi.penantang, sesi.lawan]
        });
        return;
    }
}

// ========== FITUR AMBIL FOTO PROFIL (.ambilpp) ==========
if (text.trim().toLowerCase().startsWith('.ambilpp')) {
 

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    const args = text.trim().split(/\s+/);
    let targets = [];

    // 🔍 ambil target dari mention atau nomor
    if (mentioned.length > 0) {
        targets = mentioned.map(j => normalizeJid(j));
    } else if (args[1] && /^\d{6,}$/.test(args[1].replace(/[^0-9]/g, ''))) {
        const num = args[1].replace(/[^0-9]/g, '');
        targets.push(normalizeJid(num + '@s.whatsapp.net'));
    } else {
        // ⚠️ tidak ada target
        await sock.sendMessage(from, {
            text: `⚠️ *Format salah!*\n\nGunakan salah satu:\n> 📍 *.ambilpp @user*\n> 📍 *.ambilpp 628xxxxxx*\n`,
        }, { quoted: msg });
        return;
    }

    for (const target of targets) {
        try {
            // ✅ ambil URL foto profil
            let ppUrl = null;
            try {
                if (typeof sock.profilePictureUrl === 'function') {
                    try { ppUrl = await sock.profilePictureUrl(target, 'image'); } 
                    catch { ppUrl = await sock.profilePictureUrl(target); }
                }
            } catch (e) {
                ppUrl = null;
            }

            if (!ppUrl) {
                await sock.sendMessage(from, {
                    text: `❌ Tidak bisa mengambil foto profil @${target.split('@')[0]}.\nMungkin pengguna tidak memiliki foto profil atau privasi aktif.`,
                    mentions: [target],
                }, { quoted: msg });
                continue;
            }

            // 🧩 download & kirim
            const res = await axios.get(ppUrl, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(res.data);

            const ext = res.headers['content-type']?.includes('png') ? '.png' : '.jpg';
            const tempPath = path.join(__dirname, `pp_${target.split('@')[0]}_${Date.now()}${ext}`);
            fs.writeFileSync(tempPath, buffer);

            await sock.sendMessage(from, {
                image: { url: tempPath },
                caption: `📸 Foto Profil @${target.split('@')[0]}\n\n🧾 Berhasil diambil.`,
                mentions: [target],
            }, { quoted: msg });

            setTimeout(() => {
                try { fs.unlinkSync(tempPath); } catch {}
            }, 30_000);
        } catch (err) {
            console.error('❌ Error .ambilpp:', err);
            await sock.sendMessage(from, {
                text: `❌ Gagal ambil foto profil @${target.split('@')[0]}.\nError: ${err.message || err}`,
                mentions: [target],
            }, { quoted: msg });
        }
    }
}

// ========== FITUR .DEL ==========
if (text.toLowerCase() === ".del") {
  try {
    // cek apakah reply
    const quotedCtx = msg.message?.extendedTextMessage?.contextInfo;
    if (!quotedCtx || !quotedCtx.stanzaId) {
      await sock.sendMessage(from, { text: "⚠️ Reply pesan yang ingin dihapus dan ketik .del" }, { quoted: msg });
      return;
    }

    // cek bot admin kalau di grup
    let botIsAdmin = false;
    if (from.endsWith('@g.us')) {
      const meta = await sock.groupMetadata(from);
      const admins = meta.participants.filter(p => p.admin !== null).map(p => p.id);
      botIsAdmin = admins.includes(sock.user.id);
    }

    // key yang akan dihapus
    const keyToDelete = {
      remoteJid: from,
      id: quotedCtx.stanzaId,
      participant: quotedCtx.participant || quotedCtx.remoteJid,
      fromMe: botIsAdmin || quotedCtx.participant === sock.user.id
    };

    // hapus pesan
    await sock.sendMessage(from, { delete: keyToDelete });

    // jika bot admin dan hapus orang lain, beri reaksi ✅
    if (botIsAdmin && keyToDelete.participant !== sock.user.id) {
      await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });
    }

  } catch (err) {
    console.error(err);
    await sock.sendMessage(from, { text: "❌ Gagal menghapus pesan." }, { quoted: msg });
  }
}

// =========================
// MEMULAI ANONYMOUS
// =========================
if (text === '.anonymous') {
    if (isGroup) {
        await sock.sendMessage(from, { text: '❌ Anonymous hanya bisa digunakan di chat pribadi.' }, { quoted: msg });
        return;
    }

    if (anonSessions.has(sender)) {
        await sock.sendMessage(from, { text: '⚠️ Kamu sedang di session anonim.' }, { quoted: msg });
        return;
    }

    if (!anonQueue.includes(sender)) anonQueue.push(sender);

    await sock.sendMessage(from, { text: '🔎 Mencari pasangan selama 1 menit...' }, { quoted: msg });

    // Set timer 1 menit
    const timeout = setTimeout(async () => {
        const index = anonQueue.indexOf(sender);
        if (index !== -1) {
            anonQueue.splice(index, 1);
            await sock.sendMessage(from, { text: '⏳ Waktu habis. Pasangan tidak ditemukan, pencarian dibatalkan.' });
        }
    }, 60_000); // 60 detik

    // Cek apakah sudah ada pasangan sebelum timeout
    if (anonQueue.length >= 2) {
        const user1 = anonQueue.shift();
        const user2 = anonQueue.shift();

        // Hentikan timeout user yang sudah dapat pasangan
        clearTimeout(timeout);

        anonSessions.set(user1, user2);
        anonSessions.set(user2, user1);

        await sock.sendMessage(user1, { text: '✅ Pasangan ditemukan! Mulai chat sekarang\n\n ketik *.stop* untuk berhenti.' });
        await sock.sendMessage(user2, { text: '✅ Pasangan ditemukan! Mulai chat sekarang\n\n ketik *.stop* untuk berhenti.' });
    }
    return;
}



if (anonSessions.has(sender)) {
    const partner = anonSessions.get(sender);

    if (text !== '.stop') {
        try {
            // MEDIA: gambar, video, stiker
            if (msg.message.imageMessage || msg.message.stickerMessage || msg.message.videoMessage) {
                const stream = await downloadMediaMessage(msg, 'buffer', {}, { logger: pino({ level: 'silent' }) });
                const type = msg.message.imageMessage ? 'image' :
                             msg.message.videoMessage ? 'video' :
                             'sticker';

                await sock.sendMessage(partner, { 
                    [type]: stream,
                    mimetype: msg.message?.imageMessage?.mimetype || msg.message?.videoMessage?.mimetype || 'image/webp'
                });

            // AUDIO: voice note / audio
            } else if (msg.message.audioMessage) {
                const stream = await downloadMediaMessage(msg, 'buffer', {}, { logger: pino({ level: 'silent' }) });
                await sock.sendMessage(partner, {
                    audio: stream,
                    mimetype: msg.message.audioMessage.mimetype,
                    ptt: msg.message.audioMessage?.seconds ? true : false
                });

            // FILE / ANGKA / DOCUMENT
            } else if (msg.message.documentMessage) {
                const stream = await downloadMediaMessage(msg, 'buffer', {}, { logger: pino({ level: 'silent' }) });
                await sock.sendMessage(partner, {
                    document: stream,
                    mimetype: msg.message.documentMessage.mimetype,
                    fileName: msg.message.documentMessage.fileName || 'file'
                });

            // TEKS biasa
            } else {
                await sock.sendMessage(partner, { text });
            }
        } catch (err) {
            await sock.sendMessage(sender, { text: `❌ Gagal meneruskan pesan anonymous: ${err.message}` });
        }
        return;
    }
}
if (text === '.stop') {
    if (isGroup) return await sock.sendMessage(from, { text: '❌ Anonymous hanya bisa di chat pribadi.' }, { quoted: msg });

    // Cek apakah sender sedang di anonymous
    const partner = anonSessions.get(sender);
    const inQueue = anonQueue.includes(sender);

    if (!partner && !inQueue) {
        // Sender tidak sedang anonymous
        return await sock.sendMessage(from, { text: '⚠️ Kamu sedang tidak berada di anonymous chat.' });
    }

    // Hapus session pengirim
    anonSessions.delete(sender);

    // Hapus dari antrean kalau masih nunggu
    const idxQueue = anonQueue.indexOf(sender);
    if (idxQueue !== -1) anonQueue.splice(idxQueue, 1);

    // Notifikasi ke partner dan restart partner
    if (partner) {
        await sock.sendMessage(partner, { text: '🛑 Pasangan memberhentikan obrolan.' });

        // Restart anonymous dari awal untuk partner
        anonSessions.delete(partner); // pastikan session lama hilang
        if (!anonQueue.includes(partner)) {
            anonQueue.push(partner);
            await sock.sendMessage(partner, { text: '🔎 Mencari pasangan selama 1 menit...' });

            // Set timer 1 menit
            setTimeout(async () => {
                const i = anonQueue.indexOf(partner);
                if (i !== -1) {
                    anonQueue.splice(i, 1);
                    anonSessions.delete(partner);
                    await sock.sendMessage(partner, { text: '⏳ Waktu habis. Pasangan tidak ditemukan, pencarian dibatalkan.' });
                }
            }, 60_000);
        }
    }

    // Notifikasi ke pengirim
    await sock.sendMessage(from, { text: '🛑 Kamu keluar dari anonymous chat.' });
}



// =========================
// BLOCK FITUR LAIN SAAT ANONYMOUS
// =========================
if (!isGroup && (anonSessions.has(sender) || anonQueue.includes(sender))) {
    if (text !== '.stop') {
        if (anonSessions.has(sender)) {
            const partner = anonSessions.get(sender);
            await sock.sendMessage(partner, { text: text });
        } else {
            await sock.sendMessage(from, { text: '⏳ Sedang mencari pasangan, tunggu sebentar...' });
        }
        return;
    }
}


if (text === '.anonstatus') {
    if (isGroup) {
        await sock.sendMessage(from, { 
            text: '❌ Status Anonymous hanya bisa diakses di chat pribadi.' 
        }, { quoted: msg });
        return;
    }

    const waitingCount = anonQueue.length;
    const chattingCount = anonSessions.size / 2;

    const statusMessage = 
`📌  STATUS ANONYMOUS
─────────────────
🕒 Menunggu pasangan: ${waitingCount}
💬 Sedang chat anonim: ${chattingCount}
─────────────────
Tunggu hingga pasangan ditemukan atau gunakan *.stop* untuk keluar.`;

    await sock.sendMessage(from, { text: statusMessage });
}



if (text.trim() === '.info') {
    const teks = `╭───〔 🤖 *JARR BOT* 〕───╮
│ 👑 Owner   : Fajar Aditya Pratama
│ 🧠 AI      : GPT-3.5-turbo
│ ⚙️ Bahasa  : Node.js + Baileys
│ 🌐 Versi   : 1.0.0 Beta
│ ⏱️ Aktif   : 24/7
│
├──〔 🔗 Kontak 〕
│ 📞 Owner  : wa.me/6283836348226
│ 🔒 VIP    : Ya
│ 🛡️ Proteksi: Anti abuse
╰────────────────────╯`;

    await sock.sendMessage(from, { text: teks }, { quoted: msg });
    return;
}

if (text.trim() === '.menu') {
    await sock.sendMessage(from, {
            react: {
                text: '⏳',
                key: msg.key
            }
        });
    const waktu = new Date();

    // Ambil nilai numerik
    const tanggal = waktu.getDate().toString().padStart(2, '0');
    const bulan = (waktu.getMonth() + 1).toString().padStart(2, '0'); // 0-based
    const tahun = waktu.getFullYear().toString();
  

    // Font fancy
    const fancy = (text) =>
        text
            .replace(/[a-z]/g, c => ({
                a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ',
                f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
                k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ',
                p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ',
                u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
            }[c]) || c)
            .replace(/[A-Z]/g, c => ({
                A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ',
                F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
                K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ',
                P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 'ꜱ', T: 'ᴛ',
                U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ'
            }[c]) || c);

    const toFancyNumber = (str) => str.replace(/\d/g, d => ({
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒',
        '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
    }[d]));

    const versiFancy = toFancyNumber('1.2.0');
    const tanggalFancy = `${toFancyNumber(tanggal)}-${toFancyNumber(bulan)}-${toFancyNumber(tahun)}`;
   

    const readmore = String.fromCharCode(8206).repeat(4001); // WA Read More

    await sock.sendMessage(from, {
        image: { url: './logo.jpg' },
        caption:
`ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ

> ɴᴀᴍᴀ          : ʙᴏᴛ ᴊᴀʀʀ
> ᴀᴜᴛᴏʀ        : ꜰᴀᴊᴀʀ
> ᴠᴇʀꜱɪ          : ${versiFancy}
> ᴛᴀɴɢɢᴀʟ    : ${tanggalFancy}

${readmore}╭─〔 *🤖 ʙᴏᴛ ᴊᴀʀʀ ᴍᴇɴᴜ* 〕─╮
│
├─ 〔 🎮 *ɢᴀᴍᴇ* 〕
│ .kuis → Kuis pilihan ganda
│ .kuissusah → Kuis versi susah 
│ .judi → Tebak ganjil / genap
│ .truth → Jawab jujur
│ .dare → Lakukan tantangan
│ .tebak-aku → Tebakan lucu
│ .susunkata → Susun huruf
│ .family100 → Jawaban terbanyak
│ .tebakbendera → Menebak bendera
│ .tictactoe → Bermain X dan O
│
├─ 〔 🏳️‍🌈 *ꜰɪᴛᴜʀ ʟᴜᴄᴜ* 〕
│ .gay → Seberapa gay?
│ .lesbi → Seberapa lesbi?
│ .cantik → Seberapa cantik?
│ .ganteng → Seberapa ganteng?
│ .jodoh → Cocoklogi cinta
│ .cekkhodam → Cek khodam 
│ .siapa → Target random
│ .fakereply → Pesan palsu
│ .polling → Buat polling
│
├─ 〔 🧠 *ᴀɪ ᴀꜱꜱɪꜱᴛᴀɴᴛ* 〕
│ .ai <pertanyaan> → Tanya ke AI
│
├─ 〔 🎵 *ᴍᴜꜱɪᴄ & ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* 〕
│ .spotify → Cari lagu Spotify
│ .sound → Ubah teks jadi suara
│ .wm → Unduh tanpa watermax
│ .ttmp3 → Unduh mp3 TikTok
│ .ytmp3 → Unduh mp3 Youtube
│ .ytmp4 → Unduh mp4 Youtube
│
├─ 〔 🖌️ *ᴍᴀᴋᴇʀ / ᴄʀᴇᴀᴛᴏʀ* 〕
│ .stiker → Ubah gambar jadi stiker
│ .qc → Ubah teks jadi quote
│ .toimg → Stiker ke gambar
│ .teks → Tambah teks di stiker
│ .brat → Membuat stiker kata
│ .srtdarksistem → Sertifikat Dark Sistem
│ .hitamkan → Membuat wajah hitam
│
├─ 〔 🖼️ *ᴍᴇᴅɪᴀ* 〕
│ .waifu → Waifu random
│ .qr → Membuat QR
│ .pdf → Mengubah foto jadi pdf
│ .igstalk → Mengstalking ig orang
│ .ambilpp → Mengambil PP wa
│ .dwfoto → Unduh foto sekali lihat
│ .dwvideo → Unduh video sekali lihat
│
├─ 〔 👤 *ᴀɴᴏɴʏᴍᴏᴜꜱ* 〕
│ .anonymous → Chat orang random
│ .stop → Hentikan session anonim
│
├─ 〔 👥 *ꜰɪᴛᴜʀ ɢʀᴜᴘ* 〕
│ .tagall → Mention semua member
│ .setnamagc → Ganti nama grup
│ .setdesgc → Ganti deskripsi grup
│ .setppgc → Ganti foto profil grup
│ .adminonly → Setting pengaturan grup
│ .linkgc → Ambil link grup
│ .del → Menghapus pesan digrup
│
├─ 〔 📊 *ꜱᴋᴏʀ ɢᴀᴍᴇ* 〕
│ .skor → Lihat skor kamu
│ .kirimskor → Kirim skor ke teman
│
├─ 〔 📋 *ɪɴꜰᴏ* 〕
│ .shop → Buka menu shop
│ .info → Info bot & owner
│ .menu → Tampilkan menu ini
│
╰── 📅 ${tanggalFancy}

╭─〔 *🔐 ꜰɪᴛᴜʀ ᴠɪᴘ / ᴏᴡɴᴇʀ* 〕─╮
│
├─ 〔 👥 *ɢʀᴜᴘ ᴠɪᴘ* 〕
│ .kick → Kick user
│ .mute → Mute user
│ .unmute → Buka mute
│ .antilink → Dilarang kirim link
│ .antifoto → Dilarang kirim foto
│ .antistiker → Dilarang kirim stiker
│
├─ 〔 📊 *ꜱᴋᴏʀ ᴋʜᴜꜱᴜꜱ* 〕
│ .setskor → Atur skor user
│ .setexp → Atur exp user
│ .setlevel → Atur level user
│ .allskor → Kirim skor ke semua
│ .tantangan → Memberi skor ke grup
│
├─ 〔 👑 *ᴠɪᴘ ᴄᴏɴᴛʀᴏʟ* 〕
│ .setvip → Jadikan VIP
│ .unsetvip → Cabut VIP
│ .listvip → Daftar VIP
│ .listskor → Daftar SKOR
│ .umumkan → Pengumuman di Grup
│
├─ 〔 🔞 *ᴠɪᴘ ꜱᴘᴇᴄɪᴀʟ* 〕
│ .waifux → Random waifu NSFW
│
├─ 〔 👑 *ᴏᴡɴᴇʀ* 〕
│ .allvip → Jadikan semua VIP
│ .clearvip → Hapus semua VIP
│ .setoff → Mengatur jadwal bot mati
│ .anonstatus → Cek status antrean 
│
├─ 〔 ⚙️ *ʙᴏᴛ ᴄᴏɴᴛʀᴏʟ* 〕
│ .on → Aktifkan bot
│ .off → Nonaktifkan bot
│
╰── 👑 Owner: @${OWNER_NUMBER?.split('@')[0] || '6283836348226'}`,
  mentions: [OWNER_NUMBER]

  
});
return;

}

    if (text.startsWith('.ai')) {
    const pertanyaan = text.slice(3).trim();

    if (!pertanyaan) {
        await sock.sendMessage(from, { text: "❗Gunakan .ai *pertanyaanmu*" });
        return;
    }

    const aiReply = await getAIReply(pertanyaan);
    await sock.sendMessage(from, { text: aiReply });
    return;
}


    });
}


startBot().catch(err => console.error('❌ Error saat menjalankan bot:', err));

