
module.exports = function towelSort (matrix) {
  if (matrix==null) return [];
  return matrix.map((cur,i)=> (i%2==0)?cur:cur.reverse() ).flat();
}


