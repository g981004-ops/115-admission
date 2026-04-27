let sopData = {};
let currentImages = [];
let currentImageIndex = 0;

// Fetch JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        sopData = data.zones;
        initApp();
    })
    .catch(error => console.error('Error loading SOP data:', error));

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
