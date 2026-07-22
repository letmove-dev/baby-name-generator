// --- 1. คลังชื่อเล่นมงคล ---
// --- คลังชื่อเล่นมงคล (ชาย-หญิง ครบ 7 วัน) ---
const nicknames = [
    // 👦 ชื่อเล่นเด็กผู้ชาย
    { name: "พายุ", type: "nickname", gender: "boy", day: "monday", meaning: "เข้มแข็ง รวดเร็ว มีพลังดั่งพายุ" },
    { name: "ปัณณ์", type: "nickname", gender: "boy", day: "monday", meaning: "ความรู้ หนังสือ และสติปัญญา" },
    { name: "คุณ", type: "nickname", gender: "boy", day: "monday", meaning: "ผู้มีคุณธรรมและมีคุณค่า" },
    { name: "นิวตัน", type: "nickname", gender: "boy", day: "tuesday", meaning: "นักปราชญ์ ฉลาดรอบรู้" },
    { name: "สกาย", type: "nickname", gender: "boy", day: "tuesday", meaning: "กว้างใหญ่ไพศาล ดั่งท้องฟ้า" },
    { name: "คูเปอร์", type: "nickname", gender: "boy", day: "tuesday", meaning: "มีความเชี่ยวชาญ คล่องแคล่ว" },
    { name: "โปรด", type: "nickname", gender: "boy", day: "wednesday", meaning: "ผู้เป็นที่รักใคร่และเอ็นดู" },
    { name: "ภาม", type: "nickname", gender: "boy", day: "wednesday", meaning: "เดช อำนาจ และความน่าเกรงขาม" },
    { name: "พร้อม", type: "nickname", gender: "boy", day: "wednesday", meaning: "สมบูรณ์แบบ มีความเตรียมพร้อม" },
    { name: "วิน", type: "nickname", gender: "boy", day: "thursday", meaning: "ผู้ชนะ ประสบความสำเร็จ" },
    { name: "ธาม", type: "nickname", gender: "boy", day: "thursday", meaning: "ยศถาบรรดาศักดิ์ และความยั่งยืน" },
    { name: "เทรน", type: "nickname", gender: "boy", day: "thursday", meaning: "ความรอบรู้ และความทันสมัย" },
    { name: "ฌอห์ณ", type: "nickname", gender: "boy", day: "friday", meaning: "ผู้ได้รับความเมตตากรุณา" },
    { name: "อาร์เธอร์", type: "nickname", gender: "boy", day: "friday", meaning: "ผู้กล้าหาญและเป็นผู้นำ" },
    { name: "เจตน์", type: "nickname", gender: "boy", day: "friday", meaning: "ความตั้งใจจริง มั่นคง" },
    { name: "สไปร์ท", type: "nickname", gender: "boy", day: "saturday", meaning: "มีความสดใส มีชีวิตชีวา" },
    { name: "เตโช", type: "nickname", gender: "boy", day: "saturday", meaning: "เดช อำนาจ และความเจริญ" },
    { name: "ตฤณ", type: "nickname", gender: "boy", day: "saturday", meaning: "ความเจริญงอกงามดั่งหญ้า" },
    { name: "ไทม์", type: "nickname", gender: "boy", day: "sunday", meaning: "เวลาที่มีคุณค่าและน่าจดจำ" },
    { name: "ออสติน", type: "nickname", gender: "boy", day: "sunday", meaning: "สง่างาม น่าเคารพยกย่อง" },

    // 👧 ชื่อเล่นเด็กผู้หญิง
    { name: "มิลิน", type: "nickname", gender: "girl", day: "monday", meaning: "ผู้มีความงดงาม อ่อนโยน" },
    { name: "ใยบัว", type: "nickname", gender: "girl", day: "monday", meaning: "สายใยความรักที่ผูกพัน มั่นคง" },
    { name: "นลิน", type: "nickname", gender: "girl", day: "monday", meaning: "ดอกบัวอันบริสุทธิ์และสง่างาม" },
    { name: "เฌอเอม", type: "nickname", gender: "girl", day: "tuesday", meaning: "หวานชื่น มีชีวิตชีวา ดั่งต้นไม้" },
    { name: "ไอริณ", type: "nickname", gender: "girl", day: "tuesday", meaning: "ผุดผ่องดั่งหยดน้ำ บริสุทธิ์" },
    { name: "มิวสิค", type: "nickname", gender: "girl", day: "tuesday", meaning: "เสียงดนตรีอันไพเราะและมีความสุข" },
    { name: "ชาลีน", type: "nickname", gender: "girl", day: "wednesday", meaning: "สดใส มีเสน่ห์ น่ารักเอ็นดู" },
    { name: "พะแพง", type: "nickname", gender: "girl", day: "wednesday", meaning: "ของรักของหวง น่าเอ็นดู" },
    { name: "เมเบิล", type: "nickname", gender: "girl", day: "wednesday", meaning: "ผู้เป็นที่รัก สดใสน่ารัก" },
    { name: "ลินิน", type: "nickname", gender: "girl", day: "thursday", meaning: "บริสุทธิ์ เรียบง่าย และสง่างาม" },
    { name: "เพลง", type: "nickname", gender: "girl", day: "thursday", meaning: "ความสุขและเสียงอันไพเราะ" },
    { name: "กอด", type: "nickname", gender: "girl", day: "thursday", meaning: "ความอบอุ่นและเป็นที่รัก" },
    { name: "มินนี่", type: "nickname", gender: "girl", day: "friday", meaning: "น่ารัก อ่อนโยน น่าเอ็นดู" },
    { name: "ปลายฟ้า", type: "nickname", gender: "girl", day: "friday", meaning: "กว้างใหญ่ สง่างาม ดั่งท้องฟ้า" },
    { name: "ของขวัญ", type: "nickname", gender: "girl", day: "friday", meaning: "สิ่งล้ำค่าที่นำความสุขมาให้" },
    { name: "ออมสิน", type: "nickname", gender: "girl", day: "saturday", meaning: "ผู้รู้จักเก็บออม มีมงคล" },
    { name: "พริ้ง", type: "nickname", gender: "girl", day: "saturday", meaning: "งดงาม น่ารัก สดใส" },
    { name: "ต้นข้าว", type: "nickname", gender: "girl", day: "saturday", meaning: "อุดมสมบูรณ์และงอกงาม" },
    { name: "เจ้าเอย", type: "nickname", gender: "girl", day: "sunday", meaning: "คำเรียกน่ารัก ไพเราะ อ่อนหวาน" },
    { name: "พายดาว", type: "nickname", gender: "girl", day: "sunday", meaning: "แสงสว่างสดใสบนท้องฟ้า" }
];

// --- 2. ระบบเจน "ชื่อจริงมงคล" (จากโค้ดเดิม) ---
const prefixes = [
    // 🌟 หมวด ขึ้นต้นด้วย "อ"
    { text: "อัคร", meaning: "ผู้เป็นใหญ่และเลิศเลอ" },
    { text: "อนันต์", meaning: "ผู้มีความยิ่งใหญ่ไม่มีที่สิ้นสุด" },
    { text: "อภิ", meaning: "ผู้ยิ่งใหญ่เหนือใคร" },
    { text: "อิทธิ", meaning: "ผู้มีฤทธิ์เดชและความสำเร็จ" },
    { text: "อนุ", meaning: "ผู้มีความนอบน้อมเจริญวัย" },
    { text: "อรัญ", meaning: "ผู้มีความสงบและมั่นคง" },
    { text: "อมร", meaning: "ผู้มีความยั่งยืนประเสริฐ" },

    // 🌟 หมวด คำมงคลอื่นๆ
    { text: "กิตติ", meaning: "ผู้มีเกียรติยศ" },
    { text: "ณิชา", meaning: "ผู้มีความบริสุทธิ์" },
    { text: "ธน", meaning: "ผู้มีทรัพย์สินร่ำรวย" },
    { text: "ภัทร", meaning: "ผู้มีความประเสริฐและดีงาม" },
    { text: "ปัณณ", meaning: "ผู้มีความรู้และหนังสือ" },
    { text: "ธีระ", meaning: "นักปราชญ์ผู้กล้าหาญ" },
    { text: "สิริ", meaning: "ผู้มีมิ่งขวัญและโชคลาภ" },
    { text: "เขม", meaning: "ผู้มีความปลอดภัยและความสุข" },
    { text: "ชย", meaning: "ผู้มีชัยชนะประสบความสำเร็จ" },
    { text: "ปุญญ", meaning: "ผู้มีบุญกุศลหนุนนำ" },
    { text: "พิชญ์", meaning: "ผู้ฉลาดรอบรู้" },
    { text: "ศุภ", meaning: "ผู้มีความงดงามและดีงาม" },
    { text: "กานต์", meaning: "ผู้เป็นที่รักใคร่" }
];

// --- คำลงท้ายมงคล ---
const suffixes = [
    { text: "พล", meaning: "มีพลังกำลัง" },
    { text: "วัฒน์", meaning: "มีความเจริญรุ่งเรือง" },
    { text: "นันท์", meaning: "มีความยินดีปรีดา" },
    { text: "ธร", meaning: "ผู้ทรงไว้ซึ่งความดี" },
    { text: "กร", meaning: "ผู้สร้างสรรค์สิ่งดีงาม" },
    { text: "เดช", meaning: "มีอำนาจวาสนา" },
    { text: "ภา", meaning: "มีแสงสว่างแห่งปัญญา" },
    { text: "พร", meaning: "ได้รับพรประเสริฐ" },
    { text: "ภพ", meaning: "เป็นใหญ่ในโลก" },
    { text: "ศักดิ์", meaning: "มีเกียรติยศและฐานะ" },
    { text: "สินี", meaning: "มีความงดงามเลิศเลอ" },
    { text: "วิชญ์", meaning: "ปราชญ์ผู้รู้แจ้ง" },
    { text: "โชค", meaning: "มีโชคลาภวาสนา" },
    { text: "ชัย", meaning: "มีชัยชนะเหนืออุปสรรค" },
    { text: "เกียรติ", meaning: "มีชื่อเสียงเกียรติยศ" },
    { text: "ปัญญา", meaning: "มีรอบรู้แจ้งเห็นจริง" }
];

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const genders = ["boy", "girl"];

function generateRealNames() {
    const list = [];
    for (let p of prefixes) {
        for (let s of suffixes) {
            for (let d of days) {
                for (let g of genders) {
                    list.push({
                        name: `${p.text}${s.text}`,
                        type: "real",
                        gender: g,
                        day: d,
                        meaning: `${p.meaning} และ ${s.meaning}`
                    });
                }
            }
        }
    }
    return list;
}

// รวมทั้ง "ชื่อจริง" และ "ชื่อเล่น" เข้าด้วยกัน
const babyNames = [...generateRealNames(), ...nicknames];

let selectedType = "all";
let selectedGender = "all";
let lastRandomIndex = -1;

// ฟังก์ชั่นเลือกประเภทชื่อ (ชื่อจริง/ชื่อเล่น)
function selectType(type, btnElement) {
    selectedType = type;
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// ฟังก์ชั่นเลือกเพศ
function selectGender(gender, btnElement) {
    selectedGender = gender;
    const buttons = document.querySelectorAll('.gender-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// ฟังก์ชั่นสุ่มชื่อ
function generateRandomName() {
    const selectedDay = document.getElementById("dayFilter").value;

    const filteredNames = babyNames.filter(item => {
        const matchType = (selectedType === "all") || (item.type === selectedType);
        const matchGender = (selectedGender === "all") || (item.gender === selectedGender);
        const matchDay = (selectedDay === "all") || (item.day === selectedDay);
        return matchType && matchGender && matchDay;
    });

    const nameDisplay = document.getElementById("nameResult");
    const meaningDisplay = document.getElementById("meaningResult");
    const genderTag = document.getElementById("genderTag");

    if (filteredNames.length === 0) {
        nameDisplay.innerText = "ไม่พบชื่อ";
        meaningDisplay.innerText = "ลองเปลี่ยนตัวเลือกวันเกิดดูนะครับ";
        genderTag.innerText = "-";
        return;
    }

    let randomIndex;
    if (filteredNames.length > 1) {
        do {
            randomIndex = Math.floor(Math.random() * filteredNames.length);
        } while (randomIndex === lastRandomIndex);
        lastRandomIndex = randomIndex;
    } else {
        randomIndex = 0;
    }

    const result = filteredNames[randomIndex];

    nameDisplay.innerText = result.name;
    meaningDisplay.innerText = `ความหมาย: ${result.meaning}`;
    
    const typeLabel = result.type === "real" ? "🏷️ ชื่อจริง" : "🎈 ชื่อเล่น";
    const genderLabel = result.gender === "boy" ? "👦 ชาย" : "👧 หญิง";
    genderTag.innerText = `${typeLabel} | ${genderLabel}`;
}
