import path from 'path';
import hello from '../controllers/hello';
import user from '../controllers/user';

export default ({ app }) => {
  app.get('/hello/add', hello.add);

  app.post('/api/user', user.create);
  app.post('/api/user/login', user.login);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/template/index.html'));
  });
};