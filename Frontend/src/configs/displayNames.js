export const productColomns = [
    {
        name: 'name',
        display: 'Name'
    },
    {
        name: 'description',
        display: 'Description'
    },
    {
        name: 'price',
        display: 'Price'
    },
    {
        name: 'rating',
        display: 'Rating'
    }
];

export const productionColumnsExtended = [
    ...productColomns,
    {
        name: 'manufacturer',
        display: 'Built By'
    },
    {
        name: 'availableSince', 
        display: 'Available From'
    },
    {
        name: 'inStock',
        display: 'Available'
    }
];