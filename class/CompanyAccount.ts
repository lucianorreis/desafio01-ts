import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (entrance: number): void => {
    if (this.getStatus()) {
      this.balance += entrance
    }
    
  }
}
