import { FunctionComponent } from 'react'

import classes from './currency-formatter.module.scss'


interface Props {
  amount: number
}

export const CurrencyFormatter: FunctionComponent<Props> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

  return <span className={classes.currency}>{formattedAmount}</span>
}
