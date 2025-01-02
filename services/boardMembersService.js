import { config } from "../js/config";

const fetchBoardMembersData = async () => {
  const data= (await fetch(`${config.baseURL}/getBoardMembers`)).json();
  return data;
}