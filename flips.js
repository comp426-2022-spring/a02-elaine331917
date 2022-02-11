import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
const num = args.number || 1
const flips = coinFlips(num)
console.log(flips)
console.log(countFlips(flips))