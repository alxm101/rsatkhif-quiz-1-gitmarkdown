export function verifyName(name) {
    return name.trim().length > 0 ? name : "Guest";
}
