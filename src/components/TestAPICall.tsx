export default function TestAPICall() {
  // the objective is to send a review to the api

  const fetchAPI = async () => {
    const response = await fetch(`/api/get_place_details?review=${review}`);
    const resonseJson = await response.json();
    console.log(resonseJson);
  };

  return (
    <section className="h-screen w-full snap-start bg-gray-200">
      <h1>Test API Call</h1>
      <button onClick={fetchAPI}>Test</button>
    </section>
  );
}
