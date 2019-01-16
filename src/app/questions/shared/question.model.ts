import { IAnswer } from './../../answers/index'

export interface IQuestion {
  id: number
  value: string
  answers?: IAnswer[]
}
