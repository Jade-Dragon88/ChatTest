
class GetMessages {
  _apiBase = 'https://test-chat-backend-hwads.ondigitalocean.app'
  _apiSkip = 0;
  _apiLimit = 10;
  getResource = async (url) => {
    let res = await fetch(url)
    if (!res.ok){
      throw new Error(`Ошибка ${res.status}!!! Не возможно получить данные от ${url}`)
    }
    return await res.json();
  }

  getMessages=() => {
    return this.getResource(`${this._apiBase}/api/messages?skip=${this._apiSkip}&limit=${this._apiLimit}`);
  }
}
export default GetMessages;