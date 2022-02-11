import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
var flips
args.number == undefined ? flips = coinFlips(1) : flips = coinFlips(args.number)
console.log(flips)
console.log(countFlips(flips))