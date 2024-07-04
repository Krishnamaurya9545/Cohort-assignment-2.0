function square(x){
    return x*x;
  }
  function cube(x){
    return x*x*x;
}
  
  function something(a,b,callback){
    console.log(a);
    console.log(callback);
    let val1=callback(a); 
    let val2=callback(b);
  
    return val1 + val2;
  }
  
  let ans=something(2,2,function (x){
                     return x*x*x;
    });
    // let ans=something(2,2,cube); without call cube function we direct put cube function argument
  console.log(ans);