import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { question } from 'readline-sync'

const GDH: any = new Date().getTime()
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', GDH)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', GDH)

let start:number = 1

