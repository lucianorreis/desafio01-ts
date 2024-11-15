export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (entrance: number): void => {
    if (this.validateStatus()) {
      this.balance += entrance 
    }
  }

  withdraw = (entrance: number): void => {
    if (this.validateStatus() && this.balance > entrance) {
      this.balance -= entrance
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
