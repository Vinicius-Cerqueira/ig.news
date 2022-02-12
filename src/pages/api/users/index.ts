import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Vini' },
    { id: 2, name: 'Vinic' },
    { id: 3, name: 'Vinici' },
  ];

  return response.json(users);
};
