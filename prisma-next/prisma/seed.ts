import { PrismaClient } from "@prisma/client"

async function main (){
    const prisma = new PrismaClient()

 await prisma.user.deleteMany()
}
main()