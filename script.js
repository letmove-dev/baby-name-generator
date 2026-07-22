// 1. ฐานข้อมูลชื่อลูก (สามารถมาเพิ่มชื่อตรงนี้ทีหลังได้เรื่อยๆ ครับ)
const babyNames = [
    // --- ชื่อผู้ชาย ---
    { name: "กวิน", gender: "boy", day: "monday", meaning: "ผู้มีความงดงาม ดีงาม" },
    { name: "ปัณณธร", gender: "boy", day: "friday", meaning: "ผู้ทรงไว้ซึ่งความรู้" },
    { name: "ธนกฤต", gender: "boy", day: "thursday", meaning: "ผู้สร้างทรัพย์สมบัติ" },
    { name: "ภวินท์", gender: "boy", day: "wednesday", meaning: "เจ้าแห่งซอย/เจ้าแห่งโลก" },
    { name: "เตชินท์", gender: "boy", day: "tuesday", meaning: "เป็นใหญ่ด้วยเดช" },
    { name: "อัครวินท์", gender: "boy", day: "sunday", meaning: "ผู้ประสบความสำเร็จอันยิ่งใหญ่" },
    
    // --- ชื่อผู้หญิง ---
    { name: "ณิชา", gender: "girl", day: "monday", meaning: "มีความบริสุทธิ์" },
    { name: "มินตรา", gender: "girl", day: "sunday", meaning: "ดวงแก้วอันประเสริฐ" },
    { name: "ปริมประภา", gender: "girl", day: "friday", meaning: "มีความงามอันกว้างไกล" },
    { name: "กานต์พิชชา", gender: "girl", day: "wednesday", meaning: "มีความรู้เป็นที่รัก" },
    { name: "ชญานิน", gender: "girl", day: "saturday", meaning: "นักปราชญ์ ผู้มีความรู้" },
    { name: "พิชญ์สินี", gender: "girl", day: "thursday", meaning: "หญิงงามผู้ฉลาด" }
];

// เก็บประวัติชื่อที่เพิ่งสุ่มไป เพื่อไม่ให้สุ่มได้ชื่อเดิมซ้ำติดกัน
let lastRandomIndex = -1;

// 2. ฟังก์ชั่นหลักสำหรับการสุ่มชื่อ
function generateRandomName() {
    // ดึงค่าจากตัวกรอง (Filter) ในหน้า HTML
    const selectedGender = document.getElementById("genderFilter").value;
    const selectedDay = document.getElementById("dayFilter").value;

    // กรองข้อมูลตามเงื่อนไขที่เลือก
    const filteredNames = babyNames.filter(item => {
        const matchGender = (selectedGender === "all") || (item.gender === selectedGender);
        const matchDay = (selectedDay === "all") || (item.day === selectedDay);
        return matchGender && matchDay;
    });

    // แสดงผลบนหน้าจอ
    const nameDisplay = document.getElementById("nameResult");
    const meaningDisplay = document.getElementById("meaningResult");
    const genderTag = document.getElementById("genderTag");

    // ถ้าหาชื่อตามเงื่อนไขไม่เจอ
    if (filteredNames.length === 0) {
        nameDisplay.innerText = "ไม่พบชื่อ";
        meaningDisplay.innerText = "ลองเปลี่ยนตัวกรองเพศหรือวันเกิดดูนะครับ";
        genderTag.innerText = "-";
        return;
    }

    // สุ่มดึงข้อมูล 1 ชื่อ
    let randomIndex;
    if (filteredNames.length > 1) {
        do {
            randomIndex = Math.floor(Math.random() * filteredNames.length);
        } while (randomIndex === lastRandomIndex); // ป้องกันการสุ่มซ้ำชื่อเดิมทันที
        lastRandomIndex = randomIndex;
    } else {
        randomIndex = 0;
    }

    const result = filteredNames[randomIndex];

    // นำข้อมูลไปแสดงผลใน HTML
    nameDisplay.innerText = result.name;
    meaningDisplay.innerText = `ความหมาย: ${result.meaning}`;
    genderTag.innerText = result.gender === "boy" ? "👦 ชาย" : "👧 หญิง";
}
