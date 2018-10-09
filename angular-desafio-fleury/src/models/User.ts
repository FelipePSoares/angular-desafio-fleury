import { Objective } from "./Objective";

export class User {
    name:string;
    actualScore:number;
    maxScore:number;
    objectives:Objective[];

    constructor(name:string, actualScore:number, maxScore:number, objectives:Objective[]) {
        this.name = name;
        this.actualScore = actualScore;
        this.maxScore = maxScore;
        this.objectives = objectives;
    }
}