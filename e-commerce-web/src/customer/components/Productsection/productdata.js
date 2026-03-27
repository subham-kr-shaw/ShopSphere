export const sortOptions = [
  // { name: 'Most Popular', href: '#', current: true },
  // { name: 'Best Rating', href: '#', current: false },
  // { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue'},
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals' },
      { value: 'sale', label: 'Sale', },
      { value: 'travel', label: 'Travel'},
      { value: 'organization', label: 'Organization' },
      { value: 'accessories', label: 'Accessories' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L' },
      { value: '6l', label: '6L' },
      { value: '12l', label: '12L' },
      { value: '18l', label: '18L' },
      { value: '20l', label: '20L' },
      { value: '40l', label: '40L'},
    ],
  },
{
  id: 'Price',
  name: 'Price',
  options: [
    { value: '0-499', label: '₹0 - ₹499' },
    { value: '500-999', label: '₹500 - ₹999' },
    { value: '1000-1999', label: '₹1000 - ₹1999' },
    { value: '2000-4999', label: '₹2000 - ₹4999' },
    { value: '5000+', label: '₹5000 & Above' }
  ]
},
{
  id:'discount',
  name:'Discount',
  options:
  [
   {value:'20%',label:'20%'},
   {value:'30%',label:'30%'},
   {value:'40%',label:'40%'},
   {value:'50%',label:'50%'}
  ]
}
]