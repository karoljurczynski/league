export const users = {
  index: 'SELECT * FROM users;',
  create: 'INSERT INTO users (email, password, name, surname, age, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $6) RETURNING *;',
  readBy: (prop: 'id' | 'email') => `SELECT * FROM users WHERE ${prop} = $1;`,
  update: 'UPDATE users SET name = $2, surname = $3, age = $4, updated_at = $5 WHERE id = $1 RETURNING *;',
  delete: 'DELETE FROM users WHERE id = $1;'
}
