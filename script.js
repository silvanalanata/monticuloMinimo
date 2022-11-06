function insertar (array,val){

    if(array.length==0){
        array.push("undifined");
        array.push(val);
    }

    array.push(val);

    let child_index = array.length-1;
    let parent_index=Math.trunc(child_index/2);
    while(array[parent_index]>array[child_index]){
        array[child_index] = array[parent_index];
        array[parent_index] = val;
        child_index = parent_index;
        parent_index = Math.trunc(child_index/2);

    }
    
    console.log(array);
}

insertar([undefined,3,8,10,11,9,20,14],7);
