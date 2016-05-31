import * as PiStation from "../../node_modules/pistation-definitions/PiStation.ts";
import {Observable} from 'rxjs/Rx';
import {Module} from "../../app/module";

export class Dummy extends Module {
    static moduleId:string;

    constructor(){
        super('Dummy');

        let dummyFunction = new PiStation.Function('powerControl', [new PiStation.Argument('enabled', 'bool')]);

        this.addFunction(dummyFunction); //register on module
    }


    //powerControl(finishCallback: ()=>void, enabled : boolean) {
    //    //do module shit
    //    console.log('Powercontrol ran with enabled var being ', enabled);
    //    setTimeout(function() {
    //        finishCallback();
    //    }, 5000);
    //    //finishCallback();
    //    //connector433.enable();
    //}



    powerControl(args : PiStation.Argument[]){
        console.log(`Called Dummy Function with arguments ${args}`);

        const dummyFunctionUpdates = Observable //dummy update stream from connector
            .interval(500)
            .timeInterval()
            .take(3);

        return dummyFunctionUpdates;
    }
}