async function pMergesort(array){
  
    let arrLen = array.length; 

    // logic from mergesort repo
    for (let i=1;i <=(arrLen-1); i = (2*i)){

        //keeps track of the merge promises
        let mergeProms = []; 
        //Also logic from mergesort repo
        for (let j = 0; j < (arrLen - 1); j = (j + (2 * i))){

            let mid = (j + i - 1); 
            let last = Math.min((j + (2 * i) - 1), (arrLen - 1));

            // creaction of the promises that will merge the grouping
            mergeProms.push(
                new Promise(resolve =>{

                    let left = j; 
                    let right = (mid + 1); 

                    // so we dont mess with the info other are working with
                    let merged = [...array];

                    // the actual merge logic, simular to mergesort repo
                    while (left <= mid && right <= last){
                        if(merged[left] > merged[right]){

                            let tmp = merged[right];

                            for (let k = right; k > left; k--){
                                merged[k] = merged[k - 1];
                            }
                            merged[left] = tmp;
                            left++;
                            right++;
                            mid++;
                        } 
                        else{
                            left++; 
                        }
                    }

                    // the resolution to a promise with the new grouping
                    resolve({start: j, data: merged.slice(j, (last + 1)) });

                })
            );
        }

        // we wait for all the promises before moving on as to not mess anything up
        let results = await Promise.all(mergeProms);

        // now that we have all the promises back, we can update the array thatll be given back
        for (let result of results){
            for (let k=0; k< result.data.length; k++){
                // we are getting all the work done into the right places
                array[(result.start + k)] = result.data[k];
            }
        }
    }

    
    return array;
}


