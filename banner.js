document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject CSS Styles for Banner
  const style = document.createElement("style");
  style.textContent = `
    .sidebar { position: relative; height: 100%; }
    .ad-banner-card {
      position: -webkit-sticky;
      position: sticky;
      top: 80px;
      background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
      border: 1px solid rgba(99, 102, 241, 0.4);
      box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.2);
      border-radius: 20px;
      padding: 24px 20px;
      text-align: center;
      z-index: 80;
    }
    .ad-badge { display: inline-block; background: #312e81; color: #a5b4fc; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; margin-bottom: 12px; border: 1px solid #4338ca; }
    .ad-title { font-size: 1.1rem; font-weight: 800; color: #fff; line-height: 1.3; margin-bottom: 10px; }
    .ad-desc { font-size: 0.82rem; color: #c7d2fe; line-height: 1.5; margin-bottom: 16px; }
    .ad-privacy-tag { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.73rem; color: #34d399; margin-bottom: 18px; background: rgba(16,185,129,0.1); padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(16,185,129,0.2); }
    .ad-cta-btn { display: inline-flex; align-items: center; justify-content: center; width: 100%; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: #ffffff; font-weight: 700; font-size: 0.88rem; padding: 12px 16px; border-radius: 12px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.05em; }
    .mobile-ad-overlay { display: none; position: fixed; inset: 0; background: rgba(15,17,23,0.85); backdrop-filter: blur(8px); z-index: 9999; align-items: center; justify-content: center; padding: 20px; }
    .mobile-ad-overlay.active { display: flex; }
    .mobile-ad-modal { background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border: 2px solid #818cf8; border-radius: 20px; padding: 24px; max-width: 420px; width: 100%; position: relative; text-align: center; }
    .close-ad-btn { position: absolute; top: 12px; right: 14px; background: none; border: none; color: #94a3b8; font-size: 1.5rem; cursor: pointer; }
    .mobile-bottom-banner { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(12px); border-top: 1px solid rgba(99, 102, 241, 0.4); padding: 12px 18px; z-index: 999; align-items: center; justify-content: space-between; gap: 12px; }
    @media(max-width: 860px) { .mobile-bottom-banner.show { display: flex; } body { padding-bottom: 70px; } }
  `;
  document.head.appendChild(style);

  // 2. Inject Desktop Sidebar Banner (If element exists)
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="ad-banner-card">
        <span class="ad-badge">⚡ Free LP Analysis Tool</span>
        <h3 class="ad-title">Free Loss Prevention Analysis Tool</h3>
        <p class="ad-desc">Analyze your procurement costs, margin leakage, and inventory risks instantly. Works 100% locally on your browser — <strong>no cloud uploads</strong>.</p>
        <div class="ad-privacy-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Client-Side Only • Secure</span>
        </div>
        <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" class="ad-cta-btn">Analyze Now →</a>
      </div>
    `;
  }

  // 3. Inject Mobile Popup & Bottom Sticky Bar
  const mobileMarkup = `
    <div class="mobile-ad-overlay" id="mobileAdOverlay">
      <div class="mobile-ad-modal">
        <button class="close-ad-btn" id="closeAdBtn">&times;</button>
        <span class="ad-badge">⚡ Instant Audit Tool</span>
        <h3 class="ad-title" style="margin-top:8px;">Free Loss Prevention Analysis Tool</h3>
        <p class="ad-desc">Runs entirely in your web browser. Analyze confidential procurement files safely without uploading data to external clouds.</p>
        <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" class="ad-cta-btn">Launch Analysis Tool</a>
      </div>
    </div>
    <div class="mobile-bottom-banner" id="mobileBottomBanner">
      <div style="font-size:0.78rem;color:#e0e7ff;">
        <strong style="color:#fff;display:block;">Free Loss Prevention Tool</strong>
        <span>100% Local Browser-Based</span>
      </div>
      <a href="https://opsreveal.preventloss.org/" target="_blank" rel="noopener" style="background:#4f46e5;color:#fff;font-size:0.75rem;font-weight:700;padding:8px 14px;border-radius:6px;text-decoration:none;">Try Tool</a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", mobileMarkup);

  // 4. Handle Mobile Logic
  let adClosed = false;
  setTimeout(() => {
    if (window.innerWidth <= 860 && !adClosed) {
      document.getElementById("mobileAdOverlay")?.classList.add("active");
    }
  }, 10000);

  document.getElementById("closeAdBtn")?.addEventListener("click", () => {
    adClosed = true;
    document.getElementById("mobileAdOverlay")?.classList.remove("active");
    document.getElementById("mobileBottomBanner")?.classList.add("show");
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 860 && window.scrollY > 300) {
      document.getElementById("mobileBottomBanner")?.classList.add("show");
    }
  });
});
