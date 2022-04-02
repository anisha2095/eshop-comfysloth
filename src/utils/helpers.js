export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = (data,type) =>{
    let unique=data.map((items) => items[type])
    if(type === 'colors'){
        unique=unique.flat()
    }
    return ['all',...new Set(unique)]
}

// dev-8c6oc9ze.us.auth0.com
// uqU2yk0SVA0Ux7duEiBrF6me4Zix6M5I