import faunadb from 'faunadb';

export const client = new faunadb.Client({
  secret: 'fnAEfixFfMAAQ8xb82vNxqlU_yFBUBJ32nCdkZ_O',
  domain: 'db.us.fauna.com',
});
