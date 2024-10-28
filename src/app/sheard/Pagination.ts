import { IProducts } from "./Products"

export interface IPagination {
    pageSize: number
    pageNumber: number
    pageCount: number
    data: IProducts[]
  }