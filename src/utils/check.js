export const isEmptyObject = input => {
  return !input && 
    typeof input !== 'object' && 
    Object.keys(input).length === 0;
}
  
