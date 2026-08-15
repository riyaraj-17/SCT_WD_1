## Basil & Ember - Responsive Restaurant Landing Page

A responsive restaurant landing page for Basil & Ember, a fictional wood-fired Indian grill restaurant, built for **Task 01: Interactive Navigation Menu** (SkillCraft Technology).

Live Features:
* Fixed navigation bar that stays visible while scrolling.
* Navbar changes style on scroll with background, blur, padding, and glow effects.
* Nav links feature an animated **flame underline** and glowing dot on hover.
* Active section is automatically highlighted using IntersectionObserver.
* Smooth scrolling between sections with clickable navigation links.
* Interactive **Reserve a Table** button with reservation form.
* Clickable **phone and email buttons** for easy contact.
* Fully responsive design for desktop, tablet, and mobile.
* Mobile slide-in navigation menu with hamburger button.

## File structure

```text
├── index.html    # Page markup
├── style.css     # All styling, including nav + responsive rules
├── script.js     # Scroll, hover, reservation, and navigation behavior
└── README.md     # Project documentations
```

## Running it locally

1. Clone or download this repository.
2. Open the project folder in **Visual Studio Code**.
3. Open `index.html`.
4. Right-click `index.html` and select **Open with Live Server**.
5. The Basil & Ember website will open in your browser.

## Notes on the nav implementation

**Scroll behavior:** `script.js` listens for scroll and toggles a `.scrolled` class on the `<nav>` once the user passes 40px, which `style.css` uses to fade in a blurred background and tighten the padding.

**Hover behavior:** each nav link has a pseudo-element underline (`::before`) and a small dot (`::after`) that scale in on `:hover`, styled to look like a flame igniting — matching the restaurant's "fire & flavor" brand identity.

**Active link:** an `IntersectionObserver` watches each `<section>` and adds an `.active` class to the matching nav link as it scrolls into the middle of the viewport.

**Mobile:** below 860px, the nav links become a slide-in panel triggered by a hamburger button (`#navToggle`). Clicking any link or outside the menu closes it automatically.

**Reservation flow:** clicking "Reserve a Table" smoothly scrolls to the contact section where users can call or email directly.

## Customizing
Colors, spacing, and type scale are all defined as CSS custom properties at the top of style.css (:root { ... }) — change those to re-theme the whole page.

Swap images/food.svg for your own hero graphic, or replace the menu items and copy in index.html to fit a different restaurant

