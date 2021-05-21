import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../src/App.js';

const server = setupServer(
  rest.get('http://test.com', (req, res, ctx) => {
    let data = {
      count: 1,
      results: {
        text: 'testing'
      }
    }
    return res(ctx.json(data));
  })
)

beforeAll(() => { server.listen() })

afterEach(() => { server.resetHandlers() })

afterAll(() => { server.close() });

test("renders title", async() => {
  render(<App />)
  const titleElement = screen.getByText("RESTy");
  expect(titleElement).toBeInTheDocument();
})

test("can fetch data", async () => {
  render(<App />);
  const form = screen.getByTestId("urlForm");
  const url = screen.getByTestId("url");
  const radioGet = screen.getByTestId("get")

  // make the fake event in the url field
  fireEvent.change(url, { target: { name: 'url', value: 'http://test.com' }})
  fireEvent.click(radioGet, { target: { name: 'method', value: 'get' }})
  fireEvent.submit(form);

  await waitFor( () => {
    expect(screen.getByTestId('method')).toHaveTextContent('Method: get');
    expect(screen.getByTestId('json')).toHaveTextContent('testing');
  })
})
