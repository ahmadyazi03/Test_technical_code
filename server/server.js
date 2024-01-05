const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());


app.get("/api/genGanjil/:val", (req, res) => {
    let s="";

    let angkamod=req.params.val;

    for(let i=0;i<angkamod.length;i++){
        if(i%2==0){
            s+=angkamod.toString().charAt(i);
        }
    }

    res.json({ hasil:s});
});

app.get("/api/genPrima/:val", (req, res) => {
    let s="";

    let angkamod=req.params.val;
    for (let i = 0; i <= angkamod.length; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            s+=i+"";
        }
    }

    res.json({ hasil:s });
});

app.get("/api/genSegitiga/:val", (req, res) => {
   // let angStr="";

    let s="";
    let angStr=req.params.val;
    // for(let i=0;i<angStr.length;i++){
    //     for(let j=0;j<i+1;j++){
    //         if(i==0){
    //             s+=angStr.charAt(j);
    //         }else if(i>j){
    //             s+=angStr.charAt(j);
    //         }else{
    //             s+="0";
    //         }
    //
    //     }
    //     s+="\n";
    // }
    let i=0;
    let addZero=1;
    while(i<angStr.length){
        s+=angStr.charAt(i);

        for(let j=0;j<addZero;j++){
            s+="0";
        }
        s+="\n";
            i++;
        addZero++;
    }

    res.json({ hasil:s });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});