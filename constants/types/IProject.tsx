// Can be class to implement functions
export default interface Project {
    // id: string,
    name: string,
    number: string | number,
    date: string,
    localisation: string,
    leaderName: string,
    leaderPhoneNumber: string,
    note: string,
}

// export function NewProject(name: string, number: string, date: string, localisation: string, leaderName: string, leaderPhoneNumber: string, note: string) {
//     return {name, number, date, localisation, leaderName, leaderPhoneNumber, note}
// }