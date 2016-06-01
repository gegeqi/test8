'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var arr= [];
for(var i=0,elem;(elem=collection[i]) != null ;i++){
  if(elem % 2==0){
    arr.push(elem);
  }
}
    return arr;
}

module.exports = collect_all_even;
