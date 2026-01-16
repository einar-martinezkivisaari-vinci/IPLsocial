export const validmail = (email:string) => {
    if(!email.includes("@") || email.includes(" ") || email.endsWith(".") || !email.substring(email.lastIndexOf("@")).includes(".") || email.substring(0, email.lastIndexOf("@")).length === 0)return false;
    return true;
}