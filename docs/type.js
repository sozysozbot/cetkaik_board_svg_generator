"use strict";
function allElements() {
    return arr => arr;
}
const ALL_COLORS = allElements()(["赤", "黒", "白"]);
function isColor(color) {
    const all_colors = ALL_COLORS;
    return all_colors.includes(color);
}
const ALL_PROFESSIONS = allElements()(["王", "将", "兵", "弓", "馬", "車", "巫", "虎", "筆", "船", "皇"]);
function isProfession(profession) {
    const all_professions = ALL_PROFESSIONS;
    return all_professions.includes(profession);
}
const ALL_COLUMNS = allElements()(['P', 'M', 'C', 'X', 'Z', 'T', 'N', 'L', 'K']);
function isColumn(column) {
    const all_columns = ALL_COLUMNS;
    return all_columns.includes(column);
}
const ALL_ROWS = allElements()(['A', 'E', 'I', 'U', 'O', 'Y', 'AI', 'AU', 'IA']);
function isRow(row) {
    const all_rows = ALL_ROWS;
    return all_rows.includes(row);
}
