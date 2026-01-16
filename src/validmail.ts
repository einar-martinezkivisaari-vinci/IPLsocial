export const validmail = (email:string) => {
    if(!email.includes("@"))return false;
    const dom = email.substring(email.lastIndexOf("@"));
    if(!dom.includes("."))return false;
    return true;
}