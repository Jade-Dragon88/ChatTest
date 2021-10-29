import React, { Component } from 'react'


class GetMessages extends Component {

  _apiBase = 'https://test-chat-backend-hwads.ondigitalocean.app'
  getResource = async (url) => {
    let res = await fetch(url)
    if (!res.ok){
      throw new Error(`Ошибка ${res.status}!!! Не возможно получить данные от ${url}`)
    }
    return await res.json();
  }

  getMessages=(apiSkip,apiLimit) => {
    let AAA = this.getResource(`${this._apiBase}/api/messages?skip=${apiSkip}&limit=${apiLimit}`);
    console.log(`apiSkip: ${apiSkip}, apiLimit: ${apiLimit}`);
    return AAA;
  }
}
export default GetMessages;