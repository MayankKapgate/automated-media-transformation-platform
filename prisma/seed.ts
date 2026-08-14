import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@mediaplatform.com' },
    update: {},
    create: {
      email: 'demo@mediaplatform.com',
      name: 'Demo User',
    },
  });

  console.log('Seeded demo user:', demoUser);
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
