import bcrypt from "bcrypt"

const saltRound : number = 10 ;

const plainText : string = "12345"

async function hashIt(){
    const hasedPassword = await bcrypt.hash( plainText , saltRound )
    console.log(hasedPassword)
}

hashIt()