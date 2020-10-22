// Array
// last
// makeArr: 2 generics return, overwrite inference, default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

/* Definition of New Types */
type numArray = Array<number>
type stringArray = Array<string>

/* Where can we use generics? Where does help us? */

const last = ( arr: Array<number>) => {         //I can also write arr: number[]
    return arr[arr.length -1]
}

//working
const l = last([1,2,3])

//not working
const l2 = last(["1","2","3"])


//TYPE T as Generic -> Its taking the form of which you fill and provide a better type security
const lastGeneric = <T>( arr: T[]) => {         //I can also write arr: number[]
    return arr[arr.length -1]
}

//working
const lGeneric = lastGeneric([1,2,3])

//ALSO working
const lGeneric2 = lastGeneric(["1","2","3"])

