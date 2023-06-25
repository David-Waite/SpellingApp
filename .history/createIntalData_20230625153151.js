export default function createIntalData() {
  async function logJSONData() {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    const jsonData = await response.json();
    console.log(jsonData);
  }

  logJSONData;
}
