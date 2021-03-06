import './styles/style.css';

// create main component on DOM
const createUI = () => {
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
          <form>
            <div class="labels">
              <label for="slider" class="component__topper__slider">
                <input id="slider" type="range" name="slider" min="1" max="5" step="1" value="3" class="component__topper__slider__input">
              </label>
          <div class="component__topper__slider">
            <span  class="component__topper__slider__output">$16.00 <span class="component__topper__slider__month">/ month</span></span>
          </div>
            </div>
            <div class="component__topper__toggle">
              <span class="component__topper__toggle__monthly">Monthly Billing</span>
                <label for="checkbox" class="component__topper__toggle__switch">
                  <input id="checkbox" type="checkbox" name="checkbox" class="component__topper__toggle__switch__input">
                  <span class="component__topper__toggle__switch__slider"></span>
                </label>
              <span class="component__topper__toggle__yearly">Yearly Billing</span>
              <span class="component__topper__toggle__discount"></span> 
            </div>
          <form>
        </section>
        <section class="component__footer">
          <ul class="component__footer__list">
            <li class="component__footer__list__item">
              <h4 class="component__footer__list__item__text">Unlimited Websites</h4>
            </li>  
            <li class="component__footer__list__item">
              <h4 class="component__footer__list__item__text">100% data ownership</h4>
            </li>  
            <li class="component__footer__list__item">
            <h4 class="component__footer__list__item__text">Email reports</h4>
            </li>  
          </ul>
          <div class="component__footer__button">
            <a href="#" class="component__footer__button__item">Start my trial</a>
          </div>
        </section>
      </main>
    </div>
`
};

createUI();

// change the slider background-color on change of the input slides
const sliderStyling = () => {
  const slider = document.querySelector('input[type = "range"]').oninput = function () {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #A5F3EB 0%, #A5F3EB ' + value + '%, #EAEEFB ' + value + '%, #EAEEFB 100%)';
  }
};

sliderStyling();

// changes the pageviews text and price on slider input events
const updatePriceSlider = () => {

  // PAGEVIEWS text
  let title = document.querySelector('.component__topper__pageviews');

  // big price text
  let price = document.querySelector('.component__topper__slider__output');

  // slider input value 
  let sliderValue = document.querySelector('.component__topper__slider__input');

  // toggle switch buttons itself
  let toggleSwitch = document.querySelector('.component__topper__toggle__switch__input');

  // ' month ' text html tag
  let monthHTML = '<span class="component__topper__slider__month">/ month</span>';

  // update the DOM elemenetst when slider is changed
  sliderValue.addEventListener('change', () => {
    if (sliderValue.value == 1) {
      title.innerHTML = '10k pageviews';
      price.innerHTML = `$${8}.00 ${monthHTML}`;

      toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked === true) {
          price.innerHTML = `$${6}.00 ${monthHTML}`;
        } else {
          price.innerHTML = `$${8}.00 ${monthHTML}`;
        }
      });
    } else if (sliderValue.value == 2) {
      title.innerHTML = '50k pageviews';
      price.innerHTML = `$${12}.00 ${monthHTML}`;
      toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked === true) {
          price.innerHTML = `$${9}.00 ${monthHTML}`;
        } else {
          price.innerHTML = `$${12}.00 ${monthHTML}`;
        }
      });
    } else if (sliderValue.value == 3) {
      title.innerHTML = '100k pageviews';
      price.innerHTML = `$${16}.00 ${monthHTML}`;
      toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked === true) {
          price.innerHTML = `$${12}.00 ${monthHTML}`;
        } else {
          price.innerHTML = `$${16}.00 ${monthHTML}`;
        }
      });
    } else if (sliderValue.value == 4) {
      title.innerHTML = '50k pageviews';
      price.innerHTML = `$${24}.00 ${monthHTML}`;
      toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked === true) {
          price.innerHTML = `$${18}.00 ${monthHTML}`;
        } else {
          price.innerHTML = `$${24}.00 ${monthHTML}`;
        }
      });
    } else if (sliderValue.value == 5) {
      title.innerHTML = '50k pageviews';
      price.innerHTML = `$${36}.00 ${monthHTML}`;
      toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked === true) {
          price.innerHTML = `$${27}.00 ${monthHTML}`;
        } else {
          price.innerHTML = `$${36}.00 ${monthHTML}`;
        }
      });
    }
  });

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked === true) {
      price.innerHTML = `$${12}.00 ${monthHTML}`;
    } else {
      price.innerHTML = `$${16}.00 ${monthHTML}`;
    }
  })
};

updatePriceSlider();