function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'Title One',
            url: 'https://www.urlone.com',
            rating: '1',
            description: 'The first description'
        },
        {
            id: 2,
            title: 'Title Two',
            url: 'https://www.urltwo.com',
            rating: '2',
            description: 'The second description'
        },
        {   
            id: 3,
            title: 'Title Three',
            url: 'https://www.urlthree.com',
            rating: '3',
            description: 'The third description'
        },
        {
            id: 4,
            title: 'Title Four',
            url: 'https://www.urlfour.com',
            rating: '4',
            description: 'The fourth description'
        },
        {
            id: 5,
            title: 'Title Five',
            url: 'https://www.urlfive.com',
            rating: '5',
            description: 'The fifth description'
        },
    ]
}

module.exports = {
    makeBookmarksArray,
}