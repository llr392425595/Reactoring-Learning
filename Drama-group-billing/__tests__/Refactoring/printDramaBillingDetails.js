import { statement } from '../../Refactoring/printDramaBillingDetails'

import invoices from '../../Refactoring/data/invoices'
import plays from '../../Refactoring/data/plays'

test('test statement', () => {
  expect(statement(invoices[0], plays)).toBe(`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`);
});
