import { PrismaClient } from "@prisma/client";

// get all hosts. filter by name is possible

const getHosts = async (name) => {
  const prisma = new PrismaClient();
  return await prisma.host.findMany({
    where: {
      name
    }
  })
};

export default getHosts;