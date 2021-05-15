type Color = "赤" | "黒" | "白";
type Degree = number;
type Profession = "王" | "将" | "兵" | "弓" | "馬" | "車" | "巫" | "虎" | "筆" | "船" | "皇";
type Column = 'P' | 'M' | 'C' | 'X' | 'Z' | 'T' | 'N' | 'L' | 'K';
type Row = 'A' | 'E' | 'I' | 'U' | 'O' | 'Y' | 'AI' | 'AU' | 'IA';

type ElementOf<A extends any[]> = A extends (infer Elm)[] ? Elm : unknown;
type IsNever<T> = T[] extends never[] ? true : false;

function allElements<V>(): <Arr extends V[]>(arr: Arr) =>
    IsNever<Exclude<V, ElementOf<Arr>>> extends true ? V[] : unknown {
    return arr => arr as any;
}

const ALL_COLORS = allElements<Color>()(["赤", "黒", "白"]);
function isColor(color: string): color is Color {
    const all_colors: string[] = ALL_COLORS;
    return all_colors.includes(color);
}

const ALL_PROFESSIONS = allElements<Profession>()(["王", "将", "兵", "弓", "馬", "車", "巫", "虎", "筆", "船", "皇"]);
function isProfession(profession: string): profession is Profession {
    const all_professions: string[] = ALL_PROFESSIONS;
    return all_professions.includes(profession);
}

const ALL_COLUMNS = allElements<Column>()(['P', 'M', 'C', 'X', 'Z', 'T', 'N', 'L', 'K']);
function isColumn(column: string): column is Column {
    const all_columns: string[] = ALL_COLUMNS;
    return all_columns.includes(column);
}

const ALL_ROWS = allElements<Row>()(['A', 'E', 'I', 'U', 'O', 'Y', 'AI', 'AU', 'IA']);
function isRow(row: string): row is Row {
    const all_rows: string[] = ALL_ROWS;
    return all_rows.includes(row);
}