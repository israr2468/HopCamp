import faker from "faker";

const generateFakeCampersAlso = () => {
  const campersAlso = {
    description: faker.lorem.words(3),
    pic_url: faker.image.imageUrl(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    num_of_ratings: faker.datatype.number({ min: 0, max: 100 }),
    acres: faker.datatype.number({ min: 1, max: 100 }),
    location: faker.address.city(),
    price: faker.datatype.number({ min: 1, max: 100 }),
  };
  return campersAlso;
};

const numberOfCampersAlso = 10;
const campersAlsoCollection = [];

for (let i = 0; i < numberOfCampersAlso; i++) {
  campersAlsoCollection.push(generateFakeCampersAlso());
}
// console.log(campersAlsoCollection);

export default campersAlsoCollection;
