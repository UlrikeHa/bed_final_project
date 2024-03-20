import { PrismaClient } from "@prisma/client";

// get all amenities

const getAmenities = async () => {
  const prisma = new PrismaClient();
  const amenities = await prisma.amenity.findMany();

  return amenities;
};

export default getAmenities;