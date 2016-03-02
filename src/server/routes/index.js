import path from 'path';
import hello from '../controllers/hello';

export default ({ app }) => {
  app.get('/hello/add', hello.add);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/template/index.html'));
  });
};