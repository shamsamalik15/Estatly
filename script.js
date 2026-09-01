/* ============================================================
   Estatly — script.js
   Plain DOM-manipulation JavaScript. No frameworks, no build.
   Modules:
     1. DATA
     2. HELPERS
     3. PROPERTY GRID + FILTERING
     4. FAVORITES
     5. DETAILS MODAL
     6. SCHEDULE VISIT MODAL
     7. TOASTS
     8. AGENT DASHBOARD
     9. AI LEAD QUALIFIER CHAT
    10. INIT
   ============================================================ */

/* ---------- 1. DATA ---------------------------------------- */

const PROPERTIES = [
  {
    id: 1, title: "Skyline Loft Residence", type: "Apartment", tag: "New",
    address: "412 Harbor View St, Seattle, WA", location: "Seattle",
    price: 685000, beds: 2, baths: 2, sqft: 1420,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    desc: "Floor-to-ceiling glass, chef's kitchen and a private terrace overlooking the marina."
  },
  {
    id: 2, title: "Verdant Hills Villa", type: "Villa", tag: "Featured",
    address: "88 Cypress Ridge Rd, Austin, TX", location: "Austin",
    price: 1450000, beds: 5, baths: 4, sqft: 4210,
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
    desc: "Resort-style pool, guest casita and a landscaped acre backing onto protected greenbelt."
  },
  {
    id: 3, title: "Midtown Creative Suite", type: "Commercial", tag: "Lease",
    address: "1900 Peachtree Ave, Atlanta, GA", location: "Atlanta",
    price: 320000, beds: 0, baths: 2, sqft: 2600,
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    desc: "Open-plan creative office with exposed brick, 18ft ceilings and 12 dedicated parking bays."
  },
  {
    id: 4, title: "The Ashford Townhome", type: "Apartment", tag: "Hot",
    address: "27 Granite Lane, Denver, CO", location: "Denver",
    price: 495000, beds: 3, baths: 2, sqft: 1880,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    desc: "Corner unit with mountain views, smart-home package and a two-car attached garage."
  },
  {
    id: 5, title: "Palm Grove Estate", type: "Villa", tag: "Featured",
    address: "5 Coral Bay Drive, Miami, FL", location: "Miami",
    price: 2380000, beds: 6, baths: 5, sqft: 5600,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    desc: "Waterfront estate with private dock, infinity pool and full smart-security integration."
  },
  {
    id: 6, title: "Cedar & Ninth Apartments", type: "Apartment", tag: "New",
    address: "901 Cedar St, Portland, OR", location: "Portland",
    price: 372000, beds: 1, baths: 1, sqft: 780,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    desc: "Efficient one-bed in a LEED-certified building with rooftop lounge and bike storage."
  },
  {
    id: 7, title: "Riverbend Retail Block", type: "Commercial", tag: "Investment",
    address: "240 Mill Street, Nashville, TN", location: "Nashville",
    price: 890000, beds: 0, baths: 3, sqft: 4400,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    desc: "Three-unit retail block fully leased with 7.1% cap rate and long-term anchor tenant."
  },
  {
    id: 8, title: "Aspen Court Family Home", type: "Villa", tag: "Open House",
    address: "16 Aspen Court, Boulder, CO", location: "Boulder",
    price: 940000, beds: 4, baths: 3, sqft: 3120,
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
    desc: "Renovated family home with vaulted living room, home office and mature garden."
  },
  {
    id: 9, title: "Lakeshore Penthouse", type: "Apartment", tag: "Luxury",
    address: "700 Lakeshore Blvd, Chicago, IL", location: "Chicago",
    price: 1720000, beds: 3, baths: 3, sqft: 2900,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    desc: "Full-floor penthouse with 270° lake views, private elevator and concierge service."
  }
];

const LEADS = [
  { name: "Amara Osei",     email: "amara.o@mail.com",   interest: "Skyline Loft Residence", budget: "$600k – $750k", status: "hot" },
  { name: "Daniel Reyes",   email: "d.reyes@mail.com",   interest: "Verdant Hills Villa",    budget: "$1.2M – $1.6M", status: "hot" },
  { name: "Priya Nair",     email: "priya.n@mail.com",   interest: "Cedar & Ninth Apts",     budget: "$350k – $400k", status: "warm" },
  { name: "Tom Blackwood",  email: "tomb@mail.com",      interest: "Midtown Creative Suite", budget: "Undisclosed",   status: "warm" },
  { name: "Lena Fischer",   email: "lena.f@mail.com",    interest: "Aspen Court Home",       budget: "$900k – $1M",   status: "hot" },
  { name: "Marcus Webb",    email: "m.webb@mail.com",    interest: "Browsing only",          budget: "Not provided",  status: "unqualified" },
  { name: "Sofia Marchetti",email: "sofiam@mail.com",    interest: "Lakeshore Penthouse",    budget: "$1.5M+",        status: "warm" }
];

const TOURS = [
  { who: "Amara Osei",   what: "Skyline Loft Residence", when: "Today · 2:30 PM", due: true },
  { who: "Lena Fischer", what: "Aspen Court Family Home", when: "Tomorrow · 11:00 AM", due: false },
  { who: "Daniel Reyes", what: "Verdant Hills Villa",     when: "Thu · 4:00 PM", due: false }
];

const REMINDERS = [
  { text: "Send financing docs to Daniel Reyes", meta: "Overdue by 1 day", due: true },
  { text: "Call Priya Nair about revised offer", meta: "Due today · 5:00 PM", due: true },
  { text: "Follow up with Sofia Marchetti", meta: "Due Thursday", due: false },
  { text: "Re-qualify Marcus Webb after 30 days", meta: "Due next month", due: false }
];

/* ---------- 2. HELPERS ------------------------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const money = n =>
  n >= 1000000 ? "$" + (n / 1000000).toFixed(2).replace(/\.00$/, "") + "M"
               : "$" + Math.round(n / 1000) + "k";

const favorites = new Set();

/* ---------- 3. PROPERTY GRID + FILTERING -------------------- */

function buildCard(p) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-media">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <span class="tag">${p.tag}</span>
      <button class="fav ${favorites.has(p.id) ? "active" : ""}" data-fav="${p.id}"
              aria-label="Save ${p.title} to favorites">${favorites.has(p.id) ? "♥" : "♡"}</button>
      <span class="price-badge">${money(p.price)}</span>
    </div>
    <div class="card-body">
      <div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-addr">📍 ${p.address}</p>
      </div>
      <div class="specs">
        <span class="spec">${p.beds ? p.beds + " Beds" : "Open plan"}</span>
        <span class="spec">${p.baths} Baths</span>
        <span class="spec">${p.sqft.toLocaleString()} Sqft</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-ghost" data-details="${p.id}">View Details</button>
        <button class="btn btn-primary" data-schedule="${p.id}">Schedule Visit</button>
      </div>
    </div>`;
  return card;
}

function renderGrid(list) {
  const grid = $("#propertyGrid");
  grid.innerHTML = "";
  list.forEach(p => grid.appendChild(buildCard(p)));
  $("#resultCount").textContent =
    `Showing ${list.length} propert${list.length === 1 ? "y" : "ies"}`;
  $("#emptyState").classList.toggle("hidden", list.length > 0);
}

function applyFilters() {
  const loc = $("#fLocation").value.trim().toLowerCase();
  const type = $("#fType").value;
  const min = parseFloat($("#fMin").value) || 0;
  const max = parseFloat($("#fMax").value) || Infinity;
  const beds = parseInt($("#fBeds").value, 10) || 0;
  const sort = $("#fSort").value;

  let list = PROPERTIES.filter(p =>
    (!loc || p.location.toLowerCase().includes(loc) || p.address.toLowerCase().includes(loc)) &&
    (!type || p.type === type) &&
    p.price >= min && p.price <= max &&
    p.beds >= beds
  );

  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "size") list.sort((a, b) => b.sqft - a.sqft);

  renderGrid(list);
  return list;
}

/* ---------- 4. FAVORITES ------------------------------------ */

function toggleFavorite(id, btn) {
  const p = PROPERTIES.find(x => x.id === id);
  if (favorites.has(id)) {
    favorites.delete(id);
    btn.classList.remove("active");
    btn.textContent = "♡";
    showToast(`Removed ${p.title} from favorites`);
  } else {
    favorites.add(id);
    btn.classList.add("active");
    btn.textContent = "♥";
    showToast(`Saved ${p.title} to your favorites`);
  }
}

/* ---------- 5. DETAILS MODAL -------------------------------- */

function openDetails(id) {
  const p = PROPERTIES.find(x => x.id === id);
  openModal(`
    <img class="detail-img" src="${p.img}" alt="${p.title}" />
    <div class="modal-head">
      <div>
        <h3>${p.title}</h3>
        <p>📍 ${p.address}</p>
      </div>
      <button class="modal-close" data-close>✕</button>
    </div>
    <div class="modal-body">
      <p style="font-size:14px;color:#64748b">${p.desc}</p>
      <div class="detail-list">
        <div><span>Price</span><strong>${money(p.price)}</strong></div>
        <div><span>Type</span><strong>${p.type}</strong></div>
        <div><span>Bedrooms</span><strong>${p.beds || "—"}</strong></div>
        <div><span>Bathrooms</span><strong>${p.baths}</strong></div>
        <div><span>Area</span><strong>${p.sqft.toLocaleString()} sqft</strong></div>
        <div><span>Status</span><strong>${p.tag}</strong></div>
      </div>
      <button class="btn btn-primary btn-block" data-schedule="${p.id}">Schedule a Visit</button>
    </div>`);
}

/* ---------- 6. SCHEDULE VISIT MODAL ------------------------- */

function openSchedule(id) {
  const p = PROPERTIES.find(x => x.id === id);
  const today = new Date().toISOString().split("T")[0];

  openModal(`
    <div class="modal-head">
      <div>
        <h3>Schedule a visit</h3>
        <p>Pick a slot — an agent confirms within an hour.</p>
      </div>
      <button class="modal-close" data-close>✕</button>
    </div>
    <form class="modal-body" id="visitForm">
      <div class="modal-summary">
        <img src="${p.img}" alt="${p.title}" />
        <div><strong>${p.title}</strong><small>${p.address} · ${money(p.price)}</small></div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="vDate">Preferred date</label>
          <input type="date" id="vDate" min="${today}" value="${today}" required />
        </div>
        <div class="field">
          <label for="vTime">Preferred time</label>
          <select id="vTime" required>
            <option>9:00 AM</option><option>10:30 AM</option><option>12:00 PM</option>
            <option>2:00 PM</option><option>3:30 PM</option><option>5:00 PM</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label for="vName">Full name</label>
        <input type="text" id="vName" placeholder="Jane Doe" required />
      </div>
      <div class="field">
        <label for="vPhone">Phone number</label>
        <input type="tel" id="vPhone" placeholder="+1 (555) 000-0000" required />
      </div>
      <div class="inline-confirm hidden" id="visitConfirm">✓ Tour Requested Successfully!</div>
      <button type="submit" class="btn btn-primary btn-block">Confirm Tour Request</button>
    </form>`);

  $("#visitForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#vName").value.trim();
    const when = `${$("#vDate").value} at ${$("#vTime").value}`;
    const box = $("#visitConfirm");
    box.textContent = `✓ Tour Requested Successfully! ${name}, we'll confirm ${when}.`;
    box.classList.remove("hidden");
    showToast("Tour Requested Successfully!");
    TOURS.unshift({ who: name, what: p.title, when: when, due: true });
    renderDashboard();
    setTimeout(closeModal, 2200);
  });
}

/* ---------- Generic modal machinery ------------------------- */

function openModal(html) {
  const root = $("#modalRoot");
  root.innerHTML = `<div class="modal-overlay" data-overlay><div class="modal">${html}</div></div>`;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  $("#modalRoot").innerHTML = "";
  document.body.style.overflow = "";
}

/* ---------- 7. TOASTS --------------------------------------- */

function showToast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span class="ok">✓</span><span>${message}</span>`;
  $("#toastStack").appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(24px)";
    el.style.transition = "all .25s ease";
    setTimeout(() => el.remove(), 250);
  }, 3000);
}

/* ---------- 8. AGENT DASHBOARD ------------------------------ */

function renderDashboard() {
  const hot = LEADS.filter(l => l.status === "hot").length;
  const warm = LEADS.filter(l => l.status === "warm").length;
  const cold = LEADS.filter(l => l.status === "unqualified").length;

  $("#statGrid").innerHTML = [
    { label: "Hot leads", value: hot, delta: "+3 this week" },
    { label: "Warm leads", value: warm, delta: "+1 this week" },
    { label: "Unqualified", value: cold, delta: "auto-filtered by AI" },
    { label: "Booked tours", value: TOURS.length, delta: "next in 2h" }
  ].map(s => `
    <div class="stat">
      <span>${s.label}</span>
      <strong>${s.value}</strong>
      <span class="delta">${s.delta}</span>
    </div>`).join("");

  $("#leadMeta").textContent = `${LEADS.length} active leads`;
  $("#leadRows").innerHTML = LEADS.map(l => `
    <tr>
      <td class="lead-name">${l.name}<small>${l.email}</small></td>
      <td>${l.interest}</td>
      <td>${l.budget}</td>
      <td><span class="pill ${l.status}">${l.status === "unqualified" ? "Unqualified" : l.status[0].toUpperCase() + l.status.slice(1)}</span></td>
    </tr>`).join("");

  $("#tourMeta").textContent = `${TOURS.length} scheduled`;
  $("#tourList").innerHTML = TOURS.map(t => `
    <div class="reminder">
      <span class="dot ${t.due ? "due" : ""}"></span>
      <div><p>${t.who} — ${t.what}</p><small>${t.when}</small></div>
    </div>`).join("");

  $("#reminderList").innerHTML = REMINDERS.map(r => `
    <div class="reminder">
      <span class="dot ${r.due ? "due" : ""}"></span>
      <div><p>${r.text}</p><small>${r.meta}</small></div>
    </div>`).join("");
}

function setView(isAgent) {
  $("#buyerView").classList.toggle("hidden", isAgent);
  $("#dashboardView").classList.toggle("hidden", !isAgent);
  $("#viewToggle").checked = isAgent;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 9. INIT + GLOBAL EVENT DELEGATION -------------- */

document.addEventListener("click", e => {
  const t = e.target;

  const fav = t.closest("[data-fav]");
  if (fav) return toggleFavorite(Number(fav.dataset.fav), fav);

  const det = t.closest("[data-details]");
  if (det) return openDetails(Number(det.dataset.details));

  const sch = t.closest("[data-schedule]");
  if (sch) return openSchedule(Number(sch.dataset.schedule));

  if (t.closest("[data-close]") || t.hasAttribute("data-overlay")) return closeModal();

  if (t.id === "backToListings") return setView(false);
  if (t.id === "headerCta") return showToast("Listing wizard coming soon — we'll email you the link.");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

document.addEventListener("DOMContentLoaded", () => {
  renderGrid(PROPERTIES);
  renderDashboard();

  $("#searchForm").addEventListener("submit", e => {
    e.preventDefault();
    const list = applyFilters();
    showToast(`${list.length} propert${list.length === 1 ? "y" : "ies"} match your search`);
  });

  $("#fSort").addEventListener("change", applyFilters);
  $("#viewToggle").addEventListener("change", e => setView(e.target.checked));
});
