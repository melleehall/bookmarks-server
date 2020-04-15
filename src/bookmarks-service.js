const BookmarksService = {
    getAllBookmarks(knex) {
      return knex.select('*').from('web_bookmarks')
    },
    getById(knex, id) {
      return knex.from('web_bookmarks').select('*').where('id', id).first()
    },
    insertBookmark(knex, newBookmark) {
      return knex
        .insert(newBookmark)
        .into('web_bookmarks')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
    deleteBookmark(knex, id) {
      return knex('web_bookmarks')
        .where({ id })
        .delete()
    },
    updateBookmark(knex, id, newBookmarkFields) {
      return knex('web_bookmarks')
        .where({ id })
        .update(newBookmarkFields)
    },
  }
  
  module.exports = BookmarksService