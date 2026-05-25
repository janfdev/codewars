function getAverage(marks){
  if (marks.length === 0) return 0;
  const total = marks.reduce((acc, cum) => acc + cum, 0);
  
  const bulat = Math.floor(total / marks.length);
  
  return bulat;
}