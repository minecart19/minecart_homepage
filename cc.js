let down = document.getElementById("download");
let img = document.getElementById("img");
let code_cor = false;

function check() {
    let getc = document.getElementById("code_input").value;
    let corc = keyword.match(name);

    if (getc === corc) {
        down.style.display = "block"
        document.getElementById("wrong_code").style.opacity = 1;
        document.getElementById("wrong_code").style.display = 'block';
        document.getElementById("wrong_code").innerHTML = "코드가 일치합니다!"
        document.getElementById("wrong_code").style.color = "green";
        code_cor = true;
        down.style.display = "block";
    }
    else {
        document.getElementById("wrong_code").style.opacity = 1;
        document.getElementById("wrong_code").style.display = 'block';
        document.getElementById("wrong_code").innerHTML = "코드가 일치하지 않습니다."
        document.getElementById("wrong_code").style.color = "red";
        document.getElementById("code_input").value = null;
    }
}

function btd(n) {
    let r = 0;
    let g = 1;
    for (let i = 0; i < 8; i++, g *= 2) {
        r += (parseInt(n[7 - i]) << i);
    }
    return r;
}

function deco(str) {
    let n = str.split(" ");
    let re = "";
    for (let i = 0; i < n.length; i += 2) {
        let l = n[i] + n[i + 1];
        let dec = btd(l);
        re += String.fromCharCode(dec);
    }
    return re;
}

let keyword = {
    k1: "mtt",
    k2: "n1ca",
    k3: "c1ca",
    match: function (gc) {
        let pgc;

        if (gc == this.k1) {
            pgc = true;
        }
        else if (gc == this.k2) {
            pgc = deco("0111 0111 0110 1011 0010 0001 0110 1101 0011 0010 0011 0011");
        }
        else if (gc == this.k3) {
            pgc = deco("0011 0001 0111 0011 0100 0101 0110 1101 0100 0000 0011 0101");
        }

        return pgc;
    }
}