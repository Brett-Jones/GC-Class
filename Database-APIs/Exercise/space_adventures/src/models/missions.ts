import { ObjectId } from "mongodb";

interface Mission {
  _id?: ObjectId;
  missionName: string;
  astronaut: string;
  status: "Planned" | "Launched" | "Completed";
  successfulLandings: number;
}

export default Mission;











