import {stream} from "m2"

export default {
    model1: ({obtain}) =>
        stream((emt, {hook, sweep}) => {
            emt([]);
            const model3Hook = obtain("@model3").at(()=>{});
            sweep.add(model3Hook);
            hook.add(() => {
                const model2Hook = obtain("@model2").at(()=>{});
                sweep.add(model2Hook);
                model2Hook({});
                model3Hook({});
                emt([]);
            });
        }),
    model2: () =>
        stream((emt, {hook}) => {
            emt([]);
            hook.add(({action}) => {
                document.querySelector(".content").innerHTML += "model2 handler ";
                emt([]);
            });
        }),
    model3: () =>
        stream((emt, {hook}) => {
            emt([]);
            hook.add(() => {
                console.log("here");
                document.querySelector(".content").innerHTML += "model3 handler ";
                emt([]);
            });
        }),
}