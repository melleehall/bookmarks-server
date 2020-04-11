const BookmarksService = {
    getAllBookmarks(knex) {
        return knex.select('*').from('web_bookmarks')
    },
    getById(knex, id) {
        return knex.from('web_bookmarks').select('*').where('id', id).first()
    },
}

module.exports = BookmarksService