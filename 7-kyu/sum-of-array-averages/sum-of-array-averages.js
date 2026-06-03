function sumAverage(arrays) {
    const averages = arrays.map(subArrays => {
      let total = subArrays.reduce((acc, curr) => acc + curr);
      
      return total / subArrays.length;
    })
    
    return averages.reduce((acc, curr) => acc + curr)
}