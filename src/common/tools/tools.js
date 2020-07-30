
export function debounce (fn, delay) {
    let timer = null
    return function (...arg) {
        //let arg = arguments
        
        clearTimeout(timer)
        
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, delay)
    }
}