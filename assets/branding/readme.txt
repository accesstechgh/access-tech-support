Access Tech Support Website Integration Kit
================================================

This package helps you integrate the final branding elements (logo, favicon, and QR) into your website easily.

-------------------------------------------------
1️⃣ Folder Structure
-------------------------------------------------
Place these files into your repository as follows:

/assets/
    /images/
        - logo-main.png
        - qr-single.png
    /branding/
        - favicon.ico
        - palette.json
        - readme.txt

-------------------------------------------------
2️⃣ Step-by-Step Integration Instructions
-------------------------------------------------

STEP 1 — Upload the assets folder
---------------------------------
Drag and drop the entire `assets` folder into your GitHub repository root (same level as index.html).

STEP 2 — Edit the Header
------------------------
Open `index.html`, find the <header> tag, and replace its contents with:

<header class="site-header">
  <div class="header-left">
    <img src="assets/images/logo-main.png" alt="Access Tech Support Logo" class="brand-logo" />
  </div>
  <div class="header-center">
    <h1>Access Tech Support</h1>
  </div>
</header>

STEP 3 — Add Footer with QR
---------------------------
Find your <footer> tag in `index.html` and paste this before it:

<div class="footer-contact">
  <h3>Book or Reach Us</h3>
  <img src="assets/images/qr-single.png" alt="Access Tech QR" class="footer-qr" />
  <p>WhatsApp: <a href="https://wa.me/233599966149">+233 599 966 149</a></p>
  <p>Email: <a href="mailto:accesstechservicegh@gmail.com">accesstechservicegh@gmail.com</a></p>
</div>

STEP 4 — Update CSS
-------------------
Append the following CSS snippet to your styles.css:

.brand-logo {
  height: 50px;
  margin-right: 1rem;
  vertical-align: middle;
}

.header-center h1 {
  color: var(--accent-yellow);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.footer-contact {
  text-align: center;
  margin-top: 2rem;
  color: #d8d8d8;
}

.footer-qr {
  width: 130px;
  margin: 10px auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(246, 4, 46, 0.3);
}

STEP 5 — Test Locally
---------------------
Use the GitHub "Preview" feature or a local live server to check layout.
Ensure that:
- Logo appears left of header text
- QR displays above footer
- Mobile layout remains clean

STEP 6 — Commit & Push
----------------------
Once everything looks good:
1. Commit your changes to your `final-deploy` branch.
2. Push to GitHub.
3. Confirm your live site reloads without errors.

-------------------------------------------------
All assets are optimized for web display and responsive scaling.
