"use strict";
const five_by_five = (() => {
    function render() {
        function board(o) {
            const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    let rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "x", `${i * 3.5551 + 0.0512}`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "y", `${j * 3.5551 + 0.0512}`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "width", `3.5554`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "height", `3.5554`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "fill", i === 2 && j === 2 && o.orange ? "#f95" : "none");
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "stroke", `#000`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "stroke-linecap", `square`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "stroke-width", `.099263`);
                    rect.setAttributeNS('http://www.w3.org/2000/svg', "style", `paint-order:stroke fill markers`);
                    g.appendChild(rect);
                }
            }
            return g;
        }
        function circle(o) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.setAttributeNS('http://www.w3.org/2000/svg', "d", `m${o.x * 3.555 + 2.868} ${o.y * 3.5555 + 1.863}a1.0423 1.0423 0 0 1-1.066 1.0097 1.0423 1.0423 0 0 1-1.0179-1.0581 1.0423 1.0423 0 0 1 1.0502-1.0261 1.0423 1.0423 0 0 1 1.0342 1.0422`);
            path.setAttributeNS('http://www.w3.org/2000/svg', "stroke-width", ".298");
            path.setAttributeNS('http://www.w3.org/2000/svg', "fill", { none: "none", black: "#000" }[o.fill]);
            path.setAttributeNS('http://www.w3.org/2000/svg', "stroke", "#000");
            if (o.style === "dotted") {
                path.setAttributeNS('http://www.w3.org/2000/svg', "stroke-dasharray", "0.298, 0.596");
            }
            path.setAttributeNS('http://www.w3.org/2000/svg', "stroke-linecap", "square");
            path.setAttributeNS('http://www.w3.org/2000/svg', "style", `paint-order:stroke fill markers`);
            return path;
        }
        function line(o) {
            const d = {
                右: "m17.154 8.9391h-5.7573",
                左: "m6.484 8.9391h-5.7573",
                下: "m8.934 11.260v5.7573",
                上: "m8.934 0.590v5.7573",
                左上: "m6.364  6.430-5.5338-5.5338",
                右下: "m17.044 17.110-5.5338-5.5338",
                左下: "m6.364  11.580-5.5338 5.5338",
                右上: "m17.044 0.900-5.5338 5.5338"
            }[o.dir];
            const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.setAttributeNS('http://www.w3.org/2000/svg', "d", d);
            path.setAttributeNS('http://www.w3.org/2000/svg', "stroke-width", ".298");
            path.setAttributeNS('http://www.w3.org/2000/svg', "fill", "none");
            path.setAttributeNS('http://www.w3.org/2000/svg', "stroke", "#000");
            if (o.style === "dotted") {
                path.setAttributeNS('http://www.w3.org/2000/svg', "stroke-dasharray", "0.894, 0.298");
            }
            return path;
        }
        function 兵() {
            return `<path d="m8.786 7.742c0.0424 0.33333 0.0352 0.61939-4e-3 0.86622l-0.36958 0.23134 0.0499 0.0581 0.27498-0.0734c-0.2689 1.0207-1.1397 1.2375-1.1397 1.2375l2e-3 0.12887c0.83949-0.21046 1.2416-0.89048 1.4328-1.4452l0.76842-0.20517-0.36586-0.34085-0.30126 0.18857c0.0577-0.25368 0.0684-0.4297 0.0684-0.4297zm-0.64019 0.23284c0.19123 0.8231-0.29934 1.3137-0.29934 1.3137s0.079 0.0124 0.16633 0.0166c0.29695-0.31031 0.61517-1.2056 0.61517-1.2056zm0.91879 1.1768s0.59225 0.53914 0.949 0.98625c0.12786-0.13479 0.26137-0.29519 0.26137-0.29519s-0.57615-0.46567-1.2104-0.69106z"/>`;
        }
        function 将() {
            return `<path d="m8.661 7.430c-0.016 0.24765-0.055 0.4706-0.10951 0.67084-0.23827 0.0792-0.4947 0.14928-0.69307 0.16249l0.21197 0.20369 0.39193-0.0926c-0.33796 0.89059-0.97189 1.2329-0.97189 1.2329l2e-3 0.0587c0.49575-0.16969 0.98042-0.86536 1.2742-1.3634l0.73-0.17239-0.26605-0.29105s-0.1099 0.0487-0.26944 0.11207c0.0529-0.10142 0.0894-0.17528 0.0894-0.17528l-0.38905-0.34606zm0.36298 1.1151c-0.0514 0.0758-0.0514 0.0674-0.0514 0.0674 0.57035 0.28477 0.59779 0.33005 1.189 0.80651l0.24102-0.36585s-1.2704-0.50802-1.3785-0.50802zm-0.27604 0.0425c0.0212 0.28309 0.0185 0.51958 3e-3 0.71628-0.18617 0.0778-0.40828 0.14574-0.65648 0.17176 0.0823 0.0352 0.21166 0.19399 0.21166 0.19399l0.42066-0.15654c-0.0671 0.44929-0.20272 0.62093-0.20272 0.62093l0.40736 0.31595v-1.0131l0.6387-0.23762-0.23517-0.23517s-0.15063 0.12735-0.40353 0.25635v-0.44162z"/>`;
        }
        function 巫() {
            return `<path d="m8.787 7.631c0.0286 0.26239 0.0362 0.49603 0.0288 0.7067-0.29944 0.11522-0.57761 0.21837-0.57761 0.21837l0.0666 0.0749 0.501-0.11865c-0.0172 0.20923-0.0505 0.39302-0.0966 0.55229l-0.12834 0.0439 5e-3 0.0588 0.0918-7e-3c-0.32462 0.95389-1.099 0.99243-1.099 0.99243l0.0206 0.0617c0.71569-0.10285 1.1115-0.57595 1.3307-1.0726l0.82568-0.0601-0.18952-0.1677 0.31743-0.65754s-0.1583-0.14016-0.30073-0.24464c-0.0258 0.0257-0.19653 0.0991-0.40491 0.18303 0.0247-0.20946 0.0239-0.34798 0.0239-0.34798zm0.74905 0.7083-0.0809 0.4761-4e-3 -4e-3 -0.44918 0.15334c0.0673-0.18676 0.11084-0.36891 0.14058-0.53229zm-1.5346 0.058c-0.0447 0.0115-0.0206 6e-3 -0.0447 0.0114 0.32769 0.61173 0.35702 0.98562 0.35702 0.98562l0.21667-0.18953s-0.29218-0.6486-0.52899-0.80748zm1.0642 0.77863s0.59226 0.53915 0.94901 0.98625c0.12784-0.13478 0.26135-0.29519 0.26135-0.29519s-0.57612-0.46567-1.2104-0.69106z"/>`;
        }
        function 皇() {
            return `<path d="m8.590 7.490c0.0326 0.0851 0.0787 0.37451 0.12153 0.72478-0.12849 0.0604-0.25643 0.11353-0.37725 0.1642 0.0173 0.027 0.0494 0.0536 0.0781 0.087l0.31893-0.0852c0.0101 0.0904 0.0196 0.18374 0.0287 0.27786-0.13904 0.0313-0.27817 0.0605-0.41396 0.0881-0.0908-0.20043-0.21459-0.43574-0.37937-0.662 0 0 0.0639 0.32673 0.12717 0.71202-0.36062 0.0699-0.6369 0.11706-0.6369 0.11706 0.0747 0.0806 0.0867 0.0879 0.20453 0.23932 0.15847-0.0443 0.31499-0.0854 0.46897-0.12419 0.0349 0.22955 0.0656 0.46176 0.0793 0.64679 0.21487-0.24692 0.32423-0.43705 0.32423-0.43705s-0.0334-0.11464-0.0998-0.28423c0.11915-0.0282 0.23294-0.0535 0.34606-0.0785 0.0132 0.15703 0.0241 0.31169 0.0315 0.45641l-0.33435 0.13738-8e-3 0.0737 0.34979-0.0434c8e-3 0.26233 3e-3 0.47258-0.0275 0.56165l0.22092 0.30041s3e-3 -0.42974 7e-3 -0.88697l0.58432-0.0725-0.17644-0.14856c0.0579-0.0719 0.12784-0.3072 0.18836-0.54729 0.49564-0.0908 0.81715-0.13376 0.81715-0.13376l-0.42469-0.3566-0.31275 0.17208c-2e-3 4.8e-4 -4e-3 2e-3 -4e-3 2e-3 0.0356-0.16062 0.0598-0.28222 0.0598-0.28222l-0.36585-0.34085c-0.10505 0.10476-0.22073 0.19209-0.34096 0.26774 3e-3 -0.11854 6e-3 -0.2292 0.0104-0.32307-0.13526-0.0718-0.24454-0.0989-0.46462-0.2223zm0.76172 0.72511c4e-3 0.10287 6e-3 0.20082 5e-3 0.29264-0.0994 0.029-0.20894 0.0581-0.3252 0.0867 2e-3 -0.10233 4e-3 -0.19856 5e-3 -0.29552zm-4e-3 0.54324c-0.01 0.15985-0.0248 0.2943-0.0402 0.39491l-0.0197-0.0165-0.26572 0.10918c2e-3 -0.13856 4e-3 -0.28015 6e-3 -0.423 0.11182-0.0234 0.21703-0.0447 0.31924-0.0647z"/>`;
        }
        function 車() {
            return `<path d="m9.520  7.660-1.2053 0.48301 5e-3 0.0834 1.1525-0.17994c-0.0183 0.0794-0.0474 0.18391-0.0786 0.28891l-0.0167-0.0155c-0.30882 0.30793-0.70825 0.46767-1.0508 0.61136 0.0173 0.027 0.0493 0.0535 0.078 0.087l0.34883-0.0931c0.0259 0.09 0.0408 0.1827 0.0485 0.27444-0.15499 0.0353-0.31157 0.0684-0.46366 0.0994-0.0607-0.13395-0.13532-0.28232-0.22846-0.43503 0.0347-0.20644 0.10639-0.66628 0.1046-0.9439-0.22195 0.67165-0.47036 0.92303-0.49387 0.95242-0.0171 0.0214 0.1856 0.0643 0.29785 0.0862 0.0211 0.11647 0.043 0.23927 0.0678 0.39033-0.36067 0.0699-0.6369 0.11706-0.6369 0.11706 0.0747 0.0806 0.0867 0.0878 0.20453 0.23932 0.15846-0.0443 0.31498-0.0853 0.46897-0.12418 0.0348 0.22954 0.0656 0.46175 0.0793 0.64678 0.21487-0.24691 0.32424-0.43704 0.32424-0.43704s-0.0334-0.11465-0.0998-0.28424c0.13193-0.0312 0.25684-0.0588 0.38128-0.086-6e-3 0.21267-0.0429 0.39233-0.0662 0.48962l-0.27188 0.11163-8e-3 0.0739 1.1352-0.14079-0.17644-0.14856c0.0579-0.0719 0.12795-0.30719 0.18846-0.54729 0.49558-0.0908 0.81706-0.13376 0.81706-0.13376l-0.42471-0.3566-0.31275 0.17208c-2e-3 6.8e-4 -4e-3 8.7e-4 -4e-3 2e-3 0.0356-0.16054 0.0597-0.28211 0.0597-0.28211l-0.21218-0.19771 0.34723-0.47983zm-0.17558 1.1074c4e-3 0.10287 6e-3 0.20082 5e-3 0.29264-0.0954 0.0279-0.20031 0.0559-0.31148 0.0833 4e-3 -0.0426 6e-3 -0.0868 8e-3 -0.13355-0.0957-0.0507-0.13832-0.0745-0.20166-0.10919zm-4e-3 0.54324c-0.01 0.15985-0.0248 0.29429-0.0402 0.39491l-0.0197-0.0165-0.45631 0.1874c0.0621-0.0903 0.13742-0.24497 0.18345-0.49823 0.1166-0.0244 0.22643-0.0469 0.33267-0.0676z"/>`;
        }
        function cross(o) {
            const style = {
                dotted: `stroke-dasharray="0.894, 0.298"`, solid: ""
            }[o.style];
            return `<path d="m${3.555 * o.x + 0.78} ${3.555 * o.y + 0.78} 2.1091 2.1091" fill="none" stroke="#000" ${style} stroke-width=".298"/>
            <path d="m${3.555 * o.x + 2.89} ${3.555 * o.y + 0.78}-2.1091 2.1091" fill="none" stroke="#000" ${style} stroke-width=".298"/>
            `;
        }
        const input = document.getElementById("board_state").value;
        const result = document.getElementById("result");
        result.innerHTML = "";
        if (input === "0") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.innerHTML += 兵();
        }
        else if (input === "1") {
            result.appendChild(board({ orange: true }));
            result.appendChild(circle({ style: "solid", x: 1, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.innerHTML += 将();
        }
        else if (input === "2") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(line({ style: "solid", dir: "右" }));
            result.appendChild(line({ style: "solid", dir: "左" }));
            result.innerHTML += 巫();
        }
        else if (input === "3") {
            result.appendChild(board({ orange: true }));
            result.appendChild(line({ style: "dotted", dir: "右上" }));
            result.appendChild(line({ style: "dotted", dir: "左下" }));
            result.appendChild(line({ style: "dotted", dir: "右下" }));
            result.appendChild(line({ style: "dotted", dir: "左上" }));
            result.appendChild(line({ style: "dotted", dir: "上" }));
            result.appendChild(line({ style: "dotted", dir: "下" }));
            result.appendChild(line({ style: "dotted", dir: "右" }));
            result.appendChild(line({ style: "dotted", dir: "左" }));
            result.innerHTML += 巫();
        }
        else if (input === "4") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 0, y: 2, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 4, y: 2, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 0, y: 3, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 4, y: 3, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 0, y: 0, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 0, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 0, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 0, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 4, y: 0, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 4, y: 1, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 0, y: 1, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 4, y: 4, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 0, y: 4, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 4, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 4, fill: "black" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 4, fill: "black" }));
            result.innerHTML += 皇();
        }
        else if (input === "5") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "dotted", x: 2, y: 0, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 2, y: 4, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 4, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 0, y: 2, fill: "none" }));
            result.innerHTML += 車();
        }
        else if (input === "6") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 2, fill: "none" }));
            result.innerHTML += `
        ${車()}
        ${cross({ style: "dotted", x: 0, y: 2 })}
        ${cross({ style: "dotted", x: 4, y: 2 })}
        ${cross({ style: "dotted", x: 2, y: 0 })}
        ${cross({ style: "dotted", x: 2, y: 4 })}
        `;
        }
        else if (input === "7") {
            result.appendChild(board({ orange: true }));
            result.appendChild(line({ style: "dotted", dir: "右上" }));
            result.appendChild(line({ style: "solid", dir: "左下" }));
            result.appendChild(line({ style: "solid", dir: "右下" }));
            result.appendChild(line({ style: "dotted", dir: "左上" }));
            result.appendChild(line({ style: "dotted", dir: "上" }));
            result.appendChild(line({ style: "solid", dir: "下" }));
            result.appendChild(line({ style: "solid", dir: "右" }));
            result.appendChild(line({ style: "solid", dir: "左" }));
            result.innerHTML += `
        ${cross({ style: "solid", x: 0, y: 3 })}
        ${cross({ style: "dotted", x: 1, y: 0 })}
        ${cross({ style: "dotted", x: 3, y: 0 })}
        ${cross({ style: "solid", x: 4, y: 3 })} `;
        }
        create_download();
    }
    function create_download() {
        var svg_source = document.getElementById('res').innerHTML;
        var svg_data_uri = 'data:image/svg+xml;base64,' + btoa(svg_source);
        document.getElementById("download").innerHTML = "<a href='" + svg_data_uri + `' download><img class="btn" src="download.png" width="80"></a>`;
    }
    return { render };
})();
