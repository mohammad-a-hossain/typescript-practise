import {Player} from './players'
import { IsPlayer } from './interface';


let sakib : IsPlayer // here sakib is implement isPlayer object 
 sakib =new Player('sakib',30,'bangladesh')
console.log(masrafi.playing())
console.log(sakib.playing())

let players:IsPlayer[]=[] //here player is a object type
players.push(masrafi)
players.push(sakib)

console.log('player are '+ players.length + 'using module')