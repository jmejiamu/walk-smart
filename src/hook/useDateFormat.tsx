
const useDateFormat = () => {



    const formater = (date: string, options: Intl.DateTimeFormatOptions) : string => {
        
        const formatDate = new Date(date).toLocaleString('en-us', options)
        return formatDate
    
    }
       
    return {
        formater
    }

}

export default useDateFormat;