
export function get100letter(str){
    if(str.length > 30){
        return str.split("").slice(0,30).join("")+"...";
    }
    return str;
}