import { PrismaClient } from "@prisma/client";

// get all users. filter by username and/or email is possible

const getUsers = async (username, email) => {
  const prisma = new PrismaClient();
  return await prisma.user.findMany({
    where: {
      username,
      email
    }
  })
};

export default getUsers;