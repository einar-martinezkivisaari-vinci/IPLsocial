export const validmail = (email:string) => {
    return !(!email.includes("@") || email.includes(" ") || email.endsWith(".") || !email.substring(email.lastIndexOf("@")).includes(".") || email.substring(0, email.lastIndexOf("@")).length === 0);
}