const app = require('../dist/app');

module.exports = (req, res) => {
  if (typeof app.app === 'function') {
    return app.app(req, res);
  } else if (typeof app.handle === 'function') {
    return app.handle(req, res);
  } else {
    console.error('Invalid app object:', app(req, res));
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

