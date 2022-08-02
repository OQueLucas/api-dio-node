import { Connection, createConnection, getConnection } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOption = await getConnection();
  return createConnection(Object.assign(defaultOption));
};
