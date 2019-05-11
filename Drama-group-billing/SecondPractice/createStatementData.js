export default function createStatementData (invoice, plays) {

  function playFor (aPerformance) {
    return plays[aPerformance.playID]
  }

  function amountFor (aPerformance) {
    let result = 0

    switch (playFor(aPerformance).type) {
      case 'tragedy':
        result = 40000
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30)
        }
        break
      case 'comedy':
        result = 30000
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20)
        }
        result += 300 * aPerformance.audience
        break
      default:
        throw new Error(`unknown type: ${playFor(perf).type}`)
    }

    return result
  }

  function volumeCreditsFor(aPerformance) {
    let result = Math.max(aPerformance.audience - 30, 0)
    if ('comedy' === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5)
    return result
  }

  function enrichPerformance (aPerformance) {
    let result = Object.assign({}, aPerformance)
    result.play = playFor(aPerformance)
    result.amount = amountFor(aPerformance)
    result.volumeCredits = volumeCreditsFor(aPerformance)

    return result
  }

  function totalAmount() {
    let result = 0
    for (let perf of invoice.performances) {
      result += amountFor(perf)
    }
    return result
  }

  function totalVolumeCredits() {
    let result = 0
    for (let perf of invoice.performances) {
      result += volumeCreditsFor(perf)
    }
    return result
  }

  let result = {}
  result.customer = invoice.customer
  result.totalAmount = totalAmount()
  result.totalVolumeCredits = totalVolumeCredits()
  result.performances = invoice.performances.map(enrichPerformance)

  return result
}
