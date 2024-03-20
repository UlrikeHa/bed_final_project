import { PrismaClient } from "@prisma/client";

// get all bookings. filter by userId is possible

const getBookings = async (userId) => {
  const prisma = new PrismaClient();
  return await prisma.booking.findMany({
    where: {
      userId
    }
  })
};

export default getBookings;