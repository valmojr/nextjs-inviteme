function EventPage({ params }: { params: { id: string } }) {
  return <>
    <h1 className="text-2xl">Event Page</h1>
    <h2 className="text-lg">id: {params.id}</h2>
  </>;
}

export default EventPage;
