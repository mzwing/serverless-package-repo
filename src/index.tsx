import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  // return c.render(<h1></h1>)
  return c.redirect(`https://github.com/LiteUni/lite-package`);
});

app.get('/archlinux/chaotic-aur/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname.replace('/archlinux/chaotic-aur/', '');
  const ext = path.split('.').pop();

  if (ext === 'html' || path.includes('.') === false) {
    const response = await fetch(`https://geo-mirror.chaotic.cx/${path}`);
    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
  else if (ext === 'sig') {
    const response = await fetch(`https://geo-mirror.chaotic.cx/${path}`);
    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
  else {
    return c.redirect(`https://files.m.daocloud.io/geo-mirror.chaotic.cx/${path}`, 307);
  }
});

app.get('/archlinux/atri/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname.replace('/archlinux/atri/', '');
  const ext = path.split('.').pop();

  if (ext === 'sig' || ext === 'html' || path.includes('.') === false) {
    return c.redirect(`https://repo.apeiria.net/${path}`, 307);
  }
  else {
    return c.redirect(`https://files.m.daocloud.io/arch-repo.moeneko.workers.dev/${path}`, 307);
  }
});

export default app;
