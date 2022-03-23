export default {
  '/api/config': {
    apps: [
      {
        name: 'app1',
        entry: '//localhost:7001',
      },
    ],
    routes: [
      {
        name: 'app1',
        path: '/app1',
      },
    ],
  },
};
