export default function bs_list(haystack: number[], needle: number): boolean {

    // psudeo code binarySearch 
    // ordered array - under the assumion that the array is sorted 

    // number.length / 2  = check if 
    // do {
    // midpoint = [lowValue +(highpoint -lowpoint) / 2 ]
    // val = array[midpoint ]

    // if vaule == needle - return true
    // elseif val > midpoint 
    //      low = midpoint + 1 
    // elsh 
    //     high = midpoint 
//  } while (low < high)
// return false 
    let low = haystack[0]
    let high = haystack[haystack.length-1]
    do {
        console.log(haystack)
        //  not getting the mid point index 
        let mid = [haystack[0] + (haystack[haystack.length -1 ] - haystack[0]) / 2 ]
        // 
        let val =  haystack[mid] 
        if(val === needle) {
            return true
        }
        else if (val > mid) {
            low = mid + 1 
        }else {
            high = mid
        }
  
    console.log(low, '-------- low')
    console.log(mid, '-------- mid')
    console.log(high, '-------- high')
    return false 
    }while (low <  high)

}