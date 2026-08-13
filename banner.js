document.addEventListener("DOMContentLoaded", () => {
  const isArticlePage = window.location.pathname.includes("/articles/");

  // 1. Inject Dynamic CSS
  const style = document.createElement("style");
  style.textContent = `
    .sidebar { position: relative; height: 100%; }
    
    /* Brand Header Styling (No Image - Pure HTML/CSS) */
    .ops-brand-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      text-align: left;
    }
    .ops-logo-icon {
      width: 42px;
      height: 42px;
      min-width: 42px;
      background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    .ops-logo-icon::after {
      content: '';
      width: 14px;
      height: 14px;
      border: 3.5px solid #0f172a;
      border-radius: 50%;
    }
    .ops-brand-text {
      display: flex;
      flex-direction: column;
    }
    .ops-title-text {
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: -0.02em;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .ops-sub-text {
      font-size: 0.62rem;
      font-weight: 700;
      color: #94a3b8;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: 3px;
    }

    /* Card Layout */
    .ad-banner-card {
      position: -webkit-sticky;
      position: sticky;
      top: 80px;
      background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
      border: 1px solid rgba(99, 102, 241, 0.4);
      box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.2);
      border-radius: 20px;
      padding: 24px 20px;
      text-align: left;
      z-index: 80;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .ad-banner-card:hover {
      border-color: rgba(99, 102, 241, 0.7);
      box-shadow: 0 16px 36px -5px rgba(0, 0, 0, 0.6), 0 0 22px rgba(99, 102, 241, 0.35);
    }

    /* Badges & Text Elements */
    .ad-badge { 
      display: inline-block; 
      background: #312e81; 
      color: #a5b4fc; 
      font-size: 0.65rem; 
      font-weight: 800; 
      text-transform: uppercase; 
      padding: 5px 12px; 
      border-radius: 999px; 
      margin-bottom: 14px; 
      border: 1px solid #4338ca; 
      letter-spacing: 0.05em;
    }
    .ad-title { font-size: 1.15rem; font-weight: 800; color: #fff; line-height: 1.35; margin-bottom: 10px; }
    .ad-desc { font-size: 0.85rem; color: #c7d2fe; line-height: 1.55; margin-bottom: 18px; }
    
    /* CTA Button & Micro-copy */
    .ad-cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      font-weight: 700;
      font-size: 0.88rem;
      padding: 13px 16px;
      border-radius: 12px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .ad-cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
    }
    .ad-micro-copy {
      font-size: 0.74rem;
      color: #34d399;
      margin-top: 12px;
      text-align: center;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    /* Modal Popup Overlay */
    .mobile-ad-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(15,17,23,0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 9999;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .mobile-ad-overlay.active { display: flex; }
    .mobile-ad-modal {
      background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
      border: 2px solid #818cf8;
      border-radius: 20px;
      padding: 24px;
      max-width: 420px;
      width: 100%;
      position: relative;
      text-align: left;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }
    .close-ad-btn {
      position: absolute;
      top: 14px;
      right: 16px;
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 1.5rem;
      cursor: pointer;
      line-height: 1;
    }

    /* Mobile Sticky Bottom Bar */
    .mobile-bottom-banner {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.94);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid rgba(99, 102, 241, 0.4);
      padding: 12px 18px;
      z-index: 999;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.4);
    }
    @media(max-width: 860px) {
      .mobile-bottom-banner.show { display: flex; }
      body { padding-bottom: 70px; }
    }
  `;
  document.head.appendChild(style);

  // HTML structure for Brand Header
  const brandHeaderHTML = `
    <div class="ops-brand-header">
      <div class="ops-logo-icon"></div>
      <div class="ops-brand-text">
        <span class="ops-title-text">OpsReveal</span>
        <span class="ops-sub-text">BY PREVENTLOSS.ORG</span>
      </div>
    </div>
  `;

  // 2. Inject Sidebar Banner (Only on Article pages)
  if (isArticlePage) {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="ad-banner-card">
          ${brandHeaderHTML}
          <span class="ad-badge">⚡ INSTANT BROWSER AUDIT</span>
          <h3 class="ad-title">Stop Margin Leakage & Protect Your Profit</h3>
          <p class="ad-desc">Analyze procurement costs and inventory risks instantly on your browser. Zero cloud uploads required.</p>
          <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" class="ad-cta-btn">Run Free Audit →</a>
          <div class="ad-micro-copy">🔒 100% Client-Side & Secure</div>
        </div>
      `;
    }
  }

  // 3. Inject Modal Popup & Mobile Bottom Bar
  const popupMarkup = `
    <div class="mobile-ad-overlay" id="mobileAdOverlay">
      <div class="mobile-ad-modal">
        <button class="close-ad-btn" id="closeAdBtn">&times;</button>
        ${brandHeaderHTML}
        <span class="ad-badge">⚡ INSTANT BROWSER AUDIT</span>
        <h3 class="ad-title">Stop Margin Leakage & Protect Your Profit</h3>
        <p class="ad-desc">Analyze procurement costs and inventory risks instantly on your browser. Zero cloud uploads required.</p>
        <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" class="ad-cta-btn" id="modalCtaBtn">Run Free Audit →</a>
        <div class="ad-micro-copy">🔒 100% Client-Side & Secure</div>
      </div>
    </div>
    <div class="mobile-bottom-banner" id="mobileBottomBanner">
      <div style="font-size:0.78rem;color:#e0e7ff;line-height:1.3;">
        <strong style="color:#fff;display:block;">OpsReveal Audit Tool</strong>
        <span>100% Local Browser-Based</span>
      </div>
      <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" style="background:#4f46e5;color:#fff;font-size:0.75rem;font-weight:700;padding:8px 14px;border-radius:6px;text-decoration:none;">Run Audit</a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popupMarkup);

  // 4. Trigger Display Logic
  let adClosed = false;

  setTimeout(() => {
    const isMobile = window.innerWidth <= 860;
    if ((!isArticlePage || isMobile) && !adClosed) {
      document.getElementById("mobileAdOverlay")?.classList.add("active");
    }
  }, 10000);

  const closePopup = () => {
    adClosed = true;
    document.getElementById("mobileAdOverlay")?.classList.remove("active");
    if (window.innerWidth <= 860) {
      document.getElementById("mobileBottomBanner")?.classList.add("show");
    }
  };

  document.getElementById("closeAdBtn")?.addEventListener("click", closePopup);
  document.getElementById("modalCtaBtn")?.addEventListener("click", closePopup);

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 860 && window.scrollY > 300) {
      document.getElementById("mobileBottomBanner")?.classList.add("show");
    }
  });
});
