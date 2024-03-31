const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Rorom: #{params.id}</div>;
};

export default Meeting;
