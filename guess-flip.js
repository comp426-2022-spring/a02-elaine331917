import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

if (args.call == undefined) {
    console.log('Error: no input.\nUsage: node guess-flip --call=[heads|tails]')
} else if (args.call == 'heads' || args.call == 'tails') {
    console.log(flipACoin(args.call))
} else {
    console.log('Error: invalid input.\nUsage: node guess-flip --call=[heads|tails]')
}
