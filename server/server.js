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

    for(let i=0;i<parseInt(angkamod);i++){
        if(i%2!=0){
            s+=i+",";
        }
    }

    res.json({ hasil:s});
});

app.get("/api/genPrima/:val", (req, res) => {
    let s="";


    let   j, flag;
    let angkamod=req.params.val;
    for (let i = 0; i <= parseInt(angkamod); i++) {
        if (i == 1 || i == 0)
            continue;

        // flag variable to tell
        // if i is prime or not
        flag = 1;

        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }


        if (flag == 1)
            s+=i+", ";

    }

    res.json({ hasil:s });
});

app.get("/api/genSegitiga/:val", (req, res) => {
   // let angStr="";

    let s="";
    let angStr=req.params.val;

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