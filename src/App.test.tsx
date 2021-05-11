import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./components/redux/state";

test('renders learn react link', () => {
  render(<App  addMessage={addMessage} addPost={addPost} state={state} updateNewMessageText={updateNewMessageText} updateNewPostText={updateNewPostText}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
