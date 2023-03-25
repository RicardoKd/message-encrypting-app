/**
 * Interface to model the Message Schema for TypeScript
 * @param _id:number
 * @param text:string
 * @param ownerId:number
 * @param encryptionType:string
 */
export interface IMessage {
  _id: number;
  text: string;
  ownerId: number;
  encryptionType: string;
}
