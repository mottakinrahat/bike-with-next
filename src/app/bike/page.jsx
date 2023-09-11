


const Bike = ({ bikeData }) => {
 
  console.log(bikeData);

  return (
    <div>
      {/* Render your bike data here */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://assignment-12-harmony-class-server.vercel.app/classes');
  const bikeData = await res.json();

  return {
    props: {
      bikeData,
    },
  };
}

export default Bike;