//one of the best aspects of javascript is that functions are 
//"first class citizens" which basically means you can pass them
//into other functions, like you would a string, array, or object.
//Pass the function vomit into the function barf to get it to
//log "vomit called." (note: barf calls the arg, so you don't want 
// to evaluate it in the arg you passed in!)

function barf(callback){
  callback();
}

function vomit(){
  console.log("vomit called");
}

//Last, run callback() more than one time within the barf function. That might help elucidate what's happening
