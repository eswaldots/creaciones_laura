const app = require('../dist/app');

module.exports = (req, res) => {
    if (typeof app === 'function') {
      return app(req, res);
    } else {
      console.error('app is not a function:', typeof app);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

