const formatString = (value: string, max: number) => {//tener un archivo con functions
    value.charAt(max)
    return value.substring(0, max).trim() + '...'
}

export default formatString