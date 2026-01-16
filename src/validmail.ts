export const validmail = (email:string) => {
    if(!email.includes("@"))return false;
    return true;
}