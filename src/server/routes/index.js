import path from 'path';
import hello from '../controllers/hello';
import user from '../controllers/user';
import profile from '../controllers/profile';

export default ({ app }) => {
  app.post('/api/user', user.create);
  app.post('/api/user/login', user.login);
  app.get('/api/user/logout', user.logout);

  app.post('/api/profile', profile.create);
  app.get('/api/profile/:id', profile.read);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/template/index.html'));
  });
};