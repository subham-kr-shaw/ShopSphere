
const nav = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Women new arrivals',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Basic tees collection',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'tops', to: '/women/clothing/tops' },
            { name: 'Dresses', id: 'dresses', to: '/women/clothing/dresses' },
            { name: 'Pants', id: 'pants', to: '/women/clothing/pants' },
            { name: 'lengha choli', id: 'lengha_choli', to: '/women/clothing/lengha_choli' },
            { name: 'Sarees', id: 'sarees', to: '/women/clothing/sarees' },
            { name: 'T-Shirts', id: 'tshirts', to: '/women/clothing/tshirts' },
            { name: 'Jackets', id: 'jackets', to: '/women/clothing/jackets' },
            { name: 'Activewear', id: 'activewear', to: '/women/clothing/activewear' },
            { name: 'Browse All', id: 'all', to: '/women/clothing/all' },
          ],
        }
      ],
    },

    {
      id: 'Men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Men new arrivals',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Artwork tees',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurta', id: 'mens_kurta', to: '/Men/clothing/mens_kurta' },
            { name: 'T-Shirts', id: 't-shirts', to: '/Men/clothing/t-shirts' }, // ✅ FIXED
            { name: 'Tops', id: 'tops', to: '/Men/clothing/tops' },
            { name: 'Pants', id: 'pants', to: '/Men/clothing/pants' },
            { name: 'Sweaters', id: 'sweaters', to: '/men/clothing/sweaters' },
            { name: 'Jackets', id: 'jackets', to: '/men/clothing/jackets' },
            { name: 'Activewear', id: 'activewear', to: '/men/clothing/activewear' },
            { name: 'Browse All', id: 'all', to: '/men/clothing/all' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watches', to: '/men/accessories/watches' },
            { name: 'Wallets', id: 'wallets', to: '/men/accessories/wallets' },
            { name: 'Bags', id: 'bags', to: '/men/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasses', to: '/men/accessories/sunglasses' },
            { name: 'Hats', id: 'hats', to: '/men/accessories/hats' },
            { name: 'Belts', id: 'belts', to: '/men/accessories/belts' },
          ],
        }
      ],
    },
  ],

  pages: [
    { name: 'Company', to: '/company' },
    { name: 'Stores', href: '#' },
  ],
};

export default nav;
