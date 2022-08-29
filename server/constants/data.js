import images from './images';

const reviews = [
  {
    slug: 'user1',
    name:'Fuad',
    dp: images.user1,
    rating: '5',
    review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
  },
  {
    slug: 'user2',
    name:'Arpon',
    dp: images.user4,
    rating: '4.5',
    review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
  },
  {
    slug: 'user3',
    name:'Joy',
    dp: images.user1,
    rating: '5',
    review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
  },
  {
    slug: 'user4',
    name:'Tasin',
    dp: images.user4,
    rating: '5',
    review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
  },
  
];

const products = [
  {
    name: 'sofa1',
    slug:'sofa1',
    category: 'sofa',
    imgUrl: images.sofa1,
    price: 20000,
    countInStock:10,
    rating:4.5,
    numReviews: 10,
    description: 'high quality sofa',
    reviews:[
      {
        slug: 'user1',
        name:'Fuad',
        dp: images.user1,
        rating: '5',
        review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
      },
      {
        slug: 'user2',
        name:'Arpon',
        dp: images.user4,
        rating: '4.5',
        review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
      },
      {
        slug: 'user3',
        name:'Joy',
        dp: images.user1,
        rating: '5',
        review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
      },
      {
        slug: 'user4',
        name:'Tasin',
        dp: images.user4,
        rating: '5',
        review: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.',
      },
    ]
  },
  {
    name: 'sofa2',
    slug:'sofa2',
    category: 'sofa',
    imgUrl: images.sofa2,
    price: 22000,
    countInStock:10,
    rating:4.8,
    numReviews: 10,
    description: 'high quality sofa'
  },
  {
    name: 'sofa3',
    slug:'sofa3',
    category: 'sofa',
    imgUrl: images.sofa3,
    price: 20000,
    countInStock:10,
    rating:4.5,
    numReviews: 10,
    description: 'high quality sofa'
  },
  {
    name: 'sofa4',
    slug:'sofa4',
    category: 'sofa',
    imgUrl: images.sofa4,
    price: 25000,
    countInStock:10,
    rating:5,
    numReviews: 10,
    description: 'high quality sofa'
  },
  {
    name: 'sofa5',
    slug:'sofa5',
    category: 'sofa',
    imgUrl: images.sofa5,
    price: 20000,
    countInStock:10,
    rating:3.5,
    numReviews: 10,
    description: 'high quality sofa'
  },
  {
    name: 'sofa6',
    slug:'sofa6',
    category: 'sofa',
    imgUrl: images.sofa6,
    price: 23000,
    countInStock:10,
    rating:4.7,
    numReviews: 10,
    description: 'high quality sofa'
  },
  {
    name: 'sofa7',
    slug:'sofa7',
    category: 'sofa',
    imgUrl: images.sofa7,
    price: 24000,
    countInStock:10,
    rating:3.5,
    numReviews: 10,
    description: 'high quality sofa'
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { reviews, awards ,products};
