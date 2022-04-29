const images = [
  {
    image: "QuiviraNationalWildlifeRefuge.jpg",
    title: "Quivira National Wildlife Refuge",
  },
  {
    image: "DSCF8221.jpg",
    title: "Stacks of Hay",
  },
  {
    image: "DSCF8235.jpg",
    title: "Grain Silos",
  },

  {
    image: "IMG_8740.jpg",
    title: "Kansas Skyscapes",
  },
  {
    image: "FrommeBirneyRoundBarn.jpg",
    title: "Fromme Birney Round Barn",
  },
  {
    image: "Cheyenne_Bottoms.jpg",
    title: "Cheyenne Bottoms Wildlife Area",
  },

  {
    image: "DSCF8323.jpg",
    title: "1000lb Space Rock",
  },
  {
    image: "DSCF8350.jpg",
    title: "Liggett Art Environment",
  },
  {
    image: "DSCF8403.jpg",
    title: "Street Front",
  },
  {
    image: "DSCF8404.jpg",
    title: "Vernacular Architecture",
  },
  {
    image: "IMG_0909.jpg",
    title: "American Agriculture",
  },
  {
    image: "IMG_8764.jpg",
    title: "wishing well",
  },
  {
    image: "IMG_0050.png",
    title: "Public Lands",
  },
  {
    image: "GypsumHillsScenicByway.jpg",
    title: "Gypsum Hills Scenic Byway",
  },

  {
    image: "IMG_0576.jpg",
    title: "Drive by Photography",
  },
  {
    image: "IMG_0583.jpg",
    title: "Windmills",
  },

  {
    image: "IMG_2194.jpg",
    title: "Smithsons in the Wild",
  },
  {
    image: "IMG_4609.jpg",
    title: "Somewhere Over the Rainbow",
  },
  {
    image: "IMG_7017.jpg",
    title: "Sculpture Park?",
  },

  {
    image: "IMG_7035.jpg",
    title: "Neat Building",
  },

  {
    image: "IMG_7117.jpg",
    title: "Saddles; New and Used",
  },
  {
    image: "IMG_8472.jpg",
    title: "Cottonwood grove",
  },
  {
    image: "StJacobsWell.jpg",
    title: "St. Jacobs Well",
  },
  {
    image: "lemonpark.jpg",
    title: "Lemon Park",
  },
  {
    image: "L1180124.jpg",
    title: "Dinner",
  },
  {
    image: "DSCF8294.jpg",
    title: "Christmas Ornamentation",
  },

  {
    image: "L1180180.jpg",
    title: "Kansas Flatness",
  },
  {
    image: "VernonFilley.jpg",
    title: "Vernon Filley Art Museum",
  },
  {
    image: "IMG_7110.jpg",
    title: "Panorama",
  },
];

const posts = [];

let imageIndex = 0;

for (let i = 0; i < images.length; i++) {
  let item = {
    id: i,
    title: images[imageIndex].title,
    image: images[imageIndex].image,
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
