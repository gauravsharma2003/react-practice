export default function Sattu(){

    let a=10;
    let b='gauri';
    let c=false;
    let d=true;

    //react can only understand false true null but can not print so we use JSON>stringfy 
    return(
        <div>
            <h1>a-{a}</h1>
            <h1>b-{b}</h1>
            <h1>{c}</h1>
            <h1>{d}</h1>
            <h1>c-{JSON.stringify(c)}</h1> 
            <h1>d-{JSON.stringify(d)}</h1>

        </div>
    )
}

