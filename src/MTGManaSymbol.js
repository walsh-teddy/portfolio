// Symbol files from: https://mtg.fandom.com/wiki/Category:Mana_symbols
let rootFolder = "/../media/mtg/";

window.onload = () => {
    let paragraphs = document.querySelectorAll("*");

    for (let i = 0; i < paragraphs.length; i ++) {
        // Cache the initial text
        let text = paragraphs[i].innerHTML;

        // Reaplce the placeholders with the mana symbols

        // Colored Manna
        text = text.replaceAll("[w]", `<img src=\"${rootFolder}w.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[u]", `<img src=\"${rootFolder}u.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[b]", `<img src=\"${rootFolder}b.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[r]", `<img src=\"${rootFolder}r.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[g]", `<img src=\"${rootFolder}g.svg\" class=\"mannaSymbol\">`);

        // Hybrid Manna ("(wu)" and "(uw)" should both work)
        text = text.replaceAll("[wu]", `<img src=\"${rootFolder}WU.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[uw]", `<img src=\"${rootFolder}WU.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[wb]", `<img src=\"${rootFolder}WB.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[bw]", `<img src=\"${rootFolder}WB.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[wr]", `<img src=\"${rootFolder}RW.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[rw]", `<img src=\"${rootFolder}RW.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[wg]", `<img src=\"${rootFolder}GW.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[gw]", `<img src=\"${rootFolder}GW.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[ub]", `<img src=\"${rootFolder}UB.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[bu]", `<img src=\"${rootFolder}UB.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[ur]", `<img src=\"${rootFolder}UR.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[ru]", `<img src=\"${rootFolder}UR.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[ug]", `<img src=\"${rootFolder}GU.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[gu]", `<img src=\"${rootFolder}GU.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[br]", `<img src=\"${rootFolder}BR.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[rb]", `<img src=\"${rootFolder}BR.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[bg]", `<img src=\"${rootFolder}BG.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[gb]", `<img src=\"${rootFolder}BG.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[rg]", `<img src=\"${rootFolder}RG.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[gr]", `<img src=\"${rootFolder}RG.svg\" class=\"mannaSymbol\">`);

        // Generic Manna (numbers)
        text = text.replaceAll("[0]", `<img src=\"${rootFolder}0.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[1]", `<img src=\"${rootFolder}1.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[2]", `<img src=\"${rootFolder}2.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[3]", `<img src=\"${rootFolder}3.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[4]", `<img src=\"${rootFolder}4.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[5]", `<img src=\"${rootFolder}5.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[6]", `<img src=\"${rootFolder}6.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[7]", `<img src=\"${rootFolder}7.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[8]", `<img src=\"${rootFolder}8.svg\" class=\"mannaSymbol\">`);
        text = text.replaceAll("[9]", `<img src=\"${rootFolder}9.svg\" class=\"mannaSymbol\">`);


        // Update the HTML
        paragraphs[i].innerHTML = text;
    }
}