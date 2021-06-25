let library={
    name: 'Newburgh Library',
    address: '123 Fake Street',
    sections: {
        collections: [
            {classification: 'fiction',
            count: 25,
            aisle: '3b'},
            {classification: 'history',
            count: 42,
            aisle: '5a'}
        ]
    }
}
console.log(library.sections.collections[0].aisle);

