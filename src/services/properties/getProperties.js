import { PrismaClient } from "@prisma/client";

// get all properties. filter by location, pricePerNight and/or amenities is possible
// if argument amenities, output shows list of amenities for each found property

const getProperties = async (location, pricePerNight, amenities) => {
  const prisma = new PrismaClient();

  if(amenities){
    return await prisma.property.findMany({
      where: {
        location, 
        pricePerNight,
        amenities: { some: { name: amenities }}
      },
      include: { amenities: true }        
  })} else {
    return await prisma.property.findMany({
      where: {
        location, 
        pricePerNight
      },       
  })};
};

export default getProperties;