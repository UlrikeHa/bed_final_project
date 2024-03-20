import { PrismaClient } from "@prisma/client";

// get all reviews

const getReviews = async () => {
  const prisma = new PrismaClient();
  const reviews = await prisma.review.findMany();

  return reviews;
};

export default getReviews;