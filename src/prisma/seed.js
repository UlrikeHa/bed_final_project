import { PrismaClient } from "@prisma/client";
import bookingData from "../data/bookings.json" assert { type: "json" };
import userData from "../data/users.json" assert { type: "json" };
import hostData from "../data/hosts.json" assert { type: "json" };
import proprtyData from "../data/properties.json" assert { type: "json" };
import amenityData from "../data/amenities.json" assert { type: "json" };
import reviewData from "../data/reviews.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
    const { bookings } = bookingData;
    const { users } = userData;
    const { hosts } = hostData;
    const { properties } = proprtyData;
    const { amenities } = amenityData;
    const { reviews } = reviewData;

    for (const host of hosts) {
        await prisma.host.upsert({
            where: { id: host.id },
            update: {},
            create: host,
        });
    }

    for (const user of users) {
        await prisma.user.upsert({
            where: { id: user.id },
            update: {},
            create: user,
        });
    }
      
    for (const amenity of amenities) {
        await prisma.amenity.upsert({
            where: { id: amenity.id },
            update: {},
            create: amenity,
        });
    }

    for (const property of properties) {
        await prisma.property.upsert({
            where: { id: property.id },
            update: {},
            create: property,            
        });
    }

    for (const booking of bookings) {
        await prisma.booking.upsert({
          where: { id: booking.id },
          update: {},
          create: booking,
        });
    }
      
    for (const review of reviews) {
        await prisma.review.upsert({
          where: { id: review.id },
          update: {},
          create: review,
        });
    }    
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });