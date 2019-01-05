function del(id,lists){
  for(var i = 0,len = lists.length;i < len;i ++){
    if(lists[i].id == id){
      lists.splice(i,1);
      break;
    }
  }
}
function newjson(type,count){
  if(type == 'shortTexts'){
    var newData = { id: 'key' + count, title: '', demo: '' };
  }else if(type == 'longTexts'){
    var newData = { id: 'key' + count, title: '', demo: '', maxLength:''};
  }else if(type == 'options'){
    var newData = { id: 'key' + count, title: '', demo: '',optionArray };
  }
  return newData;
}
module.exports  = {
  del:del,
  newjson:newjson
}