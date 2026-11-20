function createHijabSvg(labelText, accentColor, bgColor) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 420'>
    <rect width='600' height='420' fill='${bgColor}'/>
    <circle cx='490' cy='85' r='68' fill='#ffffff' opacity='0.55'/>
    <path d='M300 75C220 75 170 130 170 220V355H245V235C245 185 268 158 300 158C332 158 355 185 355 235V355H430V220C430 130 380 75 300 75Z' fill='${accentColor}'/>
    <path d='M185 305C230 278 370 278 415 305' stroke='#fff8f4' stroke-width='8' stroke-linecap='round' fill='none'/>
    <circle cx='300' cy='118' r='16' fill='#f7d2c2'/>
    <rect x='70' y='366' width='460' height='36' rx='12' fill='#ffffff' opacity='0.9'/>
    <text x='300' y='390' text-anchor='middle' font-family='sans-serif' font-size='17' font-weight='bold' fill='#3d211a'>${labelText}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const products = [
  {
    id: 1,
    name: "Pashmina Ceruty Babydoll",
    category: "pashmina",
    categoryLabel: "Pashmina",
    price: "Rp45.000",
    material: "Ceruty Babydoll",
    size: "180 cm x 75 cm",
    colors: "Mocca, Milo, Sage, Broken White, Hitam",
    description: "Jatuh lembut, ringan dipakai seharian, dan mudah dibentuk untuk tampilan harian maupun acara.",
    image: createHijabSvg("PASHMINA CERUTY BABYDOLL", "#8c4a3c", "#f8e8e0"),
    marketplaceUrl: "https://shopee.co.id"
  },
  {
    id: 2,
    name: "Segi Empat Voal Ultrafine",
    category: "segiempat",
    categoryLabel: "Segi Empat",
    price: "Rp49.000",
    material: "Voal Ultrafine",
    size: "115 cm x 115 cm",
    colors: "Dusty Pink, Latte, Navy, Olive, Taupe",
    description: "Mudah dibentuk tegak di dahi, adem, dan nyaman dipakai untuk aktivitas kuliah atau kerja.",
    image: createHijabSvg("SEGI EMPAT VOAL ULTRAFINE", "#a25949", "#f4e5dc"),
    marketplaceUrl: "https://shopee.co.id"
  },
  {
    id: 3,
    name: "Bergo Malay Jersey Daily",
    category: "instan",
    categoryLabel: "Hijab Instan",
    price: "Rp42.000",
    material: "Jersey Premium",
    size: "Depan 75 cm • Belakang 85 cm",
    colors: "Coksu, Grey, Maroon, Hitam, Khaki",
    description: "Praktis dipakai langsung tanpa jarum pentul, adem, dan nyaman untuk kegiatan sehari-hari.",
    image: createHijabSvg("BERGO MALAY JERSEY DAILY", "#6e382c", "#efe1d8"),
    marketplaceUrl: "https://shopee.co.id"
  },
  {
    id: 4,
    name: "Pashmina Silk Shimmer",
    category: "pashmina",
    categoryLabel: "Pashmina",
    price: "Rp58.000",
    material: "Silk Soft Shimmer",
    size: "180 cm x 75 cm",
    colors: "Champagne, Rose Gold, Emerald, Ivory",
    description: "Kilau lembut yang memberi kesan anggun untuk wisuda, kondangan, atau acara spesial.",
    image: createHijabSvg("PASHMINA SILK SHIMMER", "#9c5746", "#fae9e2"),
    marketplaceUrl: "https://shopee.co.id"
  },
  {
    id: 5,
    name: "Paris Jepang Square",
    category: "segiempat",
    categoryLabel: "Segi Empat",
    price: "Rp38.000",
    material: "Katun Paris Jepang",
    size: "110 cm x 110 cm",
    colors: "Beige, Caramel, Charcoal, Soft Blue, White",
    description: "Serat rapi, ringan, dan nyaman untuk dipakai sehari-hari dengan banyak pilihan warna.",
    image: createHijabSvg("PARIS JEPANG SQUARE", "#7b4336", "#f5e7de"),
    marketplaceUrl: "https://shopee.co.id"
  },
  {
    id: 6,
    name: "Ciput Ninja & Pin Set",
    category: "aksesoris",
    categoryLabel: "Aksesoris",
    price: "Rp29.000",
    material: "Kaos Rayon + Alloy",
    size: "All Size Elastis",
    colors: "Nude, Hitam, Putih Tulang",
    description: "Membantu merapikan hijab agar tetap rapi dan nyaman dipakai tanpa membuat pusing.",
    image: createHijabSvg("CIPUT NINJA & PIN SET", "#854538", "#f3e2d9"),
    marketplaceUrl: "https://shopee.co.id"
  }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const filterStatus = document.getElementById("filterStatus");

const categoryNames = {
  all: "Semua",
  pashmina: "Pashmina",
  segiempat: "Segi Empat",
  instan: "Hijab Instan",
  aksesoris: "Aksesoris"
};

function renderProducts(category = "all") {
  const items = category === "all"
    ? products
    : products.filter((item) => item.category === category);

  filterStatus.textContent = `Menampilkan ${items.length} produk dari kategori: ${categoryNames[category] || category}`;

  productGrid.innerHTML = items.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-body">
        <span class="badge-soft">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <div class="product-actions">
          <button type="button" class="btn btn-outline btn-sm btn-detail" data-id="${product.id}">
            Detail Produk
          </button>
          <a href="${product.marketplaceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Beli Sekarang
          </a>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".btn-detail").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      openProductModal(id);
    });
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

// Modal Detail Produk
const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");

function openProductModal(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalImg").alt = product.name;
  document.getElementById("modalCat").textContent = product.categoryLabel;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalMaterial").textContent = product.material;
  document.getElementById("modalSize").textContent = product.size;
  document.getElementById("modalColors").textContent = product.colors;
  document.getElementById("modalBuyBtn").href = product.marketplaceUrl;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

// Mobile Menu
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Form Kontak
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const topic = document.getElementById("topicSelect").value;
  const message = document.getElementById("messageInput").value.trim();

  if (name.length < 2 || message.length < 5) {
    formFeedback.style.color = "#b42318";
    formFeedback.textContent = "Isi nama lengkap dan pesan minimal 5 karakter ya.";
    return;
  }

  formFeedback.style.color = "#157347";
  formFeedback.textContent = `Terima kasih ${name}! Pesan tentang "${topic}" berhasil dikirim.`;
  contactForm.reset();
});

renderProducts("all");