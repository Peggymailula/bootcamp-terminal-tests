module.exports= function(reg)
{
  var list1 = reg.split(",");
  var l= list1.length;
  var list2 = [];
  
 for (var i = 0 ; i < l; i++)
{
    if (list1[i].includes('CJ'))
        {
         list2.push(list1[i].trim());
        }
}
    return list2.length;   
  
}