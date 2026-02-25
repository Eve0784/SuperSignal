//import { signal, effect,computed } from "./signal.js";


// const pippo = signal('pippo ha caldo');
// const pippoLength = computed(()=> pippo().length, [pippo]);

// effect(()=> console.log('è partito effect', pippo(), pippoLength()), [pippo]);

// console.log('Valore dentro il signal', pippo());

// pippo.set('leonardo sente la mancanza di copilot');
// console.log('Valore dentro il signal', pippo());

// pippo.update((value) => value + 'e ha fame');

// console.log('Valore dentro il signal', pippo());

import { MeteoService} from "./meteo-service.js"
import { effect } from "./signal.js";

const mServ = new MeteoService();

effect(()=>console.log("sono l'effect, le temperatures sono cambiate", mServ.tempSignal(), mServ.celsiusSignal()), [mServ.tempSignal, mServ.celsiusSignal])