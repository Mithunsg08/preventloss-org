// 1. Inject the Head Script (Google Tag Manager)
var gtmScript = document.createElement('script');
gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSLK8B8T');`;
document.head.appendChild(gtmScript);

// 2. Inject the Body Script (Google Tag Manager noscript)
var gtmNoscript = document.createElement('noscript');
gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSLK8B8T"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
document.body.insertBefore(gtmNoscript, document.body.firstChild);
