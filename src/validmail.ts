export const validmail = (email:string) => {
    if(!email.includes("@") || email.includes(" ") || email.endsWith("."))return false;
    const dom = email.substring(email.lastIndexOf("@"));
    if(!dom.includes("."))return false;
    if(email.substring(0, email.lastIndexOf("@")).length === 0)return false;
    return true;
}