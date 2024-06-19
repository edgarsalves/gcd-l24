//${common.dedupe("t1", "comment_id")}
function dedupe(table, group_by_cols) {
   return `
   SELECT k.*
   FROM (
      SELECT ARRAY_AGG(row LIMIT 1)[OFFSET(0)] k
      FROM ${table} row
      GROUP BY ${group_by_cols}
   )`
}

module.exports = { dedupe };
