import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
const flips = coinFlips(args.number || 1)
console.log(flips)
console.log(countFlips(flips))