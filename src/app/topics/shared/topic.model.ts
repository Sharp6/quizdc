import { IQuestion } from './../../questions/index'

export interface ITopic {
  $key?: string;
  name: string;
  imageUrl?: string;
  questions?: IQuestion[];
  claimedBy?: string
}
