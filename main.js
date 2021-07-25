// css import
import './styles/style.css'

let price;

// main component DOM
document.querySelector('.container').innerHTML = `
<div class="component">
  <header class="component__header">
    <h1 class="component__header__title">
      Simple, traffic-based pricing
    </h1>
    <p class="component__header__text">\
      Sign-up for our 30-day trial. No credit card required.
    </p>
  </header>
  <main class="component__body">
    <section class="component__topper">
      <h2 class="component__topper__pageviews">100k pageviews</h2>
      <label for="range" class="component__topper__slider">
        <input type="range" name="range" min="1" max="5" step="1" value="3" class="component__topper__slider__input">
        <output for="range" class="component__topper__slider__output">$${16}.00 <span class="component__topper__slider__month">/ month</span></output>
      </label>
      <label class="component__topper__toggle">
        <p class="component__topper__toggle__monthly">Monthly Billing</p>
          <label class="component__topper__toggle__switch">
            <input type="checkbox" class="component__topper__toggle__switch__input">
            <span class="component__topper__toggle__switch__slider"></span>
          </label>
        <p class="component__topper__toggle__yearly">Yearly Billing</p>
        <!-- <span class="component__topper__toggle__discount">${price}</span> -->
      </label>
    </section>
    <section class="component__footer">
      <ul class="component__footer__list">
        <li class="component__footer__list__item">
          <p class="component__footer__list__item__text">Unlimited Websites</p>
        </li>  
        <li class="component__footer__list__item">
          <p class="component__footer__list__item__text">100% data ownership</p>
        </li>  
        <li class="component__footer__list__item">
        <p class="component__footer__list__item__text">Email reports</p>
        </li>  
      </ul>
      <div class="component__footer__button">
        <a href="#" class="component__footer__button__item">Start my trial</a>
      </div>
    </section>
  </main>
</div>
`