export const validmail = (email:string) => {
    if(!email.includes("@") || email.includes(" "))return false;
    const dom = email.substring(email.lastIndexOf("@"));
    if(!dom.includes(".") || dom.endsWith("."))return false;
    if(email.substring(0, email.lastIndexOf("@")).length === 0)return false;
    return true;
}