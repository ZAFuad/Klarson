
const data = {
  products: [
    {
      name: "sofa1",
      slug: "sofa1",
      category: "sofa",
      imgUrl: "/assets/sofa1.png",
      price: 20000,
      countInStock: 10,
      rating: 4.5,
      numReviews: 110,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas."
    },
    {
      name: "sofa2",
      slug: "sofa2",
      category: "sofa",
      imgUrl: "/assets/sofa2.png",
      price: 22000,
      countInStock: 10,
      rating: 4.8,
      numReviews: 101,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "chair2",
      slug: "chair2",
      category: "chair",
      imgUrl: "/assets/chair1.jpg",
      price: 22000,
      countInStock: 102,
      rating: 4.8,
      numReviews: 10,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "sofa3",
      slug: "sofa3",
      category: "sofa",
      imgUrl: "/assets/s2.jpg",
      price: 20000,
      countInStock: 103,
      rating: 4.5,
      numReviews: 10,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "sofa4",
      slug: "sofa4",
      category: "sofa",
      imgUrl: "/assets/s2.jpg",
      price: 25000,
      countInStock: 10,
      rating: 5,
      numReviews: 104,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "bed1",
      slug: "bed1",
      category: "chair",
      imgUrl: "/assets/bed1.jpg",
      price: 22000,
      countInStock: 10,
      rating: 4.8,
      numReviews: 105,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "chair3",
      slug: "chair3",
      category: "chair",
      imgUrl: "/assets/chair3.jpg",
      price: 22000,
      countInStock: 107,
      rating: 4.8,
      numReviews: 106,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "sofa5",
      slug: "sofa5",
      category: "sofa",
      imgUrl: "/assets/s2.jpg",
      price: 20000,
      countInStock: 10,
      rating: 3.5,
      numReviews: 107,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "sofa6",
      slug: "sofa6",
      category: "sofa",
      imgUrl: "/assets/sofa6.png",
      price: 23000,
      countInStock: 10,
      rating: 4.7,
      numReviews: 107,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
    {
      name: "sofa7",
      slug: "sofa7",
      category: "sofa",
      imgUrl: "/assets/sofa7.png",
      price: 24000,
      countInStock: 10,
      rating: 3.5,
      numReviews: 10,
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat. Aliquam Ultricies Purus Leo, Iaculis Lacinia Nisi Convallis At. Morbi Consectetur Dolor Vel Congue Fermentum. Mauris Ultrices Vehicula Tristique. Nullam Fermentum, Risus Eget Dignissim Elementum, Risus Sapien Egestas Ex, Eget Vehicula Massa Quam Eu Massa. Donec Convallis Odio Nec Mi Ullamcorper, Sit Amet Bibendum Tellus Cursus. Pellentesque Ornare Lectus Vitae Tincidunt Egestas.",
    },
  ],
  reviews: [
    {
      slug: "user1",
      name: "Fuad",
      dp: "/assets/user1.jpg",
      rating: "5",
      review:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.",
    },
    {
      slug: "user2",
      name: "Arpon",
      dp: "/assets/user4.png",
      rating: "4.5",
      review:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.",
    },
    {
      slug: "user3",
      name: "Joy",
      dp: "/assets/user1.jpg",
      rating: "5",
      review:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.",
    },
    {
      slug: "user4",
      name: "Tasin",
      dp: "/assets/user4.png",
      rating: "5",
      review:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Molestie Elit Vitae Sollicitudin Dapibus. Aliquam Erat Volutpat.",
    },
  ],
  sliderData: [
    {
      image: "/assets/s3.jpg",
      heading: "20% Off",
      desc: "On the latest sofas. Buy before it's late",
    },
    {
      image: "/assets/s2.jpg",
      heading: "30% Off",
      desc: "On the latest sofas. Buy before it's late",
    },
    {
      image: "/assets/s4.jpg'",
      heading: "50% Off",
      desc: "On the latest sofas. Buy before it's late",
    },
  ],

  category: [
    { 
      _id: 1,
      title: "Sofa",
      image: "/assets/s4.jpg",
    },
    {
      _id: 2,
      title: "Chair",
      image: "/assets/chair.jpg",
    },
    {
      _id: 3,
      title: "Table",
      image: "/assets/table3.jpg",
    },
    {
      _id: 4,
      title: "Bed",
      image: "/assets/bed2.jpg",
    },
    {
      _id: 5,
      title: "Wardrobe",
      image: "/assets/wardrobe1.jpg",
    },
  ],
};

// const awards = [
//   {
//     imgUrl: "/assets/award02,
//     title: 'Bib Gourmond',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: "/assets/award01,
//     title: 'Rising Star',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: "/assets/award05,
//     title: 'AA Hospitality',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: "/assets/award03,
//     title: 'Outstanding Chef',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
// ];

module.exports=data;
