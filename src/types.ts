export interface ScoreEntry {
  email: string,
  nickname: string,
  time: number
}
export interface Scoreboard {
  [email: string]: ScoreEntry
}