// Force inject the main GTM script immediately
document.write(`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSLK8B8T');</script>
`);

// Force inject the noscript fallback immediately
document.write(`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSLK8B8T"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`);
