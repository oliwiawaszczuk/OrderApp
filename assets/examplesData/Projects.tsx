// import Project from "@/constants/types/IProject";

// export const projectsData: Project = [
//     {number: '1', date: '21/10/2025', projectName: "name1", leader: "leader1", localisation: "localisation1"},
//     {number: '2', date: '21/11/2025', projectName: "name2", leader: "leader2", localisation: "localisation2"},
//     {number: '3', date: '22/11/2025', projectName: "name3", leader: "leader3", localisation: "localisation3"},
//     {number: '4', date: '23/12/2025', projectName: "name4", leader: "leader4", localisation: "localisation4"},
//     {number: '5', date: '11/01/2026', projectName: "name5", leader: "leader5", localisation: "localisation5"},
//     {number: '6', date: '04/02/2026', projectName: "name6", leader: "leader6", localisation: "localisation6"},
//     {number: '7', date: '01/03/2026', projectName: "name7", leader: "leader7", localisation: "localisation7"},
//     {number: '8', date: '13/04/2026', projectName: "name8", leader: "leader8", localisation: "localisation8"},
// ];

export interface Project {
    id: string,
    date: string,
    projectName: string,
    leader: string,
    localisation: string,
}

// @ts-ignore
export const projectShortData: Project = [
    {id: '1', date: '21/10/2025', projectName: "name1", leader: "leader1", localisation: "localisation1"},
    {id: '2', date: '21/11/2025', projectName: "name2", leader: "leader2", localisation: "localisation2"},
    {id: '3', date: '22/11/2025', projectName: "name3", leader: "leader3", localisation: "localisation3"},
    {id: '4', date: '23/12/2025', projectName: "name4", leader: "leader4", localisation: "localisation4"},
    {id: '5', date: '11/01/2026', projectName: "name5", leader: "leader5", localisation: "localisation5"},
    {id: '6', date: '04/02/2026', projectName: "name6", leader: "leader6", localisation: "localisation6"},
    {id: '7', date: '01/03/2026', projectName: "name7", leader: "leader7", localisation: "localisation7"},
    {id: '8', date: '13/04/2026', projectName: "name8", leader: "leader8", localisation: "localisation8"},
];