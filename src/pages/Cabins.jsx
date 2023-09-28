import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
        {/* <img
        src="https://ufujresghbjrylpmwtvu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin"
      /> */}
      </Row>
      <Row>
        <CabinTable />
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
