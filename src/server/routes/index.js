import path from 'path';
import user from '../controllers/user';
import profile from '../controllers/profile';
import loginRequired from '../middlewares/loginRequired';

export default ({ app }) => {
  app.post('/api/user', user.create);
  app.post('/api/user/login', user.login);
  app.get('/api/user/logout', user.logout);

  app.get('/api/profile/schema', profile.readSchema);
  app.get('/api/profiles/self', loginRequired, profile.listSelf);
  app.post('/api/profile', loginRequired, profile.create);
  app.get('/api/profile/:id', profile.read);
  app.delete('/api/profile/:id', profile.delete);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/template/index.html'));
  });
};