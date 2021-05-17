"use strict";
const five_by_five = (() => {
    function render() {
        function board(o) {
            const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    rect.setAttribute("x", `${i * 3.5551 + 0.0512}`);
                    rect.setAttribute("y", `${j * 3.5551 + 0.0512}`);
                    rect.setAttribute("width", `3.5554`);
                    rect.setAttribute("height", `3.5554`);
                    rect.setAttribute("fill", i === 2 && j === 2 && o.orange ? "#f95" : "none");
                    rect.setAttribute("stroke", `#000`);
                    rect.setAttribute("stroke-linecap", `square`);
                    rect.setAttribute("stroke-width", `.099263`);
                    rect.setAttribute("style", `paint-order:stroke fill markers`);
                    g.appendChild(rect);
                }
            }
            return g;
        }
        function circle(o) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.setAttribute("d", `m${o.x * 3.555 + 2.868} ${o.y * 3.5555 + 1.863}a1.0423 1.0423 0 0 1-1.066 1.0097 1.0423 1.0423 0 0 1-1.0179-1.0581 1.0423 1.0423 0 0 1 1.0502-1.0261 1.0423 1.0423 0 0 1 1.0342 1.0422`);
            path.setAttribute("stroke-width", ".298");
            path.setAttribute("fill", { none: "none", black: "#000" }[o.fill]);
            path.setAttribute("stroke", "#000");
            if (o.style === "dotted") {
                path.setAttribute("stroke-dasharray", "0.298, 0.596");
            }
            path.setAttribute("stroke-linecap", "square");
            path.setAttribute("style", `paint-order:stroke fill markers`);
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
            path.setAttribute("d", d);
            path.setAttribute("stroke-width", ".298");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000");
            if (o.style === "dotted") {
                path.setAttribute("stroke-dasharray", "0.894, 0.298");
            }
            return path;
        }
        function piece(profession) {
            const translateX = GLOBAL_OFFSET_TABLE[profession][0].x - 6.675;
            const translateY = GLOBAL_OFFSET_TABLE[profession][0].y - 53.388;
            const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
            g.setAttribute("transform", `scale(0.206) translate(${translateX} ${translateY})`);
            const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.setAttribute("d", GLOBAL_PIECE_PATH_TABLE[profession]);
            g.appendChild(path);
            return g;
        }
        function cross(o) {
            const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
            function get_path(d) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
                path.setAttribute("d", d);
                path.setAttribute("fill", "none");
                path.setAttribute("stroke", "#000");
                path.setAttribute("stroke-width", ".298");
                if (o.style === "dotted") {
                    path.setAttribute("stroke-dasharray", "0.894, 0.298");
                }
                return path;
            }
            g.appendChild(get_path(`m${3.555 * o.x + 0.78} ${3.555 * o.y + 0.78} 2.1091 2.1091`));
            g.appendChild(get_path(`m${3.555 * o.x + 2.89} ${3.555 * o.y + 0.78}-2.1091 2.1091`));
            return g;
        }
        const input = document.getElementById("board_state").value;
        const result = document.getElementById("result");
        result.innerHTML = "";
        if (input === "0") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(piece("兵"));
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
            result.appendChild(piece("将"));
        }
        else if (input === "2") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(line({ style: "solid", dir: "右" }));
            result.appendChild(line({ style: "solid", dir: "左" }));
            result.appendChild(piece("巫"));
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
            result.appendChild(piece("巫"));
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
            result.appendChild(piece("皇"));
        }
        else if (input === "5") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "dotted", x: 2, y: 0, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 2, y: 4, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 4, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "dotted", x: 0, y: 2, fill: "none" }));
            result.appendChild(piece("車"));
        }
        else if (input === "6") {
            result.appendChild(board({ orange: false }));
            result.appendChild(circle({ style: "solid", x: 2, y: 1, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 3, y: 2, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 2, y: 3, fill: "none" }));
            result.appendChild(circle({ style: "solid", x: 1, y: 2, fill: "none" }));
            result.appendChild(cross({ style: "dotted", x: 0, y: 2 }));
            result.appendChild(cross({ style: "dotted", x: 4, y: 2 }));
            result.appendChild(cross({ style: "dotted", x: 2, y: 0 }));
            result.appendChild(cross({ style: "dotted", x: 2, y: 4 }));
            result.appendChild(piece("車"));
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
            result.appendChild(cross({ style: "solid", x: 0, y: 3 }));
            result.appendChild(cross({ style: "dotted", x: 1, y: 0 }));
            result.appendChild(cross({ style: "dotted", x: 3, y: 0 }));
            result.appendChild(cross({ style: "solid", x: 4, y: 3 }));
            result.appendChild(piece("弓"));
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
