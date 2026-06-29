var gpus = [
  { id:1,  name:"RTX 4090",        brand:"NVIDIA", category:"Flagship",  price:159999, vram:"24GB GDDR6X", specs:"16384 Cores | 450W", img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=480&q=80" },
  { id:2,  name:"RTX 4080 Super",  brand:"NVIDIA", category:"High-End",  price:109999, vram:"16GB GDDR6X", specs:"10240 Cores | 320W", img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=480&q=80" },
  { id:3,  name:"RTX 4070 Ti",     brand:"NVIDIA", category:"High-End",  price:79999,  vram:"12GB GDDR6X", specs:"7680 Cores | 285W",  img:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=480&q=80" },
  { id:4,  name:"RTX 4070 Super",  brand:"NVIDIA", category:"High-End",  price:64999,  vram:"12GB GDDR6X", specs:"7168 Cores | 220W",  img:"https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=480&q=80" },
  { id:5,  name:"RTX 4070",        brand:"NVIDIA", category:"Mid-Range", price:54999,  vram:"12GB GDDR6X", specs:"5888 Cores | 200W",  img:"https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=480&q=80" },
  { id:6,  name:"RTX 4060 Ti",     brand:"NVIDIA", category:"Mid-Range", price:44999,  vram:"8GB GDDR6",   specs:"4352 Cores | 165W",  img:"https://images.unsplash.com/photo-1625480859799-d57a96e7a9c1?w=480&q=80" },
  { id:7,  name:"RTX 4060",        brand:"NVIDIA", category:"Mid-Range", price:29999,  vram:"8GB GDDR6",   specs:"3072 Cores | 115W",  img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=480&q=80" },
  { id:8,  name:"GTX 1660 Super",  brand:"NVIDIA", category:"Budget",    price:17999,  vram:"6GB GDDR6",   specs:"1408 Cores | 125W",  img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=480&q=80" },
  { id:9,  name:"RX 7900 XTX",     brand:"AMD",    category:"Flagship",  price:99999,  vram:"24GB GDDR6",  specs:"6144 Procs | 355W",  img:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=480&q=80" },
  { id:10, name:"RX 7900 XT",      brand:"AMD",    category:"High-End",  price:79999,  vram:"20GB GDDR6",  specs:"5376 Procs | 315W",  img:"https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=480&q=80" },
  { id:11, name:"RX 7800 XT",      brand:"AMD",    category:"High-End",  price:44999,  vram:"16GB GDDR6",  specs:"3840 Procs | 263W",  img:"https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=480&q=80" },
  { id:12, name:"RX 7700 XT",      brand:"AMD",    category:"Mid-Range", price:34999,  vram:"12GB GDDR6",  specs:"3456 Procs | 245W",  img:"https://images.unsplash.com/photo-1625480859799-d57a96e7a9c1?w=480&q=80" },
  { id:13, name:"RX 7600",         brand:"AMD",    category:"Mid-Range", price:22999,  vram:"8GB GDDR6",   specs:"2048 Procs | 165W",  img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=480&q=80" },
  { id:14, name:"RX 6800 XT",      brand:"AMD",    category:"High-End",  price:49999,  vram:"16GB GDDR6",  specs:"4608 Procs | 300W",  img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=480&q=80" },
  { id:15, name:"RX 6700 XT",      brand:"AMD",    category:"Mid-Range", price:27999,  vram:"12GB GDDR6",  specs:"2560 Procs | 230W",  img:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=480&q=80" },
  { id:16, name:"RX 6600",         brand:"AMD",    category:"Budget",    price:19999,  vram:"8GB GDDR6",   specs:"1792 Procs | 132W",  img:"https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=480&q=80" },
  { id:17, name:"RX 6500 XT",      brand:"AMD",    category:"Budget",    price:11999,  vram:"4GB GDDR6",   specs:"1024 Procs | 107W",  img:"https://images.unsplash.com/photo-1625480859799-d57a96e7a9c1?w=480&q=80" },
  { id:18, name:"Arc A770",        brand:"Intel",  category:"Mid-Range", price:24999,  vram:"16GB GDDR6",  specs:"4096 Shaders | 225W", img:"https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=480&q=80" },
  { id:19, name:"Arc A750",        brand:"Intel",  category:"Mid-Range", price:19999,  vram:"8GB GDDR6",   specs:"3584 Shaders | 225W", img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=480&q=80" },
  { id:20, name:"Arc A580",        brand:"Intel",  category:"Budget",    price:14999,  vram:"8GB GDDR6",   specs:"3072 Shaders | 185W", img:"https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=480&q=80" },
  { id:21, name:"Arc A380",        brand:"Intel",  category:"Budget",    price:8999,   vram:"6GB GDDR6",   specs:"1024 Shaders | 75W",  img:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=480&q=80" },
];

var cartCount = 0;
var activeBrand = "all";
var activeCategory = "all";
var activeSort = "default";

window.onload = function() { showGPUs(gpus); };

function showGPUs(list) {
  var grid = document.getElementById("gpuGrid");
  var msg  = document.getElementById("resultMsg");
  var none = document.getElementById("noResult");

  if (list.length == 0) {
    grid.innerHTML = "";
    none.style.display = "block";
    msg.textContent = "No GPUs found";
    return;
  }

  none.style.display = "none";
  msg.textContent = "Showing " + list.length + " GPUs";
  grid.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var g = list[i];
    var tagClass = "tag-" + g.brand.toLowerCase();
    var catClass = "cat-" + g.category;

    var card = document.createElement("div");
    card.className = "gpu-card";
    card.innerHTML =
      "<img src='" + g.img + "' alt='" + g.name + "' loading='lazy' />" +
      "<div class='gpu-card-body'>" +
        "<span class='brand-tag " + tagClass + "'>" + g.brand + "</span> " +
        "<span class='cat-badge " + catClass + "'>" + g.category + "</span>" +
        "<h3>" + g.name + "</h3>" +
        "<p class='vram'>🎮 " + g.vram + "</p>" +
        "<p class='specs'>" + g.specs + "</p>" +
        "<p class='price'>₹" + g.price.toLocaleString("en-IN") + "</p>" +
        "<button onclick='addToCart(" + g.id + ")'>Add to Cart 🛒</button>" +
      "</div>";
    grid.appendChild(card);
  }
}

function getFiltered() {
  var list = gpus.slice();
  if (activeBrand !== "all")    list = list.filter(function(g){ return g.brand === activeBrand; });
  if (activeCategory !== "all") list = list.filter(function(g){ return g.category === activeCategory; });
  if (activeSort === "price-low")  list.sort(function(a,b){ return a.price - b.price; });
  if (activeSort === "price-high") list.sort(function(a,b){ return b.price - a.price; });
  if (activeSort === "vram")       list.sort(function(a,b){ return parseInt(b.vram) - parseInt(a.vram); });
  return list;
}

function refresh() { showGPUs(getFiltered()); }

function filterBrand(brand, btn) {
  activeBrand = brand;
  document.querySelectorAll(".brand-btn").forEach(function(b){ b.classList.remove("active"); });
  if (btn) btn.classList.add("active");
  refresh();
}

function filterCategory() { activeCategory = document.getElementById("categorySelect").value; refresh(); }
function sortGPUs()       { activeSort = document.getElementById("sortSelect").value; refresh(); }

function searchGPUs() {
  var q = document.getElementById("searchBox").value.toLowerCase();
  if (!q) { refresh(); return; }
  var results = gpus.filter(function(g){
    return (g.name + g.brand + g.category + g.vram + g.specs).toLowerCase().indexOf(q) !== -1;
  });
  showGPUs(results);
  document.getElementById("gpus").scrollIntoView({ behavior: "smooth" });
}

function addToCart(id) {
  var g = gpus.find(function(x){ return x.id === id; });
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  alert("✅ " + g.name + " added to cart!\nTotal items: " + cartCount);
}

function submitForm(event) {
  event.preventDefault();
  alert("📩 Message sent! We will reply soon.");
  event.target.reset();
}