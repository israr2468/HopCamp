import faker from "faker";

const generateFakeCampsites = () => {
  const campsites = {
    name: faker.company.companyName(),
    available: faker.datatype.number({ min: 0, max: 10 }),
    demand: faker.lorem.paragraph(),
    instantBook: faker.datatype.boolean(),
    descriptions: faker.lorem.paragraphs(),
    capacity: faker.datatype.number({ min: 1, max: 10 }),
    restrictions: faker.lorem.sentence(),
    amenities: faker.lorem.words(5),
    price: faker.datatype.number({ min: 1, max: 100 }),
    type: faker.random.arrayElement(["tent", "rv", "cabin"]),
    imgURL: faker.image.imageUrl(),
  };
  return campsites;
};

const numberOfCampsites = 10000;
const campsitesCollection = [];

for (let i = 0; i < numberOfCampsites; i++) {
  campsitesCollection.push(generateFakeCampsites());
}

export default campsitesCollection;
