import { PrismaClient } from '@prisma/client/extension'

const  action = async () => {
const prisma = new PrismaClient()
const user = await prisma.user.create({data:{name:"kartik"}})
console.log(user)
  
}

export default action
