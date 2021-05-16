"use strict";
const main = (() => {
    function piece(color, profession, column, row, degree) {
        const TOP = {
            A: 0, E: 1, I: 2, U: 3, O: 4, Y: 5, AI: 6, AU: 7, IA: 8
        }[row];
        const LEFT = {
            P: 8, M: 7, C: 6, X: 5, Z: 4, T: 3, N: 2, L: 1, K: 0
        }[column];
        const rot_center = {
            x: (GLOBAL_OFFSET_TABLE[profession][0].x + GLOBAL_OFFSET_TABLE[profession][180].x) / 2,
            y: (GLOBAL_OFFSET_TABLE[profession][0].y + GLOBAL_OFFSET_TABLE[profession][180].y) / 2
        };
        const offsets = GLOBAL_OFFSET_TABLE[profession][0];
        const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
        g.setAttribute('transform', `translate(${LEFT * 17.55} ${TOP * 17.55}) rotate(${degree} ${rot_center.x} ${rot_center.y}) translate(${offsets.x} ${offsets.y})`);
        g.appendChild(piece_path(color, profession));
        return g;
    }
    function piece_path(color, profession) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        path.setAttribute('fill', { 黒: '', 赤: '#d43c00', 白: '#fff' }[color]);
        path.setAttribute('d', GLOBAL_PIECE_PATH_TABLE[profession]);
        return path;
    }
    function main_g(input, o) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
        g.setAttribute("transform", "translate(-41.069 -78.153)");
        const tamnua_ = o.tamnua_background ? '#87aade' : 'none';
        const tamhue_ = o.tamhue_background ? '#ffb380' : 'none';
        function square_inv(column, row, fill) {
            const LEFT = {
                P: 8, M: 7, C: 6, X: 5, Z: 4, T: 3, N: 2, L: 1, K: 0
            }[column];
            const x = -17.55 * LEFT - 58.85;
            const TOP = {
                A: 0, E: 1, I: 2, U: 3, O: 4, Y: 5, AI: 6, AU: 7, IA: 8
            }[row];
            const y = -17.55 * TOP - 105.57;
            return `<rect transform="scale(-1)" x="${x}" y="${y}" width="17.561" height="17.561" fill="${fill}" stroke="#000" stroke-linecap="round" stroke-miterlimit="3.92" stroke-width=".43902" style="paint-order:fill markers stroke" />`;
        }
        for (let i = 0; i < 9; i++) {
            const clms = ['P', 'M', 'C', 'X', 'Z', 'T', 'N', 'L', 'K'];
            const column = clms[i];
            for (let j = 0; j < 9; j++) {
                const rows = [
                    'A', 'E', 'I', 'U', 'O', 'Y', 'AI', 'AU', 'IA'
                ];
                const row = rows[j];
                if (["ZI", "ZU", "NO", "TO", "XO", "CO", "ZY", "ZAI"].includes(`${column}${row}`)) {
                    g.innerHTML += square_inv(column, row, tamnua_);
                }
                else if (["NI", "CI", "TU", "XU", "TY", "XY", "NAI", "CAI"].includes(`${column}${row}`)) {
                    g.innerHTML += square_inv(column, row, tamhue_);
                }
                else if ("ZO" === `${column}${row}`) {
                    switch (o.tamzo_color) {
                        case "white":
                            g.innerHTML += square_inv(column, row, "none");
                            break;
                        case "green":
                            g.innerHTML += square_inv(column, row, "#005242");
                            break;
                        case "orange":
                            g.innerHTML += square_inv(column, row, '#ffb380');
                            break;
                        case "blue":
                            g.innerHTML += square_inv(column, row, '#87aade');
                            break;
                    }
                }
                else {
                    g.innerHTML += square_inv(column, row, "none");
                }
            }
        }
        if (o.tamhue_slash) {
            // NI から CAI に向かっての皇処斜線
            g.innerHTML += `<path d="m76.389 123.12 87.762 87.74" fill="none" stroke="#000" stroke-width=".5" />`;
            // CI から NAI に向かっての皇処斜線
            g.innerHTML += `<path d="m164.14 123.12-87.74 87.74" fill="none" stroke="#000" stroke-width=".5" />`;
        }
        for (let i = 0; i < input.length; i++) {
            g.appendChild(piece(...(input[i])));
        }
        if (o.water_edge) {
            // ZAI の水端マーク1
            g.innerHTML += `<path d="m128.05 206.49v3.449h-3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // ZAI の水端マーク2
            g.innerHTML += `<path d="m115.94 209.94h-3.449v-3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // ZI の水端マーク1
            g.innerHTML += `<path d="m112.49 127.55v-3.449h3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // ZI の水端マーク2
            g.innerHTML += `<path d="m124.6 124.1h3.449v3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // NO の水端マーク1
            g.innerHTML += `<path d="m80.799 174.8h-3.449v-3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // NO の水端マーク2
            g.innerHTML += `<path d="m77.35 162.69v-3.449h3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // CO の水端マーク1
            g.innerHTML += `<path d="m159.74 159.24h3.449v3.449" fill="none" stroke="#000" stroke-width=".5" />`;
            // CO の水端マーク2
            g.innerHTML += `<path d="m163.19 171.35v3.449h-3.449" fill="none" stroke="#000" stroke-width=".5" />`;
        }
        if (o.coordinate) {
            g.innerHTML += `<text x="47.609035" y="83.719559" fill="#000000" font-family="'Courier New'" font-size="9.1718px" font-weight="bold" letter-spacing="11.973px" stroke-width=".2293" word-spacing="0px"  style="line-height:1.25" xml:space="preserve"> <tspan x="47.609035" y="83.719559" font-family="'Courier New'" font-weight="bold" letter-spacing="11.973px" stroke-width=".2293">KLNTZXCMP</tspan></text>`;
            g.innerHTML += `<text x="203.21265" y="100.02361" fill="#000000" font-family="'Courier New'" font-size="9.1718px" font-weight="bold" letter-spacing="0px" stroke-width=".2293" word-spacing="0px" style="line-height:1.9" xml:space="preserve">
        <tspan x="203.21265" y="100.02361" style="line-height:1.9">A</tspan> <tspan x="203.21265" y="117.45004" style="line-height:1.9">E</tspan> <tspan x="203.21265" y="134.87645" style="line-height:1.9">I</tspan> <tspan x="203.21265" y="152.30287" style="line-height:1.9">U</tspan> <tspan x="203.21265" y="169.72929" style="line-height:1.9">O</tspan> <tspan x="203.21265" y="187.15572" style="line-height:1.9">Y</tspan> <tspan x="203.21265" y="204.58212" style="line-height:1.9">AI</tspan> <tspan x="203.21265" y="222.00854" style="line-height:1.9">AU</tspan> <tspan x="203.21265" y="239.43497" style="line-height:1.9">IA</tspan></text>`;
        }
        return g;
    }
    function render() {
        const input = document.getElementById("board_state").value
            .split("\n")
            .filter(line => line.trim() !== "")
            .flatMap(line => {
            const [color, profession, column, row, degree_str] = line.split(",").map(e => e.trim());
            const degree_num = Number(degree_str);
            if (isColor(color)
                && isProfession(profession)
                && isColumn(column)
                && isRow(row)
                && !Number.isNaN(degree_num)) {
                return [
                    [color, profession, column, row, degree_num]
                ];
            }
            let msg = [];
            if (!isColor(color)) {
                msg.push(`invalid color ${color}`);
            }
            if (!isProfession(profession)) {
                msg.push(`invalid profession ${profession}`);
            }
            if (!isColumn(column)) {
                msg.push(`invalid column ${column}`);
            }
            if (!isRow(row)) {
                msg.push(`invalid row ${row}`);
            }
            if (Number.isNaN(degree_num)) {
                msg.push(`invalid degree ${degree_str}`);
            }
            alert(`${msg.join(", ")} detected. Skipping.`);
            return [];
        });
        const g = main_g(input, {
            water_edge: document.getElementById("water_edge").checked,
            coordinate: document.getElementById("coordinate").checked,
            tamhue_background: document.getElementById("tamhue_background").checked,
            tamnua_background: document.getElementById("tamnua_background").checked,
            tamhue_slash: document.getElementById("tamhue_slash").checked,
            tamzo_color: document.getElementById("tamzo_green").checked ? "green" :
                document.getElementById("tamzo_orange").checked ? "orange" :
                    document.getElementById("tamzo_blue").checked ? "blue" :
                        document.getElementById("tamzo_white").checked ? "white" : null
        });
        document.getElementById("result").innerHTML = ""; // clear
        document.getElementById("result").appendChild(g);
        create_download();
    }
    function create_download() {
        var svg_source = document.getElementById('res').innerHTML;
        var svg_data_uri = 'data:image/svg+xml;base64,' + btoa(svg_source);
        document.getElementById("download").innerHTML = "<a href='" + svg_data_uri + `' download><img class="btn" src="download.png" width="80"></a>`;
    }
    return { render };
})();
