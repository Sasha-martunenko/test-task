const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents
  },
  env:{
    base_url: 'https://allo.ua/',
    // first test
    category: '.ct-button',
    category_of_product: ':nth-child(9) > .mm__a',
    first_product_filter: ':nth-child(1) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link',
    second_product_filter: ':nth-child(4) > .header',
    third_product_filter: '[data-id="30939"]',
    fourth_product_filter:'[data-id="7081"]',
    show_product_btn: 'Показати 3 товари',
    category_of_price:'.sort-by',
    from_to_btn: 'від дешевих до дорогих',
    cheapest_headphone: '[data-product-id="12262739"] > .product-card',
    cheapest_price: '.v-pb__cur',
    expensive_price_headphone: '[data-product-id="11760861"] > .product-card',
    expensive: '.v-pb__cur',
    // second test
    first_product: '[data-product-id="11532032"]',
    first_buying_btn: 'Купити',
    close_cart_btn: '.v-modal__close-btn > .vi',
    second_category_of_product: ':nth-child(8) > .mm__a',
    second_subcategory_of_product: ':nth-child(1) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link',
    second_product: '[data-product-id="5018798"]',
    cart_btn: '.mh-cart > .mh-button',
    total_price: '.total-box',
    first_product_price:' .product_qty_price',
    second_product_price:' .product_qty_price',
    total_box_price: '.total-box__price',
    fisrt_delete_btn:'use',
    second_delete_btn:'use',
    // third test
    name_of_product: 'POCO M5',
    search_panel:'.search-form__form',
    correct_product:':nth-child(1) > .search-categories__links',
    all_items_on_page:'.products-layout__container',
    all_items_title:'.product-card > .product-card__content > .product-card__title',
    // fourth test
    correct_category:':nth-child(3) > .mm__a',
    correct_subcategory:':nth-child(1) > .portal-card > .portal-card__item > .accordion > .content > .portal-card__list > :nth-child(1)',
    title_of_correcct_product:'[data-product-id="1088649"] > .product-card > .product-card__content > .product-card__title',
    incorrect_title:'Фотоапарат Nikon'
  }
});