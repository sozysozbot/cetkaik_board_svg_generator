"use strict";
function piece_path(color, profession, column, row, degree) {
    const TOP = {
        A: 0, E: 1, I: 2, U: 3, O: 4, Y: 5, AI: 6, AU: 7, IA: 8
    }[row];
    const LEFT = {
        P: 8, M: 7, C: 6, X: 5, Z: 4, T: 3, N: 2, L: 1, K: 0
    }[column];
    const coloring = { 黒: '', 赤: 'fill="#d43c00" ' }[color];
    const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttributeNS('http://www.w3.org/2000/svg', 'fill', { 黒: '', 赤: '#d43c00' }[color]);
    if (profession === '兵' && degree === 180) {
        const x = LEFT * 17.55 + 50.798;
        const y = TOP * 17.55 + 102.73;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-0.20577-1.6187-0.17065-3.0078 0.0222-4.2065l1.7947-1.1234-0.24236-0.28216-1.3353 0.35657c1.3058-4.9564 5.5346-6.0094 5.5346-6.0094l-0.0103-0.6258c-4.0766 1.022-6.0293 4.3243-6.9577 7.0182l-3.7316 0.99633 1.7766 1.6552 1.463-0.9157c-0.27978 1.2319-0.33228 2.0867-0.33228 2.0867zm3.1088-1.1307c-0.92862-3.9971 1.4537-6.3794 1.4537-6.3794s-0.38376-0.0604-0.8077-0.0806c-1.442 1.5069-2.9874 5.8544-2.9874 5.8544zm-4.4617-5.7149s-2.8761-2.6182-4.6085-4.7894c-0.62083 0.65454-1.2692 1.4335-1.2692 1.4335s2.7978 2.2613 5.8777 3.3559z`);
        return path;
    }
    else if (profession === '兵' && degree === 0) {
        const x = LEFT * 17.55 + 49.341;
        const y = TOP * 17.55 + 90.84;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c0.20576 1.6187 0.17065 3.0078-0.0222 4.2065l-1.7947 1.1234 0.24237 0.28216 1.3353-0.35657c-1.3058 4.9564-5.5346 6.0094-5.5346 6.0094l0.0103 0.6258c4.0766-1.022 6.0293-4.3243 6.9577-7.0182l3.7316-0.99633-1.7766-1.6552-1.463 0.9157c0.27978-1.2319 0.33228-2.0867 0.33228-2.0867zm-3.1089 1.1307c0.92862 3.9971-1.4536 6.3794-1.4536 6.3794s0.38376 0.0604 0.8077 0.0806c1.442-1.5069 2.9874-5.8544 2.9874-5.8544zm4.4618 5.7149s2.8761 2.6182 4.6085 4.7894c0.62083-0.65454 1.2692-1.4335 1.2692-1.4335s-2.7978-2.2613-5.8777-3.3559z`);
        return path;
    }
    else if (profession === '弓' && degree === 0) {
        const x = LEFT * 17.55 + 51.582;
        const y = TOP * 17.55 + 91.08;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}-1.5182 0.95085c-2.3508 1.2644-4.1982 1.1188-4.1982 1.1188 0.36235 0.44518 0.63933 0.90956 0.99271 1.3219l1.6014-0.42788c0.032 0.92567-0.0335 1.8832-0.15141 2.7957-1.2326 0.3625-2.1301 0.45889-2.1301 0.45889 0.36234 0.44518 0.63984 0.90955 0.99322 1.3219l0.89555-0.2713c-0.17845 0.93675-0.37836 1.7301-0.53485 2.3001-2.2378 0.41136-4.2049 0.68264-4.2049 0.68264 0.36242 0.3914 0.42049 0.42688 0.99271 1.1627 7.0222-1.962 12.492-2.4128 12.492-2.4128l-2.0624-1.7317-1.5188 0.83561c-0.48337 0.22852-1.1924 0.45294-2.0045 0.66663 0.26163-0.55756 0.60262-1.609 0.93844-2.7435l2.0423-0.61805-1.4759-1.3746c0.36003-1.3195 0.62787-2.3802 0.62787-2.3802zm-0.16691 2.1746c0.0257 0.74896-0.01 1.519-0.0863 2.2701l-0.41703 0.26097c-0.42319 0.22761-0.84716 0.42134-1.2583 0.58756 0.31171-1.1106 0.5364-1.9818 0.5364-1.9818s-0.51158-0.18887-1.2454-0.47698zm-0.36071 4.1904c-0.19719 1.0876-0.42653 2.0047-0.58911 2.5973-0.69054 0.16385-1.4209 0.31396-2.1513 0.45578 0.25552-0.57392 0.56394-1.512 0.85887-2.4836z`);
        return path;
    }
    else if (profession === '弓' && degree === 180) {
        const x = LEFT * 17.55 + 48.56;
        const y = TOP * 17.55 + 102.49;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y} 1.5182-0.95085c2.3508-1.2644 4.1982-1.1188 4.1982-1.1188-0.36235-0.44518-0.63933-0.90956-0.99271-1.3219l-1.6014 0.42788c-0.032-0.92567 0.0335-1.8832 0.15141-2.7957 1.2326-0.3625 2.1301-0.45889 2.1301-0.45889-0.36234-0.44518-0.63984-0.90955-0.99322-1.3219l-0.89555 0.2713c0.17845-0.93675 0.37836-1.7301 0.53485-2.3001 2.2378-0.41136 4.2049-0.68264 4.2049-0.68264-0.36242-0.3914-0.42048-0.42688-0.9927-1.1627-7.0222 1.962-12.492 2.4128-12.492 2.4128l2.0624 1.7317 1.5188-0.83561c0.48337-0.22852 1.1924-0.45294 2.0045-0.66663-0.26163 0.55756-0.60262 1.609-0.93844 2.7435l-2.0423 0.61805 1.4759 1.3746c-0.36003 1.3195-0.62787 2.3802-0.62787 2.3802zm0.16691-2.1746c-0.0257-0.74896 0.01-1.519 0.0863-2.2701l0.41703-0.26097c0.42319-0.22761 0.84716-0.42134 1.2583-0.58756-0.3117 1.1106-0.53639 1.9818-0.53639 1.9818s0.51157 0.18887 1.2454 0.47698zm0.36071-4.1904c0.19719-1.0876 0.42653-2.0047 0.58911-2.5973 0.69053-0.16385 1.4209-0.31396 2.1513-0.45578-0.25552 0.57392-0.56394 1.512-0.85887 2.4836z`);
        return path;
    }
    else if (profession === '馬' && degree === 180) {
        const x = LEFT * 17.55 + 49.519;
        const y = TOP * 17.55 + 103.59;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y} 1.5182-0.95033c2.3508-1.2644 4.1987-1.1188 4.1987-1.1188-0.36235-0.44518-0.63984-0.91007-0.99322-1.3224l-1.0764 0.28732c0.19268-5.6445 3.3424-8.8351 3.3424-8.8351l-0.01-0.6258c-2.5669 1.8832-4.0383 5.1368-4.7687 7.245l-3.5285 0.91932 1.2919 1.0899 2.0056-1.3048c-0.2469 0.79686-0.36019 1.3167-0.36019 1.3167l0.93586 0.48628-4.3326 1.1576zm-4.0799-4.3326c0.0213 1e-3 0.0375-4e-3 0.0476-0.0165 0.1615-0.20187 6.6616-2.6644 6.6616-2.6644l0.16174-0.48473-0.56741 0.10801c2e-3 -2.4496 1.5353-4.8777 1.5353-4.8777s-1.8096 0.47327-2.9983 4.1538c0.29954 0.28427 0.65976 0.5859 0.95136 0.82166l-2.1348 0.40721c0.0789-1.6795 0.53843-3.0628 1.048-4.1103l0.37001 0.12247 0.22841-0.14263-0.44959-0.28215c0.66868-1.2711 1.3653-1.9611 1.3653-1.9611s-1.0144 0.32261-2.0516 1.5306l-3.004-1.8852c-0.65663 1.142-2.9735 7.7706-2.9735 7.7706s1.4903 1.4906 1.8097 1.5105zm0.59377-1.9689c-0.35102-2.07 1.1462-5.3289 1.2862-5.6281l1.941 0.64182c-0.66353 0.91115-1.2914 2.2135-1.6164 4.0675 0.22656 0.215 0.30268 0.2866 0.53744 0.50901z`);
        return path;
    }
    else if (profession === '馬' && degree === 0) {
        const x = LEFT * 17.55 + 50.62;
        const y = TOP * 17.55 + 89.98;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}-1.5182 0.95033c-2.3508 1.2644-4.1987 1.1188-4.1987 1.1188 0.36235 0.44518 0.63984 0.91007 0.99322 1.3224l1.0764-0.28732c-0.19268 5.6445-3.3424 8.8351-3.3424 8.8351l0.01 0.6258c2.5669-1.8832 4.0383-5.1368 4.7687-7.245l3.5285-0.91932-1.2919-1.0899-2.0056 1.3048c0.2469-0.79686 0.36019-1.3167 0.36019-1.3167l-0.93586-0.48628 4.3326-1.1576zm4.0799 4.3326c-0.0213-1e-3 -0.0375 4e-3 -0.0476 0.0165-0.1615 0.20187-6.6616 2.6644-6.6616 2.6644l-0.16174 0.48473 0.56741-0.10801c-2e-3 2.4496-1.5353 4.8777-1.5353 4.8777s1.8096-0.47327 2.9983-4.1538c-0.29954-0.28427-0.65976-0.5859-0.95136-0.82166l2.1348-0.40721c-0.0789 1.6795-0.53843 3.0628-1.048 4.1103l-0.37001-0.12247-0.22841 0.14263 0.44959 0.28215c-0.66868 1.2711-1.3653 1.9611-1.3653 1.9611s1.0144-0.32261 2.0516-1.5306l3.004 1.8852c0.65663-1.142 2.9735-7.7706 2.9735-7.7706s-1.4903-1.4906-1.8097-1.5105zm-0.59377 1.9689c0.35102 2.07-1.1462 5.3289-1.2862 5.6281l-1.941-0.64182c0.66353-0.91115 1.2914-2.2135 1.6164-4.0675-0.22656-0.215-0.30268-0.2866-0.53744-0.50901z`);
        return path;
    }
    else if (profession === '巫' && degree === 180) {
        const x = LEFT * 17.55 + 50.753;
        const y = TOP * 17.55 + 103.06;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-0.13889-1.2742-0.17596-2.4088-0.14004-3.4318 1.4542-0.55954 2.805-1.0604 2.805-1.0604l-0.32298-0.3638-2.4329 0.57619c0.0837-1.016 0.24523-1.9085 0.46922-2.682l0.62322-0.2129-0.0284-0.28577-0.44597 0.0326c1.5764-4.6322 5.3366-4.8193 5.3366-4.8193l-0.10026-0.29972c-3.4754 0.49942-5.3976 2.7969-6.4621 5.2085l-4.0096 0.29198 0.92036 0.81441-1.5415 3.1931s0.76869 0.68066 1.4604 1.188c0.12501-0.125 0.95439-0.48131 1.9663-0.88883-0.12026 1.0171-0.11576 1.6898-0.11576 1.6898zm-3.6375-3.4396 0.39274-2.312 0.0212 0.0186 2.1813-0.74466c-0.32685 0.90694-0.53821 1.7915-0.68265 2.5849zm7.4523-0.28164c0.21701-0.0557 0.10008-0.0285 0.21704-0.0553-1.5913-2.9707-1.7338-4.7863-1.7338-4.7863l-1.0521 0.92036s1.4188 3.1497 2.5688 3.9212zm-5.1676-3.7812s-2.8761-2.6182-4.6085-4.7894c-0.62084 0.65453-1.2692 1.4335-1.2692 1.4335s2.7978 2.2614 5.8777 3.3559z`);
        return path;
    }
    else if (profession === '巫' && degree === 0) {
        const x = LEFT * 17.55 + 49.39;
        const y = TOP * 17.55 + 90.51;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c0.13889 1.2742 0.17596 2.4088 0.14004 3.4318-1.4542 0.55954-2.805 1.0604-2.805 1.0604l0.32298 0.3638 2.4329-0.57619c-0.0837 1.016-0.24523 1.9085-0.46922 2.682l-0.62322 0.2129 0.0284 0.28577 0.44597-0.0326c-1.5764 4.6322-5.3366 4.8193-5.3366 4.8193l0.10026 0.29972c3.4754-0.49942 5.3976-2.7969 6.4621-5.2085l4.0096-0.29198-0.92036-0.81441 1.5415-3.1931s-0.76869-0.68066-1.4604-1.188c-0.12501 0.125-0.95439 0.48131-1.9663 0.88883 0.12026-1.0171 0.11576-1.6898 0.11576-1.6898zm3.6375 3.4396-0.39275 2.312-0.0212-0.0186-2.1813 0.74466c0.32685-0.90694 0.53821-1.7915 0.68265-2.5849zm-7.4523 0.28164c-0.21702 0.0557-0.10009 0.0285-0.21704 0.0553 1.5913 2.9707 1.7337 4.7863 1.7337 4.7863l1.0521-0.92036s-1.4188-3.1497-2.5688-3.9212zm5.1676 3.7812s2.8761 2.6182 4.6085 4.7894c0.62084-0.65453 1.2692-1.4335 1.2692-1.4335s-2.7978-2.2614-5.8777-3.3559z`);
        return path;
    }
    else if (profession === '船' && degree === 180) {
        const x = LEFT * 17.55 + 118.53 - 4 * 17.55;
        const y = TOP * 17.55 + 138.3 - 2 * 17.55;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-0.19518-1.3962-0.25014-2.8147-0.23513-4.1016 1.4349-0.50638 2.9027-0.87158 4.3811-1.173l0.30799 1.8557 2.436 1.0537c-0.56371-0.61273-1.0476-1.928-1.4108-3.1647 1.005-0.18354 2.0114-0.35004 3.0122-0.52193-0.33533-0.36214-0.52269-0.62866-1.0521-1.3095-0.77619 0.21686-1.5439 0.41814-2.2955 0.60616-0.21774-0.87902-0.34054-1.527-0.34054-1.527l-0.90744-0.40152 1.0754-0.34675 0.0713-0.44855-0.88729 0.10128c1.3865-2.2021 3.2081-3.1982 3.2081-3.1982l-0.17157-0.23978c-0.75383-0.0228-4.5227 2.467-4.5227 2.467l1.2532 0.99787-3.7827 0.43305c1e-3 -7e-3 0.0124-0.0879 0.0124-0.0879-0.0164 0.0294-0.0314 0.0616-0.0475 0.0915l-1.4748 0.16898 0.96377 0.91209c-0.32913 0.79493-0.5962 1.645-0.81287 2.4546-2.3038 0.42513-3.7956 0.62322-3.7956 0.62322l2.0423 1.8356c0.43744-0.22883 0.87965-0.43726 1.326-0.62994-0.20594 1.0207-0.30282 1.7384-0.30282 1.7384s0.69576 0.81626 1.9498 1.8113zm-0.18707-5.5785c0.0385-0.73447 0.093-1.3706 0.14831-1.9063l0.0543 0.0517 3.5812-1.1544 0.35243 2.1234c-1.5104 0.3573-2.8946 0.64463-4.1362 0.88573zm0.17622-3.9832c0.0454 1e-3 0.089 3.9e-4 0.13022-3e-3 0 0-2.0547-1.3448-3.082-3.1192-0.91523 0.48563-1.7932 0.80306-1.7932 0.80306s3.336 2.2782 4.7449 2.3192z`);
        return path;
    }
    else if (profession === '虎' && degree === 180) {
        const x = LEFT * 17.55 + 52.5;
        const y = TOP * 17.55 + 102.64;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-7e-3 -0.26504 8.2e-4 -0.52829 0.015-0.79013 0.54918-0.28104 2.0536-0.98694 3.6902-1.1539l-1.3725-1.4966-2.2298 1.741c0.62186-4.4709 3.8411-8.1757 3.8411-8.1757l-8e-3 -0.29403c-1.8825 1.0275-3.7894 3.9852-4.9625 6.0756l-5.1527 0.98289c-0.42863-2.1287 1.2131-6.3798 1.3937-6.8389l1.7549 0.58033c-0.67002 0.97911-1.3192 2.3814-1.6671 4.3661 0.63053 0.59838 1.4692 1.2356 1.4692 1.2356-0.1083-2.2298 0.41082-4.0359 0.99581-5.3377l0.68781 0.22738 0.23565-0.14728-0.74311-0.46664c0.62018-1.251 1.2506-1.9358 1.2506-1.9358s-0.89486 0.37155-1.8542 1.557l-2.9171-1.8304c-0.67631 1.1762-3.2391 9.092-3.2391 9.092s1.7467 1.7463 1.9131 1.5384c0.13083-0.16355 3.6494-1.5148 5.4234-2.1921-0.4326 0.8161-0.70642 1.3906-0.70642 1.3906zm-0.69195-4.8498c-0.25351-2.6912 1.5586-5.5573 1.5586-5.5573s-1.8128 0.59348-3.037 4.3842c0.63053 0.59839 1.4785 1.1731 1.4785 1.1731z`);
        return path;
    }
    else if (profession === '船' && degree === 0) {
        // 黒船ZAI
        const x = LEFT * 17.55 + 122.01 - 4 * 17.55;
        const y = TOP * 17.55 + 195.68 - 6 * 17.55;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c0.19518 1.3962 0.25014 2.8147 0.23513 4.1016-1.4349 0.50638-2.9027 0.87158-4.3811 1.173l-0.30799-1.8557-2.436-1.0537c0.56371 0.61273 1.0476 1.928 1.4108 3.1647-1.005 0.18354-2.0114 0.35004-3.0122 0.52193 0.33533 0.36214 0.52269 0.62866 1.0521 1.3095 0.77619-0.21686 1.5439-0.41814 2.2955-0.60616 0.21774 0.87902 0.34054 1.527 0.34054 1.527l0.90744 0.40152-1.0754 0.34675-0.0713 0.44855 0.88729-0.10128c-1.3865 2.2021-3.2081 3.1982-3.2081 3.1982l0.17157 0.23978c0.75383 0.0228 4.5227-2.467 4.5227-2.467l-1.2532-0.99787 3.7827-0.43305c-1e-3 7e-3 -0.0124 0.0879-0.0124 0.0879 0.0164-0.0294 0.0314-0.0616 0.0475-0.0915l1.4748-0.16898-0.96377-0.91209c0.32913-0.79493 0.5962-1.645 0.81287-2.4546 2.3038-0.42513 3.7956-0.62322 3.7956-0.62322l-2.0423-1.8356c-0.43744 0.22883-0.87965 0.43726-1.326 0.62994 0.20594-1.0207 0.30282-1.7384 0.30282-1.7384s-0.69576-0.81626-1.9498-1.8113zm0.18707 5.5785c-0.0385 0.73447-0.093 1.3706-0.14831 1.9063l-0.0543-0.0517-3.5812 1.1544-0.35243-2.1234c1.5104-0.3573 2.8946-0.64463 4.1362-0.88573zm-0.17622 3.9832c-0.0454-1e-3 -0.089-3.9e-4 -0.13022 3e-3 0 0 2.0547 1.3448 3.082 3.1192 0.91523-0.48563 1.7932-0.80306 1.7932-0.80306s-3.336-2.2782-4.7449-2.3192z`);
        return path;
    }
    else if (profession === '虎' && degree === 0) {
        const x = LEFT * 17.55 + 47.64;
        const y = TOP * 17.55 + 90.94;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c7e-3 0.26504-8.2e-4 0.52829-0.015 0.79013-0.54918 0.28104-2.0536 0.98694-3.6902 1.1539l1.3725 1.4966 2.2298-1.741c-0.62186 4.4709-3.8411 8.1757-3.8411 8.1757l8e-3 0.29403c1.8825-1.0275 3.7894-3.9852 4.9625-6.0756l5.1527-0.98289c0.42863 2.1287-1.2131 6.3798-1.3937 6.8389l-1.7549-0.58033c0.67002-0.97911 1.3192-2.3814 1.6671-4.3661-0.63053-0.59838-1.4692-1.2356-1.4692-1.2356 0.1083 2.2298-0.41082 4.0359-0.99581 5.3377l-0.68781-0.22738-0.23565 0.14728 0.74311 0.46664c-0.62018 1.251-1.2506 1.9358-1.2506 1.9358s0.89486-0.37155 1.8542-1.557l2.9171 1.8304c0.67631-1.1762 3.2391-9.092 3.2391-9.092s-1.7467-1.7463-1.9131-1.5384c-0.13083 0.16355-3.6494 1.5148-5.4234 2.1921 0.4326-0.8161 0.70642-1.3906 0.70642-1.3906zm0.69195 4.8498c0.25351 2.6912-1.5586 5.5573-1.5586 5.5573s1.8128-0.59348 3.037-4.3842c-0.63053-0.59839-1.4785-1.1731-1.4785-1.1731z`);
        return path;
    }
    else if (profession === '車' && degree === 180) {
        const x = LEFT * 17.55 + 47.243;
        const y = TOP * 17.55 + 103.02;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y} 5.8529-2.3456-0.0284-0.40515-5.5966 0.87385c0.089-0.38528 0.23017-0.89309 0.38137-1.403l0.0811 0.0754c1.4997-1.4954 3.4394-2.2711 5.103-2.9688-0.084-0.13114-0.23953-0.26019-0.37879-0.42271l-1.694 0.45217c-0.12598-0.437-0.19826-0.88726-0.23564-1.3327 0.75262-0.17157 1.513-0.33237 2.2515-0.48265 0.29466 0.65051 0.65712 1.371 1.1095 2.1125-0.16887 1.0025-0.51669 3.2355-0.50798 4.5837 1.0778-3.2616 2.2841-4.4823 2.3983-4.625 0.0832-0.10401-0.90137-0.3122-1.4464-0.41858-0.10255-0.5656-0.20868-1.1619-0.32918-1.8955 1.7514-0.33956 3.0928-0.56844 3.0928-0.56844-0.36242-0.3914-0.421-0.42638-0.99322-1.1622-0.76951 0.215-1.5296 0.41433-2.2774 0.60307-0.16901-1.1147-0.3188-2.2424-0.38499-3.1409-1.0434 1.1991-1.5746 2.1224-1.5746 2.1224s0.16184 0.55673 0.48472 1.3803c-0.64067 0.15169-1.2472 0.28554-1.8516 0.41755 0.0324-1.0328 0.20839-1.9052 0.32143-2.3776l1.3203-0.54209 0.0408-0.35864-5.5128 0.68368 0.8568 0.72141c-0.28106 0.3493-0.6213 1.4918-0.91519 2.6577-2.4066 0.44093-3.9677 0.64957-3.9677 0.64957l2.0624 1.7317 1.5188-0.83561c7e-3 -3e-3 0.0161-6e-3 0.0227-9e-3 -0.17261 0.77962-0.28991 1.3699-0.28991 1.3699l1.0304 0.96015-1.6862 2.3301zm0.85266-5.3774c-0.0239-0.49955-0.0325-0.97521-0.0284-1.4211 0.4634-0.13549 0.97273-0.27105 1.5126-0.40463-0.0174 0.2068-0.0322 0.42165-0.0413 0.64854 0.46469 0.24622 0.6717 0.36179 0.97927 0.5302zm0.0176-2.6381c0.047-0.7762 0.12072-1.4291 0.19534-1.9177l0.0951 0.0801 2.2159-0.91003c-0.30132 0.43812-0.66731 1.1896-0.8909 2.4195-0.56617 0.11852-1.0995 0.22773-1.6154 0.32815z`);
        return path;
    }
    else if (profession === '車' && degree === 0) {
        const x = LEFT * 17.55 + 87.996 - 2 * 17.55;
        const y = TOP * 17.55 + 230.95 - 8 * 17.55;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}-5.8529 2.3456 0.0284 0.40515 5.5966-0.87385c-0.089 0.38528-0.23017 0.89309-0.38137 1.403l-0.0811-0.0754c-1.4997 1.4954-3.4394 2.2711-5.103 2.9688 0.084 0.13114 0.23953 0.26019 0.37879 0.42271l1.694-0.45217c0.12598 0.437 0.19826 0.88726 0.23564 1.3327-0.75262 0.17157-1.513 0.33237-2.2515 0.48265-0.29466-0.65051-0.65712-1.371-1.1095-2.1125 0.16887-1.0025 0.51669-3.2355 0.50798-4.5837-1.0778 3.2616-2.2841 4.4823-2.3983 4.625-0.0832 0.10401 0.90137 0.3122 1.4464 0.41858 0.10255 0.5656 0.20868 1.1619 0.32918 1.8955-1.7514 0.33956-3.0928 0.56844-3.0928 0.56844 0.36242 0.3914 0.421 0.42638 0.99322 1.1622 0.76951-0.215 1.5296-0.41433 2.2774-0.60307 0.16901 1.1147 0.3188 2.2424 0.38499 3.1409 1.0434-1.1991 1.5746-2.1224 1.5746-2.1224s-0.16184-0.55673-0.48472-1.3803c0.64067-0.15169 1.2472-0.28554 1.8516-0.41755-0.0324 1.0328-0.20839 1.9052-0.32143 2.3776l-1.3203 0.54209-0.0408 0.35864 5.5128-0.68368-0.8568-0.72141c0.28106-0.3493 0.6213-1.4918 0.91519-2.6577 2.4066-0.44093 3.9677-0.64957 3.9677-0.64957l-2.0624-1.7317-1.5188 0.83561c-7e-3 3e-3 -0.0161 6e-3 -0.0227 9e-3 0.17261-0.77962 0.28991-1.3699 0.28991-1.3699l-1.0304-0.96015 1.6862-2.3301zm-0.85266 5.3774c0.0239 0.49955 0.0325 0.97521 0.0284 1.4211-0.4634 0.13549-0.97273 0.27105-1.5126 0.40463 0.0174-0.2068 0.0322-0.42165 0.0413-0.64854-0.46469-0.24622-0.6717-0.36179-0.97927-0.5302zm-0.0176 2.6381c-0.047 0.7762-0.12072 1.4291-0.19534 1.9177l-0.0951-0.0801-2.2159 0.91003c0.30132-0.43812 0.66731-1.1896 0.8909-2.4195 0.56617-0.11852 1.0995-0.22773 1.6154-0.32815z`);
        return path;
    }
    else if (profession === '筆' && degree === 180) {
        const x = LEFT * 17.55 + 51.459;
        const y = TOP * 17.55 + 103.86;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-0.17201-0.44892-0.42228-2.0384-0.64388-3.9398 1.2142-0.459 2.3396-0.84827 2.9378-1.0992-0.075-0.11709-0.21414-0.23264-0.33848-0.37775l-2.682 0.70641c-0.0967-0.89893-0.18619-1.8254-0.25476-2.7368l0.28628 0.10438-0.0253-0.45888-0.30179-0.20723c-0.13841-2.0568-0.16502-3.8627 0.045-4.4809l-1.0728-1.4583s-0.0136 2.3771-0.0475 5.2074c-0.99648-0.67745-2.3482-1.5958-2.3482-1.5958-0.90531 1.5563-1.7912 4.8457-2.3854 7.2342l1.5865 1.478c0.5721-0.57047 1.7658-1.1597 3.0551-1.7002-0.0199 0.8344-0.0414 1.6196-0.0667 2.2448 0.65678 0.34858 1.1875 0.48015 2.2562 1.0795zm4.0835-3.0882s-0.97621-4.956-1.1803-7.7261c-1.0434 1.1991-1.5741 2.1224-1.5741 2.1224s0.83022 2.9615 2.7544 5.6038zm-9.1777-0.47128c-0.0671-1.8693 0.29346-3.8694 0.59686-5.1718l2.3864 0.87126c-0.0156 1.1864-0.0325 2.3839-0.0558 3.529z`);
        return path;
    }
    else if (profession === '筆' && degree === 0) {
        const x = LEFT * 17.55 + 48.695;
        const y = TOP * 17.55 + 89.81;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c0.17201 0.44892 0.42228 2.0384 0.64388 3.9398-1.2142 0.459-2.3396 0.84827-2.9378 1.0992 0.075 0.11709 0.21414 0.23264 0.33848 0.37775l2.682-0.70641c0.0967 0.89893 0.18619 1.8254 0.25476 2.7368l-0.28629-0.10438 0.0253 0.45888 0.30179 0.20723c0.13841 2.0568 0.16502 3.8627-0.045 4.4809l1.0729 1.4583s0.0136-2.3771 0.0475-5.2074c0.99648 0.67745 2.3482 1.5958 2.3482 1.5958 0.90532-1.5563 1.7912-4.8457 2.3854-7.2342l-1.5865-1.478c-0.5721 0.57047-1.7658 1.1597-3.0551 1.7002 0.0199-0.8344 0.0414-1.6196 0.0667-2.2448-0.65678-0.34858-1.1875-0.48015-2.2562-1.0795zm-4.0835 3.0882s0.97621 4.956 1.1803 7.7261c1.0435-1.1991 1.5741-2.1224 1.5741-2.1224s-0.83022-2.9615-2.7544-5.6038zm9.1777 0.47128c0.0671 1.8693-0.29346 3.8694-0.59686 5.1718l-2.3864-0.87126c0.0156-1.1864 0.0325-2.3839 0.0558-3.529z`);
        return path;
    }
    else if (profession === '将' && degree === 180) {
        const x = LEFT * 17.55 + 51.46;
        const y = TOP * 17.55 + 104.12;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c0.0775-1.2026 0.267-2.2853 0.53175-3.2577 1.1571-0.38478 2.4024-0.72488 3.3657-0.7891l-1.0294-0.98909-1.9032 0.44959c1.6412-4.3248 4.7196-5.9872 4.7196-5.9872l-8e-3 -0.28525c-2.4074 0.82401-4.7611 4.2023-6.1877 6.6208l-3.545 0.83716 1.2919 1.4134s0.5337-0.23654 1.3084-0.54415c-0.25677 0.49248-0.43408 0.85111-0.43408 0.85111l1.8893 1.6805zm-1.7627-5.4152c0.25002-0.36785 0.25012-0.32711 0.25012-0.32711-2.7697-1.3829-2.903-1.6028-5.7738-3.9166l-1.1705 1.7766s6.1693 2.467 6.6942 2.467zm1.3405-0.20619c-0.10323-1.3747-0.0896-2.5232-0.0119-3.4783 0.90406-0.37799 1.9826-0.7077 3.1879-0.83406-0.39968-0.1713-1.0278-0.94206-1.0278-0.94206l-2.0428 0.76016c0.32614-2.1818 0.98444-3.0153 0.98444-3.0153l-1.9782-1.5343v4.9196l-3.1016 1.1539 1.142 1.142s0.73142-0.61841 1.9596-1.2449v2.1446z`);
        return path;
    }
    else if (profession === '将' && degree === 0) {
        const x = LEFT * 17.55 + 136.43 - 5 * 17.55;
        const y = TOP * 17.55 + 229.86 - 8 * 17.55;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}c-0.0775 1.2026-0.267 2.2853-0.53175 3.2577-1.1571 0.38478-2.4024 0.72488-3.3657 0.7891l1.0294 0.98909 1.9032-0.44959c-1.6412 4.3248-4.7196 5.9872-4.7196 5.9872l8e-3 0.28525c2.4074-0.82401 4.7611-4.2023 6.1877-6.6208l3.545-0.83716-1.2919-1.4134s-0.5337 0.23654-1.3084 0.54415c0.25677-0.49248 0.43408-0.85111 0.43408-0.85111l-1.8893-1.6805zm1.7627 5.4152c-0.25002 0.36785-0.25012 0.32711-0.25012 0.32711 2.7697 1.3829 2.903 1.6028 5.7738 3.9166l1.1705-1.7766s-6.1693-2.467-6.6942-2.467zm-1.3405 0.20619c0.10323 1.3747 0.0896 2.5232 0.0119 3.4783-0.90406 0.37799-1.9826 0.7077-3.1879 0.83406 0.39968 0.1713 1.0278 0.94206 1.0278 0.94206l2.0428-0.76016c-0.32614 2.1818-0.98444 3.0153-0.98444 3.0153l1.9782 1.5343v-4.9196l3.1016-1.1539-1.142-1.142s-0.73142 0.61841-1.9596 1.2449v-2.1446z`);
        return path;
    }
    else if (profession === '王' && degree === 180) {
        const x = LEFT * 17.55 + 53.47;
        const y = TOP * 17.55 + 103.59;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}s-2.5506-2.2958-2.5931-2.5084c-0.0425-0.21256-1.403 1.6154-1.403 1.6154s1.743 0.63791 3.9961 0.89297zm-4.9718-2.3482s2.7253-1.8258 5.6183-2.3864l-0.59066-0.35036-2.1523 0.43563c0.0588-0.95698 0.14901-1.7997 0.27905-2.529 0.79513-0.32916 1.6852-0.62936 2.5921-0.80511l-0.59066-0.35037-1.8376 0.37207c0.74569-3.0997 2.3165-4.1333 4.8845-5.642-3.7556 0.49344-5.5959 3.7207-6.4337 5.9552l-3.4334 0.69505 1.7927 1.3565s0.47125-0.3101 1.2082-0.70951c-0.13355 0.50099-0.19069 0.82268-0.19069 0.82268l1.2439 0.93276-4.1822 0.84595zm0.48679-6.983s-2.3382-1.5304-3.5073-3.5496c-1.0415 0.55265-2.0402 0.91364-2.0402 0.91364s1.7002 2.4022 5.5475 2.636z`);
        return path;
    }
    else if (profession === '王' && degree === 0) {
        const x = LEFT * 17.55 + 116.87 - 4 * 17.55;
        const y = TOP * 17.55 + 230.39 - 8 * 17.55;
        path.setAttributeNS('http://www.w3.org/2000/svg', 'd', `m${x} ${y}s2.5506 2.2958 2.5931 2.5084c0.0425 0.21256 1.403-1.6154 1.403-1.6154s-1.743-0.63791-3.9961-0.89297zm4.9718 2.3482s-2.7253 1.8258-5.6183 2.3864l0.59066 0.35036 2.1523-0.43563c-0.0588 0.95698-0.14901 1.7997-0.27905 2.529-0.79513 0.32916-1.6852 0.62936-2.5921 0.80511l0.59066 0.35037 1.8376-0.37207c-0.74569 3.0997-2.3165 4.1333-4.8845 5.642 3.7556-0.49344 5.5959-3.7207 6.4337-5.9552l3.4334-0.69505-1.7927-1.3565s-0.47125 0.3101-1.2082 0.70951c0.13355-0.50099 0.19069-0.82268 0.19069-0.82268l-1.2439-0.93276 4.1822-0.84595zm-0.48679 6.983s2.3382 1.5304 3.5073 3.5496c1.0415-0.55265 2.0402-0.91364 2.0402-0.91364s-1.7002-2.4022-5.5475-2.636z`);
        return path;
    }
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
    g.innerHTML += `<g transform="rotate(90 102.16 34.61)">
        <path d="m232.81 9.5251c0.15851 0.41367 0.38236 1.8187 0.59014 3.5197-0.62394 0.29356-1.2452 0.55131-1.8319 0.79737 0.084 0.13114 0.24005 0.26019 0.37931 0.42271l1.5487-0.41393c0.0491 0.4391 0.0953 0.89224 0.13953 1.3493-0.67516 0.15169-1.3508 0.29371-2.0102 0.42788-0.44083-0.97325-1.0421-2.116-1.8423-3.2148 0 0 0.3102 1.5867 0.61753 3.4577-1.7512 0.3395-3.0928 0.56844-3.0928 0.56844 0.36242 0.3914 0.421 0.42637 0.99322 1.1622 0.76951-0.215 1.5296-0.41433 2.2774-0.60306 0.16901 1.1147 0.3188 2.2424 0.38499 3.1409 1.0435-1.1991 1.5746-2.1224 1.5746-2.1224s-0.16184-0.55672-0.48473-1.3803c0.57861-0.137 1.1312-0.25993 1.6805-0.38085 0.0643 0.76257 0.11689 1.5136 0.15297 2.2164l-1.6237 0.66714-0.0408 0.35812 1.6986-0.21084c0.0418 1.2739 0.0131 2.2949-0.13384 2.7275l1.0728 1.4588s0.015-2.0868 0.0382-4.3072l2.8376-0.35191-0.85679-0.7214c0.28104-0.34938 0.6208-1.4919 0.91467-2.6577 2.4069-0.441 3.9682-0.64957 3.9682-0.64957l-2.0624-1.7317-1.5188 0.83561c-7e-3 0.0032-0.0164 0.0066-0.0233 0.0098 0.17268-0.77993 0.29042-1.3705 0.29042-1.3705l-1.7766-1.6552c-0.51018 0.50872-1.0719 0.93281-1.6557 1.3002 0.0156-0.5757 0.0322-1.113 0.0507-1.5689-0.65678-0.34858-1.1875-0.48015-2.2562-1.0795zm3.699 3.5212c0.0239 0.49955 0.0325 0.97521 0.0284 1.4211-0.48266 0.14112-1.0147 0.28223-1.5792 0.42116 9e-3 -0.49693 0.0172-0.96425 0.0274-1.4351zm-0.017 2.6381c-0.047 0.77619-0.12072 1.4291-0.19534 1.9177l-0.0951-0.0801-1.2904 0.5302c8e-3 -0.67281 0.0198-1.3604 0.0305-2.0541 0.54303-0.11336 1.054-0.21706 1.5503-0.31368z" fill="#fff" />
    </g>
    `;
    for (let i = 0; i < input.length; i++) {
        g.appendChild(piece_path(...(input[i])));
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
function isColor(color) {
    return ["赤", "黒"].includes(color);
}
function isProfession(profession) {
    return ["王", "将", "兵", "弓", "馬", "車", "巫", "虎", "筆", "船"].includes(profession);
}
function isColumn(column) {
    return ['P', 'M', 'C', 'X', 'Z', 'T', 'N', 'L', 'K'].includes(column);
}
function isRow(row) {
    return [
        'A', 'E', 'I', 'U', 'O', 'Y', 'AI', 'AU', 'IA'
    ].includes(row);
}
function isDegree(degree) {
    return [0, 180].includes(degree);
}
function render() {
    const input = document.getElementById("board_state").value
        .split("\n")
        .filter(line => line.trim() !== "")
        .flatMap(line => {
        const [color, profession, column, row, degree] = line.split(",").map(e => e.trim());
        const degree_ = Number(degree);
        if (isColor(color)
            && isProfession(profession)
            && isColumn(column)
            && isRow(row)
            && isDegree(degree_)) {
            return [
                [color, profession, column, row, degree_]
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
        if (!isDegree(degree_)) {
            msg.push(`invalid degree_ ${degree_}`);
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
