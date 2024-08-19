// Symbol files from: https://mtg.fandom.com/wiki/Category:Mana_symbols

window.onload = () => {
    let paragraphs = document.querySelectorAll("*");

    for (let i = 0; i < paragraphs.length; i ++) {
        // Cache the initial text
        let text = paragraphs[i].innerHTML;

        // Reaplce the placeholders with the mana symbols

        // Colored Manna
        text = text.replaceAll("[w]", "<img src=\"/media/mtg/w.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[u]", "<img src=\"/media/mtg/u.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[b]", "<img src=\"/media/mtg/b.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[r]", "<img src=\"/media/mtg/r.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[g]", "<img src=\"/media/mtg/g.svg\" class=\"mannaSymbol\">");

        // Hybrid Manna ("(wu)" and "(uw)" should both work)
        text = text.replaceAll("[wu]", "<img src=\"/media/mtg/WU.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[uw]", "<img src=\"/media/mtg/WU.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[wb]", "<img src=\"/media/mtg/WB.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[bw]", "<img src=\"/media/mtg/WB.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[wr]", "<img src=\"/media/mtg/RW.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[rw]", "<img src=\"/media/mtg/RW.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[wg]", "<img src=\"/media/mtg/GW.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[gw]", "<img src=\"/media/mtg/GW.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[ub]", "<img src=\"/media/mtg/UB.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[bu]", "<img src=\"/media/mtg/UB.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[ur]", "<img src=\"/media/mtg/UR.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[ru]", "<img src=\"/media/mtg/UR.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[ug]", "<img src=\"/media/mtg/GU.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[gu]", "<img src=\"/media/mtg/GU.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[br]", "<img src=\"/media/mtg/BR.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[rb]", "<img src=\"/media/mtg/BR.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[bg]", "<img src=\"/media/mtg/BG.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[gb]", "<img src=\"/media/mtg/BG.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[rg]", "<img src=\"/media/mtg/RG.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[gr]", "<img src=\"/media/mtg/RG.svg\" class=\"mannaSymbol\">");

        // Generic Manna (numbers)
        text = text.replaceAll("[0]", "<img src=\"/media/mtg/0.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[1]", "<img src=\"/media/mtg/1.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[2]", "<img src=\"/media/mtg/2.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[3]", "<img src=\"/media/mtg/3.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[4]", "<img src=\"/media/mtg/4.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[5]", "<img src=\"/media/mtg/5.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[6]", "<img src=\"/media/mtg/6.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[7]", "<img src=\"/media/mtg/7.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[8]", "<img src=\"/media/mtg/8.svg\" class=\"mannaSymbol\">");
        text = text.replaceAll("[9]", "<img src=\"/media/mtg/9.svg\" class=\"mannaSymbol\">");


        // Update the HTML
        paragraphs[i].innerHTML = text;
    }
}