import { Component } from 'react';

class GetMessages extends Component {
  _apiBase = 'https://test-chat-backend-hwads.ondigitalocean.app';

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Ошибка ${res.status}!!! Не возможно получить данные от ${url}`
      );
    }
    return res.json();
  };

  getMessages = (apiSkip, apiLimit) => {
    const newMsgs = this.getResource(
      `${this._apiBase}/api/messages?skip=${apiSkip}&limit=${apiLimit}`
    );
    console.log(`apiSkip: ${apiSkip}, apiLimit: ${apiLimit}`);
    return newMsgs;
  };
}
export default GetMessages;
