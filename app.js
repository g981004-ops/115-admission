let sopData = {};
let currentImages = [];
let currentImageIndex = 0;

// Embed JSON data directly to prevent CORS issues when opening file:/// locally
const rawData = {
  "zones": {
    "checkin_out": {
      "id": "checkin_out",
      "name": "報到處 (管427外)",
      "floor": "4F",
      "purpose": "報到、身分驗證與引導",
      "sop": [
        "擺放「報到處」A4桌牌、口試名單簽到表、簽到筆(簽完讓考生帶走)。",
        "報到時於口試名單簽到表簽到。",
        "確認准考證及證件(身分證或其他有照片證件)。",
        "協助未加入LINE社群的同學入群(提供QR code)。"
      ],
      "equipment": [
        "折疊桌*1",
        "口試名單簽到表",
        "「報到處」A4桌牌",
        "筆*56 (包含工作人員的筆)",
        "備用口罩*10",
        "筆電*1 (身分驗證)",
        "系戳 (到考證明)"
      ],
      "staff": [
        "張彧萌 (管427)",
        "王筠之 (管427外，拍照，引導家長)"
      ],
      "photos": [
        "assets/photos/427 報到室外的報到處.JPG"
      ]
    },
    "checkin_in": {
      "id": "checkin_in",
      "name": "報到室 (管427)",
      "floor": "4F",
      "purpose": "家長與考生等待區、影片播放、系所介紹",
      "sop": [
        "拉紅布條，「國立暨南國際大學國際企業學系恭喜您進入個人申請面試階段」增加隆重感。",
        "發送 L型夾，內含學生手冊+招生DM 2.寶可夢飛雷口香糖 (強棒出擊)。",
        "招生影片輪播設定，注意音量。",
        "按口試順序叫號。",
        "工作人員主動向家長或考生介紹本系特色。報到處A4立牌有國企LINE群，協助未加入的考生入群。"
      ],
      "equipment": [
        "紅布條*1",
        "折疊桌*2",
        "學生手冊*56份",
        "礦泉水*2箱",
        "小點心、寶可夢飛雷口香糖",
        "招生影片輪播設備"
      ],
      "staff": [
        "張彧萌 (管427)",
        "王筠之 (管427外，拍照，引導家長)"
      ],
      "photos": [
        "assets/photos/427 報到室掛著歡迎考生的紅布條.jpg",
        "assets/photos/427 報到室發送給考生的手冊.JPG",
        "assets/photos/427 報到室與家長學生互動.jpg"
      ]
    },
    "interview1": {
      "id": "interview1",
      "name": "第一關面試 (管429)",
      "floor": "4F",
      "purpose": "第一階段口試",
      "sop": [
        "管429第一面談試場外放2張椅子。",
        "計時器*1(或自己的手機)-計時同學使用。",
        "錄音筆*2 試場內桌面-1支面向考生、1支面向面談委員。",
        "應試學生關門開始計時，共6分鐘。5分鐘到，敲門1次。6分鐘到，直接開門。",
        "管429第一關口試完，提醒同學至管432第二關口試。"
      ],
      "equipment": [
        "椅子*2 (試場外)",
        "計時器*1",
        "錄音筆*2",
        "白紙*10、紅藍黑鉛筆各*2",
        "筆電 (登入成績檔案)",
        "延長線*2",
        "瓶裝咖啡*2、礦泉水*2、麵包餐袋*2 (供委員)"
      ],
      "staff": [
        "王彥程 (管429)"
      ],
      "photos": [
        "assets/photos/面談試場外學長姐與考生互動.JPG",
        "assets/photos/試場內.JPG"
      ]
    },
    "office": {
      "id": "office",
      "name": "系辦 (管431)",
      "floor": "4F",
      "purpose": "指揮中心與物資管理",
      "sop": [
        "工作人員集合處。",
        "統發便當與用餐休息區。",
        "物品放回系辦並歸位 (第一天不須歸位物品，確認電源，第二天面談結束後再一併歸位即可)。"
      ],
      "equipment": [
        "各項備用物資",
        "便當/餐盒"
      ],
      "staff": [
        "所有機動人員"
      ],
      "photos": []
    },
    "interview2": {
      "id": "interview2",
      "name": "第二關面試 (管432)",
      "floor": "4F",
      "purpose": "第二階段口試",
      "sop": [
        "管432第二面談試場外放2張椅子。",
        "計時器*1(或自己的手機)-計時同學使用。",
        "錄音筆*2 試場內桌面-1支面向考生、1支面向面談委員。",
        "應試學生關門開始計時，共6分鐘。5分鐘到，敲門1次。6分鐘到，直接開門。",
        "管432第二關口試完，引導同學到管331問卷室填寫問卷。",
        "考生抵達第二關時，拿出考生的高中學校打卡板，拍照留念。"
      ],
      "equipment": [
        "椅子*2 (試場外)",
        "計時器*1",
        "錄音筆*2",
        "白紙*10、紅藍黑鉛筆各*2",
        "筆電 (登入成績檔案)",
        "延長線*2",
        "瓶裝咖啡*2、礦泉水*2、麵包餐袋*2 (供委員)",
        "高中打卡板"
      ],
      "staff": [
        "劉芷瑋 (管432)",
        "顏郁珊 (引導第二關考生出來後至管331，高中打卡版拍照)"
      ],
      "photos": [
        "assets/photos/面談試場外學長姐與考生互動.JPG",
        "assets/photos/試場內.JPG",
        "assets/photos/432 高中打卡板.jpg"
      ]
    },
    "questionnaire": {
      "id": "questionnaire",
      "name": "問卷室 (管331)",
      "floor": "3F",
      "purpose": "問卷填寫、物資發放、家長休息",
      "sop": [
        "擺放: 1.筆 2.問卷 3.麵包餐盒 4.礦泉水 5.小點心。",
        "確認招生影片輪播設定。",
        "注意面談完的同學是否到管331問卷室完成問卷。",
        "先向考生發放麵包餐盒，再請考生、家長填寫問卷。",
        "考生可選擇是否使用打卡版拍照留念，自行保存或同意PO LINE群。"
      ],
      "equipment": [
        "筆*56",
        "家長問卷*56、學生問卷*56",
        "麵包餐盒、小點心",
        "打卡版、國企系貼紙(貼麵包餐袋)",
        "招生影片輪播設備"
      ],
      "staff": [
        "施玉琪 (管331)",
        "黃聖勛 (引導家長至管331問卷，機動人員)",
        "黃允誠 (管427、331，機動人員)"
      ],
      "photos": [
        "assets/photos/管331問卷室布置.JPG",
        "assets/photos/考生可選擇是否使用打卡版拍照留念，自行保存或同意PO LINE群。.jpg"
      ]
    }
  }
};

sopData = rawData.zones;
// Initialize immediately without fetching
initApp();

function initApp() {
    // Add click listeners to hotspots
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            openModal(spot.dataset.target);
        });
    });

    // Add click listeners to timeline steps
    const steps = document.querySelectorAll('.timeline-step');
    steps.forEach(step => {
        step.addEventListener('click', () => {
            openModal(step.dataset.target);
        });
    });

    // Modal Close logic
    const modal = document.getElementById('sop-modal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Carousel buttons
    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
        showImage(currentImageIndex - 1);
    });
    
    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
        showImage(currentImageIndex + 1);
    });
}

function openModal(zoneId) {
    const zone = sopData[zoneId];
    if (!zone) return;

    // Populate text content
    document.getElementById('modal-title').textContent = zone.name;
    document.getElementById('modal-floor').textContent = zone.floor;
    document.getElementById('modal-purpose').textContent = zone.purpose;

    // Populate lists
    populateList('modal-sop', zone.sop, false);
    populateList('modal-equipment', zone.equipment, true);
    populateList('modal-staff', zone.staff, true);

    const modalBody = document.querySelector('.modal-body');
    if (!zone.photos || zone.photos.length === 0) {
        modalBody.classList.add('no-visuals');
    } else {
        modalBody.classList.remove('no-visuals');
    }

    // Setup Carousel
    setupCarousel(zone.photos);

    // Show modal
    document.getElementById('sop-modal').classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    document.getElementById('sop-modal').classList.remove('show');
    document.body.style.overflow = '';
}

function populateList(elementId, items, isTags) {
    const ul = document.getElementById(elementId);
    ul.innerHTML = '';
    
    if (!items || items.length === 0) {
        ul.innerHTML = '<li>無</li>';
        return;
    }

    items.forEach(item => {
        const li = document.createElement('li');
        // If it's the SOP list and not a tag list, we can add a simple bullet or number if desired, 
        // but default list styling handles it mostly.
        li.textContent = item;
        ul.appendChild(li);
    });
}

function setupCarousel(photos) {
    const container = document.getElementById('carousel-container');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    container.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentImages = photos || [];
    currentImageIndex = 0;

    if (currentImages.length === 0) {
        container.innerHTML = '<div class="no-photos">目前無相關參考照片</div>';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }

    // Hide/Show navigation buttons depending on image count
    prevBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';

    currentImages.forEach((src, index) => {
        // Image element
        const img = document.createElement('img');
        img.src = src;
        img.alt = '參考照片 ' + (index + 1);
        if (index === 0) img.classList.add('active');
        container.appendChild(img);

        // Dot element
        if (currentImages.length > 1) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showImage(index));
            dotsContainer.appendChild(dot);
        }
    });
}

function showImage(index) {
    if (currentImages.length <= 1) return;

    const imgs = document.querySelectorAll('#carousel-container img');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    // Handle wrap around
    if (index >= currentImages.length) index = 0;
    if (index < 0) index = currentImages.length - 1;

    // Remove active class
    imgs[currentImageIndex].classList.remove('active');
    if (dots.length > 0) dots[currentImageIndex].classList.remove('active');

    // Add active class to new index
    currentImageIndex = index;
    imgs[currentImageIndex].classList.add('active');
    if (dots.length > 0) dots[currentImageIndex].classList.add('active');
}
