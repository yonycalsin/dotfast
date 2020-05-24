export const data = {
   app: {
      name: 'Dotfast',
      port: 8080,
      db: {
         dialect: 'mysql',
         localhost: 'localhost',
         username: 'root',
         password: '',
         port: 3306,
         tables: [
            {
               name: 'first_table',
            },
            {
               name: 'second_table',
            },
         ],
      },
   },
};
