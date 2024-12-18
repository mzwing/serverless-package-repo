import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  // return c.render(<h1></h1>)
  return c.redirect(`https://github.com/mzwing/serverless-package-repo`);
});

app.get('/archlinux/chaotic-aur/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname.replace('/archlinux/chaotic-aur/', '');
  const ext = path.split('.').pop();

  if (ext === 'html' || path.includes('.') === false) {
    const response = await fetch(`https://geo-mirror.chaotic.cx/${path}`);
    const data = await response.text();
    return c.body(data, 200, { 'Content-Type': 'text/html' });
  }
  // else if (ext === 'sig') {
  else {
    const response = await fetch(`https://geo-mirror.chaotic.cx/${path}`);
    const data = await response.text();
    return c.body(data);
  }
  /*
  else {
    return c.redirect(`https://files.m.daocloud.io/geo-mirror.chaotic.cx/${path}`);
  }
  */
});

/*
app.get('/archlinux/atri/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname.replace('/archlinux/atri/', '');
  const ext = path.split('.').pop();

  if (ext === 'sig' || ext === 'html' || path.includes('.') === false) {
    return c.redirect(`https://repo.apeiria.net/${path}`);
  }
  else {
    return c.redirect(`https://files.m.daocloud.io/arch-repo.moeneko.workers.dev/${path}`);
  }
});
*/

export default app;
