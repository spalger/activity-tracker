import { Hono } from 'hono';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/hello', (c) => c.text('Hello!'));

app.get('/api/*', (c) =>
  c.json(
    { message: 'Not Found' },
    {
      status: 404,
    }
  )
);

app.get('/*', async (c) => {
  const resp = await c.env.ASSETS.fetch(c.req.raw);

  if (resp.status === 404) {
    return c.env.ASSETS.fetch(new Request(new URL('/index.html', c.req.url), c.req));
  }

  return resp;
});

export default app;
