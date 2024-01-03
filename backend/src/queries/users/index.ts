export const users = {
  index: 'SELECT * FROM users;',
  create: 'INSERT INTO users (id, email, name, surname, age, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $6) RETURNING *',
  read: 'SELECT * FROM users WHERE id = $1;',
  update: 'UPDATE users SET email = $2, name = $3, surname = $4, age = $5, updated_at = $6 WHERE id = $1 RETURNING *;',
  delete: 'DELETE FROM users WHERE id = $1;'
}
